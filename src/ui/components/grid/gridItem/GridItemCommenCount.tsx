import { connect } from "react-redux";
import { EntityId } from "@reduxjs/toolkit"

import { Image } from "@/entities/types";
import { ImagesSelectors } from "@/entities/imageSelectors";
import { RootState } from "@/store"

interface GridItemCommentCountsOwnProps {
    id: EntityId;
}

interface GridItemCommentCountProps {
    comment_count: number;
}

const GridItemCommentCount = ({ comment_count }: GridItemCommentCountProps ) => {

    return (
        <div className="flex justify-start items-center gap-1 text-brown-light">
            <svg width="16" height="16" viewBox="0 0 16 16"  fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg>
            <p className="  text-xs leading-[18px] font-normal">{comment_count}</p>
        </div>
    )
}

const mapStateToProps = (state: RootState, { id }: GridItemCommentCountsOwnProps) => {
    const item: Image | undefined = ImagesSelectors.selectById(state, id)

    return { 
        comment_count: item?.comment_count || 0
    }
}

export default connect(mapStateToProps)(GridItemCommentCount)