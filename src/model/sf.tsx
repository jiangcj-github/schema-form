/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject } from "react";
import {schemaUtil, SCUI} from "../utils/schema";
import {FormProperty, SFContext, IFormData} from "./form-property";
import { createWidget, widgetRegistry } from "./widget-factory";
import {GridContext, GridProperty} from "./grid-property";
import {UISchema} from "./widget-property";

export interface SCFormProps {
    schema: UISchema<SCFormUI>;
}

export interface SCFormUI extends SCUI {
    layout?: 'horizontal' | 'vertical' | 'inline';
    colon?: boolean;
    onChange?: (values: IFormData) => void;
}

const SchemaForm = (props: SCFormProps, ref: ((instance: any) => void) | MutableRefObject<any> | null) => {
    const { schema } = props;
    const ui = schema.ui || {};
    schemaUtil.eliminateRef(schema);
   
    const formProperty = React.useRef(new FormProperty(props)).current;
    const gridProperty = React.useRef(new GridProperty(ui.grid)).current;
    
    React.useImperativeHandle(ref, () => formProperty);
    React.useEffect(() => {
        formProperty.resetValues();
    }, []);

    const children = Object.entries(schema.properties || {}).map(([key, node]) => {
        const path = `${key}`;
        return createWidget(node, path, schema);
    });
    const Form = widgetRegistry.getSF("sf");

    return (
        <SFContext.Provider value={formProperty}>
            <GridContext.Provider value={gridProperty}>
                <Form {...ui}>{children}</Form>
            </GridContext.Provider>
        </SFContext.Provider>
    )
}

export const SF = React.forwardRef(SchemaForm);
