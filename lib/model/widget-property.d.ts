import { Schema, SCUI } from "../utils/schema";
import { FormProperty, SFValue } from "./form-property";
export interface UISchema<UI> extends Schema {
    ui?: UI;
}
export interface WidgetProps<T> {
    path: string;
    schema: UISchema<T>;
    parent: Schema;
}
export declare class WidgetProperty<UI extends SCUI = SCUI> {
    private _formProperty;
    private _path;
    private _parent;
    schema: Schema;
    ui: UI;
    error?: string;
    showError: boolean;
    updateProperty(props: WidgetProps<UI>, formProperty: FormProperty, update?: () => void): void;
    install(): void;
    uninstall(): void;
    setValue(val?: SFValue): void;
    get value(): any;
    get required(): boolean | undefined;
    get propertyName(): string;
    reset(): void;
    validate(): boolean;
    setKeywordError(keyword: string, error: string): void;
    setError(error: string): void;
    resetError(): void;
    setSchema(schema: Schema): void;
    setUI(ui: UI): void;
    update(): void;
    get formProperty(): FormProperty;
    get path(): string;
}
