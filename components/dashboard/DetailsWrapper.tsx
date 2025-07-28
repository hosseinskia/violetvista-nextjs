"use client";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/dashboard/Spinner";

interface DetailsWrapperProps {
  children: React.ReactNode;
}

const DetailsWrapper: React.FC<DetailsWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
};

export default DetailsWrapper;
