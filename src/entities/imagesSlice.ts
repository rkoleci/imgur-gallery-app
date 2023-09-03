import { createSlice } from '@reduxjs/toolkit'  
import { imagesAdapter } from '@/entities/imagesAdapter';
import { fetchImages } from '@/entities/thunks/fetchImages';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: imagesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      if (action.payload?.data) {
        imagesAdapter.removeAll(state)
        imagesAdapter.setMany(state, action?.payload?.data )
      }
    }); 
  },
  
})

 

export const imagesSliceReducer = imagesSlice.reducer;