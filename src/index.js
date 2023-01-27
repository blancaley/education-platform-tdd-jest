import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages";
import { Store } from "./components/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Course } from "./pages/course/course";
import { Courses } from "./pages/course";
import { Professor } from "./pages/professor/professor";
import { Professors } from "./pages/professor";
import { Layout } from "./components/layout";
import "./styles/globals.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:coursePath",
        element: <Course />,
      },
      {
        path: "/professors",
        element: <Professors />,
      },
      {
        path: "/professors/:professorPath",
        element: <Professor />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Store>
      <RouterProvider router={router} />
    </Store>
  </React.StrictMode>
);
