import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <footer className="px-4 pb-4">
        <Footer />
      </footer>
    </main>
  );
}
