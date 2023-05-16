import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description:
    "Oops, the requested page cannot be found. Refresh or go back to home",
};

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="lg:text-2xl text-lg">
          {" "}
          <strong>404</strong> &nbsp; - &nbsp; Not Found
        </h2>
        <p className="text-slate-600">Could not find requested resource</p>
      </div>
    </div>
  );
};

export default NotFound;
