"use client";
import React, { useState, useEffect } from "react";
import SettingsForm from "@/components/dashboard/SettingsForm";
import Spinner from "@/components/dashboard/Spinner";

export default function Settings() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-8">
        Settings
      </h1>
      <SettingsForm />
    </div>
  );
}
