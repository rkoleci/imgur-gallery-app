import { connect } from "react-redux";
import { EntityId } from "@reduxjs/toolkit"

import { Image } from "@/entities/types";
import { ImagesSelectors } from "@/entities/imageSelectors";
import { RootState } from "@/store"
import GridItemUps from "@/ui/components/grid/gridItem/GridItemUps";
import GridItemCommentCount from '@/ui/components/grid/gridItem/GridItemCommenCount'
import GridItemViews from "@/ui/components/grid/gridItem/GridItemViews";
import GridItemDisplay from "@/ui/components/grid/gridItem/GridItemDisplay";

interface GridItemOwnProps {
    id: EntityId;
}

interface GridItemProps {
    title: string;
}

const GridItem = ({ id, title }: GridItemProps & GridItemOwnProps) => { 
    return (
        <div className="rounded-sm hover:bg-accent hover:cursor-pointer"> 
            <GridItemDisplay id={id} /> 
            <div className=" bg-brown p-4 flex flex-col gap-4 rounded-sm">
                <p className="text-white leading-4 text-sm">{title}</p>
                <div className="flex justify-between items-center">
                    <GridItemUps id={id} />
                    <GridItemCommentCount id={id} />
                    <GridItemViews id={id} />
                </div>
            </div> 
        </div>
    )
}

const mapStateToProps = (state: RootState, { id }: GridItemOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return {
        title: item?.title || '', 
    }
}

export default connect(mapStateToProps)(GridItem)