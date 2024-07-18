import React from "react";
import ErrorPage from "./ErrorPage";

export default [
  {
    path: "/",
    element: <div>Hello world, Root here</div>,
    errorElement: <ErrorPage />,
  },
];
