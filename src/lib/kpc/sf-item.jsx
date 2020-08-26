import React from "react";
import cln from "classnames";
import _ from "lodash";
import {GridContext} from "../model/grid-property";

/*
    kpc 不支持labelCol、controlCol、controlOffset 
*/

export const SFItem = (props) => {
    const gridProperty = React.useContext(GridContext);
    const { schema, ui, error, showError, required } = props.widgetProperty;
    const grid = _.merge({}, gridProperty.grid, ui.grid);
    return (
        <div style={ui.style}
            className={
                cln({
                    "k-form-item": true,
                    "k-invalid": showError,
                    [ui.className || ""]: true,
                })
            }>
            <label className="k-label" 
                style={
                    _.merge({
                        width: grid.labelWidth || "auto", 
                        textAlign: grid.labelAlign || "right"
                    }, grid.labelStyle)
                }>
                {required && <span className="k-star">*</span>}
                {schema.title}
            </label>     
            <div className="k-content" 
                style={
                    _.merge({
                        width: grid.controlWidth || "auto",
                    }, grid.controlStyle)
                }>
                {props.children}
                {showError && 
                    <div className="k-error">
                        <div className="k-error-message c-ellipsis">{error}</div>
                    </div>}
            </div>
        </div>
    )
}
