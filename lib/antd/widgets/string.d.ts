import { ReactNode, FocusEvent, KeyboardEvent } from "react";
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
export interface StringWidgetUI extends SCUI {
    placeholder?: string;
    disabled?: boolean;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    allowClear?: boolean;
    addonBefore?: string | ReactNode;
    addonAfter?: string | ReactNode;
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    onChange?: (val?: string) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onEnter?: (e: KeyboardEvent) => void;
}
export declare const StringWidget: (props: WidgetProps<StringWidgetUI>) => JSX.Element;
