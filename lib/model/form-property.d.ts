import React from "react";
import { WidgetProperty } from "./widget-property";
import { Schema } from "../utils/schema";
import { SCFormProps } from "./sf";
export interface IFormData {
    [key: string]: any;
}
export declare type SFValue = any;
export declare class FormProperty {
    private _schema;
    private _properties;
    private _values;
    private _initValues;
    private _validateOnChange;
    private _onChange?;
    constructor(props?: SCFormProps);
    get schema(): Schema;
    addProperty(path: string, property: WidgetProperty): void;
    getProperty(path: string): WidgetProperty;
    removeProperty(path: string): void;
    getValues(): IFormData;
    setValues(values: IFormData): void;
    setValue(path: string, val: SFValue): void;
    get initValue(): IFormData;
    resetValues(): void;
    validates(): boolean;
    getValue(path: string): any;
}
export declare const SFContext: React.Context<FormProperty>;
