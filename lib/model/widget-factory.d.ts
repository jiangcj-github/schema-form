import { Schema } from "../utils/schema";
import React from "react";
export declare type WidgetType = React.ComponentType<any>;
declare class WidgetRegistry {
    private _memo;
    private _default;
    private _sf;
    private _view;
    register(name: string, widget: WidgetType): void;
    setDefault(widget: WidgetType): void;
    setView(view: string): void;
    has(name: string): boolean;
    get(name: string): React.ComponentType<any>;
    registrySF(name: string, sf: WidgetType): void;
    getSF(name: string): React.ComponentType<any>;
    hasSF(name: string): boolean;
}
export declare const widgetRegistry: WidgetRegistry;
export declare function createWidget(node: Schema, path: string, parentNode: Schema): JSX.Element | null;
export {};
