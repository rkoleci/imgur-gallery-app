import { createSlice } from '@reduxjs/toolkit'  
import { suggestionsAdapter } from './suggestionsAdaptar';
import { fetchSuggestions } from './thunks/fetchSuggestions';

import results from '@/suggestions.json'

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState: suggestionsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => { 
    builder.addCase(fetchSuggestions.fulfilled, (state, action) => { 
      suggestionsAdapter.removeAll(state)

      if (action.meta.arg.q) {
        suggestionsAdapter.setMany(state, results.data.filter(i => i.text.includes(action.meta.arg.q)) as any)
        return
      }
   
      suggestionsAdapter.setMany(state, results as any)

    }); 
  },
  
})

 

export const suggestionsSliceReducer = suggestionsSlice.reducer;