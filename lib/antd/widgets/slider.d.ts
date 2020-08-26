import { ReactNode } from "react";
import { Widget } from '../../model/widget';
import { SCUI } from "../../utils/schema";
interface SliderWidgetUI extends SCUI {
    allowClear?: boolean;
    dots?: boolean;
    included?: boolean;
    marks?: any;
    reverse?: boolean;
    step?: number | null;
    tipFormatter?: (val?: number) => ReactNode | null;
    vertical?: boolean;
    onAfterChange?: (val: number) => void;
    onChange?: (val: number) => void;
    tooltipPlacement?: string;
    tooltipVisible?: boolean;
    getTooltipPopupContainer?: () => HTMLElement;
}
export declare class SliderWidget extends Widget<SliderWidgetUI> {
    private onChange;
    render(): JSX.Element;
}
export {};
