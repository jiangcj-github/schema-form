import { ReactNode } from "react";
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
interface BooleanWidgetUI extends SCUI {
    disabled?: boolean;
    autoFocus?: boolean;
    checkedChildren?: string | ReactNode;
    unCheckedChildren?: string | ReactNode;
    onChange?: (checked: boolean) => void;
}
export declare const BooleanWidget: (props: WidgetProps<BooleanWidgetUI>) => JSX.Element;
export {};
