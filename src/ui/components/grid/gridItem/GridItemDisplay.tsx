import { useState } from "react";
import { EntityId } from "@reduxjs/toolkit"
import { connect } from "react-redux";
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

import { Image } from "@/entities/types";
import { ImagesSelectors } from "@/entities/imageSelectors";
import { RootState } from "@/store"
import FullScreenView from "@/ui/components/FullScreenView";

interface GridItemDisplayOwnProps {
    id: EntityId;
}

interface GridItemDisplayProps { 
    link: string;
    animated: boolean;
}

const GridItemDisplay = ({ animated, link}: GridItemDisplayProps) => {
    const [zoom, setZoom] = useState<boolean>(false)

    const toggleZoom = () => {
        setZoom(zoom => !zoom)
    }

    if (animated) {
        return (
            <div onClick={toggleZoom}>
                <LazyLoadComponent>
                    <video src={link}  autoPlay playsInline muted className={`rounded-sm min-h-[150px] sm:min-h-[180px] lg:min-h-[300px] object-contain`}  />
                </LazyLoadComponent>
                 <FullScreenView visible={zoom}  >
                    <video src={link} autoPlay playsInline muted className={`rounded-sm  object-contain  `}  />
                 </FullScreenView>
            </div>
        )
    }

    return (
        <div onClick={toggleZoom}>
             <LazyLoadImage
                className={`rounded-sm min-h-[150px] sm:min-h-[180px] lg:min-h-[300px] object-contain`} 
                src={link}
            />
            <FullScreenView visible={zoom}  >
                <img  src={link} className={`rounded-sm min-h-[250px] sm:min-h-[350px] lg:min-h-[400px]  object-contain `}   />
            </FullScreenView>
        </div>
    )
}

const mapStateToProps = (state: RootState, { id }: GridItemDisplayOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return {
        link:  item?.images && item?.images[0]?.link || '',
        animated: item?.images && item?.images[0]?.animated || false
    }
}

export default connect(mapStateToProps)(GridItemDisplay)
