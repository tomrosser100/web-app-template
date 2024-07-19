import React from "react";
import ErrorPage from "./ErrorPage";
import { Link, Outlet } from "react-router-dom";
import Drafter from "../styling/Drafter";

export default [
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">Hello world</h1>
        <h3>Root here</h3>
        <Link to="lazy-test">Link</Link>
        <Outlet />
        <Drafter />
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
