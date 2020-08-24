import React from "react";
import { SCUI } from "../utils/schema";
import { IFormData } from "./form-property";
import { UISchema } from "./widget-property";
export interface SCFormProps {
    schema: UISchema<SCFormUI>;
}
export interface SCFormUI extends SCUI {
    layout?: 'horizontal' | 'vertical' | 'inline';
    colon?: boolean;
    onChange?: (values: IFormData) => void;
}
export declare const SF: React.ForwardRefExoticComponent<SCFormProps & React.RefAttributes<any>>;
