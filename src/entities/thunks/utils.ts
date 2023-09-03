
export interface APIError {
    errorCode?: string;
    message: string;
    propertyName?: string;
  }
  
  export interface ThunkErrorResponse {
    errors?: APIError[];
  }
  
  export const processThunkResults = <T>(thunkApi: any, data: T, errors: APIError[] | undefined): T => {
  
    if (errors && errors?.length > 0) {
        const rejectedValue: ThunkErrorResponse = {
            errors
        }
        return thunkApi.rejectedValue(rejectedValue);
    }
  
    return data;
  }