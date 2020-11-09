import { CSSProperties } from 'react';
export declare type SchemaType = 'number' | 'string' | 'boolean' | 'object' | 'array' | 'null';
export declare type SchemaNode = any;
export interface SchemaEnum {
    [key: string]: any;
}
declare type SchemaEnumType = (SchemaEnum | number | string | boolean)[];
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
    definitions?: {
        [key: string]: Schema;
    };
    $id?: string;
    $ref?: string;
    title?: string;
    description?: string;
    default?: any;
    examples?: any[];
    $comment?: string;
    readOnly?: boolean;
    enum?: SchemaEnumType;
    const?: any;
    contentMediaType?: string;
    contentEncoding?: '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64';
    allOf?: Schema[];
    anyOf?: Schema[];
    oneOf?: Schema[];
    not?: Schema;
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
    };
    additionalProperties?: boolean | Schema;
    required?: string[];
    propertyNames?: {
        pattern?: string;
    };
    minProperties?: number;
    maxProperties?: number;
    dependencies?: {
        [key: string]: string[] | Schema;
    };
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
export declare class SchemaError extends Error {
    readonly schema: Schema;
    constructor(schema: Schema);
}
declare class SchemaUtil {
    ignoreNode(key: string, node: SchemaNode): boolean;
    getPureSchema(schema: Schema): any;
    getSchema(schema: Schema, path: string): SchemaNode;
    eliminateRef(schema: Schema, node?: SchemaNode): void;
    parseRef(schema: Schema, ref: string): SchemaNode;
    searchSchemaByRef(schema: Schema, refPath: string): any;
    searchSchemaById(schema: Schema, id: string): any;
    deepSearchByRef(node: SchemaNode, path: string, currentPath?: string): void;
    deepSearchById(node: SchemaNode, id: string): void;
}
export declare const schemaUtil: SchemaUtil;
export {};
