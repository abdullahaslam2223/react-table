import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="bg-white p-3 rounded-lg shadow-md mb-4">
      <ol className="list-reset flex text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link
              to={item.path}
              className="bg-gray-200 hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md shadow-sm"
            >
              {item.name}
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
