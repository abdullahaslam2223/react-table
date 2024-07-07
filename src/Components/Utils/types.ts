import React from "react";
import { FiltersType } from "../Shift/types";

export interface ModalProps {
  modalClose: () => void;
  children: React.ReactNode;
}

export interface DropdownProps {
  cities: String[] | undefined;
  filters: FiltersType;
  setFilters: Function;
}

export interface TimelineEvent {
  shiftID: number;
  time: string;
  title: string;
  description: string;
  status: "Booked" | "Assigned" | "Completed" | "";
  assignedName?: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
}
