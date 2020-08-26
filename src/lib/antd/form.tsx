import React, {ReactNode} from "react";
import {Form} from "antd";
import {SCFormUI} from "../model/sf";
import {Action} from "./action";

interface FormProps extends SCFormUI {
    children: ReactNode;
}

export const AntdForm = (props: FormProps) => {
    const { layout, colon, style, className, actions } = props;
    return (
        <Form 
            layout={layout} 
            colon={colon} 
            style={style}
            className={className}
        >
            {props.children}
            <Form.Item>
                {actions?.map((e, i) => <Action {...e} key={i} />)}
            </Form.Item>
        </Form>
    )
}

