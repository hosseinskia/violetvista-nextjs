import React from "react";
import Link from "next/link";

// Footer component with responsive layout and navigation links
const Footer = () => (
  <footer className="bg-white/80 backdrop-blur py-6 px-4 sm:px-6 lg:px-8 mt-12 shadow-inner">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-purple-700 font-semibold text-base sm:text-lg">
        &copy; {new Date().getFullYear()} VioletVista. All rights reserved.
      </span>
      <div className="flex gap-4 sm:gap-6 text-gray-600 text-sm">
        <Link href="/privacy" className="hover:text-purple-600 transition">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-purple-600 transition">
          Terms of Service
        </Link>
        <Link href="/contact" className="hover:text-purple-600 transition">
          Contact
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
