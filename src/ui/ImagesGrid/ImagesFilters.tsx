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
      <div>
        <button onClick={onSetViral}>setViral: true</button>
        <button onClick={onSetViralFalse}>setViral: false</button>
        <button onClick={setAsc}>setDAsc</button>
      </div>
    )
}

export default ImagesFilters