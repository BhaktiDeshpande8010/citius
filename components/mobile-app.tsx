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
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Mobile App</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Insurance in your pocket
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Manage policies, file claims, and get instant support. Everything you need, right in your pocket.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {/* Google Play Button */}
              <a 
                href="https://play.google.com/store" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 transition-all rounded-2xl px-5 py-3 group"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
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

              {/* App Store Button */}
              <a 
                href="https://apps.apple.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 transition-all rounded-2xl px-5 py-3 group"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/60 uppercase tracking-wider leading-none">Download on the</span>
                  <span className="text-white text-base font-semibold leading-tight">App Store</span>
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
              {/* Glow effects */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />
              
              {/* Phone frame */}
              <div className="relative w-[280px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-b-2xl z-20" />
                
                {/* Screen */}
                <div className="relative w-full h-[560px] bg-slate-50 rounded-[2.25rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-7 pt-4 pb-2">
                    <span className="text-xs font-semibold text-slate-900">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2.5 border border-slate-400 rounded-sm">
                        <div className="w-2.5 h-full bg-emerald-500 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="px-5 pt-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <span className="text-white font-bold text-lg">R</span>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900">Hi, Rahul</p>
                        <p className="text-xs text-slate-500">3 active policies</p>
                      </div>
                    </div>

                    {/* Primary card */}
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white shadow-xl shadow-emerald-500/20 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-white/80">Health Insurance</span>
                        <span className="text-[10px] px-2 py-0.5 bg-white/20 rounded-full">Active</span>
                      </div>
                      <p className="text-2xl font-bold">Rs 10,00,000</p>
                      <p className="text-xs text-white/70 mt-1">HDFC ERGO Health</p>
                      <div className="mt-4 pt-3 border-t border-white/20">
                        <p className="text-xs text-white/60">Valid until Dec 2026</p>
                      </div>
                    </div>

                    {/* Notification card */}
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                          <Bell className="w-4 h-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-amber-800">Renewal Due</p>
                          <p className="text-xs text-amber-600 mt-0.5">Motor policy expires in 15 days</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["Claims", "Renew", "Support"].map((action) => (
                        <div key={action} className="p-3 bg-white rounded-xl border border-slate-100 text-center">
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
