import React from "react";

export default function TestimonialCard({ name, role, text, photo }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700">
      <p className="mb-4 italic text-gray-700 dark:text-gray-300">“{text}”</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
          {name.split(" ").map(n => n[0]).slice(0,2).join("")}
        </div>
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  );
}
