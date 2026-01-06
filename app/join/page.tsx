"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function JoinPage() {
  const prefersReducedMotion = useReducedMotion()
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfgexpmJQzekNaIEoVSgfC54aP0-uEubnb_Z34ZrlNowAsQyw/viewform?usp=header"
  
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Team</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Take the first step toward becoming part of the HOOPS family.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            data-animate
          >
            <Card className="p-8 md:p-12 border-2 border-[#ff7200] text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Register Now</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out our registration form to sign up for the HOOPS program. We welcome all youth regardless of
                background or experience level.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#ff7200] hover:bg-[#e66600] text-white font-semibold text-lg px-10 py-6 transition-colors"
              >
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                  Open Registration Form
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
            data-animate
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Happens Next?</h2>
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
                className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200"
                data-animate
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#0f172a] text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-700">{step}</p>
                <CheckCircle className="ml-auto h-5 w-5 text-green-500 opacity-50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Have Questions?</h3>
          <p className="text-slate-600 mb-6">Reach out to us anytime. We're here to help you get started.</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-semibold bg-transparent transition-colors"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
