import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Contact page with accessible form and responsive layout
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-100 to-purple-200">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-2xl w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            We&apos;d love to hear from you! Please fill out the form below or reach us at{" "}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@example.com
            </a>.
          </p>
          <form className="space-y-4" aria-labelledby="contact-form">
            <div>
              <label className="block text-gray-600 mb-1 text-sm sm:text-base" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 text-sm sm:text-base" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 text-sm sm:text-base" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
                id="message"
                name="message"
                rows={4}
                required
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition text-sm sm:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}