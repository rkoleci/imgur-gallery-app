import { connect, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { selectFiltersAndFetch, setSearch } from "../filters/filterSlice"
import { FilterSection, FilterSort, FilterState, FilterWindow, FilterWindowKey } from "../types"
import Input from "../components/Input"
import { FilterSelectors } from "../filters/filterSelectors"

interface ImagesFiltersProps {
    sort: FilterSort;
    viral: boolean;
    search: string | null;
    window: FilterWindow;
    section: FilterState;
}

const windows = Object.keys(FilterWindow) as Array<keyof typeof FilterWindow>;
const sections = Object.keys(FilterSection) as Array<keyof typeof FilterSection>

const ImagesFilters = ({ sort, viral, search, window, section }: ImagesFiltersProps) => {
    const dispatch = useDispatch<AppDispatch>() 

    const onViral = (event: Event) => {
        const viral = (event.target as HTMLInputElement).value;
        console.log(111, { viral})

        dispatch(selectFiltersAndFetch({
            viral: viral === 'on' ? true: false
        }))
    }

    const onSort = (event: Event) => {
        const sort = (event.target as HTMLInputElement).value;

        dispatch(selectFiltersAndFetch({
            sort: sort as FilterSort
        }))
    }

    const onSearch = (search: string) => {
        dispatch(selectFiltersAndFetch({
            search
        }))
    }
    
    return (
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-8">
            <div className="flex-[0.5] flex justify-end xl:justify-start gap-4">
                <label className="label cursor-pointer flex gap-2">
                    <span className="label-text">Viral</span> 
                    <input type="checkbox" onChange={onViral}  className="checkbox checkbox-primary" />
                </label> 
                <select className="select w-full max-w-xs" onChange={onSort}>
                    <option disabled selected>Window:</option> 
                     {windows.map((window) => (
                          <option>{window}</option>
                     ))}
                </select>
                <select className="select w-full max-w-xs" onChange={onSort}>
                    <option disabled selected>Section:</option> 
                     {sections.map((section) => (
                          <option>{section}</option>
                     ))}
                </select>
            </div>
            <div className="flex-1 flex justify-center xl:justify-end">
                <Input
                    placeholder="Search..."
                    onChange={onSearch}
                />
            </div>
            <div className="flex-[0.3] flex justify-center xl:justify-end">
                <select className="select w-full" onChange={onSort}>
                    <option disabled selected>Sort by Title:</option>
                    <option>ASC Title</option>
                    <option>DSC Title</option>
                </select>
            </div>
        </div>
    ) 
}

const mapStateToProps = (state: RootState) => {
    const sort = FilterSelectors.selectFilterByType(state, 'sort')
    const viral = FilterSelectors.selectFilterByType(state, 'viral')
    const search = FilterSelectors.selectFilterByType(state, 'search')
    const window = FilterSelectors.selectFilterByType(state, 'window')
    const section = FilterSelectors.selectFilterByType(state, 'section')
    console.log(111, 'f', sort, viral, search, window, section)

    return {
        sort,
        viral,
        search,
        window,
        section
    }
}

export default connect(mapStateToProps)(ImagesFilters)