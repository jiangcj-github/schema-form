import { ReactNode } from "react";
import { WidgetProperty } from "../model/widget-property";
interface SFItemProps {
    widgetProperty: WidgetProperty;
    children: ReactNode;
}
export declare const SFItem: (props: SFItemProps) => JSX.Element;
export {};
