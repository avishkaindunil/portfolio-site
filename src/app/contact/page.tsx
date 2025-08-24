"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-12 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-gray-700 text-lg mb-4 text-center">
          I’m always open to discussing new projects, opportunities, or just saying hi!
        </p>
        <div className="text-center mt-6 space-y-2">
          <p className="text-gray-700 text-lg">
            Email: <a href="mailto:you@example.com" className="text-blue-600 hover:underline">you@example.com</a>
          </p>
          <p className="text-gray-700 text-lg">
            LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-blue-600 hover:underline">yourprofile</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
