import React from "react";
import ShiftItem from "./ShiftItem";
import { shifts as shiftsData } from "./data";
import { ShiftItem as ShiftItemType } from "./types";
import { FiltersType } from "./types";
import DateFilter from "./DateFilter";

const Shift: React.FC = (): JSX.Element => {
  const [shifts, setShifts] = React.useState<ShiftItemType[] | undefined>(
    undefined
  );

  // const [locations, setLocations] = React.useState<Array<string> | undefined>(
  //   undefined
  // );

  const [filters, setFilters] = React.useState<FiltersType>({
    startDate: undefined,
    endDate: undefined,
    location: undefined,
  });

  React.useEffect((): void => {
    setShifts(shiftsData);
    // let loc = shiftsData?.map((shift: ShiftItemType) => shift.location);
    // loc = [...new Set(loc)];
    // console.log("27", loc);
    // setLocations(loc);
  }, []);

  React.useEffect((): void => {
    if (filters.startDate && filters.endDate) {
      const filteredShifts: ShiftItemType[] | undefined = shifts?.filter(
        (shift: ShiftItemType) => {
          return (
            shift.date >= filters.startDate && shift.date <= filters.endDate
          );
        }
      );
      setShifts(filteredShifts);
    }
  }, [filters]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shifts Details</h1>
      <div className="mb-3">
        <DateFilter filters={filters} setFilters={setFilters} />
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
              {shifts?.map((shift) => (
                <ShiftItem key={shift.id} shift={shift} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shift;
