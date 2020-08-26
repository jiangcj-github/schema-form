import React, {ReactNode, ChangeEvent} from "react";
import { Input } from "antd";
import {WidgetProps, useWidget} from "../..";
import {StringWidgetUI} from "./string";
import {SFItem} from "../sf-item";

interface SearchWidgetUI extends StringWidgetUI {
    enterButton?: boolean | ReactNode;
    loading?: boolean;
    onSearch?: (val?: string) => void;
}

export const SearchWidget = (props: WidgetProps<SearchWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (event: ChangeEvent) => {
        const val = (event.target as HTMLTextAreaElement).value || undefined;
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Input.Search 
                value={value}
                disabled={ui.disabled}
                maxLength={schema.maxLength}
                placeholder={ui.placeholder}
                allowClear={ui.allowClear}
                defaultValue={schema.default}
                prefix={ui.prefix}
                suffix={ui.suffix}
                autoComplete={ui.autocomplete}
                autoFocus={ui.autofocus}
                addonBefore={ui.addonBefore}
                addonAfter={ui.addonAfter}
                enterButton={ui.enterButton}
                loading={ui.loading}
                onSearch={ui.onSearch}
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