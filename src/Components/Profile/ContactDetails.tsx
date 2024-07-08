import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactDetailsFormType } from "./types";
import Layout from "./Layout";
import Form from "../Utils/Form";

const ContactDetails: React.FC = (): JSX.Element => {
  const [fields, setFields] = React.useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDetailsFormType>();

  const onSubmit: SubmitHandler<ContactDetailsFormType> = (data) => {
    console.log(data);
  };

  const fetchData = async (): Promise<void> => {
    const response = await fetch("http://localhost:3000/contactDetails");
    const data = await response.json();
    setFields(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-200">
      <Layout
        children={
          <div className="h-screen">
            <Form fields={fields} />
          </div>
        }
      />
    </div>
  );
};

export default ContactDetails;
