export interface FilterState {
    sort: FilterSort,
    showViral: boolean;
    search: string | null;
    window?: FilterWindow;
    section: FilterSection;
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

export enum FilterSection {
    Hot = 'hot',
    Top = 'Top',
    User = 'User'
}

export enum FilterTypes {
    Sort= 'sort',
    Viral= 'viral',
    Search= 'search',
    Window= 'window',
    Section= 'section',
}