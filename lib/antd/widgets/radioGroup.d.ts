/// <reference types="react" />
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface RadioGroupWidgetUI extends SCUI {
    options?: string[] | RadioOption[];
    disabled?: boolean;
    optionType: "default" | "button";
    buttonStyle: "outline" | "solid";
    onChange?: (val: string) => void;
}
export declare const RadioGroupWidget: (props: WidgetProps<RadioGroupWidgetUI>) => JSX.Element;
export {};
