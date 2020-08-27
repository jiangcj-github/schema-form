import React from "react";
import {Form} from "kpc-react";

export const KpcForm = (props) => {
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

