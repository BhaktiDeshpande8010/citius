"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "IRDAI Licensed",
    description: "Registered direct broker with license DB 123/45. Your policies are fully compliant.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "256-bit SSL encryption and ISO 27001 certified. Your data is always protected.",
  },
  {
    icon: Clock,
    title: "15 Min Claim Response",
    description: "Industry-leading claim processing. We respond to every claim within minutes.",
  },
  {
    icon: Award,
    title: "Award Winning Service",
    description: "Rated 4.8/5 by 12,000+ customers. Best InsurTech Platform 2025.",
  },
]

export function Trust() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sm font-semibold text-emerald-400 tracking-wide uppercase">Why Citius</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight">
            Built on trust, backed by technology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Licensed, secure, and committed to protecting what matters most to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
