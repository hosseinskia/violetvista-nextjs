import React from "react";

// Feature data for reusable card rendering
const features = [
  {
    title: "Easy User Management",
    desc: "Effortlessly add, edit, and organize users with intuitive controls.",
    icon: "👤",
  },
  {
    title: "Track Orders Efficiently",
    desc: "Monitor and manage orders in real-time with powerful analytics.",
    icon: "📦",
  },
  {
    title: "Monitor Your Revenue",
    desc: "Stay updated on your earnings with clear, actionable insights.",
    icon: "💰",
  },
];

// Features section with responsive grid and interactive cards
const FeaturesSection = () => (
  <section id="features" className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-12 text-center">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl p-6 sm:p-8 shadow-lg flex flex-col items-center hover:scale-105 transition"
          >
            <span className="text-4xl sm:text-5xl mb-4">{f.icon}</span>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-700">
              {f.title}
            </h3>
            <p className="text-gray-700 text-center text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;