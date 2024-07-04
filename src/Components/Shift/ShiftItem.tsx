import React from "react";
import { ShiftItem as ShiftItemType } from "./types";
import { ShiftItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Modal from "../Utils/Modal";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

const ShiftItem: React.FC<ShiftItemProps> = (props): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const shift: ShiftItemType = props.shift;
  const [isDropDownOpen, setIsDropDownOpen] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const toggleDropDown = (): void => {
    setIsDropDownOpen((prevState): boolean => !prevState);
  };
  const toggleModal = (): void => {
    setShowModal((prevState): boolean => !prevState);
  };
  const modalClose = (): void => {
    setShowModal(false);
  };
  const viewDetails = (): void => {
    navigate(`/shift/${shift.id}`);
  };

  return (
    <>
      <tr
        onClick={viewDetails}
        className="bg-white odd:bg-gray-50 hover:bg-gray-100 transition duration-300 rounded-lg cursor-pointer"
      >
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
              onClick={toggleModal}
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
      {showModal && (
        <Modal modalClose={modalClose}>
          <h1 className="text-2xl font-bold">Shift Details</h1>
          This is {shift.staff}'s shift of {shift.title} on{" "}
          <span className="font-bold">{shift.date.toLocaleDateString()}</span>
        </Modal>
      )}
    </>
  );
};

export default ShiftItem;
