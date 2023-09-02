import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { fetchImages } from "../../entities/thunks/fetchImages"
import Homepage from "./Homepage"
import Grid from "../ImagesGrid/Grid"
import ImagesFilters from "../ImagesGrid/ImagesFilters"

const HomepageLayout = () => { 

   return (
        <Homepage filters={<ImagesFilters />}>
           <Grid />
        </Homepage>
    )
}

export default HomepageLayout