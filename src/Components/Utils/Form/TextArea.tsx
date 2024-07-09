import React from "react";
import { FormFieldProps } from "./types";

const TextArea: React.FC<FormFieldProps<any>> = ({
  field,
  register,
  errors,
}): JSX.Element => {
  return (
    <div className="mt-3">
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
  );
};

export default TextArea;
