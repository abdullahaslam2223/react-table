import React, { ChangeEvent, useState } from "react";
import { DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = ({
  cities,
  filters,
  setFilters,
}): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilters({
      ...filters,
      city: e.target.value,
    });
  };

  return (
    <div className="relative inline-block text-left bg-gray-200">
      <input
        type="text"
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setSearchTerm(e.target.value)
        }
        placeholder="Search City..."
        className="block w-full pl-3 pr-10 bg-gray-200 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-2"
      />
      <select
        name="city"
        id="city"
        className="block w-full bg-gray-200 px-3 py-2 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={handleChange}
        value={filters.city}
      >
        <option disabled value={"select-city"} selected>
          Select City
        </option>
        {cities?.map((city, index) => (
          <option key={index} value={city.toLowerCase()}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
