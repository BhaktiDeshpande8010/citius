"use client"

import { motion } from "framer-motion"
import { TrendingUp, BookOpen, Headphones, CircleCheck as CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: TrendingUp, text: "Earn high commissions on every sale" },
  { icon: BookOpen, text: "Free IRDAI-approved training & certification" },
  { icon: Headphones, text: "Dedicated support team at your service" },
]

const requirements = [
  "18 years or above",
  "10th pass minimum",
  "Valid PAN & Aadhaar",
  "Smartphone with internet",
]

export function POSPPartner() {
  return (
    <section id="partner" className="py-20 sm:py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Partner Program</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight">
              Start your insurance business today
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Become a certified POSP agent and earn unlimited income selling insurance.
              Zero investment required to get started.
            </p>

            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 sm:mt-10"
            >
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 sm:px-8 shadow-lg shadow-emerald-500/25 group">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl shadow-slate-200/50">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl sm:rounded-2xl text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">10,000+</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Active Partners</p>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-xl sm:rounded-2xl text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">50K+</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Avg. Monthly Income</p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Basic Requirements</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {requirements.map((req) => (
                    <div key={req} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl">
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-3 sm:mb-4">Get started in 2 minutes</p>
                <div className="flex gap-2 sm:gap-3">
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                  />
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-4 sm:px-6 rounded-lg sm:rounded-xl shrink-0 text-sm">
                    Start
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-2 sm:mt-3">
                  By continuing, you agree to our Terms & Privacy Policy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
