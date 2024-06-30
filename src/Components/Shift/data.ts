import { ShiftItem as ShiftItemType } from "./types";

export const shifts: ShiftItemType[] = [
  {
    id: 1,
    title: "Web Development",
    date: new Date("2024-06-30T10:00:00"),
    startTime: new Date("2024-06-30T10:00:00"),
    endTime: new Date("2024-06-30T21:00:00"),
    location: "Islamabad",
    staff: "Abdullah",
    status: true,
  },
  {
    id: 2,
    title: "Software Engineering",
    date: new Date("2024-05-30T10:00:00"),
    startTime: new Date("2024-05-30T10:00:00"),
    endTime: new Date("2024-05-30T21:00:00"),
    location: "Islamabad",
    staff: "Awais",
    status: true,
  },
  {
    id: 3,
    title: "App Development",
    date: new Date("2024-05-28T10:00:00"),
    startTime: new Date("2024-05-28T10:00:00"),
    endTime: new Date("2024-05-28T20:00:00"),
    location: "Sargodha",
    staff: "Ali",
    status: true,
  },
  {
    id: 4,
    title: "Business Development",
    date: new Date("2024-05-25T10:00:00"),
    startTime: new Date("2024-05-25T10:00:00"),
    endTime: new Date("2024-05-25T22:00:00"),
    location: "Sialkot/Remote",
    staff: "Umair",
    status: true,
  },
];
