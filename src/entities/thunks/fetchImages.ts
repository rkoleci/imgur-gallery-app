import { createAsyncThunk } from "@reduxjs/toolkit";
import { ImagesApiClient  } from "@/api/ImagesApiClient";
import { processThunkResults } from "@/entities/thunks/utils";

export const fetchImages = createAsyncThunk<
  ImagesApiClient.ImagesResponse | undefined,  
  ImagesApiClient.ImagesRequest,  
  {
    rejectValue: unknown;
  }
>("images/fetch", async (data, thunkAPI) => {
  const response = await ImagesApiClient.getImages(data);
  return processThunkResults(thunkAPI, response?.data, response?.errors);
});