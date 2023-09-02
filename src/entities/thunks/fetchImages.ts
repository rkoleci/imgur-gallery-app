import { createAsyncThunk } from "@reduxjs/toolkit";
import { ImagesApiClient  } from "@/api/ImagesApiClient";
import { processThunkResults } from "@/entities/thunks/utils";

export const fetchImages = createAsyncThunk<
any,
ImagesApiClient.ImagesRequest,
  { rejectValue: any }
>("images/fetch", async (data, thunkAPI) => {
  const response = await ImagesApiClient.getImages(data);
  return processThunkResults(thunkAPI, response?.data, response?.errors)
});

