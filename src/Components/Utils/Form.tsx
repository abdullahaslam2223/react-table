import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Form: React.FC = ({ fields }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      {fields && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-3/4 mx-auto py-10 px-5 rounded-xl"
        >
          {fields.map((field) => (
            <div>
              {field.multipleOnRow === true && (
                <div className="flex justify-between">
                  {field.childFields?.map((field) => (
                    <>
                      {field.htmlField === "input" && (
                        <div>
                          <label htmlFor={field.fieldId}>{field.label}</label>
                          <input
                            type={field.type}
                            id={field.fieldId}
                            placeholder={field.placeholder}
                            className={`block bg-gray-200 py-2 rounded px-3 mt-2 w-72`}
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
                            className={`block bg-gray-200 py-2 rounded px-3 mt-2 w-72`}
                            {...register(field.fieldId, field.errors)}
                          >
                            <option value="">{field.placeholder}</option>
                            {field.options?.map((option) => (
                              <option value={option.value}>
                                {option.text}
                              </option>
                            ))}
                          </select>

                          {errors[field.fieldId] && (
                            <span className="text-red-500 mb-3 text-xs italic">
                              {errors[field.fieldId].message}
                            </span>
                          )}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}

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
      )}
    </>
  );
};

export default Form;
