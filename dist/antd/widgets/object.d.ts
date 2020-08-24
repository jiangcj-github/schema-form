import { CSSProperties } from "react";
import { WidgetProps } from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
interface ObjectWidgetUI extends SCUI {
    bordered?: boolean;
    hoverable?: boolean;
    headStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
}
export declare const ObjectWidget: (props: WidgetProps<ObjectWidgetUI>) => JSX.Element;
export {};
