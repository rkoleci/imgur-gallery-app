import { EntityId } from "@reduxjs/toolkit"
import { connect } from "react-redux"

import { Image } from "@/entities/types";
import { ImagesSelectors } from "@/entities/imageSelectors";
import { RootState } from "@/store"

interface GridItemZoomOwnProps {
    id: EntityId;
}

interface GridItemZoomProps {
    link: string;
    animated: boolean;
}

const GridItemZoom = ({ animated, link }: GridItemZoomProps) => {

    if (animated) {
        return <video src={link} autoPlay playsInline muted className={`rounded-sm min-h-[150px] sm:min-h-[180px] lg:min-h-[300px] w-full`} />
    }

    return (
        <img   src={link} className={`rounded-sm min-h-[150px] sm:min-h-[180px] lg:min-h-[300px] w-full ${animated ? 'none' : 'block'}`} />
    )
}


const mapStateToProps = (state: RootState, { id }: GridItemZoomOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return {
        link: item?.images && item?.images[0]?.link || '',
        animated: item?.images && item?.images[0]?.animated || false
    }
}

export default connect(mapStateToProps)(GridItemZoom)