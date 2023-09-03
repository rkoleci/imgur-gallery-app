import { RootState } from "@/store";
import { suggestionsAdapter } from "./suggestionsAdaptar";

export namespace SuggestionsSelectors {
  export const {
    selectById,
    selectAll,
    selectIds
  } = suggestionsAdapter?.getSelectors<RootState>(
    (state) => state?.suggestions
  ); 

}