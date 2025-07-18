import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Terms and conditions page with responsive content and accessibility
export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-100 to-purple-200">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-2xl w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4">Terms & Conditions</h1>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Please read these terms and conditions carefully before using our website.
          </p>
          <ul className="list-disk pl-5 space-y-2 text-gray-700 text-sm sm:text-base" role="list">
            <li>
              <strong>Acceptance of Terms:</strong> By accessing or using our site, you agree to be bound by these terms.
            </li>
            <li>
              <strong>Use of Content:</strong> All content is for informational purposes only and may not be copied or distributed without permission.
            </li>
            <li>
              <strong>Privacy:</strong> We respect your privacy. Please review our Privacy Policy for more details.
            </li>
            <li>
              <strong>Changes:</strong> We reserve the right to update these terms at any time without prior notice.
            </li>
            <li>
              <strong>Contact:</strong> If you have any questions about these terms, please contact us.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}