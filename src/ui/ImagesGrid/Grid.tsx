import { connect, useDispatch } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";
import { ImagesSelectors } from "../../entities/imageSelectors";

import { fetchImages } from "../../entities/thunks/fetchImages";
import InfiniteLoaderGrid from "./InfiniteLoaderGrid";
import { AppDispatch, RootState } from "../../store";
import GridItem from "./Griditem";
import { useMemo } from "react";

interface GridProps {
    ids: EntityId[];
} 

const Grid = ({ ids }: GridProps) => { 
  const dispatch = useDispatch<AppDispatch>()

  const onLoadMore = (page: number) => {
    dispatch(fetchImages({ page }))
  };   

  const renderItem = useMemo(() => (item: EntityId) => {
    return <GridItem id={item} />
  }, [])

    return (
      <InfiniteLoaderGrid items={ids} onLoadMore={onLoadMore} totalPages={10} renderItem={renderItem} />
    ) 
}

const mapStateToProps = (state:RootState) => {
    const ids = ImagesSelectors.selectIds(state)
  
    return {
      ids
    }
  }

export default connect(mapStateToProps)(Grid)
