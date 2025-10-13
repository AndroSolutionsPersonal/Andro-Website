"use client"

import { useEffect, useState, useRef } from "react"
import { animate, scroll, inView } from "motion"
import { motion, AnimatePresence } from "framer-motion"
import toast from "react-hot-toast"
import Image from "next/image"

import HeaderLogo from "@/assets/logos/Header-Logo.png"
import Logo1 from "@/assets/logos/Logo-1.png"

import CigarLounge1 from "@/assets/cigar-lounge/Jazz Night.jpg"
import CigarLounge2 from "@/assets/cigar-lounge/New Years Cigar Lounge.jpg"
import CigarLounge3 from "@/assets/cigar-lounge/WD ad1.jpg"
import CigarLounge4 from "@/assets/cigar-lounge/WD ad2.jpg"
import CigarLounge5 from "@/assets/cigar-lounge/WD ad10.jpg"

function ResponsiveImage({ src, alt = "", className = "", ...rest }) {
  const isString = typeof src === "string"
  if (isString) {
    return <img src={src} alt={alt} className={className} loading="lazy" {...rest} />
  }
  return <Image src={src} alt={alt} className={className} {...rest} />
}

function GraphicsDesignSection() {
    const categories = ["All", "Branding", "Banners", "Posts", "Misc"]
    const [filter, setFilter] = useState("All")
    const [openCard, setOpenCard] = useState(null) 
    const [selectedVariation, setSelectedVariation] = useState({}) 

    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewDesign, setPreviewDesign] = useState(null) 

    const designs = [
        {
            id: "g-01",
            title: "Andro Logo",
            category: "Branding",
            main: HeaderLogo,
            variations: [
                HeaderLogo,
                Logo1,
            ],
        },
        {
            id: "g-02",
            title: "Cigar Lounge",
            category: "Posts",
            main: CigarLounge1,
            variations: [
                CigarLounge1,
                CigarLounge2,
                CigarLounge3,
                CigarLounge4,
                CigarLounge5,
            ],
        },
    ]

    const filtered = designs.filter((d) => filter === "All" ? true : d.category === filter)
    
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.06 }
        }
    }
    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.35 } }
    }

    const openCardHandler = (id) => {
        setOpenCard(openCard === id ? null : id)
        if (!selectedVariation[id]) {
            setSelectedVariation(prev => ({ ...prev, [id]: 0 }))
        }
    }

    const selectVariation = (designId, index) => {
        setSelectedVariation(prev => ({ ...prev, [designId]: index }))
    }

    const openPreview = (design) => {
        const idx = selectedVariation[design.id] ?? 0
        setPreviewDesign({ ...design, currentIndex: idx })
        setPreviewOpen(true)
        // toast.success(`${design.title} preview opened`)
    }

    const replacePreviewInModal = (designId, idx) => {
        if (!previewDesign) return
        setPreviewDesign(prev => ({ ...prev, currentIndex: idx }))
        setSelectedVariation(prev => ({ ...prev, [designId]: idx }))
    }

    const closePreview = () => {
        setPreviewOpen(false)
        setPreviewDesign(null)
    }

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") closePreview() }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    return (
        <section className="py-12 px-4 md:px-12 lg:px-24 max-w-8xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Graphics Design Showcase</h2>
                    <p className="text-sm text-gray-600 max-w-xl">
                        A playful, interactive gallery of logo, banner and social media designs. Click a card to explore variations.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="w-full md:w-auto">
                    <div className="flex gap-2 bg-white/10 p-1 rounded-full shadow-sm backdrop-blur-sm">
                        {categories.map(cat => {
                            const active = filter === cat
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${active ? "bg-gradient-to-r from-secondary to-primary text-white shadow-lg" : "text-gray-700 hover:bg-white/5"}`}
                                >
                                    {cat}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filtered.map((design) => {
                        const isOpen = openCard === design.id
                        const selectedIdx = selectedVariation[design.id] ?? 0
                        const previewSrc = isOpen ? (design.variations[selectedIdx] || design.main) : design.main

                        return (
                            <motion.div
                                layout
                                key={design.id}
                                variants={item}
                                exit="exit"
                                className={`relative bg-white/5 rounded-3xl p-4 hover:scale-[1.01] transition-transform duration-300 shadow-lg backdrop-blur-md overflow-hidden`}
                            >
                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{design.title}</h3>
                                        <span className="text-xs text-gray-500">{design.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* CTA Row */}
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => openPreview(design)}
                                                    className="px-4 py-2 rounded-lg bg-primary hover:bg-gradient-to-br hover:from-primary hover:to-secondary text-white text-sm shadow-md"
                                                >
                                                    Quick Preview
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => openCardHandler(design.id)}
                                            className="px-4 py-2 rounded-lg text-sm font-medium bg-black/5 hover:bg-black/20 transition"
                                            aria-expanded={isOpen}
                                        >
                                            {isOpen ? "Close" : "Explore"}
                                        </button>
                                    </div>
                                </div>

                                {/* Main preview */}
                                <motion.div
                                    layout
                                    className="mt-4 rounded-2xl overflow-hidden bg-gradient-to-tr from-white/5 to-white/2"
                                >
                                    <ResponsiveImage
                                        src={previewSrc}
                                        alt={design.title}
                                        className="w-full h-44 md:h-48 object-cover rounded-2xl"
                                    />
                                </motion.div>

                                {/* Expanded area with thumbnails */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            className="mt-4 grid grid-cols-3 gap-2"
                                        >
                                            {design.variations.map((src, idx) => {
                                                const isSelected = selectedIdx === idx
                                                return (
                                                    <motion.button
                                                        key={idx}
                                                        onClick={() => selectVariation(design.id, idx)}
                                                        className={`rounded-xl overflow-hidden border-2 ${isSelected ? "border-secondary/70 scale-[1.02]" : "border-transparent"} transition-all`}
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <ResponsiveImage src={src} alt={`${design.title} variation ${idx + 1}`} className="w-full h-20 object-cover" />
                                                    </motion.button>
                                                )
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </motion.div>

            {/* Quick Preview */}
            <AnimatePresence>
                {previewOpen && previewDesign && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        aria-modal="true"
                        role="dialog"
                        onClick={closePreview}
                    >
                        <motion.div
                            initial={{ scale: 0.98, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.98, y: 20, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="relative max-w-6xl w-[92%] bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closePreview}
                                className="absolute right-4 top-4 text-gray-700 hover:text-black rounded-md p-1"
                                aria-label="Close preview"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-white/5 to-white/2">
                                    <ResponsiveImage
                                        src={(previewDesign.variations?.[previewDesign.currentIndex ?? 0] || previewDesign.main)}
                                        alt={previewDesign.title}
                                        className="w-full h-[70dvh] object-contain rounded-2xl"
                                    />
                                </div>

                                <div className="w-full md:w-1/3 flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{previewDesign.title}</h3>
                                        <p className="text-xs text-gray-500">{previewDesign.category}</p>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2">
                                        {(previewDesign.variations || [previewDesign.main]).map((src, idx) => {
                                            const isSelected = (previewDesign.currentIndex ?? 0) === idx
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => replacePreviewInModal(previewDesign.id, idx)}
                                                    className={`rounded-lg overflow-hidden border-2 ${isSelected ? "border-secondary/70 scale-[1.02]" : "border-transparent"} transition-all`}
                                                >
                                                    <ResponsiveImage src={src} alt={`variation ${idx + 1}`} className="w-full h-16 object-cover" />
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative floating accent */}
            <div className="pointer-events-none fixed right-6 bottom-6 md:right-12 md:bottom-12 opacity-60">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-secondary/60 to-primary/40 blur-xl animate-blob"></div>
            </div>
        </section>
    )
}

export default GraphicsDesignSection;