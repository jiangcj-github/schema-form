import React from "react";
import { DatePicker } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import {SFItem} from "../sf-item";
import {Moment} from "moment";
import {DataPickerWidgetUI} from "./datePicker";
import moment from "moment";

interface RangePickerWidgetUI extends Omit<DataPickerWidgetUI, "onChange"> {
    allowEmpty?: [boolean, boolean];
    ranges?: { [key: string]: any }
    separator?: string;
    onChange?: (val?: (number | undefined)[]) => void;
}

export const RangePickerWidget = (props: WidgetProps<RangePickerWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (date?: [Moment, Moment]) => {
        const val = date?.map((e?: Moment) => e?.valueOf());
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }
    
    const showValue = value?.map((e?: number) => e ? moment(e) : null);
    const showDefaultValue = schema.default?.map((e?: number) => e ? moment(e) : null);

    return (
        <SFItem widgetProperty={widgetProperty}>
            <DatePicker.RangePicker 
                autoFocus={ui.autoFocus}
                value={showValue}
                defaultValue={showDefaultValue}
                disabled={ui.disabled}
                onChange={onChange as any}
                style={ui.style}
                className={ui.className}
                allowClear={ui.allowClear}
                disabledDate={ui.disabledDate}
                dropdownClassName={ui.dropdownClassName}
                getPopupContainer={ui.getPopupContainer}
                locale={ui.locale}
                mode={ui.mode as any}
                open={ui.open}
                format={ui.format}
                showTime={ui.showTime}
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
                allowEmpty={ui.allowEmpty}
                ranges={ui.ranges}
                separator={ui.separator}
            />
        </SFItem>
    )
}