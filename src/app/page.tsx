"use client";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Apple-style gradient and glass card */}
      <motion.section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-hero-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Optional frosted glass card */}
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl px-8 py-12 shadow-glass max-w-3xl">
          <Hero />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-32 px-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <About />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-32 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-32 px-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Contact />
      </motion.section>
    </>
  );
}
