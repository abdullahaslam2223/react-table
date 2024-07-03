import React, { ChangeEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ShiftItem from "./ShiftItem";
import { ShiftItem as ShiftItemType } from "./types";
import { FiltersType } from "./types";
import DateFilter from "./DateFilter";
import Dropdown from "../Utils/Dropdown";
import { ToastContainer, toast } from "react-toastify";

const Shift: React.FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const [shifts, setShifts] = React.useState<ShiftItemType[] | undefined>(
    undefined
  );
  const [filteredShifts, setFilteredShifts] = React.useState<
    ShiftItemType[] | undefined
  >(undefined);
  const [locations, setLocations] = React.useState<Array<string> | undefined>(
    undefined
  );

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const rowsPerPage = 3;

  const totalPages = Math.ceil(shifts?.length / rowsPerPage);

  const handleClick = (page: number): void => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedData = shifts?.slice(startIndex, startIndex + rowsPerPage);

  const [filters, setFilters] = React.useState<FiltersType>({
    startDate: undefined,
    endDate: undefined,
    city: undefined,
    status: undefined,
    searchText: "",
  });

  const setShiftsData: Function = (
    shiftsData: ShiftItemType[]
  ): ShiftItemType[] => {
    const sortedShiftsData = [...shiftsData].sort((a, b) => b.id - a.id);
    return sortedShiftsData;
    // const dateObjectsShiftsData = sortedShiftsData.map(
    //   (shiftsData): ShiftItemType => ({
    //     ...shiftsData,
    //     date: new Date(shiftsData?.date),
    //   })
    // );
    // return dateObjectsShiftsData;
  };

  const fetchShiftsData = async (): Promise<void> => {
    fetch("http://localhost:3000/shifts")
      .then((response) => response.json())
      .then((shiftsData) => {
        const validatedShiftsData = setShiftsData(shiftsData);
        setShifts(validatedShiftsData);
        setFilteredShifts(validatedShiftsData);
        let location = validatedShiftsData?.map(
          (shift: ShiftItemType) => shift.location
        );
        location = [...new Set(location)];
        setLocations(location);
      })
      .catch((error) => {
        toast("Error in fetching the shifts data ", error);
      });
  };

  React.useEffect((): void => {
    fetchShiftsData();
  }, []);

  React.useEffect((): void => {
    let filteredRecords: ShiftItemType[] | undefined = undefined;
    if (
      (filters.startDate && filters.endDate) ||
      filters.city ||
      filters.status ||
      filters.searchText
    ) {
      if (filters.startDate && filters.endDate) {
        filteredRecords = shifts?.filter((shift: ShiftItemType) => {
          return (
            shift.date >= filters.startDate && shift.date <= filters.endDate
          );
        });
      }
      if (filters.city) {
        filteredRecords = filteredRecords ? filteredRecords : shifts;
        filteredRecords = filteredRecords?.filter((shift: ShiftItemType) => {
          return shift.location.toLowerCase() === filters.city;
        });
      }
      if (filters.status) {
        filteredRecords = filteredRecords ? filteredRecords : shifts;
        filteredRecords = filteredRecords?.filter((shift: ShiftItemType) => {
          return getStatusValue(shift.status) === filters.status?.toLowerCase();
        });
      }
      if (filters.searchText !== "") {
        filteredRecords = filteredRecords ? filteredRecords : shifts;
        filteredRecords = filteredRecords?.filter(
          (shift: ShiftItemType) =>
            shift.location
              .toLowerCase()
              .includes(filters.searchText.toLowerCase()) ||
            shift.staff
              .toLowerCase()
              .includes(filters.searchText.toLowerCase()) ||
            shift.title.toLowerCase().includes(filters.searchText.toLowerCase())
        );
      }
      setFilteredShifts(filteredRecords);
    }
  }, [filters]);

  const getStatusValue = (status: boolean): string => {
    return status === true ? "active" : "inactive";
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFilters({
      ...filters,
      status: e.target.value,
    });
  };

  const handleFreeTextSearchChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setFilters((prevFilters: FiltersType) => ({
      ...prevFilters,
      searchText: e.target.value,
    }));
  };

  const handleAddShiftClick = (): void => {
    navigate("/add-shift");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">Shifts Details</h1>
      <div>
        <input
          className="border border-2 border-green-500 w-full px-5 py-2 mb-3"
          type="text"
          value={filters.searchText}
          placeholder="Search"
          onChange={handleFreeTextSearchChange}
        />
      </div>
      <div className="mb-3 flex flex-col sm:flex-row">
        <div className="mb-2">
          <DateFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className="ml-2 mb-2">
          <Dropdown
            cities={locations}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className="ml-2 mb-2">
          <select
            name="status"
            id="status"
            value={
              filters.status === undefined ? "select-status" : filters.status
            }
            className="bg-gray-200 p-2"
            style={{ width: "280px" }}
            onChange={handleStatusChange}
          >
            <option value="select-status" disabled selected>
              Select Status
            </option>
            <option value="active">Active</option>
            <option value="inactive">InActive</option>
          </select>
        </div>
        <div className="ml-2 mb-2">
          <button
            onClick={handleAddShiftClick}
            className="border border-2 border-green-500 px-4 py-1 hover:text-white hover:bg-green-500 transition transition-1"
          >
            Add New Shift
          </button>
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-green-600">
              <tr>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Shift ID
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Title
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Date
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Start Time
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  End Time
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Location
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Staff
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Status
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedData?.map((shift) => (
                <ShiftItem key={shift.id} shift={shift} />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4 mb-2 mx-2">
            <button
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
            >
              Previous
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i + 1)}
                  className={`px-3 py-1 ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } rounded`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shift;
