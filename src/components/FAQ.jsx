import  { useState } from "react";
import { faqs } from "../data/faqs";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Accordion key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 text-left flex justify-between items-center"
      >
        <span className="font-medium text-gray-900 dark:text-white">{q}</span>
        <span className="text-gray-500 dark:text-gray-300">{open ? "−" : "+"}</span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="px-4 overflow-hidden text-gray-600 dark:text-gray-300"
      >
        <div className="py-3">{a}</div>
      </motion.div>
    </div>
  );
}
