import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Animate the entire page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <Features />
          <Courses />
          <Testimonials />
          <FAQ />
          <ContactForm />
          <FloatingCTA />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}
