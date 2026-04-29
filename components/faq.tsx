"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is Citius Insurance?",
    answer: "Citius is an IRDAI-registered direct insurance broker. We help you compare, buy, and manage insurance policies from 40+ top insurers in India. Simply enter your details, compare quotes instantly, and purchase online in minutes.",
  },
  {
    question: "How do I file a claim?",
    answer: "Log into your account or the Citius app, select your policy, and click 'File Claim'. Upload the required documents and submit. Our team processes claims within 24-48 hours. For health insurance, we offer cashless claims at 10,000+ network hospitals.",
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We use bank-grade 256-bit SSL encryption and are ISO 27001 certified. We never store your card details on our servers, and all transactions are processed through secure payment gateways.",
  },
  {
    question: "What documents do I need to buy insurance?",
    answer: "For most policies, just your PAN and Aadhaar for KYC verification. Health insurance may require basic medical history. Motor insurance needs your RC and previous policy (if any). Everything can be uploaded digitally through our platform.",
  },
  {
    question: "How do I become a POSP insurance agent?",
    answer: "You need to be 18+ years old, have passed 10th standard, and have valid PAN and Aadhaar. Apply through our Partner Program, complete the free 15-hour training, pass the certification exam, and start selling immediately with zero investment.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">FAQ</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight">
            Questions? Answers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about Citius Insurance.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left group"
              >
                <span className="font-semibold text-sm sm:text-base text-slate-900 pr-4 sm:pr-8 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-600"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center p-6 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl"
        >
          <p className="text-sm sm:text-base text-slate-600">
            Still have questions?{" "}
            <a href="mailto:support@citiusinsurance.in" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
