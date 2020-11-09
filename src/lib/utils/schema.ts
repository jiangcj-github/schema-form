import { CSSProperties } from 'react';
import {_is} from "./tool";
import _ from "lodash";

export type SchemaType = 'number' | 'string' | 'boolean' | 'object' | 'array' | 'null';
export type SchemaNode = any;

export interface SchemaEnum {
    [key: string]: any;
}

type SchemaEnumType = (SchemaEnum | number | string | boolean)[];

export interface SCGrid {
    hideLabel?: boolean;
    labelAlign?: 'left' | 'right' | 'center';
    labelCol?: number;
    labelWidth?: string;
    labelStyle?: CSSProperties;
    controlCol?: number;
    controlOffset?: number;
    controlWidth?: string;
    controlStyle?: CSSProperties;
}

export interface SCUI {
    [key: string]: any;
    widget?: string;
    style?: CSSProperties;
    className?: string;
    grid?: SCGrid;
    errors?: {
        [keyword: string]: string;
    };
    onValidate?: (values: any) => boolean; 
}

export interface Schema extends SchemaNumber, SchemaString, SchemaObject, SchemaArray {
    [key: string]: any;
    $schema?: string;
    type?: SchemaType;

    /* Structuring a complex schema */
    definitions?: {
        [key: string]: Schema;
    }
    $id?: string;
    $ref?: string;
   
    /* Generic keywords */
    title?: string;
    description?: string;
    default?: any;
    examples?: any[];
    $comment?: string;
    readOnly?: boolean;

    enum?: SchemaEnumType;
    const?: any;

    /* Media: string-encoding non-JSON data */
    contentMediaType?: string;
    contentEncoding?: '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64';

    /* Combining schemas */
    allOf?: Schema[];
    anyOf?: Schema[];
    oneOf?: Schema[];
    not?: Schema;

    /* Applying subschemas conditionally */
    if?: Schema;
    then?: Schema;
    else?: Schema;

    ui?: SCUI;
}

interface SchemaNumber {
    multepleOf?: number;
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
}

interface SchemaString {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
}

interface SchemaObject {
    properties?: {
        [key: string]: Schema;
    }
    additionalProperties?: boolean | Schema;
    required?: string[];
    propertyNames?: {
        pattern?: string;
    }
    minProperties?: number;
    maxProperties?: number;
    dependencies?: {
        [key: string]: string[] | Schema;
    }
    patternProperties?: Schema;
}

interface SchemaArray {
    items?: Schema | Schema[];
    contains?: Schema;
    additionalItems?: boolean | Schema;
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
}

export class SchemaError extends Error {
	constructor(readonly schema: Schema) {
		super();
	}
}

class SchemaUtil {

    ignoreNode(key: string, node: SchemaNode) {
        if(["ui", "default"].includes(key)) {
            return true;
        }
        return false;
    }

    public getPureSchema(schema: Schema) {
        if(_is(schema, ["array", "object"])) {
            const node = Array.isArray(schema) ? [] : {} as any;
            for(const [k, v] of Object.entries(schema)) {
                if(this.ignoreNode(k, v)) {
                    continue;
                }
                node[k] = this.getPureSchema(v);
            }
            return node;
        }
        return schema;
    }

    public getSchema(schema: Schema, path: string): SchemaNode {
        path = path.replace(/\[/, ".[").replace(/\]/, "");
        return path.split(".").reduce((sc: SchemaNode, p: string) => {
            return p[0] === "[" ? sc?.items?.[p.slice(1)] : sc?.properties?.[p];
        }, schema);
    }

    public eliminateRef(schema: Schema, node: SchemaNode = schema) {
        if(_is(node, ["object"])) {
            if(node.$ref) {
                const refNode = this.parseRef(schema, node.$ref);
                delete node.$ref;
                Object.assign(node, _.merge(_.cloneDeep(refNode), node));
            }
            for(const [k, subNode] of Object.entries(node)) {
                if(this.ignoreNode(k, subNode)) {
                    continue;
                }
                this.eliminateRef(schema, subNode);
            }
        }
        if(_is(node, ["array"])) {
            for(const subNode of node) {
                this.eliminateRef(schema, subNode)
            }
        }
    }

    public parseRef(schema: Schema, ref: string): SchemaNode {
        const [, id, refPath] = ref.match(/#([^/]*)(\/.*)?/) || [];
        if(!id && !refPath) {
            console.error(`invalid json schema $ref: ${ref}`);
        }
        return id ? 
            this.searchSchemaById(schema, `#${id}`) : 
            this.searchSchemaByRef(schema, refPath);
    }

    public searchSchemaByRef(schema: Schema, refPath: string) {
        try {
            this.deepSearchByRef(schema, refPath);
        } 
        catch(e) {
            return e.schema || {};
        }
    }

    public searchSchemaById(schema: Schema, id: string) {
        try {
            this.deepSearchById(schema, id);
        } 
        catch(e) {
            return e.schema || {};
        }
    }

    public deepSearchByRef(node: SchemaNode, path: string, currentPath = "") {
        const normalPath = path.replace(/\/$/, ""); 
        if(normalPath === currentPath) {
            throw new SchemaError(node);
        }
        if(_is(node, ["array", "object"])) {
            for(const [k, v] of Object.entries(node)) {
                if(this.ignoreNode(k, v)) {
                    continue;
                }
                this.deepSearchByRef(v, path, currentPath + `/${k}`)
            }
        }
    }

    public deepSearchById(node: SchemaNode, id: string) {
        if(_is(node, ["array", "object"])) {
            if(node.$id === id) {
                throw new SchemaError(node);
            }
            for(const [k, v] of Object.entries(node)) {
                if(this.ignoreNode(k, v)) {
                    continue;
                }
                this.deepSearchById(v, id);
            }
        }
    }

}

export const schemaUtil = new SchemaUtil();