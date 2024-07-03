export interface ShiftItem {
  id: number;
  title: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  location: string;
  staff: string;
  status: boolean;
}

export interface ShiftItemProps {
  shift: ShiftItem;
}

export interface FiltersType {
  startDate: Date | undefined;
  endDate: Date | undefined;
  city: string | undefined;
  status: string | undefined;
  searchText: string;
}

export interface DateFilterProps {
  filters: FiltersType;
  setFilters: Function;
}
