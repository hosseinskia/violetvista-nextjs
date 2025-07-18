import React from "react";
import Link from "next/link";

// Hero section with responsive typography and call-to-action buttons
const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 to-purple-200 pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-purple-700 mb-6 text-center drop-shadow-lg">
      Welcome to <span className="text-blue-500">VioletVista</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">
      The all-in-one solution to manage users, orders, and revenue with style.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Link
        href="/signup"
        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition text-sm sm:text-base"
      >
        Get Started
      </Link>
      <Link
        href="/login"
        className="bg-white border border-purple-500 text-purple-700 font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-purple-50 transition text-sm sm:text-base"
      >
        Login
      </Link>
    </div>
  </section>
);

export default HeroSection;