import React from "react";

const SelectField: React.FC = ({ field, register, errors, half }): JSX.Element => {
  return (
    <div className="mt-3">
      <label htmlFor={field.fieldId}>{field.label}</label>
      <select
        id={field.fieldId}
        className={`block bg-gray-200 py-2 rounded px-3 mt-2 ${half ? "w-72" : "w-full"}`}
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
  );
};

export default SelectField;
