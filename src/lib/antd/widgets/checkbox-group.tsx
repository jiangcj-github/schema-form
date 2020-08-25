import React from "react";
import { Checkbox } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {widgetRegistry} from "../../model/widget-factory";
import {SFItem} from "../sf-item";
import {CheckboxValueType, CheckboxOptionType} from "antd/lib/checkbox/Group";

interface CheckBoxGroupWidgetUI extends SCUI {
    disabled?: boolean;
    options?: (string | CheckboxOptionType)[];
    onChange?: (checkedValue: CheckboxValueType[]) => void;
}

export const CheckBoxGroupWidget = (props: WidgetProps<CheckBoxGroupWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (val: CheckboxValueType[]) => {
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Checkbox.Group 
                value={value}
                disabled={ui.disabled}
                defaultValue={schema.default}
                onChange={onChange}
                options={ui.options}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}

widgetRegistry.register("antd.checkbox.group", CheckBoxGroupWidget);
