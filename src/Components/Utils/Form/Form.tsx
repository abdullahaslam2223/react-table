import React from "react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import { FormProps } from "./types";

const Form = <T extends FieldValues>({ fields }: FormProps<T>): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const onSubmit: SubmitHandler<T> = (data): void => {
    console.log(data);
  };

  return (
    <React.Fragment>
      {fields && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-3/4 mx-auto py-10 px-5 rounded-xl"
        >
          {fields.map((field, index) => (
            <div key={index}>
              {field.multipleOnRow === true && field.childFields && (
                <div className="flex justify-between">
                  {field.childFields.map((childField, childIndex) => (
                    <React.Fragment key={childIndex}>
                      {childField.htmlField === "input" && (
                        <InputField
                          field={childField}
                          register={register}
                          errors={errors}
                          half={true}
                        />
                      )}
                      {childField.htmlField === "select" && (
                        <SelectField
                          field={childField}
                          register={register}
                          errors={errors}
                          half={true}
                        />
                      )}
                    </React.Fragment>
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
                <TextArea
                  field={field}
                  register={register}
                  errors={errors}
                  half={false}
                />
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
    </React.Fragment>
  );
};

export default Form;
