import React, {KeyboardEvent} from "react";
import { InputNumber } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {SFItem} from "../sf-item";

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

export const NumberWidget = (props: WidgetProps<NumberWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (val?: number | string) => {
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <InputNumber 
                value={value}
                disabled={ui.disabled}
                maxLength={schema.maxLength}
                min={schema.minimum}
                max={schema.maximum}
                formatter={ui.formatter}
                parser={ui.parser}
                precision={ui.precision}
                decimalSeparator={ui.decimalSeparator}
                step={ui.step}
                placeholder={ui.placeholder}
                defaultValue={schema.default}
                autoFocus={ui.autofocus}
                onChange={onChange}
                onPressEnter={ui.onEnter}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}
