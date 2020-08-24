import { ReactNode } from "react";
import { WidgetProps, WidgetProperty } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
interface CustomWidgetUI extends SCUI {
    render?: (widgetProperty: WidgetProperty) => ReactNode;
}
export declare const CustomWidget: (props: WidgetProps<CustomWidgetUI>) => JSX.Element;
export {};
