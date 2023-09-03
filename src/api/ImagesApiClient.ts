import { FilterSection, FilterSort, FilterWindow } from "@/ui/filters/types";
import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";
import { Image } from "@/entities/types";
import { isNil } from "lodash";
import { API_BASE_URL, ClientID } from "@/constants";

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
    
    export const getImages = async (data: ImagesRequest): Promise<APIResponse<ImagesResponse>>  => {
        let url = `${API_BASE_URL}/gallery/`
        const { section, sort, page, showViral, window } = data
      
        if (!isNil(section)) {
          url += `${section}/`
        }

        if (!isNil(sort)) {
          url += `${sort}/`
        }

        if (!isNil(window)) {
          url += `window=${window}/`
        }
        
        if (!isNil(page)) {
          url += `page=${page}?`
        }

        if (!isNil(showViral)) {
          url += `showViral=${showViral}`
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
