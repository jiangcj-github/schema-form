import React, {ReactNode, ChangeEvent, FocusEvent, KeyboardEvent} from "react";
import { Input } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {widgetRegistry} from "../../model/widget-factory";
import {SFItem} from "../sf-item";

interface StringWidgetUI extends SCUI {
    placeholder?: string;
    disabled?: boolean;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    addonBefore?: string | ReactNode;
    addonAfter?: string | ReactNode;
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    onChange?: (val: string) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onEnter?: (e: KeyboardEvent) => void;
}

export const StringWidget = (props: WidgetProps<StringWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (event: ChangeEvent) => {
        const val = (event.target as HTMLTextAreaElement).value;
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Input 
                value={value}
                disabled={ui.disabled}
                maxLength={schema.maxLength}
                placeholder={ui.placeholder}
                defaultValue={schema.default}
                prefix={ui.prefix}
                suffix={ui.suffix}
                autoComplete={ui.autocomplete}
                autoFocus={ui.autofocus}
                addonBefore={ui.addonBefore}
                addonAfter={ui.addonAfter}
                onChange={onChange}
                onPressEnter={ui.onEnter}
                onFocus={ui.onFocus}
                onBlur={ui.onBlur}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}

widgetRegistry.register("antd.string", StringWidget);
widgetRegistry.setDefault(StringWidget);
