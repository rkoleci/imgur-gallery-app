import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { FilterStateKey } from "../types";

export namespace FilterSelectors {
  
    export const selectFilters = (state: RootState) => state.filters;

    export const selectFilterByType = createSelector(
        [selectFilters, (state, filterType) => filterType],
        (items, filterType) => {
            return items && items[filterType as FilterStateKey] 
        }
      );
 
}