import React from "react";
import { TimelineProps } from "./types";

const Timeline: React.FC<TimelineProps> = ({ events }): JSX.Element => {
  return (
    <div className="relative">
      <div className="absolute h-full border-l-2 border-green-500 left-8"></div>
      {events.map((event, index) => (
        <div key={index} className="mb-8 flex items-center">
          <div className="flex items-center justify-center w-16">
            <div
              className={`w-4 h-4 rounded-full ${
                event.status === "Completed"
                  ? "bg-green-500"
                  : event.status === "Assigned"
                  ? "bg-blue-500"
                  : "bg-gray-500"
              }`}
            ></div>
          </div>
          <div className="ml-4">
            <div className="text-sm text-gray-500">{event.time}</div>
            <div className="text-lg font-semibold">{event.title}</div>
            <div className="text-gray-700">
              {event.description}
              {event.status === "Assigned" && event.assignedName && (
                <span className="block mt-1">
                  Assigned to: {event.assignedName}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
