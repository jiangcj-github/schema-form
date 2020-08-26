import { ReactNode } from "react";
import { WidgetProps } from "../..";
import { StringWidgetUI } from "./string";
interface SearchWidgetUI extends StringWidgetUI {
    enterButton?: boolean | ReactNode;
    loading?: boolean;
    onSearch?: (val?: string) => void;
}
export declare const SearchWidget: (props: WidgetProps<SearchWidgetUI>) => JSX.Element;
export {};
