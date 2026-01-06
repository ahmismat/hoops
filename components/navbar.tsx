"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, Suspense, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { SkeletonImage } from "@/components/ui/skeleton"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/program", label: "Program" },
    { href: "/join", label: "Join" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
        {/* Centered Logo with Dropdown */}
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="group flex items-center focus:outline-none"
            aria-label="Navigation menu"
          >
            <Suspense fallback={<SkeletonImage className="h-40 w-80" />}>
              <Image
                src="/hoops-logo-3d.png"
                alt="HOOPS Logo"
                width={800}
                height={320}
                className="h-32 md:h-48 lg:h-56 w-auto drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
                priority
                quality={100}
                unoptimized={false}
              />
            </Suspense>
            <ChevronDown 
              className={`ml-3 h-7 w-7 md:h-10 md:w-10 text-slate-700 dark:text-slate-300 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-56 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg rounded-lg overflow-hidden z-50"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <nav className="flex flex-col py-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-6 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100 font-bold text-base transition-colors duration-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right side - Theme Toggle and Mobile Menu */}
        <div className="absolute right-4 flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden text-slate-700 dark:text-slate-300 text-sm font-bold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-bold text-lg transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
