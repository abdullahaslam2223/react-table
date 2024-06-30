import React from "react";
import ShiftItem from "./ShiftItem";
import { ShiftItem as ShiftItemType } from "./types";

const Shift: React.FC = (): JSX.Element => {
  const shifts: ShiftItemType[] = [
    {
      id: 1,
      title: "Title",
      date: new Date("30-06-2024"),
      startTime: new Date("2023-06-30T10:00:00"),
      endTime: new Date("2023-06-30T10:00:00"),
      location: "Islamabad",
      staff: "Abdullah",
      status: true,
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shifts</h1>
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
              {shifts.map((shift) => (
                <ShiftItem shift={shift} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shift;
