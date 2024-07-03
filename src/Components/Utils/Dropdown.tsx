import React, { ChangeEvent, useState } from "react";
import { DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = ({
  cities,
  filters,
  setFilters,
}): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilters({
      ...filters,
      city: e.target.value,
    });
    setIsOpen(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleToggleDropdown = (): void => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  const filteredCities = cities?.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left">
      <div
        style={{ width: "280px" }}
        className="block w-full bg-gray-200 px-3 py-2 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer"
        onClick={handleToggleDropdown}
      >
        {filters.city ? filters.city : "Select City"}
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
          <div className="py-1">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search City..."
              className="block w-full pl-3 pr-10 bg-gray-100 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-2"
            />
            <select
              name="city"
              id="city"
              className="block w-full bg-gray-100 px-3 py-2 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={handleChange}
              value={filters.city}
              size={filteredCities?.length + 1}
            >
              <option disabled value="select-city">
                Select City
              </option>
              {filteredCities?.map((city, index) => (
                <option
                  className="mt-2 p-2"
                  key={index}
                  value={city.toLowerCase()}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
