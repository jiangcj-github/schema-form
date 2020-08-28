import React, {FocusEvent, ReactNode, CSSProperties} from "react";
import { Select } from "antd";
import { Widget } from '../../model/widget';
import { SFValue } from '../../model/form-property';
import {SCUI} from "../../utils/schema";
import {SFItem} from "../sf-item";
import { match } from "pinyin-match";

interface IOption {
    label: string;
    value: string;
}

interface SelectWidgetUI extends SCUI {
    mode?: 'multiple' | 'tags';
    allowClear?: boolean;
    placeholder?: string;
    disabled?: boolean;
    autofocus?: boolean;
    showSearch?: boolean;
    options?: IOption[];
    filterOption?: boolean;
    dropdownClassName?: string;
    dropdownRender?: (originNode: ReactNode) => ReactNode;
    dropdownStyle?: CSSProperties;
    getPopupContainer?: () => HTMLElement;
    listHeight?: number;
    maxTagCount?: number;
    maxTagTextLength?: number;
    maxTagPlaceholder?: string | React.ReactNode | ((omittedValues: IOption[]) => React.ReactNode);
    notFoundContent?: ReactNode;
    showArrow?: boolean;
    suffixIcon?: ReactNode;
    removeIcon?: ReactNode;
    clearIcon?: ReactNode;
    menuItemSelectedIcon?: ReactNode;
    tokenSeparators?: string[],
    virtual?: boolean;
    defaultOpen?: boolean;
    open?: boolean;
    loading?: boolean;
    onDropdownVisibleChange?: (open: boolean) => void;
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

    private filterOption = (input: string, option: IOption) => {
        const filterOption = this.widgetProperty?.ui.filterOption ?? true;
        return filterOption ? !!match(option.label, input): true;
    }

    public render() {
        const {schema, ui, value} = this.widgetProperty;
        return (
            <SFItem widgetProperty={this.widgetProperty}>
                <Select 
                    mode={ui.mode}
                    value={value}
                    allowClear={ui.allowClear ?? true}
                    disabled={ui.disabled}
                    placeholder={ui.placeholder}
                    filterOption={this.filterOption as any}
                    defaultValue={schema.default}
                    showSearch={ui.showSearch ?? true}
                    autoFocus={ui.autofocus}
                    maxTagPlaceholder={ui.maxTagPlaceholder}
                    dropdownClassName={ui.dropdownClassName}
                    dropdownRender={ui.dropdownRender as any}
                    dropdownStyle={ui.dropdownStyle}
                    getPopupContainer={ui.getPopupContainer}
                    listHeight={ui.listHeight}
                    maxTagCount={ui.maxTagCount}
                    maxTagTextLength={ui.maxTagTextLength}
                    notFoundContent={ui.notFoundContent}
                    showArrow={ui.showArrow}
                    suffixIcon={ui.suffixIcon}
                    removeIcon={ui.removeIcon}
                    clearIcon={ui.clearIcon}
                    menuItemSelectedIcon={ui.menuItemSelectedIcon}
                    tokenSeparators={ui.tokenSeparators}
                    virtual={ui.virtual}
                    defaultOpen={ui.defaultOpen}
                    open={ui.open}
                    loading={ui.loading}
                    onDropdownVisibleChange={ui.onDropdownVisibleChange}
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