import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { fetchImages } from "../../entities/thunks/fetchImages"
import Homepage from "./Homepage"
import Grid from "../ImagesGrid/Grid"
import ImagesFilters from "../ImagesGrid/ImagesFilters"
import Virtual from "../ImagesGrid/virtual"

const HomepageLayout = ( ) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
      dispatch(fetchImages({ page:1 }))
  }, [])  

    return (
        <Homepage filters={<ImagesFilters />}>
            <Virtual />
        </Homepage>
    )
}

export default HomepageLayout