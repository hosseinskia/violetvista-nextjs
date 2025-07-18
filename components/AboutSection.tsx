import React from "react";

// About section with responsive layout and centered content
const AboutSection = () => (
  <section
    id="about"
    className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6">
        About VioletVista
      </h2>
      <p className="text-base sm:text-lg text-gray-700 mb-4">
        VioletVista is designed for modern businesses that want to streamline
        their workflow and get actionable insights fast.
      </p>
      <p className="text-base sm:text-lg text-gray-700">
        Our mission is to empower you with beautiful, intuitive tools that make
        management effortless and enjoyable.
      </p>
    </div>
  </section>
);

export default AboutSection;