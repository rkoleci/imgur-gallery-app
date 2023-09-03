import Homepage from "@/ui/pages/home/Homepage"
import Grid from "@/ui/pages/home/Grid"
import ImagesFilters from "@/ui/filters/components/ImagesFilters"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/store"
import { fetchImagesWithFilters } from "@/ui/filters/filterSlice"

const HomepageLayout = () => { 
   const dispatch = useDispatch<AppDispatch>()

   useEffect(() => {
      dispatch(fetchImagesWithFilters({ page: 1 }))
   }, [])

   return (
        <Homepage filters={<ImagesFilters />}>
           <Grid />
        </Homepage>
    )
}

export default HomepageLayout