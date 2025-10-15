"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, ChevronRight } from "lucide-react";

import HeaderLogo from "@/assets/logos/Header-Logo.png";
import Logo1 from "@/assets/logos/Logo-1.png";
import CigarLounge1 from "@/assets/cigar-lounge/Jazz Night.jpg";
import CigarLounge2 from "@/assets/cigar-lounge/New Years Cigar Lounge.jpg";
import CigarLounge3 from "@/assets/cigar-lounge/WD ad1.jpg";
import CigarLounge4 from "@/assets/cigar-lounge/WD ad2.jpg";
import CigarLounge5 from "@/assets/cigar-lounge/WD ad10.jpg";

export default function ModernGraphicsShowcase() {
    const [filter, setFilter] = useState("All");
    const [preview, setPreview] = useState(null);

    const categories = ["All", "Branding", "Banners", "Posts", "Misc"];
    const designs = [
        {
            id: "g-01",
            title: "Andro Logo",
            category: "Branding",
            images: [HeaderLogo, Logo1],
        },
        {
            id: "g-02",
            title: "Cigar Lounge",
            category: "Posts",
            images: [CigarLounge1, CigarLounge2, CigarLounge3, CigarLounge4, CigarLounge5],
        },
    ];

    const filtered = filter === "All" ? designs : designs.filter(d => d.category === filter);

    return (
        <section className="relative overflow-hidden py-20 px-6 md:px-16 text-[#113559]">
            {/* Animated Gradient Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 -z-10 bg-gradient-to-br from-[#113559]/60 via-[#B0BCC8]/40 to-white/20 blur-3xl"
            />

            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <div className="flex justify-center mb-3">
                    <Sparkles className="text-[#B0BCC8] w-6 h-6 animate-pulse" />
                </div>
                <h2 className="font-gilmer text-4xl md:text-5xl font-bold tracking-tight">
                    Our <span className="bg-gradient-to-r from-[#113559] to-[#B0BCC8] bg-clip-text text-transparent">Creative Design Showcase</span>
                </h2>
                <p className="text-gray-500 mt-2 font-montserrat max-w-2xl mx-auto">
                    Experience our branding, visuals, and marketing designs — interactive, immersive, and built to tell stories.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                            filter === cat
                                ? "bg-gradient-to-r from-[#113559] to-[#B0BCC8] text-white shadow-md"
                                : "border border-[#113559]/20 hover:border-[#113559]/50 text-[#113559]"
                        }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* Design Grid */}
            <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
                <AnimatePresence>
                    {filtered.map((design) => (
                        <motion.div
                            key={design.id}
                            layout
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-xl hover:shadow-2xl transition-all"
                        >
                            <Image
                                src={design.images[0]}
                                alt={design.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113559]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-xl">{design.title}</h3>
                                <button
                                    onClick={() => setPreview(design)}
                                    className="mt-2 inline-flex items-center text-sm font-medium text-[#B0BCC8] hover:text-white transition"
                                >
                                    View Project <ChevronRight className="ml-1 w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Preview Modal */}
            <AnimatePresence>
                {preview && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Fullscreen Modal */}
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            layoutId={preview.id}
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-[92%] h-[88dvh] overflow-hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setPreview(null)}
                                className="absolute top-6 right-6 z-20 text-white/80 hover:text-white transition text-2xl font-light"
                            >
                                ✕
                            </button>

                            {/* Carousel Section */}
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: -((preview.images.length - 1) * window.innerWidth), right: 0 }}
                                className="flex h-full cursor-grab active:cursor-grabbing"
                                transition={{ type: "spring", stiffness: 120, damping: 25 }}
                            >
                                {preview.images.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        className="min-w-full flex items-center justify-center p-8 md:p-16"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={src}
                                            alt={`${preview.title}-${i}`}
                                            className="rounded-2xl shadow-2xl w-auto max-h-[70vh] object-contain border border-white/10"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Info Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-[#113559]/80 via-[#113559]/30 to-transparent text-white"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold">{preview.title}</h3>
                                        <p className="text-sm md:text-base text-white/70 mt-2 font-montserrat">
                                            {preview.category} — Designed with precision, emotion, and storytelling. Explore every variation.
                                        </p>
                                    </div>

                                    {/* Progress dots */}
                                    <div className="flex gap-2">
                                        {preview.images.map((_, i) => (
                                            <motion.div
                                                key={i}
                                                layout
                                                className="w-3 h-3 rounded-full bg-white/30"
                                                animate={{
                                                    scale: i === 0 ? 1.2 : 1,
                                                    backgroundColor: i === 0 ? "#B0BCC8" : "rgba(255,255,255,0.3)",
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Accent */}
                            <motion.div
                                animate={{
                                    x: [0, 40, 0],
                                    y: [0, -30, 0],
                                }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-[#B0BCC8]/40 to-[#113559]/20 blur-3xl rounded-full opacity-70"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Floating blob accent */}
            <motion.div
                animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 w-64 h-64 bg-gradient-to-tr from-[#B0BCC8]/40 to-[#113559]/20 blur-3xl rounded-full"
            />
        </section>
    );
}
