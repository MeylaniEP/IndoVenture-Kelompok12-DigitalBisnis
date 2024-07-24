import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailsTrip from "./component/DetailsTrip";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} path="/" />
      <Route element={<DetailsTrip />} path="/detail-trip/:id" />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
