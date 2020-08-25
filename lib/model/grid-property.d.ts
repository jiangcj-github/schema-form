import React from "react";
import { SCGrid } from "../utils/schema";
export declare class GridProperty {
    private _grid?;
    constructor(grid?: SCGrid);
    get grid(): SCGrid | undefined;
}
export declare const GridContext: React.Context<GridProperty>;
