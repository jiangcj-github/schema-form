import React, {ChangeEvent} from "react";
import { Input } from "antd";
import {WidgetProps, useWidget} from "../..";
import {StringWidgetUI} from "./string";
import {SFItem} from "../sf-item";

interface TextAreaWidgetUI extends StringWidgetUI {
    autoSize?: boolean;
    rows?: number;
    cols?: number;
    onResize?: (size: {width: number, height: number}) => void;
}

export const TextAreaWidget = (props: WidgetProps<TextAreaWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (event: ChangeEvent) => {
        const val = (event.target as HTMLTextAreaElement).value || undefined;
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Input.TextArea 
                autoSize={ui.autoSize}
                value={value}
                disabled={ui.disabled}
                placeholder={ui.placeholder}
                defaultValue={schema.default}
                autoFocus={ui.autofocus}
                maxLength={schema.maxLength}
                minLength={schema.minLength}
                rows={ui.rows}
                cols={ui.cols}
                onChange={onChange}
                onPressEnter={ui.onEnter}
                onFocus={ui.onFocus}
                onBlur={ui.onBlur}
                onResize={ui.onResize}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}