"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
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
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm"
        >
          {/* Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="mb-7">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
              <p className="mt-1.5 text-sm text-slate-500">Sign in to manage your policies</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-10 sm:h-11 rounded-xl font-medium text-sm shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-60 mt-2"
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-5 pt-5 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Create one
                </a>
              </p>
            </div>
          </div>

          {/* Trust badge */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Shield className="w-3.5 h-3.5" />
            <span>256-bit SSL encrypted. Your data is safe.</span>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-4 text-center">
        <p className="text-xs text-slate-400">
          © 2026 Citius Insurance Broking Pvt. Ltd.
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
        </p>
      </footer>
    </div>
  )
}
