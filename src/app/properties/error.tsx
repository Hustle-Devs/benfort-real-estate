"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Error loading properties:", error);
  }, [error]);

  return (
    <div className="py-20">
      <h2 className="mb-4 font-semibold text-xl">Something went wrong.</h2>
      <p className="mb-4">An error occurred while loading the properties.</p>
      <Button onClick={reset} className="btn">
        Try Again
      </Button>
    </div>
  );
};

export default Error;
