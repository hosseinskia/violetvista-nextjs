"use client";
import React, { useState } from "react";
import Link from "next/link";

// Navigation bar with a custom animated hamburger menu for mobile devices
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu visibility and hamburger animation
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-md py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand logo with consistent styling across devices */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold text-purple-700 tracking-tight hover:text-purple-900 transition"
          aria-label="VioletVista Home"
        >
          VioletVista
        </Link>

        {/* Hamburger button for mobile with custom transform animation */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`bg-purple-700 h-1 w-8 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "rotate-45 translate-y-2.5 scale-110"
                : "translate-y-[-4px]"
            }`}
          />
          <span
            className={`bg-purple-700 h-1 w-8 rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-purple-700 h-1 w-8 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "-rotate-45 -translate-y-2.5 scale-110"
                : "translate-y-[4px]"
            }`}
          />
        </button>

        {/* Desktop navigation */}
        <ul className="hidden sm:flex gap-8 text-lg font-medium">
          <li>
            <Link
              href="/#features"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop signup button */}
        <Link
          href="/signup"
          className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition text-base"
        >
          Sign Up
        </Link>

        {/* Mobile menu with slide-in animation */}
        <div
          className={`sm:hidden fixed top-16 left-0 w-full h-[calc(100dvh-4rem)] bg-white/95 backdrop-blur flex flex-col items-center justify-center gap-8 text-xl font-medium transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          }`}
          role="menu"
        >
          <Link
            href="/#features"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleMenu}
            role="menuitem"
          >
            Features
          </Link>
          <Link
            href="/#about"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleMenu}
            role="menuitem"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 hover:text-purple-600 transition"
            onClick={toggleMenu}
            role="menuitem"
          >
            Contact
          </Link>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg shadow hover:scale-105 transition"
            onClick={toggleMenu}
            role="menuitem"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;