import React from "react";
import {SCGrid} from "../utils/schema";

export class GridProperty {
    private _grid?: SCGrid;

    constructor(grid?: SCGrid) {
        this._grid = grid || {};
    }

    public get grid() {
        return this._grid;
    }
}

export const GridContext = React.createContext(new GridProperty());  