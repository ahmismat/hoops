"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Target, Mountain, Sparkles, Trophy } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MangaBackground } from "@/components/manga-background"

export default function AboutPage() {
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
              © About HOOPS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              At HOOPS, we believe that talent is universal but opportunity is not. Our mission is to provide orphan, refugee, and local youth with a safe and high quality athletic environment where they can grow as athletes and as people. We use the power of sports to break down barriers. On our field, it does not matter where you came from, what language you speak, or what you have been through. All that matters is your effort, your respect for your teammates, and your willingness to grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
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
              © Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Philosophy: H.O.O.P.S.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Five core values that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { 
                icon: Award, 
                title: "Honor", 
                desc: "Respect yourself, your teammates, and your opponents.",
                number: "01"
              },
              {
                icon: Target,
                title: "Opportunity",
                desc: "Create a level playing field where everyone gets a shot.",
                number: "02"
              },
              { 
                icon: Mountain, 
                title: "Overcome", 
                desc: "Learn that failure is just a step toward success.",
                number: "03"
              },
              { 
                icon: Sparkles, 
                title: "Play", 
                desc: "Find joy and freedom in movement.",
                number: "04"
              },
              { 
                icon: Trophy, 
                title: "Strength", 
                desc: "Build resilience in the body and the mind.",
                number: "05"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0.2 : 0.6, 
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                <div className="p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-all bg-white dark:bg-slate-950 h-full">
                  <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {item.number}
                  </div>
                  <item.icon className="w-8 h-8 text-slate-900 dark:text-slate-100 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Ready to Learn More?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium transition-colors"
            >
              <Link href="/program">View Our Program</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 font-medium transition-colors"
            >
              <Link href="/join">Join the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
