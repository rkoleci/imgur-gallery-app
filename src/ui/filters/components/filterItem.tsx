import {   connect, useDispatch } from "react-redux"

import { FilterSection, FilterSort, FilterTypes, FilterWindow } from "../types"
import { selectFiltersAndFetch } from "../filterSlice"
import { AppDispatch, RootState  } from "@/store"
import { FilterSelectors } from "../filterSelectors"
import { ChangeEvent } from "react"
import SuggestionAutocomplete from "@/ui/components/SuggestionAutocomplete"

interface FilterItemOwnProps {
    category: FilterTypes
}

interface FilterItemProps {
    value: string | boolean | FilterSort | FilterWindow | FilterSection | null | undefined;
}

const windows = Object.keys(FilterWindow) as Array<keyof typeof FilterWindow>;
const sections = Object.keys(FilterSection) as Array<keyof typeof FilterSection>

const FilterItem = ({ category, value }: FilterItemProps & FilterItemOwnProps) => {
    const dispatch = useDispatch<AppDispatch>() 
    
    const onViral = () => {  
        dispatch(selectFiltersAndFetch({
            showViral: !value  
        }))
    }

    const onSort = (event: ChangeEvent<HTMLSelectElement>) => {
        const sort = event.target.value;
        
        dispatch(selectFiltersAndFetch({
            sort: sort as FilterSort
        }))
    }

    const onSection = (event: ChangeEvent<HTMLSelectElement>) => {
        const section = event.target.value;

        dispatch(selectFiltersAndFetch({
            section: section as FilterSection
        }))
    }

    const onWindow = (event: ChangeEvent<HTMLSelectElement>) => {
        const window = event.target.value;

        dispatch(selectFiltersAndFetch({
            window: window as FilterWindow
        }))
    } 

    const onSearch = (search: string) => {
        dispatch(selectFiltersAndFetch({
            search
        }))
    }

    switch(category) {
        case FilterTypes.Sort:
            return (
                <select className="select w-full" onChange={onSort} value={value as FilterSort}>
                    <option disabled selected>Sort by Title:</option>
                    <option>ASC Title</option>
                    <option>DSC Title</option>
                </select>
            )
        case FilterTypes.Viral:
            return (
                <label className="label cursor-pointer flex gap-2">
                    <span className="label-text">Viral</span> 
                    <input type="checkbox" onChange={onViral}  className="checkbox checkbox-primary" />
                </label> 
            )
        case FilterTypes.Search:
            return (
                <SuggestionAutocomplete onSearch={onSearch} />
            )
        case FilterTypes.Section:
            return (
                <select className="select w-full max-w-xs" onChange={onSection}  value={value as FilterSection}>
                    <option disabled selected>Section:</option> 
                    {sections.map((section) => (
                        <option>{section}</option>
                    ))}
                </select>
            )
        case FilterTypes.Window:
            return (
                <select className="select w-full max-w-xs" onChange={onWindow}  value={value as FilterWindow}>
                    <option disabled selected>Window:</option> 
                    {windows.map((window) => (
                        <option>{window}</option>
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