"use client"

import { useState, Suspense } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: prefersReducedMotion ? 0.2 : 0.8 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950"
          >
            <motion.div 
              className="relative flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                className="text-seated-large text-slate-900 dark:text-slate-100 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                H O O P S
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button
                  onClick={() => setShowIntro(false)}
                  className="text-seated-small text-slate-900 dark:text-slate-100 hover:opacity-60 transition-opacity duration-200 font-light"
                >
                  enter
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navbar />

        {/* Hero Section - Seated.nyc Style */}
        <section className="pt-32 pb-24 px-8 bg-white dark:bg-slate-950">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-24"
            >
              <motion.h1 
                className="text-seated-large text-slate-900 dark:text-slate-100 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                H O O P S
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                HOOPS is a multi-sport brotherhood that builds strength and bridges worlds. 
                We transform values and philosophy into meaningful experiences, cultivating deeper 
                connections through sports, community, and shared purpose.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24"
            >
              {[
                { number: "50+", label: "communities served" },
                { number: "12+", label: "years of impact" },
                { number: "100+", label: "successful programs" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-4xl md:text-5xl font-light text-slate-900 dark:text-slate-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-seated-small text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-8 bg-white dark:bg-slate-950">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-seated text-slate-900 dark:text-slate-100 mb-24 text-center"
            >
              Services
            </motion.h2>
            
            <div className="space-y-32">
              {[
                { 
                  title: "Programs", 
                  desc: "Structured sports programs that build character, teamwork, and discipline through basketball, soccer, and more.",
                  items: ["Multi-sport training", "Skill development", "Team building", "Character education"]
                },
                { 
                  title: "Community", 
                  desc: "Building bridges between communities through shared experiences and meaningful connections.",
                  items: ["Community events", "Family engagement", "Cultural exchange", "Social impact"]
                },
                { 
                  title: "Development", 
                  desc: "Personal growth programs that develop leadership, confidence, and life skills.",
                  items: ["Leadership training", "Mentorship programs", "Life skills workshops", "Career guidance"]
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="max-w-4xl mx-auto"
                >
                  <h3 className="text-seated-medium text-slate-900 dark:text-slate-100 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-seated-small text-slate-600 dark:text-slate-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-32 px-8 bg-white dark:bg-slate-950">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-seated text-slate-900 dark:text-slate-100 mb-24 text-center"
            >
              Programs
            </motion.h2>
            
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
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={card.href}
                    className="block group"
                  >
                    <h3 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-slate-100 mb-4 group-hover:opacity-60 transition-opacity">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
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

    </>
  )
}
