"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.img
            src="/logo2.png"
            alt="Logo"
            height={200}
            width={240}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/Course"
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about-us"
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-[var(--theme-color)] text-white px-5 py-2 rounded-full hover:shadow-lg transition-all"
          >
            Join Now
          </Link>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Animated Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim background */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Drawer panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b">
                <img src="/logo2.png" alt="Logo" className="h-10" />
                <button onClick={toggleMenu}>
                  <X size={26} className="text-gray-700" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex flex-col gap-5 p-6 text-gray-800 text-lg font-medium">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="hover:text-[var(--theme-color)] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/Course"
                  onClick={toggleMenu}
                  className="hover:text-[var(--theme-color)] transition-colors"
                >
                  Courses
                </Link>
                <Link
                  href="/about-us"
                  onClick={toggleMenu}
                  className="hover:text-[var(--theme-color)] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact-us"
                  onClick={toggleMenu}
                  className="hover:text-[var(--theme-color)] transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="bg-[var(--theme-color)] text-white px-6 py-3 rounded-xl text-center hover:shadow-lg transition"
                >
                  Join Now
                </Link>
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Applute Academy
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
