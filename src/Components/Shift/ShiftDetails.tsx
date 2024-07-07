import React from "react";
import Timeline from "../Utils/Timeline";
import { TimelineEvent } from "../Utils/types";
import { useParams } from "react-router-dom";
import { ShiftDetailsParams } from "./types";

const ShiftDetails: React.FC = (): JSX.Element => {
  const [events, setEvents] = React.useState<TimelineEvent[] | []>([]);
  const params: ShiftDetailsParams = useParams();
  const fetchEvents = async (): Promise<void> => {
    const id: string = params.id;
    const response = await fetch(`http://localhost:3000/events?shiftID=${id}`);
    const data: TimelineEvent[] | [] = await response.json();
    setEvents(data);
  };
  React.useEffect((): void => {
    fetchEvents();
  }, []);
  console.log(events);

  return (
    <div>
      <div className="w-1/2 bg-gray-200 py-5 mx-auto px-3">
        <h1 className="font-bold text-center text-2xl text-green-500">
          Shift Details
        </h1>
        {events.length !== 0 ? (
          <Timeline events={events} />
        ) : (
          <h1 className="font-bold text-bold text-center mt-5">No events found for this records</h1>
        )}
      </div>
    </div>
  );
};

export default ShiftDetails;
