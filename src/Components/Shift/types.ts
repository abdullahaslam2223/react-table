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
