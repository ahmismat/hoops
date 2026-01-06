"use client"

import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { SkeletonImage } from "@/components/ui/skeleton"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <p className="text-seated-small text-slate-900 dark:text-slate-100 mb-4">
              H O O P S
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-light">
              Building strength. Bridging worlds.
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/program", label: "Program" },
              { href: "/join", label: "Join Us" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-seated-small text-slate-600 dark:text-slate-400 hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-slate-600 dark:text-slate-400 font-light">
            <p>
              <a href="tel:8326796815" className="hover:opacity-60 transition-opacity">
                832-679-6815
              </a>
            </p>
            <p>
              <a href="mailto:hoops.program@gmail.com" className="hover:opacity-60 transition-opacity">
                hoops.program@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] font-light">© 2025 HOOPS</p>
        </div>
      </div>
    </footer>
  )
}
