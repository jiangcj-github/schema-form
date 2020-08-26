import React from "react";
import { Radio } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {SFItem} from "../sf-item";
import {CheckboxChangeEvent} from "antd/lib/checkbox";

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

export const RadioGroupWidget = (props: WidgetProps<RadioGroupWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (event: CheckboxChangeEvent) => {
        const val = event.target.value;
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Radio.Group 
                value={value}
                disabled={ui.disabled}
                defaultValue={schema.default}
                optionType={ui.optionType}
                buttonStyle={ui.buttonStyle}
                options={ui.options}
                onChange={onChange}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}