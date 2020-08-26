/// <reference types="react" />
import { WidgetProps } from "../..";
import { StringWidgetUI } from "./string";
interface TextAreaWidgetUI extends StringWidgetUI {
    autoSize?: boolean;
    rows?: number;
    cols?: number;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
}
export declare const TextAreaWidget: (props: WidgetProps<TextAreaWidgetUI>) => JSX.Element;
export {};
