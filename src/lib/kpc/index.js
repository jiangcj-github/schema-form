import {widgetRegistry} from "..";
import {StringWidget} from "./widgets/string";
import {KpcForm} from "./form";

widgetRegistry.register("string", StringWidget);

widgetRegistry.setDefault(StringWidget);

widgetRegistry.registrySF("form", KpcForm);

export * from "..";