import { FilterSection, FilterSort, FilterWindow } from "@/ui/filters/types";
import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";
import { Image } from "@/entities/types";

export namespace ImagesApiClient {
  
    export interface ImagesRequest {
      page?: number;
      sort?: FilterSort;
      viral?: boolean;
      search?: string | null;
      window?: FilterWindow;
      section?: FilterSection;
    }
    
    export interface ImagesResponse {
        data: Image[]; 
    } 
  
    export const getImages = async (data: ImagesRequest): Promise<APIResponse<ImagesResponse>>  => { // ApiResponse
        const url = `https://jsonplaceholder.typicode.com/todos/1`

        console.log(data)

        const response = await tryFetch(url, {
          method: "GET",
        })

        return parseAPIResponse(response);
    };
  
     
  }
