export const statusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type StatusFilter = (typeof statusFilters)[keyof typeof statusFilters]; // 'all' | 'active' | 'completed'

export interface FiltersState {
  status: StatusFilter;
  colors: string[];
}

const initialState: FiltersState = {
  status: statusFilters.All,
  colors: [],
};

interface ColorFilter {
  color: string;
  changeType: 'added' | 'removed';
}
