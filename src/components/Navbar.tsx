"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 200; // offset for navbar height
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(sec);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 inset-x-0 z-50 mx-auto w-[70%] 
            nav-glass shadow-glass px-10 py-6 flex justify-between items-center transition-all duration-300
            ${scrolled ? "nav-scrolled scale-105" : ""}`}
    >

      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide hover:scale-105 hover:text-blue-600 transition-transform duration-300">
        Avishka Indunil
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8">
        {links.map((item) => (
          <li key={item.name} className="relative">
            <Link
              href={item.href}
              className={`px-2 py-1 text-gray-900 font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 no-underline`}
            >
              {item.name}
              {/* Active dot indicator */}
              {active.toLowerCase() === item.name.toLowerCase() && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-blue-600"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex flex-col items-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-6 flex flex-col justify-between items-center"
        >
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-0 w-48 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass p-4 flex flex-col space-y-4"
          >
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-900 font-medium hover:text-blue-600 transition-all duration-300 no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}
