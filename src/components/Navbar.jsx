import React, { useState } from "react";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 bg-white dark:bg-gray-900 shadow z-50">
      <nav className="flex justify-between items-center px-6 md:px-16 py-4">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          IELTSPro
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
          {["home", "courses", "features", "testimonials", "faq", "contact"].map(
            (item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            )
          )}
         
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-blue-600 text-white px-3 py-1 rounded"
        >
          Menu
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 shadow">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            {["home", "courses", "features", "testimonials", "faq", "contact"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
