import React from "react";
import { SCUI } from "../utils/schema";
import {WidgetProps, WidgetProperty} from "./widget-property";
import {SFContext, FormProperty} from "./form-property";

export class Widget<UI extends SCUI> extends React.Component<WidgetProps<UI>> {
    public static contextType = SFContext;
    protected widgetProperty!: WidgetProperty<UI>;

    constructor(props: WidgetProps<UI>, context: FormProperty) {
        super(props, context);
        this.widgetProperty = new WidgetProperty(props, context, this.update);
    }

    public componentWillUnmount() {
        this.widgetProperty.uninstall();
    }

    private update = () => {
        this.forceUpdate();
    }
}

export function useWidget<UI extends SCUI>(props: WidgetProps<UI>) {
    const [, update] = React.useState()
    const context = React.useContext(SFContext);

    const widgetProperty = React.useMemo(() => {
        return new WidgetProperty<UI>(props, context, () => update(Math.random()))
    }, []);

    React.useEffect(() => {
        return () => {
            widgetProperty.uninstall();
        }
    }, []);

    return widgetProperty;
}