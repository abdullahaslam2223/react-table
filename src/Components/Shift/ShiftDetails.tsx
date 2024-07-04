import React from "react";
import Timeline from "../Utils/Timeline";
import { TimelineEvent } from "../Utils/types";

const events: TimelineEvent[] = [
  {
    time: "11:59 am",
    title: "Event 1",
    description:
      "Shift booked",
    status: "Booked",
  },
  {
    time: "12:00 pm",
    title: "Event 2",
    description:
      "Asssiging the shift",
    status: "Assigned",
    assignedName: "John Doe",
  },
  {
    time: "12:01 pm",
    title: "Event 3",
    description:
      "Completed here",
    status: "Completed",
  },
];

const ShiftDetails: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="w-3/4 bg-gray-200 py-5 mx-auto px-3">
        <h1 className="font-bold text-center text-2xl text-green-500">
          Shift Details
        </h1>
        <Timeline events={events} />
      </div>
    </div>
  );
};

export default ShiftDetails;
