import React, {CSSProperties, ReactNode} from "react";
import { DatePicker } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {SFItem} from "../sf-item";
import moment, {Moment} from "moment";

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

export const DatePickerWidget = (props: WidgetProps<DataPickerWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (date: Moment | null) => {
        const val = date?.valueOf()
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    const showValue = value ? moment(value) : null;
    const showDefaultValue = schema.default ? moment(schema.default) : undefined;

    return (
        <SFItem widgetProperty={widgetProperty}>
            <DatePicker 
                autoFocus={ui.autoFocus}
                value={showValue}
                defaultValue={showDefaultValue}
                disabled={ui.disabled}
                disabledTime={ui.disabledTime as any}
                onChange={onChange}
                style={ui.style}
                className={ui.className}
                allowClear={ui.allowClear ?? true}
                disabledDate={ui.disabledDate}
                dropdownClassName={ui.dropdownClassName}
                getPopupContainer={ui.getPopupContainer}
                locale={ui.locale}
                mode={ui.mode as any}
                open={ui.open}
                format={ui.format}
                showTime={ui.showTime}
                showToday={ui.showToday}
                onOk={ui.onOk}
                showNow={ui.showNow}
                renderExtraFooter={ui.renderExtraFooter}
                picker={ui.picker as any}
                placeholder={ui.placeholder}
                popupStyle={ui.popupStyle}
                suffixIcon={ui.suffixIcon}
                inputReadOnly={ui.inputReadOnly}
                onOpenChange={ui.onOpenChange}
                onPanelChange={ui.onPanelChange}
            />
        </SFItem>
    )
}