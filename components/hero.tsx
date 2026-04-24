"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background with layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content - 7 columns */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[13px] text-white/70 font-medium">IRDAI Licensed Direct Broker</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.1] tracking-tight"
            >
              <span className="text-balance">The smarter way to</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                protect what matters
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              Compare plans from 40+ insurers, get instant quotes, and secure coverage in minutes. 
              No paperwork. No middlemen.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-white h-14 px-8 text-base font-medium rounded-full shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-400/35 transition-all group"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 h-14 px-8 text-base font-medium rounded-full backdrop-blur-sm"
              >
                Talk to an Expert
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-slate-400">Free Comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-slate-400">2 Min Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-slate-400">2L+ Customers</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                
                {/* Stats section */}
                <div className="mb-8">
                  <p className="text-sm text-white/50 font-medium mb-6">Trusted by thousands across India</p>
                  <div className="grid grid-cols-2 gap-6">
                    <StatItem value="2L+" label="Happy Customers" />
                    <StatItem value="500Cr+" label="Claims Settled" />
                    <StatItem value="98%" label="Claim Success" />
                    <StatItem value="40+" label="Insurance Partners" />
                  </div>
                </div>

                {/* Rating badge */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-800 flex items-center justify-center">
                        <span className="text-[10px] text-white font-medium">{String.fromCharCode(64 + i)}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-white/50 mt-0.5">4.8/5 from 12,000+ reviews</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* App download */}
                <div>
                  <p className="text-sm text-white/50 mb-4">Download our app</p>
                  <div className="flex flex-wrap gap-3">
                    {/* Google Play Button */}
                    <a 
                      href="https://play.google.com/store" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-black hover:bg-black/80 transition-all rounded-xl px-4 py-2.5 border border-white/10 hover:border-white/20 group"
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

                    {/* App Store Button */}
                    <a 
                      href="https://apps.apple.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-black hover:bg-black/80 transition-all rounded-xl px-4 py-2.5 border border-white/10 hover:border-white/20 group"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-white/50 uppercase tracking-wider leading-none">Download on the</span>
                        <span className="text-white text-sm font-medium leading-tight">App Store</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
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
      <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{value}</p>
      <p className="text-xs text-white/40 mt-1">{label}</p>
    </div>
  )
}
