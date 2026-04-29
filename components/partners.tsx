"use client"

import { motion } from "framer-motion"

const insurers = [
  "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "Tata AIG",
  "Star Health", "Max Bupa", "New India", "SBI General",
  "Digit", "Acko", "Care Health", "Niva Bupa"
]

export function Partners() {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-xs sm:text-sm text-slate-500">
            Partnered with <span className="text-slate-300 font-medium">40+ leading insurers</span> across India
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { repeat: Infinity, duration: 35, ease: "linear" },
              }}
              className="flex gap-3 sm:gap-4 shrink-0"
            >
              {[...insurers, ...insurers].map((insurer, index) => (
                <div
                  key={`${insurer}-${index}`}
                  className="flex items-center justify-center min-w-[130px] sm:min-w-[160px] h-10 sm:h-12 px-4 sm:px-6 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <span className="text-xs sm:text-sm text-slate-400 whitespace-nowrap font-medium">
                    {insurer}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
