import React, {ReactNode} from "react";
import { Switch } from "antd";
import { useWidget } from '../../model/widget';
import {WidgetProps} from "../../model/widget-property";
import { SCUI } from '../../utils/schema';
import {widgetRegistry} from "../../model/widget-factory";
import {SFItem} from "../sf-item";

interface BooleanWidgetUI extends SCUI {
    disabled?: boolean;
    autoFocus?: boolean;
    checkedChildren?: string | ReactNode;
    unCheckedChildren?: string | ReactNode;
    onChange?: (checked: boolean) => void;
}

export const BooleanWidget = (props: WidgetProps<BooleanWidgetUI>) => {
    const widgetProperty = useWidget(props);
    const {schema, ui, value} = widgetProperty;

    const onChange = (val: boolean) => {
        widgetProperty.setValue(val);
        ui.onChange && ui.onChange(val);
    }

    return (
        <SFItem widgetProperty={widgetProperty}>
            <Switch 
                autoFocus={ui.autoFocus}
                checked={value}
                disabled={ui.disabled}
                defaultChecked={schema.default}
                checkedChildren={ui.checkedChildren}
                unCheckedChildren={ui.unCheckedChildren}
                onChange={onChange}
                style={ui.style}
                className={ui.className}
            />
        </SFItem>
    )
}

widgetRegistry.register("boolean", BooleanWidget);
