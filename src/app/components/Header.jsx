"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img height={200} width={240} src="./logo2.png" alt="" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
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
            className="bg-[var(--theme-color)] text-white px-5 py-2 rounded-full hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-7 h-7 text-gray-700" />
          ) : (
            <Menu className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-inner overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[var(--theme-color)] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--theme-color)] text-white px-5 py-2 rounded-full w-fit hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all"
          >
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
