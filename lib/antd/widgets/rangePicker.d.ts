/// <reference types="react" />
import { WidgetProps } from "../../model/widget-property";
import { DataPickerWidgetUI } from "./datePicker";
interface RangePickerWidgetUI extends Omit<DataPickerWidgetUI, "onChange"> {
    allowEmpty?: [boolean, boolean];
    ranges?: {
        [key: string]: any;
    };
    separator?: string;
    onChange?: (val?: (number | undefined)[]) => void;
}
export declare const RangePickerWidget: (props: WidgetProps<RangePickerWidgetUI>) => JSX.Element;
export {};
