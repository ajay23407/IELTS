import React from "react";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section id="courses" className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Courses & Programs</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Choose a plan that fits your timeline and goals.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map(c => (
            <div key={c.id} className="p-6 rounded-xl border shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{c.title}</h3>
              <ul className="mb-4 text-gray-600 dark:text-gray-300 list-disc list-inside">
                {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700 dark:text-gray-300">{c.duration}</div>
                <div className="font-semibold text-blue-600 dark:text-blue-400">{c.fee}</div>
              </div>
              <a href="#contact" className="mt-4 inline-block w-full text-center rounded-md bg-blue-600 text-white py-2 hover:bg-blue-700">Enroll</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
