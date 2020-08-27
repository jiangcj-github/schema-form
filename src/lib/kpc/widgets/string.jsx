import React from "react";
import {Input} from 'kpc-react';
import { useWidget } from '../../model/widget';
import {SFItem} from "../sf-item";

export const StringWidget = (props) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (_, val) => {
        val = val || undefined;
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Input 
                type={ui.type}
                value={value}
                placeholder={ui.placeholder}
                defaultValue={schema.default}
                disabled={ui.disabled}
                prefix={ui.prefix}
                suffix={ui.suffix}
                prepend={ui.addonBefore}
                append={ui.addonAfter}
                autoComplete={ui.autocomplete}
                on$change-value={onChange}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}

