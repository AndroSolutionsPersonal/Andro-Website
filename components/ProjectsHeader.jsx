"use client"

import { animate, inView } from "motion"
import Image from "next/image"
import HeaderBg from "@/assets/MV.png"

export default function ProjectsHeader() {
  // Animate header on mount
  if (typeof window !== "undefined") {
    inView("#projects-header", () => {
      animate("#projects-header h2", { opacity: [0, 1], y: [40, 0] }, { duration: 1 })
      animate("#projects-header p", { opacity: [0, 1], y: [20, 0] }, { delay: 0.3, duration: 1 })
    })
  }

  return (
    <header
      id="projects-header"
      className="relative h-[70vh] flex flex-col items-center justify-center text-center rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={HeaderBg}
        alt="Projects Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/30 to-primary/80" />

      {/* Content */}
      <div className="relative z-10 text-secondary px-6">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white/80 via-white/50 to-white/80 bg-clip-text text-transparent">Our Projects</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Showcasing some of our latest and most impactful work, crafted with innovation and precision.
        </p>
      </div>
    </header>
  )
}
