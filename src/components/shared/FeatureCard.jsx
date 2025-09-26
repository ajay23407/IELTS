import React from "react";

export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 border rounded-2xl shadow hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}
