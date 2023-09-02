import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { FilterStateKey } from "@/ui/filters/types";

export namespace FilterSelectors {
  
    export const selectFilters = (state: RootState) => state.filters;

    export const selectFilterByType = createSelector(
        [selectFilters, (_, filterType) => filterType],
        (items, filterType) => {
            return items && items[filterType as FilterStateKey] 
        }
      );
 
}