import { createAsyncThunk } from "@reduxjs/toolkit";
import { ImagesApiClient  } from "../../api/ImagesApiClient";
import { processThunkResults } from "./utils";

export const fetchImages = createAsyncThunk<
any,
ImagesApiClient.ImagesRequest,
  { rejectValue: any }
>("images/fetch", async (data, thunkAPI) => {
  console.log(111, "images/fetch", data.page)
  const response = await ImagesApiClient.getImages(data);
  return processThunkResults(thunkAPI, response?.data, response?.errors)
});

