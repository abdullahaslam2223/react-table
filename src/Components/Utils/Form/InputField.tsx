import React from "react";
import { FormFieldProps } from "./types";
import { FieldError } from "react-hook-form";

const InputField: React.FC<FormFieldProps<any>> = ({
  field,
  register,
  errors,
  half,
}): JSX.Element => {
  const isFieldError = (error: any): error is FieldError => {
    return error && typeof error.message === "string";
  };

  return (
    <div className="mt-3">
      <label htmlFor={field.fieldId}>{field.label}</label>
      <input
        type={field.type}
        id={field.fieldId}
        placeholder={field.placeholder}
        className={`block bg-gray-200 py-2 rounded px-3 mt-2 ${
          half ? "w-72" : "w-full"
        }`}
        {...register(field.fieldId, field.errors)}
      />
      {errors[field.fieldId] && isFieldError(errors[field.fieldId]) && (
        <span className="text-red-500 mb-3 text-xs italic">
          {errors[field.fieldId].message}
        </span>
      )}
    </div>
  );
};

export default InputField;
