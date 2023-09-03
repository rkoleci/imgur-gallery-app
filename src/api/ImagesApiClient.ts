import {  FilterSort, FilterWindow } from "@/ui/filters/types";
import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";
import { Image } from "@/entities/types";
import { isEmpty, isNil } from "lodash";
import { API_BASE_URL, ClientID } from "@/constants";

export namespace ImagesApiClient {
  
  
    export interface ImagesRequest {
      page?: number;
      sort?: FilterSort;
      search?: string | null;
      window?: FilterWindow;
    }
    
    export interface ImagesResponse {
        data: Image[]; 
    } 

    export const getImages = async (data: ImagesRequest): Promise<APIResponse<ImagesResponse>>  => {
      const {  sort, page,   window, search } = data
      
      let url = `${API_BASE_URL}/gallery/`

        if (!isEmpty(search)) {
          url += `search/`
        } 

        if (!isNil(sort)) {
          url += `${sort}/`
        } 

        if (!isNil(window)) {
          url += `${window}/`
        }

        if (!isNil(page)) {
          url += `${page}?`
        } 

        if (!isEmpty(search)) {
          url += `q=${search}`
        } 

        const response = await tryFetch(url, {
          method: "GET",
          headers: {
            'Authorization': `Client-ID ${ClientID}`
          }
        })

        return parseAPIResponse(response);
    };
  
     
  }
