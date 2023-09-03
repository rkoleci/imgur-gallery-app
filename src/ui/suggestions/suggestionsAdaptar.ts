import { createEntityAdapter } from "@reduxjs/toolkit";
import { Suggestion } from "@/entities/types";

export const suggestionsAdapter = createEntityAdapter<Suggestion>({
    selectId: (p) => p.text,
   
})