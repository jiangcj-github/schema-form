import React, {ReactNode} from "react";
import { Slider } from "antd";
import { Widget } from '../../model/widget';
import { SFValue } from '../../model/form-property';
import {SCUI} from "../../utils/schema";
import {SFItem} from "../sf-item";

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

export class SliderWidget extends Widget<SliderWidgetUI> {
    
    private onChange = (val: SFValue) => {
        this.widgetProperty.setValue(val);
        this.widgetProperty.ui.onChange && this.widgetProperty.ui.onChange(val);
    }

    public render() {
        const {schema, ui, value} = this.widgetProperty;
        return (
            <SFItem widgetProperty={this.widgetProperty}>
                <Slider 
                    value={value}
                    defaultValue={schema.default}
                    min={schema.minimum}
                    max={schema.maximum}
                    disabled={ui.disabled}
                    dots={ui.dots}
                    included={ui.included}
                    marks={ui.marks}
                    reverse={ui.reverse}
                    step={ui.step}
                    tipFormatter={ui.tipFormatter}
                    vertical={ui.vertical}
                    onAfterChange={ui.onAfterChange}
                    onChange={this.onChange}
                    tooltipPlacement={ui.tooltipPlacement as any}
                    tooltipVisible={ui.tooltipVisible}
                    getTooltipPopupContainer={ui.getTooltipPopupContainer}
                    style={ui.style}
                    className={ui.className}
                />
            </SFItem>
        )
    }
}