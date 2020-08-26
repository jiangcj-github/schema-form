import { ReactNode } from "react";
import { WidgetProps } from "../..";
import { StringWidgetUI } from "./string";
interface PasswordWidgetUI extends StringWidgetUI {
    visibilityToggle?: boolean;
    iconRender?: (visible: boolean) => ReactNode;
}
export declare const PasswordWidget: (props: WidgetProps<PasswordWidgetUI>) => JSX.Element;
export {};
