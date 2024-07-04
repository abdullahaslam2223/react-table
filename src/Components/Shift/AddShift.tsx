import React from "react";
import { ShiftFormType } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AvailableShiftType } from "./types";
import { AddShiftProps } from "./types";

const AddShift: React.FC<AddShiftProps> = ({ closeModal }): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const [availableShifts, setAvailableShifts] = React.useState<
    AvailableShiftType[]
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShiftFormType>();

  const onSubmit: SubmitHandler<ShiftFormType> = (data) => {
    fetch("http://localhost:3000/shifts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Shift Added Successfully!", {
          onClose: () => closeModal(),
          autoClose: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast("Error in adding shift!");
      });
  };

  const fetchAvailableShifts = async (): Promise<void> => {
    fetch("http://localhost:3000/availableShifts")
      .then((response) => response.json())
      .then((data) => setAvailableShifts(data));
  };

  React.useEffect((): void => {
    fetchAvailableShifts();
  }, []);

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-200 pt-3 pb-5 px-5 flex flex-col"
      >
        <h1 className="text-green-500 text-center text-2xl font-bold my-2">
          Add New Shift
        </h1>
        <div className="w-full mb-3">
          <select
            id="title"
            className="py-2 px-2 w-full cursor-pointer"
            {...register("title", {
              required: "Selecting title is required",
            })}
          >
            <option value="">Select Title</option>
            {availableShifts.map((shift) => (
              <option value={shift.title} key={shift.id}>
                {shift.title}
              </option>
            ))}
          </select>
          {errors.title && (
            <span className="text-red-500 text-xs italic mb-3">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            id="date"
            type="datetime-local"
            className="py-2 px-2 w-full"
            placeholder="Shift Date..."
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <span className="text-red-500 mb-3 text-xs italic">
              {errors.date.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            id="location"
            type="text"
            className="py-2 px-2 w-full"
            placeholder="Add Location..."
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <span className="text-red-500 mb-3 text-xs italic">
              {errors.location.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            id="staff"
            type="text"
            className="py-2 px-2 w-full"
            placeholder="Add Staff..."
            {...register("staff", { required: "Staff is required" })}
          />
          {errors.staff && (
            <span className="text-red-500 mb-3 text-xs italic">
              {errors.staff.message}
            </span>
          )}
        </div>
        <div className="w-full mb-3">
          <select
            id="status"
            className="py-2 px-2 w-full cursor-pointer"
            {...register("status", {
              required: "Selecting status is required",
            })}
          >
            <option value="true">Active</option>
            <option value="false">inActive</option>
          </select>
          {errors.title && (
            <span className="text-red-500 text-xs italic mb-3">
              {errors.title.message}
            </span>
          )}
        </div>
        <button className="border border-2 border-green-500 bg-white py-2 text-green-500 hover:bg-green-500 hover:text-white transition transition-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddShift;
