import { APIResponse, parseAPIResponse, tryFetch } from "./utils";

export namespace ImagesApiClient {
  
    export interface ImagesRequest {
      page: number;
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
