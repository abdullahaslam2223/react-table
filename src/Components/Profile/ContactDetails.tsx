import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactDetailsFormType } from "./types";
import Layout from "./Layout";

const ContactDetails: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDetailsFormType>();
  const onSubmit: SubmitHandler<ContactDetailsFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-200">
    <Layout
      children={
        <div className="h-screen pt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-3/4 mx-auto py-10 px-5 rounded-xl"
          >
            <div className="flex justify-between">
              <div className="pt-3">
                <label htmlFor="phone1">Phone Number 1</label>
                <input
                  type="text"
                  id="phone1"
                  placeholder="Phone Number 1"
                  className="block bg-gray-200 py-2 rounded px-3 w-72 mt-2"
                  {...register("phone1", { required: "Phone 1 is required" })}
                />
                {errors.phone1 && (
                  <span className="text-red-500 mb-3 text-xs italic">
                    {errors.phone1.message}
                  </span>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="phone2">Phone Number 2</label>
                <input
                  type="text"
                  id="phone2"
                  placeholder="Phone Number 2"
                  className="block bg-gray-200 py-2 rounded px-3 w-72 mt-2"
                  {...register("phone2", { required: "Phone 2 is required" })}
                />
                {errors.phone2 && (
                  <span className="text-red-500 mb-3 text-xs italic">
                    {errors.phone2.message}
                  </span>
                )}
              </div>
            </div>
            <div className="pt-3">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="eg: test@gmail.com"
                className="block bg-gray-200 w-full py-2 rounded px-3 mt-2"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 mb-3 text-xs italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <div className="pt-3">
                <label htmlFor="state">State of Residence</label>
                <input
                  type="text"
                  placeholder="State"
                  id="state"
                  className="block bg-gray-200 py-2 rounded px-3 w-72 mt-2"
                  {...register("state", { required: "State is required" })}
                />
                {errors.state && (
                  <span className="text-red-500 mb-3 text-xs italic">
                    {errors.state.message}
                  </span>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="block bg-gray-200 py-2 rounded px-3 w-72 mt-2"
                  {...register("city", { required: "city is required" })}
                />
                {errors.city && (
                  <span className="text-red-500 mb-3 text-xs italic">
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div>
            <div className="pt-3">
              <label htmlFor="address">Residential Address</label>
              <textarea
                rows={5}
                id="address"
                placeholder="Address"
                className="block bg-gray-200 w-full py-2 rounded px-3 mt-2"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="text-red-500 mb-3 text-xs italic">
                  {errors.address.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-20 py-2 rounded-md mt-4"
            >
              Update
            </button>
          </form>
        </div>
      }
    />
    </div>
  );
};

export default ContactDetails;
