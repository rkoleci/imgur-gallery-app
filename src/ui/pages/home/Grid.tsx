import { useMemo } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { connect, useDispatch } from "react-redux";

import { ImagesSelectors } from "@/entities/imageSelectors";
import { fetchImagesWithFilters } from "@/ui/filters/filterSlice";
import { AppDispatch, RootState } from "@/store";
import InfiniteLoaderGrid from "@/ui/components/grid/InfiniteLoaderGrid";
import GridItem from "@/ui/components/grid/gridItem/Griditem";

interface GridProps {
    ids: EntityId[];
} 

const Grid = ({ ids }: GridProps) => { 
  const dispatch = useDispatch<AppDispatch>()

  const onLoadMore = (page: number) => {
    dispatch(fetchImagesWithFilters({ page }))
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
