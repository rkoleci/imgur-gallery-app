export interface FilterState {
    sort: FilterSort,
    search: string | null;
    window?: FilterWindow;
}

export type FilterStateKey =  keyof FilterState

export enum FilterSort {
    Viral = 'viral',
    Top = 'top',
    Time = 'time'
}

export enum FilterWindow {
    Day = 'day',
    Week = 'week',
    Month = 'month',
    Year = 'year',
    All = 'all',
}

export type FilterWindowKey = keyof FilterWindow 

export enum FilterTypes {
    Sort= 'sort',
    Search= 'search',
    Window= 'window',
}