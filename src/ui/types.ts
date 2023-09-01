export interface FilterState {
    sort: FilterSort,
    viral: boolean;
}


export enum FilterSort {
    ASC = 'ASC',
    DESC = 'DESC'
}
