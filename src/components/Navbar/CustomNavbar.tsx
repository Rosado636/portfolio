"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // social icons

// Define the navigation items
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function CustomNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  return (
    <nav className="w-full bg-black/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      {/* Top bar layout */}
      <div className="w-full px-6 py-3 flex justify-between items-center text-white">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-blue-500">
          <img
          src="/images/logo/logo.png"
          alt="Logo"
          className="h-20 w-auto object-contain rounded-lg border border-white/30 bg-white/10 p-1 shadow-md"
          />
        </Link>

        {/* Desktop menu: nav links + icons */}
        <div className="hidden sm:flex items-center gap-6 text-sm sm:text-base">
          {/* Nav links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-blue-400 transition ${
                pathname === item.href ? "text-blue-500 font-semibold" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Social icons always visible on desktop */}
          <div className="flex gap-4 text-xl pl-4 border-l border-zinc-700 ml-4">
            <a
              href="https://github.com/Rosado636"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-rosadocoll-9192b9242/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile hamburger menu button */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-zinc-900 text-white">
          {/* Mobile links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 px-2 rounded hover:bg-zinc-700 transition ${
                pathname === item.href ? "text-blue-500 font-semibold" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Divider */}
          <hr className="border-zinc-700 my-4" />

          {/* Social icons shown on mobile menu as well */}
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/Rosado636"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-rosadocoll-9192b9242/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
