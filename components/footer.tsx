"use client"

import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { SkeletonImage } from "@/components/ui/skeleton"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Suspense fallback={<SkeletonImage className="h-12 w-32" />}>
                <Image 
                  src="/hoops-logo-3d.png" 
                  alt="HOOPS Logo" 
                  width={240} 
                  height={120} 
                  className="h-12 w-auto" 
                  loading="lazy"
                />
              </Suspense>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Building strength. Bridging worlds.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4 font-medium">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/program", label: "Program" },
                { href: "/join", label: "Join Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4 font-medium">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <p>
                <a href="tel:8326796815" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  832-679-6815
                </a>
              </p>
              <p>
                <a href="mailto:hoops.program@gmail.com" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  hoops.program@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">© 2025 HOOPS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
