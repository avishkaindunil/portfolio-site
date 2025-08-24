"use client"; // ← Required for motion

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-12 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hi, I’m Avishka Indunil, a passionate frontend developer...
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          I love clean code, smooth animations, and beautiful UI/UX design...
        </p>
      </motion.div>
    </section>
  );
}
