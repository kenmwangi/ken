"use client";
import React, { useEffect } from "react";
import Button from "./components/Button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()} label="Try again" small outline />
    </div>
  );
};

export default Error;
