import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Error from "./components/Error";
import PrivateInfo from "./components/forms/PrivateInfo";
import Education from "./components/forms/Education";
import Experience from "./components/forms/Experience";
import Home from "./components/Home";
import "./styles/index.scss";
import Form from "./components/Form";
import Resume from "./components/Resume";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    path: "/form",
    errorElement: <Error />,
    element: <Form />,
    children: [
      {
        path: "info",
        element: <PrivateInfo />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  { path: "/resume", errorElement: <Error />, element: <Resume /> },
  { path: "*", element: <Navigate to="/" /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
