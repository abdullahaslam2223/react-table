import React from "react";
import Layout from "./Layout";
import Form from "../Utils/Form/Form";
import { Field as FieldsType } from "../Utils/Form/types";

type ContactDetails = {
  address: string;
  city: string;
  email: string;
  phone1: string;
  phone2: string;
  state: string;
}

const ContactDetails: React.FC = (): JSX.Element => {
  const [fields, setFields] = React.useState<FieldsType<ContactDetails>[] | []>([]);

  const fetchData = async (): Promise<void> => {
    const response = await fetch("http://localhost:3000/contactDetails");
    const data = await response.json();
    setFields(data);
  };

  React.useEffect((): void => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-200">
      <Layout
        children={
          <div className="h-screen">
            <Form<ContactDetails> fields={fields} />
          </div>
        }
      />
    </div>
  );
};

export default ContactDetails;
