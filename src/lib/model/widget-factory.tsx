import {Schema} from "../utils/schema";
import React from "react";

export type WidgetType = React.ComponentType<any>;

interface WidgetTypeMap {
    [key: string]: WidgetType;
}

class WidgetRegistry {
    private _memo: WidgetTypeMap = {};
    private _default!: WidgetType;
    private _sf: WidgetTypeMap = {};

    register(name: string, widget: WidgetType) {
        this._memo[name] = widget;
    }

    setDefault(widget: WidgetType) {
        this._default = widget;
    }

    has(name: string) {
        return this._memo.hasOwnProperty(name);
    }

    get(name: string) {
        if(this.has(name)) {
            return this._memo[name];
        } 
        return this._default;
    }

    registrySF(name: string, sf: WidgetType) {
        this._sf[name] = sf;
    }

    getSF(name: string) {
        if(!this.hasSF(name)) {
            throw Error(`组件${name}未注册，未引入相关文件`);
        }
        return this._sf[name];
    }

    hasSF(name: string) {
        return this._sf.hasOwnProperty(name);
    }
}

export const widgetRegistry = new WidgetRegistry();

export function createWidget(node: Schema, path: string, parentNode: Schema) {
    const widgetType = node.ui?.widget || node.type || "";
    const Widget = widgetRegistry.get(widgetType);
    return Widget ? <Widget key={path} schema={node} path={path} parent={parentNode} /> : null;
}




