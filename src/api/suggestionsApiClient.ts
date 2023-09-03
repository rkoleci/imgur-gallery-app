//

import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";
import {  Suggestion } from "@/entities/types";
import { isNil } from "lodash";

export namespace SuggestionsApiClient {
  
  
    export interface SuggestionsRequest {
      q: string;
    }
    
    export interface SuggestionsResponse {
        data: Suggestion[]; 
    } 
    
    export const getSuggestions = async (data: SuggestionsRequest): Promise<APIResponse<SuggestionsResponse>>  => {
        let url = `https://restcountries.com/v3.1/all`
        const { q } = data

        if (!isNil(q)) {
          url += `?q=${q}/`
        } 
       
        const response = await tryFetch(url, {
          method: "GET", 
        })

        return parseAPIResponse(response);
    };
  
     
  }
