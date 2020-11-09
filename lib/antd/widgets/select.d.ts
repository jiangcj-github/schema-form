import React, { FocusEvent, ReactNode, CSSProperties } from "react";
import { Widget } from '../../model/widget';
import { SFValue } from '../../model/form-property';
import { SCUI } from "../../utils/schema";
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
    tokenSeparators?: string[];
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
export declare class SelectWidget extends Widget<SelectWidgetUI> {
    private onChange;
    private filterOption;
    render(): JSX.Element;
}
export {};
