
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
            if (!isAbortError(error)) { //do not notify an abortion error
                console.error(error, requestInfo, requestInit);
                notifyError(error);
            }
            return new Promise(null);
        })
  }

 
export async function parseAPIResponse<T> (response: Response | null): Promise<any> {
  let apiResponse: APIResponse<T> = { data: undefined, errors: null };

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

