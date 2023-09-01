import { createEntityAdapter } from "@reduxjs/toolkit";
import { Image } from "./types";

export const imagesAdapter = createEntityAdapter<Image>({
    selectId: (p) => p.id,
   
})