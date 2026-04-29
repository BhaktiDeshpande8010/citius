"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 sm:mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] sm:text-[13px] text-white/70 font-medium">IRDAI Licensed Direct Broker</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.1] tracking-tight"
            >
              <span className="text-balance">The smarter way to</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                protect what matters
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              Compare plans from 40+ insurers, get instant quotes, and secure coverage in minutes.
              No paperwork. No middlemen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-white h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-medium rounded-full shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-400/35 transition-all group"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-medium rounded-full backdrop-blur-sm transition-all"
              >
                Talk to an Expert
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 sm:mt-12 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm text-slate-400">Free Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm text-slate-400">2 Min Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm text-slate-400">2L+ Customers</span>
              </div>
            </motion.div>
          </div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                <div className="mb-6 sm:mb-8">
                  <p className="text-xs sm:text-sm text-white/50 font-medium mb-4 sm:mb-6">Trusted by thousands across India</p>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <StatItem value="2L+" label="Happy Customers" />
                    <StatItem value="500Cr+" label="Claims Settled" />
                    <StatItem value="98%" label="Claim Success" />
                    <StatItem value="40+" label="Insurance Partners" />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-800 flex items-center justify-center">
                        <span className="text-[9px] sm:text-[10px] text-white font-medium">{String.fromCharCode(64 + i)}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/50 mt-0.5">4.8/5 from 12,000+ reviews</p>
                  </div>
                </div>

                <div className="my-5 sm:my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div>
                  <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">Download our app</p>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-black hover:bg-black/80 transition-all rounded-xl px-4 py-2.5 border border-white/10 hover:border-white/20"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#00F076"/>
                      <path d="M17.556 8.236L5.097.714C4.408.31 3.609.814 3.609 1.814L13.792 12l3.764-3.764z" fill="#FF3A44"/>
                      <path d="M3.609 22.186c0 1 .8 1.504 1.488 1.1l12.459-7.522L13.792 12 3.61 22.186z" fill="#FF5F30"/>
                      <path d="M20.869 10.632l-3.313-2L13.792 12l3.764 3.764 3.313-2a1.5 1.5 0 000-3.132z" fill="#FFC400"/>
                    </svg>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-white/50 uppercase tracking-wider leading-none">Get it on</span>
                      <span className="text-white text-sm font-medium leading-tight">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">{value}</p>
      <p className="text-[10px] sm:text-xs text-white/40 mt-1">{label}</p>
    </div>
  )
}
