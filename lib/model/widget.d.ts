import React from "react";
import { SCUI } from "../utils/schema";
import { WidgetProps, WidgetProperty } from "./widget-property";
import { FormProperty } from "./form-property";
export declare class Widget<UI extends SCUI> extends React.Component<WidgetProps<UI>> {
    static contextType: React.Context<FormProperty>;
    protected widgetProperty: WidgetProperty<UI>;
    constructor(props: WidgetProps<UI>, context: FormProperty);
    componentWillUnmount(): void;
    private update;
}
export declare function useWidget<UI extends SCUI>(props: WidgetProps<UI>): WidgetProperty<UI>;
