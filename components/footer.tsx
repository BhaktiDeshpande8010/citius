"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const links = {
  products: [
    { label: "Health Insurance", href: "#products" },
    { label: "Motor Insurance", href: "#products" },
    { label: "Life Insurance", href: "#products" },
    { label: "Business Insurance", href: "#products" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Claims", href: "#" },
    { label: "Renewals", href: "#" },
    { label: "Grievance", href: "#" },
  ],
}

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">C</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold">Citius</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              IRDAI Licensed Direct Broker making insurance simple, transparent, and accessible for everyone.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:hello@citiusinsurance.in" className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                hello@citiusinsurance.in
              </a>
              <a href="tel:1800-123-4567" className="flex items-center gap-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                1800-123-4567 (Toll Free)
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Products</h3>
            <ul className="space-y-2.5">
              {links.products.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {links.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-2.5">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs text-slate-500">
              © 2026 Citius Insurance Broking Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-xs text-slate-500">IRDAI License: DB 123/45</span>
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Privacy</a>
                <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
