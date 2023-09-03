
import { isEmpty, isNil, isObject, isString } from 'lodash'
import { APIError } from '../entities/thunks/utils';

function isAbortError(error: any): error is DOMException {
    if (error && error.name === "AbortError") {
        return true;
    }
    return false;
}

export function notifyError(error: string | {}) {
  let errorMessage: string = "GENERIC_ERROR";
  if (!isNil(error) && isString(error) && !isEmpty(error))
    errorMessage = error;
  if (isObject(error)) {
    if (error instanceof TypeError)
      errorMessage = error.message;
    else
      errorMessage = JSON.stringify(error)
  }
  console.log("error", errorMessage);
}


  export const tryFetch = (requestInfo: RequestInfo, requestInit?: RequestInit): Promise<Response | null> => {
    return fetch(requestInfo, requestInit)
        .then((response) => {
            return response;
        })
        .catch(error => {
            if (!isAbortError(error)) {  
                console.error(error, requestInfo, requestInit);
                notifyError(error);
            }
            return new Promise(null as any);
        })
  }

 
export async function parseAPIResponse<T> (response: Response | null): Promise<any> {
  const apiResponse: APIResponse<T> = { data: undefined, errors: undefined };

  if (isNil(response)) { 
    apiResponse.errors = [{
      message: "Failed to get data!"
  }];
  return apiResponse;
  }

  return {
    data: await response.json(),
    error: []
  }
}

export interface APIResponse<T> {
  data?: T;
  errors?: APIError[];
}

