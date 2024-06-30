import React, { MouseEventHandler } from "react";
import { ShiftItem as ShiftItemType } from "./types";
import { ShiftItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ShiftItem: React.FC<ShiftItemProps> = (props): JSX.Element => {
  const shift: ShiftItemType = props.shift;
  const [isDropDownOpen, setIsDropDownOpen] = React.useState<boolean>(false);

  const toggleDropDown: MouseEventHandler<HTMLButtonElement> = (): void => {
    setIsDropDownOpen((prevState): boolean => !prevState);
  };

  return (
    <>
      <tr className="bg-white odd:bg-gray-50 hover:bg-gray-100 transition duration-300 rounded-lg">
        <td className="border px-4 py-3">{shift.id}</td>
        <td className="border px-4 py-3">{shift.title}</td>
        <td className="border px-4 py-3">
          {moment(shift.date).format("MM/DD/yyyy")}
        </td>
        <td className="border px-4 py-3">
          {moment(shift.startTime).format("hh:mm A")}
        </td>
        <td className="border px-4 py-3">
          {moment(shift.endTime).format("hh:mm A")}
        </td>
        <td className="border px-4 py-3">{shift.location}</td>
        <td className="border px-4 py-3">{shift.staff}</td>
        <td className="border px-4 py-3">
          {shift.status === true ? "Active" : "InActive"}
        </td>
        <td className="border px-4 py-3 text-center">
          <button
            onClick={toggleDropDown}
            className="border border-green-500 text-green-500 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </td>
      </tr>
      {isDropDownOpen && (
        <div className="absolute right-12 top-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => alert("View clicked")}
            >
              View
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => alert("Edit clicked")}
            >
              Edit
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => alert("Delete clicked")}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShiftItem;
