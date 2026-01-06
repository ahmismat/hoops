"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Target, Mountain, Sparkles, Trophy, Users, Heart } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-slate-300 leading-relaxed text-pretty">
              At HOOPS, we believe that talent is universal, but opportunity is not. Our mission is to provide orphan,
              refugee, and local youth with a safe, high-quality athletic environment where they can grow—not just as
              athletes, but as people.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
            data-animate
          >
            <p className="text-lg text-slate-700 leading-relaxed text-pretty">
              We use the power of sports to break down barriers. On our field, it doesn't matter where you came from,
              what language you speak, or what you have been through. All that matters is your effort, your respect for
              your teammates, and your willingness to grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Philosophy: H.O.O.P.S.</h2>
            <p className="text-slate-600">Five core values that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Award, title: "Honor", desc: "Respecting yourself, your teammates, and your opponents." },
              {
                icon: Target,
                title: "Opportunity",
                desc: "Creating a level playing field where everyone gets a shot.",
              },
              { icon: Mountain, title: "Overcome", desc: "Learning that failure is just a step toward success." },
              { icon: Sparkles, title: "Play", desc: "Finding joy and freedom in movement." },
              { icon: Trophy, title: "Strength", desc: "Building resilience in the body and the mind." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0.2 : 0.5, 
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                data-animate
              >
                <Card className="p-6 h-full bg-white hover:shadow-lg transition-shadow duration-200 border border-slate-200 text-center">
                  <item.icon className="w-8 h-8 text-[#ff7200] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Is This For?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "For the Refugee Youth",
                desc: "A place to practice language skills and make friends.",
              },
              {
                icon: Heart,
                title: "For the Orphan",
                desc: "A team that becomes a family and a coach that becomes a mentor.",
              },
              {
                icon: Target,
                title: "For the Local Youth",
                desc: "A chance to learn leadership and empathy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0.2 : 0.5, 
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-center"
                data-animate
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#0f172a]" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Learn More?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#ff7200] hover:bg-[#e66600] text-white font-semibold transition-colors">
              <Link href="/program">View Our Program</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-semibold bg-transparent transition-colors"
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
