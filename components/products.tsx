"use client"

import { motion } from "framer-motion"
import { Heart, Car, Shield, Building2, ArrowUpRight } from "lucide-react"

const products = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Cashless claims at 10,000+ hospitals. Coverage up to 1 Crore with no room rent limits.",
    highlight: "From Rs 400/month",
    color: "from-rose-500 to-pink-600",
    shadowColor: "shadow-rose-500/20",
  },
  {
    icon: Car,
    title: "Motor Insurance",
    description: "Comprehensive car & bike coverage with 24/7 roadside assistance and instant claims.",
    highlight: "Instant Policy",
    color: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Term plans with coverage up to 5 Crore. Secure your family's future at affordable premiums.",
    highlight: "99% Claims Paid",
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Protect your business with property, liability, and comprehensive employee coverage.",
    highlight: "Custom Plans",
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Our Products</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight">
            Protection for every part of life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Comprehensive coverage tailored to your needs. Compare, choose, and protect what matters most.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.a
              key={product.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 bg-slate-50 hover:bg-white rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${product.color} shadow-lg ${product.shadowColor}`}>
                <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div className="mt-4 sm:mt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-xl font-semibold text-slate-900 group-hover:text-slate-800">
                    {product.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200">
                  <span className="text-sm font-semibold text-emerald-600">
                    {product.highlight}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
