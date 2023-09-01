import { EntityId } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Image } from "../../entities/types";
import { ImagesSelectors } from "../../entities/imageSelectors";
import { connect } from "react-redux";

interface GridItemOwnProps {
    id: EntityId;
}

interface GridItemProps {
    title: string;
    link: string;
}

const GridItem = ({ title, link }: GridItemProps) => {
   
    return (
      <div>
          <p>{title}</p>
          <img src={link} width={100} height={100} />
      </div>
    )
}

const mapStateToProps = (state: RootState, { id }: GridItemOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return {
        title: item?.title || '',
        link: item?.link
    }
}

export default connect(mapStateToProps)(GridItem)