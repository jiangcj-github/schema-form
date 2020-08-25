import React, {ReactNode} from "react";
import { useWidget } from '../../model/widget';
import {WidgetProps, WidgetProperty} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {widgetRegistry} from "../../model/widget-factory";
import {SFItem} from "../sf-item";

interface CustomWidgetUI extends SCUI {
    render?: (widgetProperty: WidgetProperty) => ReactNode;
}

export const CustomWidget = (props: WidgetProps<CustomWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const { ui } = widgetProperty;
    return (
        <SFItem widgetProperty={widgetProperty}>
            {ui.render?.(widgetProperty)}
        </SFItem>
    )
}

widgetRegistry.register("antd.custom", CustomWidget);
