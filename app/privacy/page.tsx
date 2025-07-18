import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Privacy policy page with responsive content and accessibility
export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-100 to-purple-200">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-2xl w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            website.
          </p>
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            We may collect information such as your name, email address, and
            usage data when you interact with our site.
          </p>
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">
            How We Use Information
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            The information we collect is used to improve our services, respond
            to inquiries, and communicate updates.
          </p>
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">
            Data Protection
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            We implement security measures to protect your data from
            unauthorized access.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}