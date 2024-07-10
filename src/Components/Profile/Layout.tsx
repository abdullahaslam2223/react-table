import React from "react";
import { LayoutProps } from "./types";
import { NavLink } from "react-router-dom";

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="flex p-10">
      <nav className="w-1/3 bg-white pt-5">
        <ul className="space-y-2 p-4 rounded shadow-md">
          <li>
            <NavLink
              to="/profile/details"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-yellow-400" : "bg-gray-200"
                } p-2 rounded hover:bg-yellow-400 text-center cursor-pointer block`
              }
            >
              Personal Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-yellow-400" : "bg-gray-200"
                } p-2 rounded hover:bg-yellow-400 text-center cursor-pointer block`
              }
            >
              Contact Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/next-of-kin"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-yellow-400" : "bg-gray-200"
                } p-2 rounded hover:bg-yellow-400 text-center cursor-pointer block`
              }
            >
              Next of Kin Details
            </NavLink>
          </li>
          <li className="bg-gray-200 p-2 rounded hover:bg-yellow-400 text-center cursor-pointer">
            <a href="#">Education Qualifications</a>
          </li>
          <li className="bg-gray-200 p-2 rounded hover:bg-yellow-400 text-center cursor-pointer">
            <a href="#">Guarantor Details</a>
          </li>
          <li className="bg-gray-200 p-2 rounded hover:bg-yellow-400 text-center cursor-pointer">
            <a href="#">Family Details</a>
          </li>
          <li>
            <NavLink
              to="/profile/job-details"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-yellow-400" : "bg-gray-200"
                } p-2 rounded hover:bg-yellow-400 text-center cursor-pointer block`
              }
            >
              Job Details
            </NavLink>
          </li>
          <li className="bg-gray-200 p-2 rounded hover:bg-yellow-400 text-center cursor-pointer">
            <a href="#">Financial Details</a>
          </li>
        </ul>
      </nav>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
