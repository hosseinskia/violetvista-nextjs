import React from "react";

export default function SettingsForm() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
      <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
        Account Settings
      </h2>
      <form className="space-y-4">
        <div>
          <label
            className="block text-gray-600 mb-1 text-sm sm:text-base"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            id="username"
            defaultValue="Admin"
          />
        </div>
        <div>
          <label
            className="block text-gray-600 mb-1 text-sm sm:text-base"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="email"
            id="email"
            defaultValue="admin@example.com"
          />
        </div>
        <div>
          <label
            className="block text-gray-600 mb-1 text-sm sm:text-base"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="password"
            id="password"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label
            className="block text-gray-600 mb-1 text-sm sm:text-base"
            htmlFor="theme"
          >
            Theme
          </label>
          <select
            id="theme"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-600 mb-1 text-sm sm:text-base"
            htmlFor="notifications"
          >
            Email Notifications
          </label>
          <select
            id="notifications"
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="all">All</option>
            <option value="important">Important Only</option>
            <option value="none">None</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition text-sm sm:text-base"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}