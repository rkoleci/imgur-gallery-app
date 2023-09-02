import {   useDispatch } from "react-redux"

import { FilterSection, FilterSort, FilterTypes, FilterWindow } from "../types"
import { selectFiltersAndFetch } from "../filterSlice"
import { AppDispatch  } from "@/store"
import Input from "@/ui/components/Input"

interface FilterItemProps {
    category: FilterTypes
}

const windows = Object.keys(FilterWindow) as Array<keyof typeof FilterWindow>;
const sections = Object.keys(FilterSection) as Array<keyof typeof FilterSection>

const FilterItem = ({ category }: FilterItemProps) => {
    const dispatch = useDispatch<AppDispatch>() 

    const onViral = (e: { target: { value: any; }; }) => {
        const viral = (e.target as HTMLInputElement).value;

        dispatch(selectFiltersAndFetch({
            viral: viral === 'on' ? true: false
        }))
    }

    const onSort = (e: { target: { value: any; }; }) => {
        const sort = (e.target as HTMLInputElement).value;

        dispatch(selectFiltersAndFetch({
            sort: sort as FilterSort
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
                <select className="select w-full" onChange={onSort}>
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
                <Input
                    placeholder="Search..."
                    onChange={onSearch}
                />
            )
        case FilterTypes.Section:
            return (
                <select className="select w-full max-w-xs" onChange={onSort}>
                    <option disabled selected>Section:</option> 
                    {sections.map((section) => (
                        <option>{section}</option>
                    ))}
                </select>
            )
        case FilterTypes.Window:
            return (
                <select className="select w-full max-w-xs" onChange={onSort}>
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

export default FilterItem