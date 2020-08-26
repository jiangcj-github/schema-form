import {widgetRegistry} from "..";
import {BooleanWidget} from "./widgets/boolean";
import {CheckGroupWidget} from "./widgets/checkGroup";
import {CheckBoxWidget} from "./widgets/checkbox";
import {CustomWidget} from "./widgets/custom";
import {NumberWidget} from "./widgets/number";
import {ObjectWidget} from "./widgets/object";
import {SelectWidget} from "./widgets/select";
import {StringWidget} from "./widgets/string";
import {TextAreaWidget} from "./widgets/textarea";
import {SearchWidget} from "./widgets/search";
import {PasswordWidget} from "./widgets/password";
import {RadioGroupWidget} from "./widgets/radioGroup";
import {DatePickerWidget} from "./widgets/datePicker";
import {RangePickerWidget} from "./widgets/rangePicker";
import {SliderWidget} from "./widgets/slider";
import {AntdForm} from "./form";

widgetRegistry.register("boolean", BooleanWidget);
widgetRegistry.register("checkgroup", CheckGroupWidget);
widgetRegistry.register("checkbox", CheckBoxWidget);
widgetRegistry.register("custom", CustomWidget);
widgetRegistry.register("number", NumberWidget);
widgetRegistry.register("object", ObjectWidget);
widgetRegistry.register("select", SelectWidget);
widgetRegistry.register("string", StringWidget);
widgetRegistry.register("textarea", TextAreaWidget);
widgetRegistry.register("search", SearchWidget);
widgetRegistry.register("password", PasswordWidget);
widgetRegistry.register("radiogroup", RadioGroupWidget);
widgetRegistry.register("datepicker", DatePickerWidget);
widgetRegistry.register("rangepicker", RangePickerWidget);
widgetRegistry.register("slider", SliderWidget);

widgetRegistry.setDefault(StringWidget);

widgetRegistry.registrySF("form", AntdForm);

export * from "..";