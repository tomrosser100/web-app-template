import React, { Suspense } from "react";
import ErrorPage from "./ErrorPage";
import { Await, defer, Link, Outlet } from "react-router-dom";

export default [
  {
    path: "/",
    element: (
      <div>
        Hello world, Root here<Link to="test">Link</Link>
        <Outlet />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "test",
        async lazy() {

          console.log("lazy start");

          const LazyPage = await import("./LazyPage");

          console.log("lazy finish");

          return {
            Component: LazyPage.default,
            loader: async function () {

              console.log("loader start");

              const slowDataPromise = new Promise((resolve) => {
                setTimeout(() => {
                  console.log("loader finish");
                  resolve({ message: `Hi I'm data` })
                }, 2000);
              });

              return defer({ slowData: slowDataPromise });
            },
          };
        },
      },
    ],
  },
];
