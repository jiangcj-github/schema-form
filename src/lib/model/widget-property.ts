import {Schema, SCUI} from "../utils/schema";
import {FormProperty, SFValue} from "./form-property";
import _ from "lodash";
import { _is } from '../utils/tool';

export interface UISchema<UI> extends Schema {
    ui?: UI;
}

export interface WidgetProps<T> {
    path: string;
    schema: UISchema<T>;
    parent: Schema;
}

export class WidgetProperty<UI extends SCUI = SCUI> {
    private _formProperty!: FormProperty;
    private _path!: string;
    private _parent!: Schema;

    public schema!: Schema;
    public ui!: UI;
    public error?: string;
    public showError = false;

    constructor(props: WidgetProps<UI>, formProperty: FormProperty, update?: () => void) {
        const { path, schema, parent } = props;
        this._path = path;
        this._parent = parent;
        this.schema = schema;
        this.ui = schema.ui || {} as UI;
        this._formProperty = formProperty;
        update && (this.update = update);
        this.install();
    }

    public install() {
        for(const [key, value] of Object.entries(this.ui)) {
            if(_is(value, ["function"])) {
                Object.assign(this.ui, {[key]: value.bind(this)});
            }
        }
        this._formProperty.addProperty(this._path, this);
    }

    public uninstall() {
        this._formProperty.removeProperty(this._path);
    }

    public setValue(val: SFValue) {
        this._formProperty.setValue(this._path, val);
        this.update();
    }

    public get value() {
        return this._formProperty.getValue(this._path);
    }

    public get required() {
        return this._parent?.required?.includes(this.propertyName);
    }

    public get propertyName() {
        return this._path.split(".").pop() || "";
    }

    public reset() {
        const default0 = _.get(this.formProperty.initValue, this._path)
        this.setValue(this.schema.default ?? default0);
    }

    public validate() {
        return this.ui.onValidate ? 
            this.ui.onValidate(this._formProperty.getValues()) : true;
    }

    public setKeywordError(keyword: string, error: string) {
        this.setError(this.ui?.errors?.[keyword] || error);
    }

    public setError(error: string) {
        this.error = error;
        this.showError = true;
        this.update();
    }

    public resetError() {
        if(this.showError) {
            this.error = "";
            this.showError = false;
            this.update();
        }
    }

    public setSchema(schema: Schema) {
        _.merge(this.schema, schema);
        this.update();
    }

    public setUI(ui: UI) {
        _.merge(this.ui, ui);
        this.update();
    }

    public update() {}

    public get formProperty() {
        return this._formProperty;
    }

    public get path() {
        return this._path;
    }

}