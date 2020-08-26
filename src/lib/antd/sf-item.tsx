import React, {ReactNode} from "react";
import { Col } from "antd";
import cln from "classnames";
import _ from "lodash";
import {WidgetProperty} from "../model/widget-property";
import {GridContext} from "../model/grid-property";

interface SFItemProps {
    widgetProperty: WidgetProperty;
    children: ReactNode;
}

export const SFItem = (props: SFItemProps) => {
    const gridProperty = React.useContext(GridContext);
    const { schema, ui, error, showError, required } = props.widgetProperty;
    const grid = _.merge({}, gridProperty.grid, ui.grid);
    return (
        <div className={
            cln({
                "ant-row": true,
                "ant-form-item": true,
                "ant-form-item-has-error": showError,
                "ant-form-item-with-help": showError,
            })}>
            <Col className="ant-form-item-label" span={grid.labelCol}
                style={
                    _.merge({
                        width: grid.labelWidth || "auto", 
                        textAlign: grid.labelAlign || "right"
                    }, grid.labelStyle)
                }>
                <label title={schema.title} className={cln({"ant-form-item-required": required})}>
                    {schema.title}
                </label>
            </Col>
            <Col className="ant-form-item-control" span={grid.controlCol} offset={grid.controlOffset}
                style={
                    _.merge({
                        width: grid.controlWidth || "auto",
                    }, grid.controlStyle)
                }>
                <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                        {props.children}
                    </div>
                </div>
                {showError && 
                    <div className="ant-form-item-explain">
                        <div>{error}</div>
                    </div>}
            </Col>
        </div>
    )
}
