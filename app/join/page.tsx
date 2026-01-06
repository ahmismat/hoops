"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MangaBackground } from "@/components/manga-background"

export default function JoinPage() {
  const prefersReducedMotion = useReducedMotion()
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfgexpmJQzekNaIEoVSgfC54aP0-uEubnb_Z34ZrlNowAsQyw/viewform"
  
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
              © Join the Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight">
              Join the Team
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Take the first step toward becoming part of the HOOPS family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 md:p-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center"
          >
            <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              01
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Register Now
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Fill out our registration form to sign up for the HOOPS program. We welcome all youth regardless of
              background or experience level.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium text-lg px-10 py-6 transition-colors"
            >
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                Open Registration Form
                <ExternalLink className="ml-2 h-5 w-5 inline" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              02
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              What Happens Next?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              "Complete the registration form",
              "Our team will review your application",
              "You'll receive a welcome email with program details",
              "Attend your first session and meet your team",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0.2 : 0.4, 
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-center gap-4 p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-slate-700 dark:text-slate-300 flex-1">{step}</p>
                <CheckCircle className="h-5 w-5 text-slate-400 dark:text-slate-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Have Questions?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Reach out to us anytime. We're here to help you get started.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 font-medium transition-colors"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
