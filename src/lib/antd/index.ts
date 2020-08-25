import {widgetRegistry} from "..";
import {BooleanWidget} from "./widgets/boolean";
import {CheckBoxGroupWidget} from "./widgets/checkbox-group";
import {CheckBoxWidget} from "./widgets/checkbox";
import {CustomWidget} from "./widgets/custom";
import {NumberWidget} from "./widgets/number";
import {ObjectWidget} from "./widgets/object";
import {SelectWidget} from "./widgets/select";
import {StringWidget} from "./widgets/string";
import {AntdForm} from "./form";

widgetRegistry.register("antd.boolean", BooleanWidget);
widgetRegistry.register("antd.checkbox.group", CheckBoxGroupWidget);
widgetRegistry.register("antd.checkbox", CheckBoxWidget);
widgetRegistry.register("antd.custom", CustomWidget);
widgetRegistry.register("antd.number", NumberWidget);
widgetRegistry.register("antd.object", ObjectWidget);
widgetRegistry.register("antd.select", SelectWidget);
widgetRegistry.register("antd.string", StringWidget);

widgetRegistry.setDefault("antd", StringWidget);

widgetRegistry.registrySF("antd.form", AntdForm);