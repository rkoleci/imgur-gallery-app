import { EntityId } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Image } from "../../entities/types";
import { ImagesSelectors } from "../../entities/imageSelectors";
import { connect } from "react-redux";
import { useState } from "react";
import GridItemUps from "./GridItemUps";
import GridItemCommentCount from './GridItemCommenCount'
import GridItemViews from "./GridItemViews";

interface GridItemOwnProps {
    id: EntityId;
}

interface GridItemProps {
    title: string;
    link: string;
}

const GridItem = ({ id, title, link }: GridItemProps & GridItemOwnProps) => {
    const [zoom, setZoom] = useState(false)
   
    return (
      <div className="rounded-sm">
          <img onClick={() => setZoom(true)} src={link} className="rounded-sm min-h-[150px] sm:min-h-[180px] lg:min-h-[300px] w-full"  />
          <div className=" bg-brown p-4 flex flex-col gap-4 rounded-sm" onClick={() => setZoom(true)}>
            <p className="text-white leading-4 text-sm">{title}</p>
            <div className="flex justify-between items-center">
                <GridItemUps id={id} />
                <GridItemCommentCount id={id} />
                <GridItemViews  id={id} />
            </div>
          </div>
          {zoom && (
            <div onClick={() => setZoom(false)} className="scale-75 translate-x-4 skew-y-3 md:transform-none fixed top-0 right-0 w-full h-full bg-accent flex justify-center items-center">
                 <img src={link} width={300} height={300} />
              </div>
          )}
      </div>
    )
}

const mapStateToProps = (state: RootState, { id }: GridItemOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return {
        title: item?.title || '',
        link: item?.link || 'https://i.imgur.com/Qu7EHDV.jpeg',
    }
}

export default connect(mapStateToProps)(GridItem)