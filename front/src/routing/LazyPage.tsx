import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export default function LazyPage() {
  const data = useLoaderData() as { slowData: { message: string } };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data.slowData}>
        {(slowData) => (
          <div>
            <p>{slowData.message}</p>
          </div>
        )}
      </Await>
    </Suspense>
  );
}
