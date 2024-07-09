import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({ fields }): JSX.Element => {
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
                        <InputField
                          field={field}
                          register={register}
                          errors={errors}
                          half={true}
                        />
                      )}

                      {field.htmlField === "select" && (
                        <SelectField
                          field={field}
                          register={register}
                          errors={errors}
                          half={true}
                        />
                      )}
                    </>
                  ))}
                </div>
              )}

              {field.htmlField === "input" && (
                <InputField
                  field={field}
                  register={register}
                  errors={errors}
                  half={false}
                />
              )}
              {field.htmlField === "textarea" && (
                <TextArea field={field} register={register} errors={errors} />
              )}
              {field.htmlField === "select" && (
                <SelectField
                  field={field}
                  register={register}
                  errors={errors}
                  half={false}
                />
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
