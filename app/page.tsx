import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Partners } from "@/components/partners"
import { HowItWorks } from "@/components/how-it-works"
import { Trust } from "@/components/trust"
import { MobileApp } from "@/components/mobile-app"
import { POSPPartner } from "@/components/posp-partner"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Products />
      <HowItWorks />
      <Trust />
      <MobileApp />
      <POSPPartner />
      <FAQ />
      <Footer />
    </main>
  )
}
