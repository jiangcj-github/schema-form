import {Schema} from "../utils/schema";
import React from "react";

export type WidgetType = React.ComponentType<any>;

interface WidgetTypeMap {
    [key: string]: WidgetType;
}

class WidgetRegistry {
    private _memo: WidgetTypeMap = {};
    private _default: WidgetTypeMap = {};
    private _sf: WidgetTypeMap = {};
    private _view = "antd";

    register(name: string, widget: WidgetType) {
        this._memo[name] = widget;
    }

    setDefault(view: string, widget: WidgetType) {
        this._default[view] = widget;
    }

    setView(view: string) {
        this._view = view;
    }

    has(name: string) {
        return this._memo.hasOwnProperty(name);
    }

    get(name: string) {
        const _name = this._view + "." + name;
        if(this.has(_name)) {
            return this._memo[_name];
        } 
        return this._default[this._view];
    }

    registrySF(name: string, sf: WidgetType) {
        this._sf[name] = sf;
    }

    getSF(name: string) {
        const _name = this._view + "." + name;
        if(!this.hasSF(_name)) {
            throw Error(`组件${_name}未注册，未引入相关文件`);
        }
        return this._sf[_name];
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




