import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import LoanCategories from "@/components/home/LoanCategories";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import BackgroundGrid from "@/components/layout/BackgroundGrid";

export default function Home() {
  return (
    <main className="pt-28 relative overflow-hidden">

      <BackgroundGrid />

      
      <Hero />
      <TrustedCompanies />
      <Features />
      <LoanCategories />
      <Testimonials />
      <FAQ />
      <CTA />
    

    </main>
  );
}