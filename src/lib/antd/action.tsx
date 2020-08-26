import React from "react";
import {IBtnOption, SFContext} from ".";
import {Button} from "antd";
import _ from "lodash";

export const Action = (props: IBtnOption) => {
    const context = React.useContext(SFContext);

    const onClick = () => {
        const values = context.getValues();
        props.onClick && props.onClick.call(context, values);
    }
    
    return (
        <Button 
            type={props.type || "primary" as any}
            shape={props.shape as any}
            loading={props.loading}
            icon={props.icon}
            disabled={props.disabled}
            style={_.merge({marginRight:"12px"}, props.style)}
            className={props.className}
            onClick={onClick}
        >
            {props.text || "提交"}
        </Button>
    )
}