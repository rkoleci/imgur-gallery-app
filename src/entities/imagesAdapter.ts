import { createEntityAdapter } from "@reduxjs/toolkit";
import { Image } from "@/entities/types";

export const imagesAdapter = createEntityAdapter<Image>({
    selectId: (p) => p.id,
   
})