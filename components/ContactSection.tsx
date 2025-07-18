import React from "react";

// Contact section with accessible form and responsive layout
const ContactSection = () => (
  <section id="contact" className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6">Contact Us</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-8">
        Have questions or need support? Reach out to our team!
      </p>
      <form className="flex flex-col gap-4 items-center" aria-labelledby="contact-section-form">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full max-w-md px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
          aria-required="true"
        />
        <textarea
          placeholder="Your Message"
          className="w-full max-w-md px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
          rows={4}
          required
          aria-required="true"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-2 rounded-lg shadow hover:scale-105 transition text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;