import { connect } from "react-redux";
import { ImagesSelectors } from "../../entities/imageSelectors";
import { RootState } from "../../store";
import { EntityId } from "@reduxjs/toolkit";

import GridItem from './Griditem'

interface GridProps {
    ids: EntityId[];
} 

const Grid = ({ ids }: GridProps) => {

    return (
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridRowGap: "10px"
            }}
        >
        
        {ids?.map(id => (
            <GridItem key={id} id={id} />
        ))}
      </div>
    )
}


const mapStateToProps = (state:RootState) => {
    const ids = ImagesSelectors.selectIds(state)
  
    return {
      ids
    }
  }

export default connect(mapStateToProps)(Grid)

