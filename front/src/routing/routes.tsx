import React from "react";
import ErrorPage from "./ErrorPage";
import { Link, Outlet } from "react-router-dom";

export default [
  {
    path: "/",
    element: (
      <div>
        Hello world, Root here<Link to="lazy-test">Link</Link>
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lazy-test",
        async lazy() {
          const { Component, loader } = await import("./LazyPage");
          return {
            Component,
            loader,
          };
        },
      },
    ],
  },
];
