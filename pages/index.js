import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="font-sans">
      <section className='flex flex-col w-screen items-center justify-center'>
        <Navbar />
      </section>
      <Hero />
      <section className="px-2 pb-2 md:px-4 md:pb-4 overflow-hidden">
        <ContactSection />
      </section>
      <footer className="px-2 pb-2 md:px-4 md:pb-4">
        <Footer />
      </footer>
    </main>
  );
}
