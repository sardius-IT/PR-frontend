"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%]
      bg-gradient-to-b from-[#1a1a1a]/90 to-[#0b0b0b]/80
      backdrop-blur-xl border border-white/10
      rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      px-6 flex items-center justify-between"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center select-none">
        <Image
          src="/pr.png"
          alt="PR Consultants Logo"
          width={90}
          height={90}
          className="object-contain -mr-1"
        />
        <span className="text-[1.45rem] font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 bg-clip-text text-transparent leading-none">
          Consultants
        </span>
        <span className="text-blue-400">✨</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-gray-300 text-sm font-medium">
        
        <Link href="/student-visa" className="hover:text-white transition">
          Student Visa
        </Link>

        <Link href="/work-visa" className="hover:text-white transition">
          Work Visa
        </Link>

        <Link href="/tourist-visa" className="hover:text-white transition">
          Tourist Visa
        </Link>

        <Link href="/about" className="hover:text-white transition">
          About Us
        </Link>

        {/* ⭐ Courses Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setCourseOpen(true)}
          onMouseLeave={() => setCourseOpen(false)}
        >
          <button className="hover:text-white transition">
            Courses ▼
          </button>

          {/* Dropdown Box */}
          {courseOpen && (
            <div className="absolute top-6 left-0 bg-black/90 border border-white/10 backdrop-blur-xl rounded-xl p-3 w-40 space-y-2 shadow-lg z-50">
              <Link
                href="/Ielts"
                className="block text-gray-300 hover:text-white"
              >
                IELTS
              </Link>
              <Link
                href="/germany"
                className="block text-gray-300 hover:text-white"
              >
                Germany
              </Link>
                <Link
                href="/fullstack-java"
                className="block text-gray-300 hover:text-white"
              >
                Full stack-java
              </Link>
            </div>
          )}
        </div>

      </div>

      {/* Desktop Button */}
      <div className="hidden md:flex items-center">
        <Link
          href="/contact"
          className="bg-white text-black text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-200 transition"
        >
          Free Consultation
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 border-t border-white/10 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-start p-4 space-y-3 text-gray-300">

            <Link href="/student-visa" onClick={() => setMenuOpen(false)}>
              Student Visa
            </Link>

            <Link href="/work-visa" onClick={() => setMenuOpen(false)}>
              Work Visa
            </Link>

            <Link href="/tourist-visa" onClick={() => setMenuOpen(false)}>
              Tourist Visa
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            {/* ⭐ Courses in Mobile */}
            <div className="w-full">
              <p className="text-white font-semibold">Courses</p>
              <div className="ml-3 mt-2 space-y-2">
                <Link href="/Ielts" onClick={() => setMenuOpen(false)}>
                  IELTS
                </Link>
                <Link href="/germany" onClick={() => setMenuOpen(false)}>
                  Germany
                </Link>
              </div>
            </div>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
