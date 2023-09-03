import {  FilterSort, FilterWindow } from "@/ui/filters/types";
import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";
import { Image } from "@/entities/types";
import { isNil } from "lodash";
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
    // https://api.imgur.com/3/gallery/search/top/year/1?q=cats
    export const getImages = async (data: ImagesRequest): Promise<APIResponse<ImagesResponse>>  => {
        let url = `${API_BASE_URL}/gallery/search/`
        console.log(111, 'getImagesAPi', data)
        const {  sort, page,   window, search } = data

        if (!isNil(sort)) {
          url += `${sort}/`
        } 

        if (!isNil(window)) {
          url += `${window}/`
        }

        if (!isNil(page)) {
          url += `${page}?`
        } 

        if (!isNil(search)) {
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
