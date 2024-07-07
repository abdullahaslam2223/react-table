import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { EmployeeProps } from "./types";

const ProfileCard: React.FC<EmployeeProps> = ({ employee }): JSX.Element => {
  return (
    <div className="h-screen">
      <div className="w-3/4 bg-white rounded-lg mx-auto pb-10 pt-5 relative shadow-md">
        <div className="absolute top-10 right-20 cursor-pointer">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="text-3xl text-gray-400"
          />
          <span className="block">Edit</span>
        </div>
        <img
          className="mx-auto rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"
          alt="Profile"
        />
        <div className="mb-5">
          <span className="block text-center">Employee Name</span>
          <h1 className="block text-center text-lg font-bold">
            {employee.name}
          </h1>
        </div>
        <div className="mb-5">
          <span className="block text-center">Department</span>
          <h1 className="block text-center text-lg font-bold">
            {employee.department}
          </h1>
        </div>
        <div className="flex justify-between w-2/5 mx-auto mt-10">
          <div>
            <span className="block">Job Title</span>
            <h1 className="block text-lg font-bold">{employee.jobTitle}</h1>
          </div>
          <div>
            <span className="block">Job Category</span>
            <h1 className="block text-lg font-bold">{employee.jobCategory}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
