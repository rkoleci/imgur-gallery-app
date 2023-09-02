import { FilterSection, FilterSort, FilterWindow } from "@/ui/filters/types";
import { APIResponse, parseAPIResponse, tryFetch } from "@/api/utils";

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
        data: any; 
        time: string;
    } 
  
    export const getImages = async (data: ImagesRequest): Promise<APIResponse<ImagesResponse>>  => { // ApiResponse
        const url = `https://jsonplaceholder.typicode.com/todos/1`

        const response = await tryFetch(url, {
          method: "GET",
        })

        return parseAPIResponse(response);
    };
  
     
  }
