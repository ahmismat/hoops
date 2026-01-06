"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCw, Calendar, Heart } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MangaBackground } from "@/components/manga-background"

export default function ProgramPage() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Manga-style animated background */}
      <MangaBackground />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-white dark:bg-slate-950 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              © The Program
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight">
              The Program
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              A structured, multi-sport approach designed to build character, community, and athletic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {/* Section 1: Equalizer Rotation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-white dark:text-slate-900" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  01
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  The Equalizer Rotation
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  We rotate sports every 6 weeks to cover Basketball, Soccer, Flag Football, and Baseball. We also offer optional workshops for other sports such as Wrestling. Changing sports levels the playing field. A child who is a star in soccer might need help in baseball. This teaches kids to ask for help and to lead with humility. It ensures no single group dominates and everyone learns to adapt.
                </p>
              </div>
            </motion.div>

            {/* Section 2: Two Sessions Per Week */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0.2 : 0.8, 
                delay: prefersReducedMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white dark:text-slate-900" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  02
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Two Sessions Per Week
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  We meet twice a week to build consistency. Session 1 is The Training Lab. This focuses on fundamentals, conditioning, and teamwork drills where we partner diverse kids together. Session 2 is The Championship Series. This consists of organized and officiated games that end with a community meal where we build brotherhood off the court.
                </p>
              </div>
            </motion.div>

            {/* Section 3: Dignity & Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0.2 : 0.8, 
                delay: prefersReducedMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white dark:text-slate-900" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  03
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Dignity & Support
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every athlete receives a team jersey. We ensure every child has the proper footwear and equipment to play safely and proudly. We provide transportation for those who need it and mentorship from coaches who care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Ready to Join the Team?
          </h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium transition-colors"
          >
            <Link href="/join">Register Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
