import React, {CSSProperties} from "react";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {createWidget} from "../../model/widget-factory";
import {GridContext} from "../../model/grid-property";
import { GridProperty } from '../../model/grid-property';
import _ from "lodash";
import cln from "classnames";

interface ObjectWidgetUI extends SCUI {
    bordered?: boolean;
    hoverable?: boolean;
    headStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
}

export const ObjectWidget = (props: WidgetProps<ObjectWidgetUI>) => {
    const { schema, ui } = useWidget(props);
    
    const gridProperty = React.useRef(new GridProperty()).current;
    const parentGridProperty = React.useContext(GridContext);
    _.merge(gridProperty.grid, parentGridProperty.grid, ui.grid)

    const children = Object.entries(schema.properties || {}).map(([key, node]) => {
        const path = `${props.path}.${key}`;
        return createWidget(node, path, schema);
    });

    return (
        <GridContext.Provider value={gridProperty}>
            <div className="ant-form-item">
                <div style={ui.style} 
                    className={cln({
                        "ant-card": true,
                        "ant-card-bordered": ui.bordered ?? true,
                        "ant-card-hoverable": ui.hoverable,
                        [ui.className || ""]: true,
                    })}>
                    {schema.title &&
                        <div className="ant-card-head" 
                            style={_.merge({
                                minHeight:0, 
                                fontSize:"14px", 
                                padding: "0 18px"
                            }, ui.headStyle)}>
                            <div className="ant-card-head-wrapper">
                                <div className="ant-card-head-title" style={{padding:"8px 0"}}>{schema.title}</div>
                            </div>
                        </div>}
                    <div className="ant-card-body" style={_.merge({paddingBottom:0}, ui.bodyStyle)}>
                        {children}
                    </div>
                </div>
            </div>
        </GridContext.Provider>
    )
}