import { RootState } from "../store";
import { imagesAdapter } from "./imagesAdapter";

export namespace ImagesSelectors {
  export const {
    selectById,
    selectIds
  } = imagesAdapter?.getSelectors<RootState>(
    (state) => state?.images
  ); 

}