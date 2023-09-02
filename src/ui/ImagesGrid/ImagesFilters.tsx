import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { selectFiltersAndFetch } from "../filters/filterSlice"
import { FilterSort } from "../types"

const ImagesFilters = () => {
    console.log(111,' ImagesFilters ')
    const dispatch = useDispatch<AppDispatch>()

    const onSetViral = () => {
        dispatch(selectFiltersAndFetch({
            viral: true,
        }))
    }

    const onSetViralFalse = () => {
        dispatch(selectFiltersAndFetch({
            viral: false,
        }))
    }

    const setAsc = () => {
        dispatch(selectFiltersAndFetch({
            sort: FilterSort.DESC   ,
        }))
    }

    return (
        <div className="flex flex-col xl:flex-row justify-between gap-4">
            <div className="flex-[0.3] flex justify-end xl:justify-start gap-4">
                <label className="label cursor-pointer">
                    <span className="label-text">Viral</span> 
                    <input type="checkbox" checked={false} className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Viral</span> 
                    <input type="checkbox" checked={false} className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="flex-1 flex justify-center xl:justify-end">
                <input type="text" placeholder="Type here" className="input w-full border-1" />
            </div>
            <div className="flex-[0.3] flex justify-center xl:justify-end">
   
            <select className="select w-full max-w-xs">
                <option disabled selected>Pick your favorite Simpson</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
            </div>
        </div>
    )

    return (
      <div>
    
 


<button className="btn">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Button
</button>
      </div>
    )
}

export default ImagesFilters