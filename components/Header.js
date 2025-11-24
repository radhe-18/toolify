"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser(true);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300ms delay before hiding
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white">
          ToolifyAI
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:text-blue-400 text-gray-900 dark:text-white transition-colors duration-300">Home</Link>
          {user && (
            <>
              <Link href="/explore" className="hover:text-blue-400 text-gray-900 dark:text-white transition-colors duration-300">Explore Tools</Link>
              <Link href="/about" className="hover:text-blue-400 text-gray-900 dark:text-white transition-colors duration-300">About</Link>
              <Link href="/contact" className="hover:text-blue-400 text-gray-900 dark:text-white transition-colors duration-300">Contact</Link>
              <Link href="/terms" className="hover:text-blue-400 text-gray-900 dark:text-white transition-colors duration-300">Terms</Link>
            </>
          )}

          {!user ? (
            <Link href="/auth" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Login / Signup
            </Link>
          ) : (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center text-white text-sm font-bold">
                👤
              </button>
              <div className={`absolute right-0 mt-2 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-200 ${
                dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link
                  href="/profile"
                  className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium transition-colors duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 hover:bg-red-500/20 text-red-400 font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
