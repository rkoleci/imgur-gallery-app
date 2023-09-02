export interface FilterState {
    sort: FilterSort,
    viral: boolean;
    search: string | null;
    window?: FilterWindow;
    section?: FilterSection;
}

export type FilterStateKey =  keyof FilterState

export enum FilterSort {
    ASC = 'ASC',
    DESC = 'DESC'
}

export enum FilterWindow {
    Day = 'day',
    Week = 'week',
    Month = 'month',
    Year = 'year',
    All = 'all',
}

export type FilterWindowKey = keyof FilterWindow

export enum FilterSection {
    Hot = 'hot',
    Top = 'Top',
    User = 'User'
}