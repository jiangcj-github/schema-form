import {widgetRegistry} from "..";
import {StringWidget} from "./widgets/string";
import {KpcForm} from "./form";

widgetRegistry.register("kpc.string", StringWidget);

widgetRegistry.setDefault("kpc", StringWidget);

widgetRegistry.registrySF("kpc.form", KpcForm);