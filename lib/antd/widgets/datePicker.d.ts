import { CSSProperties, ReactNode } from "react";
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import { Moment } from "moment";
export interface DataPickerWidgetUI extends SCUI {
    allowClear?: boolean;
    disabled?: boolean;
    disabledDate?: (current: Moment) => boolean;
    disabledTime?: (current: Moment) => boolean;
    dropdownClassName?: string;
    getPopupContainer?: () => HTMLElement;
    locale?: any;
    mode?: string;
    open?: boolean;
    format?: string | string[];
    renderExtraFooter?: (mode: string) => ReactNode;
    showTime?: boolean | Object;
    showToday?: boolean;
    showNow?: boolean;
    onOk?: () => void;
    autoFocus?: boolean;
    picker?: string;
    placeholder?: string;
    popupStyle?: CSSProperties;
    suffixIcon?: ReactNode;
    inputReadOnly?: boolean;
    onOpenChange?: (open: boolean) => void;
    onPanelChange?: (value: Moment, mode: string) => void;
    onChange?: (val?: number) => void;
}
export declare const DatePickerWidget: (props: WidgetProps<DataPickerWidgetUI>) => JSX.Element;