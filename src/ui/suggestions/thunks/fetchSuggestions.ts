import { createAsyncThunk } from "@reduxjs/toolkit";
import { processThunkResults } from "@/entities/thunks/utils";
import { SuggestionsApiClient } from "@/api/suggestionsApiClient";

export const fetchSuggestions = createAsyncThunk<
  SuggestionsApiClient.SuggestionsResponse | undefined,  
  SuggestionsApiClient.SuggestionsRequest,  
  {
    rejectValue: unknown;
  }
>("suggestions/fetch", async (data, thunkAPI) => {
  const response = await SuggestionsApiClient.getSuggestions(data);
  return processThunkResults(thunkAPI, response?.data, response?.errors);
});