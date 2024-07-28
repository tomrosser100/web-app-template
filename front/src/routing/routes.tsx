import React from "react";
import ErrorPage from "./ErrorPage";
import Main from "../fit-to-screen-app/Main";

export default [
  {
    path: "/",
    element: (
      <div>
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lazy-test",
        async lazy() {
          const { Component, loader } = await import("./Test");
          return {
            Component,
            loader,
          };
        },
      },
    ],
  },
];
