import React, { ReactNode, CSSProperties } from "react";
import { SCUI } from "../utils/schema";
import { IFormData } from "./form-property";
import { UISchema } from "./widget-property";
export interface SCFormProps {
    schema: UISchema<SCFormUI>;
}
export interface IBtnOption {
    text: string | ReactNode;
    type?: string;
    shape?: string;
    loading?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    onClick: (values: IFormData) => void;
}
export interface SCFormUI extends SCUI {
    layout?: 'horizontal' | 'vertical' | 'inline';
    colon?: boolean;
    onChange?: (values: IFormData) => void;
    actions?: IBtnOption[];
}
export declare const SF: React.ForwardRefExoticComponent<SCFormProps & React.RefAttributes<any>>;
