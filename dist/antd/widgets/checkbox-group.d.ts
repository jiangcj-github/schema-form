/// <reference types="react" />
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import { CheckboxValueType, CheckboxOptionType } from "antd/lib/checkbox/Group";
interface CheckBoxGroupWidgetUI extends SCUI {
    disabled?: boolean;
    options?: (string | CheckboxOptionType)[];
    onChange?: (checkedValue: CheckboxValueType[]) => void;
}
export declare const CheckBoxGroupWidget: (props: WidgetProps<CheckBoxGroupWidgetUI>) => JSX.Element;
export {};
