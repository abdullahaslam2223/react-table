import React from "react";
import { Agency as AgencyType } from "./types";

interface AgencyProps {
  agency: AgencyType;
}

const AgencyRow: React.FC<AgencyProps> = ({ agency }) => {
  return (
    <tr className="bg-white odd:bg-gray-50 hover:bg-gray-100 transition duration-300 rounded-lg">
      <td className="border px-4 py-3">{agency.id}</td>
      <td className="border px-4 py-3">{agency.name}</td>
      <td className="border px-4 py-3">{agency.contact}</td>
      <td className="border px-4 py-3">{agency.staffAvailable}</td>
      <td className="border px-4 py-3 text-center">
        <button className="border border-green-500 text-green-500 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300">
          View Details
        </button>
      </td>
    </tr>
  );
};
export default AgencyRow;
