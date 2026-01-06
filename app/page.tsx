"use client"

import { useState, Suspense } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Skeleton, SkeletonImage, SkeletonText } from "@/components/ui/skeleton"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const balls = [
    { emoji: "🏀", radius: 140, duration: prefersReducedMotion ? 12 : 8, startAngle: 0 },
    { emoji: "⚽", radius: 140, duration: prefersReducedMotion ? 12 : 8, startAngle: 90 },
    { emoji: "🏈", radius: 140, duration: prefersReducedMotion ? 12 : 8, startAngle: 180 },
    { emoji: "⚾", radius: 140, duration: prefersReducedMotion ? 12 : 8, startAngle: 270 },
  ]
  
  const animationVariants = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1] }
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: prefersReducedMotion ? 0.2 : 0.6 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          >
            <motion.div 
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-[320px] h-[320px] flex items-center justify-center">
                <Suspense fallback={<SkeletonImage className="w-48 h-48" />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Image
                      src="/hoops-logo-3d.png"
                      alt="HOOPS Logo"
                      width={400}
                      height={200}
                      className="w-48 h-auto z-10"
                      priority
                      onLoad={() => setImagesLoaded(true)}
                    />
                  </motion.div>
                </Suspense>

                {balls.map((ball, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      animation: `orbit ${ball.duration}s linear infinite`,
                      animationDelay: `${-ball.duration * (ball.startAngle / 360)}s`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span
                      className="text-4xl absolute select-none"
                      style={{
                        transform: `translateY(-${ball.radius}px)`,
                      }}
                    >
                      {ball.emoji}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  onClick={() => setShowIntro(false)}
                  size="lg"
                  className="mt-12 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium text-sm uppercase tracking-wider px-8 py-4 transition-colors duration-200"
                >
                  Enter Site
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navbar />

        <section className="py-32 px-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="section-number mb-8">(WDX® — 01)</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-12"
              >
                <Suspense fallback={<SkeletonImage className="h-32 w-64 mx-auto mb-8" />}>
                  <Image
                    src="/hoops-logo-3d.png"
                    alt="HOOPS Logo"
                    width={500}
                    height={250}
                    className="h-32 w-auto mx-auto"
                    loading="eager"
                    priority
                  />
                </Suspense>
              </motion.div>
              <motion.h1 
                className="text-display mb-8 text-slate-900 dark:text-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Building Strength.
                <br />
                Bridging Worlds.
              </motion.h1>
              <motion.p 
                className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                A multi-sport brotherhood where every child finds their team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium text-sm uppercase tracking-wider px-8 py-4 transition-colors duration-200"
                >
                  <Link href="/join">Join the Team</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="section-number mb-4">(WDX® — 02)</div>
              <h2 className="text-heading text-slate-900 dark:text-slate-100 mb-4">
                Explore HOOPS
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Discover our programs, learn about our mission, and join our community
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { href: "/about", title: "About Us", desc: "Learn about our mission and values", number: "01" },
                { href: "/program", title: "Our Program", desc: "Discover how HOOPS works", number: "02" },
                { href: "/join", title: "Join Us", desc: "Register for the program today", number: "03" },
              ].map((card, index) => (
                <motion.div
                  key={card.href}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: prefersReducedMotion ? 0.2 : 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    href={card.href}
                    className="block p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-all group bg-white dark:bg-slate-950 h-full"
                  >
                    <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                      {card.number}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:opacity-70 transition-opacity">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
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
        
        /* Optimize orbit animation for GPU */
        [style*="animation: orbit"] {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </>
  )
}
