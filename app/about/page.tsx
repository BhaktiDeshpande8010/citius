"use client"

import { motion } from "framer-motion"
import { Shield, CircleCheck as CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: "2015", label: "Founded" },
  { value: "2L+", label: "Customers" },
  { value: "500Cr+", label: "Claims Processed" },
  { value: "98%", label: "Claim Success" },
]

const values = [
  {
    title: "Transparency",
    description: "No hidden terms or surprises. We present insurance clearly so you can make informed decisions.",
  },
  {
    title: "Customer First",
    description: "Every decision starts with one question: how does this benefit our customers?",
  },
  {
    title: "Simplicity",
    description: "We strip away complexity so buying and claiming insurance feels effortless.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-base font-semibold text-slate-900">Citius</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700 text-sm gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-14 sm:pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">About Us</span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Making insurance simple for every Indian
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                Citius is an IRDAI-licensed direct insurance broker built on one belief: insurance should be easy to understand, easy to buy, and easy to claim. We connect millions of Indians with the right coverage from 40+ trusted insurers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-center"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100"
              >
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Our Mission</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To make insurance accessible, understandable, and affordable for every Indian. We leverage technology to eliminate complexity and deliver a seamless experience from quote to claim.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 sm:p-8 bg-emerald-50 rounded-2xl sm:rounded-3xl border border-emerald-100"
              >
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Our Vision</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To be India&apos;s most trusted insurance platform, where protection is just a tap away — a future where no family is financially vulnerable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 sm:mb-12"
            >
              <span className="text-sm font-semibold text-emerald-400 tracking-wide uppercase">Values</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                What guides us
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 sm:p-6 bg-white/[0.04] border border-white/10 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                    <h3 className="font-semibold text-white text-sm sm:text-base">{value.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">IRDAI Licensed Direct Broker</h3>
                <p className="text-emerald-600 font-medium text-sm mt-0.5 mb-2">License No: DB 123/45</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Authorized to sell and service insurance policies from multiple insurers, ensuring you get the best options and full regulatory protection.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ready to get protected?
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-md mx-auto">
                Join over 2 lakh customers who trust Citius. Get your free quote in under 2 minutes.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/#products">
                  <Button className="bg-emerald-500 hover:bg-emerald-400 text-white h-11 px-6 rounded-full shadow-lg shadow-emerald-500/25 group w-full sm:w-auto">
                    Explore Products
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    className="bg-white/10 border border-white/20 text-white hover:bg-white/20 h-11 px-6 rounded-full w-full sm:w-auto transition-all"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-5 px-4 sm:px-6 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">C</span>
            </div>
            <span className="font-semibold text-slate-900 text-sm">Citius Insurance</span>
          </Link>
          <p className="text-xs text-slate-400">
            © 2026 Citius Insurance Broking Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
