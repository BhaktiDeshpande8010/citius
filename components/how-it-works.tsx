"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, FileCheck, CreditCard, BadgeCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Compare",
    description: "Enter your details and instantly compare quotes from 40+ leading insurers.",
  },
  {
    icon: FileCheck,
    title: "Choose",
    description: "Select your ideal plan and customize coverage to fit your specific needs.",
  },
  {
    icon: CreditCard,
    title: "Pay",
    description: "Complete your purchase securely. EMI options available on all plans.",
  },
  {
    icon: BadgeCheck,
    title: "Protected",
    description: "Receive your policy instantly. Access anytime via our app or email.",
  },
]

export function HowItWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Get insured in 4 simple steps
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            No paperwork, no waiting. Get covered in minutes, not days.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-slate-200">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative text-center"
              >
                {/* Icon container */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative z-10 mx-auto"
                >
                  <div className="w-32 h-32 rounded-3xl bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center mx-auto border border-slate-100">
                    <step.icon className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
                  </div>
                  
                  {/* Step number badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.7 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-emerald-500/30"
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.15,
                  }}
                  className="mt-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
