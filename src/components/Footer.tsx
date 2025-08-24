"use client";

export default function Footer() {
  return (
    <footer className="mt-auto w-full py-8 px-6 text-center backdrop-blur-xl bg-white/30 border-t border-white/10 shadow-inner rounded-t-3xl">
      <p className="text-gray-800">
        &copy; {new Date().getFullYear()} Avishka Indunil. All rights reserved.
      </p>
    </footer>
  );
}
