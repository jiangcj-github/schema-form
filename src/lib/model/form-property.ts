import React from "react";
import _ from "lodash";
import {WidgetProperty} from "./widget-property";
import {Schema, schemaUtil} from "../utils/schema";
import Ajv from "ajv";
import {ERRORDEFAULT} from "./error-default";
import {SCFormProps} from "./sf";

export interface IFormData {
    [key: string]: any;
} 

export type SFValue = any;

export class FormProperty {

    private _schema!: Schema;
    private _properties: {[path: string]: WidgetProperty;} = {};
    private _values: IFormData = {};
    private _initValues: IFormData = {};
    private _validateOnChange = false;
    private _onChange?: (values: IFormData) => void;

    public initProperty(props?: SCFormProps) {
        const { schema } = props || {};
        this._schema = schema || {};
        this._initValues = schema?.default || {};
        this._onChange = schema?.ui?.onChange;
    }

    private onChange() {
        this._onChange && this._onChange.call(this, this.getValues());
    }

    public get schema() {
        return this._schema;
    }

    public addProperty(path: string, property: WidgetProperty) {
        this._properties[path] = property;
    }

    public getProperty(path: string): WidgetProperty{
        return this._properties[path];
    }

    public removeProperty(path: string) {
        delete this._properties[path];
    }

    public getValues() {
        return this._values;
    }

    public setValues(values: IFormData) {
        _.merge(this._values, values);
        for(const property of Object.values(this._properties)) {
            property.update();
        }
        this._validateOnChange && this.validates();
        this.onChange();
    }

    public setValue(path: string, val: SFValue) {
        _.set(this._values, path, val);
        this._validateOnChange && this.validates();
        this.onChange()
    }

    public get initValue() {
        return this._initValues;
    }

    public resetValues() {
        this._validateOnChange = false;
        for(const property of Object.values(this._properties)) {
            property.reset();
            property.resetError();
        }
        this.onChange();
    }

    public validates() {
        for(const property of Object.values(this._properties)) {
            property.resetError();
        }
        const ajv = new Ajv({
            errorDataPath: "property", 
            allErrors: true,
        });
        const pureSchema = schemaUtil.getPureSchema(this._schema);
	    const ajvValid = ajv.validate(pureSchema, this._values);
        if(!ajvValid) {
            for(const error of ajv.errors || []) {
                const { dataPath = "", keyword = "", params } = error;
                const property = this.getProperty(dataPath?.slice(1));
                if(property) {
                    _.templateSettings.interpolate = /{([\s\S]+?)}/g;
                    const ALLERRORS = _.merge({}, ERRORDEFAULT, this.schema.ui?.errors); 
                    const errText = _.template(ALLERRORS[keyword])(params);
                    property.setKeywordError(keyword, errText);
                }
            }
        }
        const customsValid = Object.values(this._properties).map(e => e.validate()).every(Boolean);
        const formCustomValid = this.schema.ui?.onValidate ? 
            this.schema.ui?.onValidate(this._values) : true;
        const isValid = ajvValid && customsValid && formCustomValid;

        this._validateOnChange = !isValid;
        return isValid;
    }

    public getValue(path: string) {
        return _.get(this._values, path);
    }

}

export const SFContext = React.createContext(new FormProperty());  
