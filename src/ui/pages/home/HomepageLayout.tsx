import Homepage from "@/ui/pages/home/Homepage"
import Grid from "@/ui/pages/home/Grid"
import ImagesFilters from "@/ui/filters/components/ImagesFilters"

const HomepageLayout = () => { 

   return (
        <Homepage filters={<ImagesFilters />}>
           <Grid />
        </Homepage>
    )
}

export default HomepageLayout