"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navLinks = [
  { label: "About", href: "/about", isPage: true },
  { label: "Products", href: "#products", isPage: false },
  { label: "How It Works", href: "#how-it-works", isPage: false },
  { label: "Partner With Us", href: "#partner", isPage: false },
  { label: "FAQ", href: "#faq", isPage: false },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string, isPage: boolean) => {
    setIsOpen(false)
    if (!isPage) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-slate-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-shadow">
              <span className="text-white font-bold text-base">C</span>
            </div>
            <span className={`text-lg font-semibold tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
              Citius
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    scrolled 
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.isPage)}
                  className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    scrolled 
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className={`text-[13px] font-medium ${
                scrolled 
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Sign in
            </Button>
            <Button 
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-[13px] font-medium px-5 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all"
            >
              Get Started
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.isPage ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href, link.isPage)}
                      className="flex items-center justify-between w-full py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  )}
                </motion.div>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100 flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 border-slate-200 text-slate-700"
                >
                  Sign in
                </Button>
                <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
