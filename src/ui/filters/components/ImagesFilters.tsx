import {  FilterTypes  } from "@/ui/filters/types" 
import FilterItem from "@/ui/filters/components/filterItem"

const ImagesFilters = () => { 

    return (
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-8">
            <div className="flex-[0.5] flex justify-end xl:justify-start gap-4">
                <FilterItem category={FilterTypes.Window} />
            </div>
            <div className="flex-1 flex justify-center xl:justify-end">
                <FilterItem category={FilterTypes.Search} />
            </div>
            <div className="flex-[0.3] flex justify-end">
                <FilterItem category={FilterTypes.Sort} />
            </div>
        </div>
    ) 
} 

export default ImagesFilters