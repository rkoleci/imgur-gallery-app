import { RootState } from "../../store";

export namespace FilterSelectors {
  
    export const selectFilters = (state: RootState) => state.filters;
 
}