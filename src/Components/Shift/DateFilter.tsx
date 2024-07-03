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
      <DatePicker
        className="bg-gray-200 ml-2 py-2 px-2"
        selected={filters.startDate}
        startDate={filters.startDate}
        endDate={filters.endDate}
        selectsRange
        onChange={hanldeDateChange}
        placeholderText="Select Date"
      />
    </div>
  );
};

export default DateFilter;
