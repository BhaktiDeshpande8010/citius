"use client"

import { motion } from "framer-motion"
import { FileText, Bell, CreditCard, Smartphone } from "lucide-react"

const features = [
  { icon: FileText, text: "All policies in one place" },
  { icon: Bell, text: "Smart renewal reminders" },
  { icon: CreditCard, text: "Digital health cards" },
  { icon: Smartphone, text: "One-tap claim filing" },
]

export function MobileApp() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Mobile App</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight">
              Insurance in your pocket
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Manage policies, file claims, and get instant support. Everything you need, right in your pocket.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 sm:mt-10"
            >
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 transition-all rounded-2xl px-5 py-3"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#00F076"/>
                  <path d="M17.556 8.236L5.097.714C4.408.31 3.609.814 3.609 1.814L13.792 12l3.764-3.764z" fill="#FF3A44"/>
                  <path d="M3.609 22.186c0 1 .8 1.504 1.488 1.1l12.459-7.522L13.792 12 3.61 22.186z" fill="#FF5F30"/>
                  <path d="M20.869 10.632l-3.313-2L13.792 12l3.764 3.764 3.313-2a1.5 1.5 0 000-3.132z" fill="#FFC400"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 uppercase tracking-wider leading-none">Get it on</span>
                  <span className="text-white text-base font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />

              <div className="relative w-[260px] sm:w-[280px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-b-2xl z-20" />

                <div className="relative w-full h-[520px] sm:h-[560px] bg-slate-50 rounded-[2.25rem] overflow-hidden">
                  <div className="flex items-center justify-between px-7 pt-4 pb-2">
                    <span className="text-xs font-semibold text-slate-900">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2.5 border border-slate-400 rounded-sm">
                        <div className="w-2.5 h-full bg-emerald-500 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pt-4">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <span className="text-white font-bold text-base">R</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Hi, Rahul</p>
                        <p className="text-xs text-slate-500">3 active policies</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white shadow-xl shadow-emerald-500/20 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-white/80">Health Insurance</span>
                        <span className="text-[10px] px-2 py-0.5 bg-white/20 rounded-full">Active</span>
                      </div>
                      <p className="text-xl font-bold">Rs 10,00,000</p>
                      <p className="text-xs text-white/70 mt-0.5">HDFC ERGO Health</p>
                      <div className="mt-3 pt-3 border-t border-white/20">
                        <p className="text-xs text-white/60">Valid until Dec 2026</p>
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100">
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                          <Bell className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-amber-800">Renewal Due</p>
                          <p className="text-[11px] text-amber-600 mt-0.5">Motor policy expires in 15 days</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {["Claims", "Renew", "Support"].map((action) => (
                        <div key={action} className="p-2.5 bg-white rounded-xl border border-slate-100 text-center">
                          <p className="text-xs font-medium text-slate-600">{action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
