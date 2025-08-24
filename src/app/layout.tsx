"use client"; // ✅ Required for Framer Motion

import { motion } from "framer-motion";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <motion.main
          className="flex-grow pt-36"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.main>
        <Footer />
      </body>
    </html>
  );
}
