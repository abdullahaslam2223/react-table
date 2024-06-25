import React from "react";
import { agencies } from "./data";
import AgencyRow from "./AgencyRow";

const AgencyTable: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Agencies</h1>
      <div className="w-full max-w-5xl">
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-green-600">
              <tr>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Agency ID
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Name
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Contact
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Staff Available
                </th>
                <th className="w-1/5 px-4 py-3 text-left font-semibold text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {agencies.map((agency) => (
                <AgencyRow key={agency.id} agency={agency} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgencyTable;
