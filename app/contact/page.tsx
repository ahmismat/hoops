"use client"

import type React from "react"
import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:hoops.program@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Background line animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]">
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900 dark:text-slate-100"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
      </div>

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
              © Contact Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                01
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                    <a
                      href="tel:8326796815"
                      className="text-lg font-semibold text-slate-900 dark:text-slate-100 hover:opacity-70 transition-opacity"
                    >
                      832-679-6815
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 dark:bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                    <a
                      href="mailto:hoops.program@gmail.com"
                      className="text-lg font-semibold text-slate-900 dark:text-slate-100 hover:opacity-70 transition-opacity"
                    >
                      hoops.program@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you're a parent looking to enroll your child, a volunteer wanting to help, or just curious about
                our program, we're here to answer your questions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                02
              </div>
              {submitted ? (
                <div className="p-8 text-center border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-950">
                  <CheckCircle className="w-16 h-16 text-slate-900 dark:text-slate-100 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Your email client should have opened. If not, please email us directly at hoops.program@gmail.com
                  </p>
                </div>
              ) : (
                <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium transition-colors"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
