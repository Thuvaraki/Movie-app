"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later</h1>
      <button
        className="hover:text-amber-600 mt-10 dark:bg-gray-600 bg-amber-100 p-2"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

// In Next.js application, if there is a file named error.js or error.tsx at the root level of pages directory or inside an app directory, Next.js will treat this component as a custom error handling component.

// reset: A function to reset the error boundary, allowing the user to retry the operation that caused the error.
