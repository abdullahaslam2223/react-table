import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterProps } from "./types";

const DateFilter: React.FC<DateFilterProps> = ({
  filters,
  setFilters,
}): JSX.Element => {
  const hanldeDateChange = (dates: [Date | null, Date | null]): void => {
    const [startDate, endDate] = dates;
    setFilters({ ...filters, startDate: startDate, endDate: endDate });
  };

  return (
    <div>
      <h1 className="bg-green-500 text-white rounded-lg shadow text-center">
        Select Dates
      </h1>
      <DatePicker
        selected={filters.startDate}
        startDate={filters.startDate}
        endDate={filters.endDate}
        selectsRange
        onChange={hanldeDateChange}
        placeholderText="Start Date"
      />
    </div>
  );
};

export default DateFilter;
