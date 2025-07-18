"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Signup page with accessible form and responsive design
export default function RegisterPage() {
  const router = useRouter();

  // Handle form submission and redirect to dashboard
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-purple-700 mb-6">
          Create Account
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit} aria-labelledby="signup-form">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
              required
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition text-sm sm:text-base"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}