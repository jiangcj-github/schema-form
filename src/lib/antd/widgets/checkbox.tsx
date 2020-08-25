import React from "react";
import { Checkbox } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {widgetRegistry} from "../../model/widget-factory";
import {SFItem} from "../sf-item";
import {CheckboxChangeEvent} from "antd/lib/checkbox";

interface CheckBoxWidgetUI extends SCUI {
    disabled?: boolean;
    autoFocus?: boolean;
    onChange?: (checked: boolean) => void;
}

export const CheckBoxWidget = (props: WidgetProps<CheckBoxWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (event: CheckboxChangeEvent) => {
        const val = event.target.checked;
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Checkbox 
                autoFocus={ui.autoFocus}
                checked={value}
                disabled={ui.disabled}
                defaultChecked={schema.default}
                onChange={onChange}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}

widgetRegistry.register("antd.checkbox", CheckBoxWidget);
