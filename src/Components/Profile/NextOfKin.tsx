import React from "react";
import Form from "../Utils/Form";
import Layout from "./Layout";

const NextOfKin: React.FC = (): JSX.Element => {
  const [fields, setFields] = React.useState([]);

  const fetchData = async (): Promise<void> => {
    fetch("http://localhost:3000/nextOfKinFields")
      .then((response) => response.json())
      .then((data) => setFields(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen bg-gray-200">
      <Layout children={<Form fields={fields} />} />
    </div>
  );
};

export default NextOfKin;
