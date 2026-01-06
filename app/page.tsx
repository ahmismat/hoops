"use client"

import { useState, Suspense } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SkeletonImage } from "@/components/ui/skeleton"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  const sports = [
    { emoji: "🏀", label: "Basketball", radius: 180, duration: prefersReducedMotion ? 12 : 8, startAngle: 0 },
    { emoji: "⚽", label: "Soccer", radius: 180, duration: prefersReducedMotion ? 12 : 8, startAngle: 90 },
    { emoji: "🏈", label: "Football", radius: 180, duration: prefersReducedMotion ? 12 : 8, startAngle: 180 },
    { emoji: "⚾", label: "Baseball", radius: 180, duration: prefersReducedMotion ? 12 : 8, startAngle: 270 },
  ]

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: prefersReducedMotion ? 0.2 : 0.6 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          >
            {/* Background line animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900 dark:text-slate-100"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <motion.div 
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-[400px] h-[400px] flex items-center justify-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="z-10"
                >
                  <Suspense fallback={<SkeletonImage className="w-64 h-64" />}>
                    <Image
                      src="/hoops-logo-3d.png"
                      alt="HOOPS Logo"
                      width={400}
                      height={200}
                      className="w-64 h-auto"
                      priority
                    />
                  </Suspense>
                </motion.div>

                {sports.map((sport, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      animation: `orbit ${sport.duration}s linear infinite`,
                      animationDelay: `${-sport.duration * (sport.startAngle / 360)}s`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span
                      className="text-4xl absolute select-none"
                      style={{
                        transform: `translateY(-${sport.radius}px)`,
                      }}
                    >
                      {sport.emoji}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button
                  onClick={() => setShowIntro(false)}
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors duration-200"
                >
                  Enter
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative">
        {/* Background line animations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]">
            <defs>
              <pattern id="grid-home" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900 dark:text-slate-100"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-home)" />
          </svg>
        </div>

        <Navbar />

        {/* Hero Section - Palmer Style */}
        <section className="pt-0 pb-24 px-6 bg-white dark:bg-slate-950 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-8">
                © HOOPS Program
              </div>

              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Building Strength.
                <br />
                Bridging Worlds.
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                At HOOPS, we believe that talent is universal but opportunity is not. Our mission is to provide orphan, 
                refugee, and local youth with a safe and high quality athletic environment where they can grow as athletes and as people.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link
                  href="/join"
                  className="inline-block bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium px-8 py-4 transition-colors duration-200"
                >
                  Join the Team
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Palmer Style */}
        <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                © Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Services
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { 
                  number: "01",
                  title: "Sports Programs", 
                  desc: "Structured multi-sport programs that build character, teamwork, and discipline through basketball, soccer, and more."
                },
                { 
                  number: "02",
                  title: "Community Building", 
                  desc: "Building bridges between communities through shared experiences and meaningful connections."
                },
                { 
                  number: "03",
                  title: "Personal Development", 
                  desc: "Programs that develop leadership, confidence, and life skills for lasting impact."
                },
                { 
                  number: "04",
                  title: "Mentorship", 
                  desc: "Guided mentorship programs connecting youth with positive role models and opportunities."
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:opacity-70 transition-opacity">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section - Palmer Style */}
        <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                © Programs
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Programs
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
                Every program is designed to blend sports and development, shaping bold ideas into 
                <strong> meaningful experiences</strong> — built with intent, care, and visual clarity.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { href: "/about", title: "About Us", desc: "Learn about our mission and values" },
                { href: "/program", title: "Our Program", desc: "Discover how HOOPS works" },
                { href: "/join", title: "Join Us", desc: "Register for the program today" },
              ].map((card, index) => (
                <motion.div
                  key={card.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    href={card.href}
                    className="block p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-all group bg-white dark:bg-slate-950 h-full"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:opacity-70 transition-opacity">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx global>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        [style*="animation: orbit"] {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </>
  )
}
