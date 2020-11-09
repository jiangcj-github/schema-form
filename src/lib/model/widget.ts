/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SCUI } from "../utils/schema";
import {WidgetProps, WidgetProperty} from "./widget-property";
import {SFContext, FormProperty} from "./form-property";

export class Widget<UI extends SCUI> extends React.Component<WidgetProps<UI>> {
    public static contextType = SFContext;
    protected widgetProperty!: WidgetProperty<UI>;

    constructor(props: WidgetProps<UI>, context: FormProperty) {
        super(props, context);
        this.widgetProperty = new WidgetProperty();
        this.widgetProperty.updateProperty(props, context, this.update);
    }

    public componentDidMount() {
        this.widgetProperty.reset();
    }

    public componentWillUnmount() {
        this.widgetProperty.uninstall();
    }

    public UNSAFE_componentWillUpdate(nextProps: WidgetProps<UI>, nextState: any, nextContext: FormProperty) {
        this.widgetProperty.updateProperty(nextProps, nextContext, this.update);
    }

    private update = () => {
        this.forceUpdate();
    }
}

export function useWidget<UI extends SCUI>(props: WidgetProps<UI>) {
    const [, update] = React.useState()
    const context = React.useContext(SFContext);
    const widgetProperty = React.useRef(new WidgetProperty<UI>()).current;
    widgetProperty.updateProperty(props, context, () => update(Math.random()));

    React.useEffect(() => {
        widgetProperty.reset();
        return () => {
            widgetProperty.uninstall();
        }
    }, []);

    return widgetProperty;
}