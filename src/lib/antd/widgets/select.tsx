import React, {FocusEvent} from "react";
import { Select } from "antd";
import { Widget } from '../../model/widget';
import { SFValue } from '../../model/form-property';
import {SCUI} from "../../utils/schema";
import {SFItem} from "../sf-item";

interface SelectWidgetUI extends SCUI {
    mode?: 'multiple' | 'tags';
    allowClear?: boolean;
    placeholder?: string;
    disabled?: boolean;
    autofocus?: boolean;
    showSearch?: boolean;
    options?: {label: string; value: SFValue;}[];
    onChange?: (val: string) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onSearch?: (e: SFValue) => void;
}

export class SelectWidget extends Widget<SelectWidgetUI> {
    
    private onChange = (val: SFValue) => {
        this.widgetProperty.setValue(val);
        this.widgetProperty.ui.onChange && this.widgetProperty.ui.onChange(val);
    }

    public render() {
        const {schema, ui, value} = this.widgetProperty;
        return (
            <SFItem widgetProperty={this.widgetProperty}>
                <Select 
                    mode={ui.mode}
                    value={value}
                    allowClear={ui.allowClear || true}
                    disabled={ui.disabled}
                    placeholder={ui.placeholder}
                    defaultValue={schema.default}
                    showSearch={ui.showSearch}
                    autoFocus={ui.autofocus}
                    onChange={this.onChange}
                    onFocus={ui.onFocus}
                    onBlur={ui.onBlur}
                    onSearch={ui.onSearch}
                    options={ui.options}
                    style={ui.style}
                    className={ui.className}
                />
            </SFItem>
        )
    }
}