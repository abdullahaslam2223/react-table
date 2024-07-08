import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AgencyTable from "./Components/Agency/AgencyTable.tsx";
import Shift from "./Components/Shift/Shift.tsx";
import "react-toastify/dist/ReactToastify.css";
import ShiftDetails from "./Components/Shift/ShiftDetails.tsx";
import Profile from "./Components/Profile/Profile.tsx";
import ContactDetails from "./Components/Profile/ContactDetails.tsx";
import NextOfKin from "./Components/Profile/NextOfKin.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/agency" element={<AgencyTable />} />
      <Route path="/shift" element={<Shift />} />
      <Route path="/shift/:id" element={<ShiftDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/contact" element={<ContactDetails />} />
      <Route path="/profile/next-of-kin" element={<NextOfKin />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
