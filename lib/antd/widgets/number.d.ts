import { KeyboardEvent } from "react";
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
interface NumberWidgetUI extends SCUI {
    placeholder?: string;
    disabled?: boolean;
    autofocus?: boolean;
    formatter?: (val?: number | string) => string;
    parser?: (val?: string) => number;
    precision?: number;
    decimalSeparator?: string;
    step?: number | string;
    onChange?: (val?: string | number) => void;
    onEnter?: (e: KeyboardEvent) => void;
}
export declare const NumberWidget: (props: WidgetProps<NumberWidgetUI>) => JSX.Element;
export {};
