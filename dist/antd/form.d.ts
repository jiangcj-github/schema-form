import { ReactNode } from "react";
import { SCFormUI } from "../model/sf";
interface FormProps extends SCFormUI {
    children: ReactNode;
}
export declare const AntdForm: (props: FormProps) => JSX.Element;
export {};
