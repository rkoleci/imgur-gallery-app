import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FilterSort, FilterState } from '../types'
import { isNil } from 'lodash'
import { ImagesApiClient } from '../../api/ImagesApiClient'
import { AppDispatch, RootState } from '../../store'
import { FilterSelectors } from './filterSelectors'
import { fetchImages } from '../../entities/thunks/fetchImages'
 
export const selectFiltersAndFetch = ({ sort, viral, page = 1 }: ImagesApiClient.ImagesRequest) => (dispatch: AppDispatch) => {
    if (!isNil(sort)) {
      dispatch(setSort(sort))
    }
    if (!isNil(viral)) {
      dispatch(setViral(viral))
    } 
  
    //dispatch(fetchImagesWithFilters({ page }))
  }
  
  export const fetchImagesWithFilters = ({ page }: { page: number }) => (dispatch: AppDispatch, getState: () => RootState) => {
    const filters = FilterSelectors.selectFilters(getState());
    console.log(111111, { filters })
    //dispatch(fetchImages({ page, ...filters }));
  }

const initialState: FilterState = {
    sort: FilterSort.ASC,
    viral: false,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: { 
    setSort(state, action: PayloadAction<FilterSort>) {
      state.sort = action.payload
    },
    setViral(state, action: PayloadAction<boolean>) {
        state.viral = action.payload
    }
  },
})

export const { setSort, setViral } = filterSlice.actions
export const filterSliceReducer = filterSlice.reducer;