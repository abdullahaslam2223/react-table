import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const fields = [
  {
    id: 1,
    label: "Next of Kin Name",
    fieldId: "kin-name",
    htmlField: "input",
    options: undefined,
    rows: undefined,
    type: "text",
    placeholder: "eg: Ali",
    errors: {
      required: "Next of Kin Name Field is required",
    },
    width: "half",
  },
  {
    id: 2,
    label: "Job/Occupation",
    fieldId: "job",
    htmlField: "input",
    options: undefined,
    rows: undefined,
    type: "text",
    placeholder: "eg: IT Manager",
    errors: {
      required: "Job Field is required",
    },
    width: "half",
  },
  {
    id: 3,
    label: "Phone Number",
    fieldId: "phone",
    htmlField: "input",
    options: undefined,
    rows: undefined,
    type: "text",
    placeholder: "eg: +923000000000",
    errors: {
      required: "Phone Number is required",
    },
    width: "full",
  },
  {
    id: 4,
    label: "Relationship",
    fieldId: "relationship",
    htmlField: "select",
    options: [
      {
        text: "Relative",
        value: "relative",
      },
      {
        text: "Friend",
        value: "friend",
      },
      {
        text: "Unknown",
        value: "unknown",
      },
    ],
    rows: undefined,
    type: undefined,
    placeholder: "Select Relationship",
    errors: {
      required: "Selecting relationship is required",
    },
    width: "full",
  },
  {
    id: 5,
    label: "Residential Address",
    fieldId: "address",
    htmlField: "textarea",
    options: undefined,
    rows: 5,
    type: undefined,
    placeholder: "Address",
    errors: {
      required: "Residential Address is required",
    },
    width: "full",
  },
];

const Form: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white w-3/4 mx-auto py-10 px-5 rounded-xl"
    >
      {fields.map((field) => (
        <div>
          {field.htmlField === "input" && (
            <div>
              <label htmlFor={field.fieldId}>{field.label}</label>
              <input
                type={field.type}
                id={field.fieldId}
                placeholder={field.placeholder}
                className={`block bg-gray-200 py-2 rounded px-3 mt-2 ${
                  field.width === "full" ? "w-full" : ""
                }`}
                {...register(field.fieldId, field.errors)}
              />
              {errors[field.fieldId] && (
                <span className="text-red-500 mb-3 text-xs italic">
                  {errors[field.fieldId].message}
                </span>
              )}
            </div>
          )}
          {field.htmlField === "textarea" && (
            <div>
              <label htmlFor={field.fieldId}>{field.label}</label>
              <textarea
                rows={field.rows}
                id={field.fieldId}
                placeholder={field.placeholder}
                className={`block bg-gray-200 py-2 rounded px-3 mt-2 ${
                  field.width === "full" ? "w-full" : ""
                }`}
                {...register(field.fieldId, field.errors)}
              />
              {errors[field.fieldId] && (
                <span className="text-red-500 mb-3 text-xs italic">
                  {errors[field.fieldId].message}
                </span>
              )}
            </div>
          )}
          {field.htmlField === "select" && (
            <div>
              <label htmlFor={field.fieldId}>{field.label}</label>
              <select
                id={field.fieldId}
                className={`block bg-gray-200 py-2 rounded px-3 mt-2 ${
                  field.width === "full" ? "w-full" : ""
                }`}
                {...register(field.fieldId, field.errors)}
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((option) => (
                  <option value={option.value}>{option.text}</option>
                ))}
              </select>

              {errors[field.fieldId] && (
                <span className="text-red-500 mb-3 text-xs italic">
                  {errors[field.fieldId].message}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-700 text-white px-20 py-2 rounded-md mt-4"
      >
        Update
      </button>
    </form>
  );
};

export default Form;
