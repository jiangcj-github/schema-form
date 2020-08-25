import React, {ReactNode} from "react";
import {Form} from "antd";
import {widgetRegistry} from "../model/widget-factory";
import {SCFormUI} from "../model/sf";

interface FormProps extends SCFormUI {
    children: ReactNode;
}

export const AntdForm = (props: FormProps) => {
    const { layout, colon, style, className } = props;
    return (
        <Form 
            layout={layout} 
            colon={colon} 
            style={style}
            className={className}>
            {props.children}
        </Form>
    )
}

widgetRegistry.registrySF("antd.form", AntdForm);

