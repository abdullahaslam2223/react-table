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

export interface ShiftFormType {
  title: string;
  location: string;
  staff: string;
  status: boolean;
  date: string;
}

export interface AvailableShiftType {
  id: number;
  title: string;
}

export interface AddShiftProps {
  closeModal: () => void;
}

export interface ShiftDetailsParams {
  id: string
}