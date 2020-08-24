/// <reference types="react" />
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
interface CheckBoxWidgetUI extends SCUI {
    disabled?: boolean;
    autoFocus?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare const CheckBoxWidget: (props: WidgetProps<CheckBoxWidgetUI>) => JSX.Element;
export {};
