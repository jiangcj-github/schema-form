import { FocusEvent } from "react";
import { Widget } from '../../model/widget';
import { SFValue } from '../../model/form-property';
import { SCUI } from "../../utils/schema";
interface SelectWidgetUI extends SCUI {
    mode?: 'multiple' | 'tags';
    allowClear?: boolean;
    placeholder?: string;
    disabled?: boolean;
    autofocus?: boolean;
    showSearch?: boolean;
    options?: {
        label: string;
        value: SFValue;
    }[];
    onChange?: (val: string) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onSearch?: (e: SFValue) => void;
}
export declare class SelectWidget extends Widget<SelectWidgetUI> {
    private onChange;
    render(): JSX.Element;
}
export {};
