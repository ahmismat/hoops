"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/program", label: "Program" },
    { href: "/join", label: "Join Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="group">
            <span className="text-seated-small text-slate-900 dark:text-slate-100 font-light">
              H O O P S
            </span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="text-slate-900 dark:text-slate-100 hover:opacity-60 font-light text-sm uppercase tracking-[0.2em] transition-opacity duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <button
            className="md:hidden text-slate-900 dark:text-slate-100 uppercase tracking-[0.2em] text-sm font-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 'close' : 'menu'}
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
                    className="text-slate-900 dark:text-slate-100 hover:opacity-60 font-light text-lg uppercase tracking-[0.2em] transition-opacity duration-200"
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
