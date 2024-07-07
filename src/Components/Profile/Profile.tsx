import React from "react";
import ProfileCard from "./ProfileCard";
import { EmployeeType } from "./types";
import Layout from "./Layout";

const Profile: React.FC = (): JSX.Element => {
  const [employee, setEmployee] = React.useState<EmployeeType>({
    id: undefined,
    name: undefined,
    department: undefined,
    jobTitle: undefined,
    jobCategory: undefined,
  });

  const fetchEmployes = async (): Promise<void> => {
    fetch("http://localhost:3000/employeeDetails")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  };

  React.useEffect((): void => {
    fetchEmployes();
  }, []);

  return (
    <div className="bg-gray-200">
      <Layout children={<ProfileCard employee={employee} />} />
    </div>
  );
};

export default Profile;
