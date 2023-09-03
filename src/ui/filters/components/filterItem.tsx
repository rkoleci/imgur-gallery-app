import {   connect, useDispatch } from "react-redux"

import {   FilterSort, FilterTypes, FilterWindow } from "../types"
import { selectFiltersAndFetch } from "../filterSlice"
import { AppDispatch, RootState  } from "@/store"
import { FilterSelectors } from "../filterSelectors"
import { ChangeEvent } from "react"
import SuggestionAutocomplete from "@/ui/components/SuggestionAutocomplete"
import { fetchSuggestions } from "@/ui/suggestions/thunks/fetchSuggestions"

interface FilterItemOwnProps {
    category: FilterTypes
}

interface FilterItemProps {
    value: string | boolean | FilterSort | FilterWindow |  null | undefined;
}

const sorts = Object.keys(FilterSort) as Array<keyof typeof FilterSort>
const windows = Object.keys(FilterWindow) as Array<keyof typeof FilterWindow>;

const FilterItem = ({ category, value }: FilterItemProps & FilterItemOwnProps) => {
    const dispatch = useDispatch<AppDispatch>() 

    const onSort = (event: ChangeEvent<HTMLSelectElement>) => {
        const sort = event.target.value;
        
        dispatch(selectFiltersAndFetch({
            sort: sort as FilterSort
        }))
    } 

    const onWindow = (event: ChangeEvent<HTMLSelectElement>) => {
        const window = event.target.value;

        dispatch(selectFiltersAndFetch({
            window: window as FilterWindow
        }))
    } 

    const onSearch = (search: string) => {
        dispatch(fetchSuggestions({q: search}))
        dispatch(selectFiltersAndFetch({
            search
        }))
    }

    switch(category) {
        case FilterTypes.Sort:
            return (
                <select className="select w-full max-w-xs" onChange={onSort}  value={value as FilterWindow}>
                <option disabled selected>Sort:</option> 
                {sorts.map((sort) => (
                    <option>{FilterSort[sort]}</option>
                ))}
            </select>
            ) 
        case FilterTypes.Search:
            return (
                <SuggestionAutocomplete onSearch={onSearch} />
            ) 
        case FilterTypes.Window:
            return (
                <select className="select w-full max-w-xs" onChange={onWindow}  value={value as FilterWindow}>
                    <option disabled selected>Window:</option> 
                    {windows.map((window) => (
                        <option>{FilterWindow[window]}</option>
                    ))}
                </select>
            )
        default:
            return null
    }
} 

const mapStateToProps = (state:RootState, { category }: FilterItemOwnProps) => {
    const value = FilterSelectors.selectFilterByType(state, category)

    return {
        value
    }
}

export default connect(mapStateToProps)(FilterItem)