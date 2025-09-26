import React from "react";
import TestimonialCard from "./shared/TestimonialCard";
import { testimonials } from "../data/Testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-16 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Our Students Say</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Real outcomes — real stories.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
