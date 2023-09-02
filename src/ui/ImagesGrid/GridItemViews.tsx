import { EntityId } from "@reduxjs/toolkit";
import { ImagesSelectors } from "../../entities/imageSelectors";
import { Image } from "../../entities/types";
import { connect } from "react-redux";
import { RootState } from "../../store";

interface GridItemViewsOwnProps {
    id: EntityId;
}

interface GridItemProps {
    views: number;
}

const GridItemViews = ({ views }: GridItemProps) => {

    return (
        <div className="flex justify-start items-center gap-1 text-brown-light">
            <svg width="16" height="16" viewBox="0 0 16 16"   fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>
            <p className="text-xs leading-[18px] font-normal">{views}</p>
        </div>
    )
}

const mapStateToProps = (state: RootState, { id }: GridItemViewsOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return { 
        views: item?.views || 0,

    }
}

export default connect(mapStateToProps)(GridItemViews)