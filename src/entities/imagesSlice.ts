import { createSlice } from '@reduxjs/toolkit'  
import { imagesAdapter } from './imagesAdapter';
import { fetchImages } from './thunks/fetchImages';

import data from '../data.json'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: imagesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      imagesAdapter.setMany(state, [
        ... data.data.map(i => ({
          ...i,
          id: `${i}-${Math.random()}`
        }))
      ])
    }); 
  },
  
})

 

export const imagesSliceReducer = imagesSlice.reducer;