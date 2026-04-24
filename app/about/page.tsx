"use client"

import { motion } from "framer-motion"
import { Shield, Users, Award, Target, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white font-bold text-base">C</span>
              </div>
              <span className="text-lg font-semibold text-slate-900">Citius</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">About Citius</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Making insurance{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                simple and accessible
              </span>{" "}
              for everyone
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Founded with a mission to democratize insurance, Citius is transforming how India 
              protects what matters most. We believe everyone deserves transparent, affordable, 
              and hassle-free insurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {[
              { value: "2015", label: "Founded" },
              { value: "2L+", label: "Customers Served" },
              { value: "500Cr+", label: "Claims Processed" },
              { value: "150+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                <p className="mt-2 text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 bg-slate-50 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To make insurance accessible, understandable, and affordable for every Indian. 
                We leverage technology to eliminate complexity, reduce costs, and deliver a 
                seamless experience from quote to claim.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 lg:p-10 bg-slate-50 rounded-3xl border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be India&apos;s most trusted insurance platform, where protection is just a 
                tap away. We envision a future where no family is financially vulnerable 
                due to lack of proper insurance coverage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-emerald-400 tracking-wide uppercase">Our Values</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-white tracking-tight">
              The principles that guide us
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              These core values shape every decision we make at Citius
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust & Transparency",
                description: "No hidden terms, no fine print traps. We believe in complete transparency with our customers."
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Every decision we make starts with one question: How does this benefit our customers?"
              },
              {
                icon: CheckCircle2,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from technology to customer service."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Compliance</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Licensed & Regulated
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Citius is a licensed direct insurance broker, regulated by IRDAI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200 rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">IRDAI Licensed Broker</h3>
                <p className="text-emerald-600 font-medium mb-3">License No: DB 123/45</p>
                <p className="text-sm text-slate-600">
                  As a licensed direct broker, we are authorized to sell and service insurance 
                  policies from multiple insurers, ensuring you get the best options available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to get protected?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join over 2 lakh customers who trust Citius for their insurance needs. 
              Get your free quote in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#products">
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-400 text-white h-14 px-8 rounded-full shadow-xl shadow-emerald-500/25 group"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 rounded-full"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-slate-900">Citius Insurance</span>
          </Link>
          <p className="text-sm text-slate-500">
            © 2026 Citius Insurance Broking Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
