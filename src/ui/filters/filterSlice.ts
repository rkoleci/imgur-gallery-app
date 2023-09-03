import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { isNil } from 'lodash'

import {  FilterSort, FilterState, FilterWindow } from '@/ui/filters/types'
import { FilterSelectors } from '@/ui/filters/filterSelectors'
import { fetchImages } from '@/entities/thunks/fetchImages'
import { ImagesApiClient } from '@/api/ImagesApiClient'
import { AppDispatch, RootState } from '@/store'
 
export const selectFiltersAndFetch = ({ sort,   search, window,  page = 1 }: ImagesApiClient.ImagesRequest) => (dispatch: AppDispatch) => {
    if (!isNil(sort)) {
      dispatch(setSort(sort))
    }
    if (!isNil(search)) {
      dispatch(setSearch(search))
    }
    if (!isNil(window)) {
      dispatch(setWindow(window))
    }  
  
    dispatch(fetchImagesWithFilters({ page }))
  }
  
  export const fetchImagesWithFilters = ({ page }: { page: number }) => (dispatch: AppDispatch, getState: () => RootState) => {
    const filters = FilterSelectors.selectFilters(getState());
    dispatch(fetchImages({ page, ...filters }));
  }

const initialState: FilterState = {
    window: FilterWindow.Month,
    sort: FilterSort.Top,
    search: null,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: { 
    setSort(state, action: PayloadAction<FilterSort>) {
      state.sort = action.payload
    }, 
    setSearch(state, action: PayloadAction<string | null>) {
      state.search = action.payload
    },
    setWindow(state, action: PayloadAction<FilterWindow>) {
        state.window = action.payload
    }, 
  },
})

export const { setSort,   setSearch, setWindow,   } = filterSlice.actions
export const filterSliceReducer = filterSlice.reducer;