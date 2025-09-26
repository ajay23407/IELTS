import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    // UI-only: you can integrate EmailJS / Firebase / server later.
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get in touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Ask for a free demo, course info, or any questions.</p>

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Your name"
            className="p-3 rounded-md border focus:outline-none focus:ring dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="Email address"
            type="email"
            className="p-3 rounded-md border focus:outline-none focus:ring dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            required
            placeholder="Message"
            className="p-3 rounded-md border focus:outline-none focus:ring dark:bg-gray-800 dark:border-gray-700 md:col-span-2"
            rows="6"
          />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <div className="text-green-600">Message sent! We’ll contact you soon.</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
