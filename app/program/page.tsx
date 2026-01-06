"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCw, Calendar, Heart } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProgramPage() {
  const prefersReducedMotion = useReducedMotion()
  
  const animationVariants = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 px-4 bg-[#0f172a] text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div {...animationVariants} data-animate>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">The Program</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A structured, multi-sport approach designed to build character, community, and athletic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-8 items-start"
              data-animate
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#ff7200] rounded-full flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Equalizer" Rotation</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We rotate sports every 6 weeks: Basketball, Soccer, Flag Football, and Kickball.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Changing sports levels the playing field. A child who is a star in soccer might need help in
                  basketball. This teaches kids to ask for help and to lead with humility.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0.2 : 0.6, 
                delay: prefersReducedMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col md:flex-row gap-8 items-start"
              data-animate
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#ff7200] rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Two Sessions Per Week</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Session 1: The Training Lab</h3>
                    <p className="text-slate-600">
                      Fundamentals and conditioning focused on skill development and physical fitness.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Session 2: The Championship Series</h3>
                    <p className="text-slate-600">
                      Organized, officiated games ending with a community meal where everyone comes together.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0.2 : 0.6, 
                delay: prefersReducedMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col md:flex-row gap-8 items-start"
              data-animate
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#ff7200] rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Dignity & Support</h2>
                <p className="text-slate-700 leading-relaxed">
                  Every athlete receives a team jersey. We ensure every child has the proper footwear and equipment to
                  play safely and proudly. No child is left without what they need to participate fully.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to Join the Team?</h2>
          <Button asChild size="lg" className="bg-[#ff7200] hover:bg-[#e66600] text-white font-semibold transition-colors">
            <Link href="/join">Register Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
