import { FilterSection, FilterSort, FilterWindow } from "@/ui/filters/types";
import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";
import { Image } from "@/entities/types";
import { isNil } from "lodash";

export namespace ImagesApiClient {
  
    export interface ImagesRequest {
      page?: number;
      sort?: FilterSort;
      showViral?: boolean;
      search?: string | null;
      window?: FilterWindow;
      section?: FilterSection;
    }
    
    export interface ImagesResponse {
        data: Image[]; 
    } 
  
    export const getImages = async (data: ImagesRequest): Promise<APIResponse<ImagesResponse>>  => { // ApiResponse
        let url = `https://api.imgur.com/3/gallery/`
        const { section, page } = data

        if (!isNil(section)) {
          url += `${section}/`
        }
        
        url += `0.json?`

        if (!isNil(page)) {
          url += `page=${page}`
        }

        console.log(data)

        const response = await tryFetch(url, {
          method: "GET",
          headers: {
            'Authorization': 'Client-ID 431354245bb4b8a'
          }
        })
        console.log(response)
        return parseAPIResponse(response);
    };
  
     
  }
