"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

// Assets (replace with your imports)
import HeaderLogo from "@/assets/logos/Header-Logo.png";
import Logo1 from "@/assets/logos/Logo-1.png";
import Logo2 from "@/assets/logos/Logo-2.png";
import Logo3 from "@/assets/logos/Logo-Trasparent.png"
import AndroPrimary from "@/assets/Andro/primary.png"
import Androicons from "@/assets/Andro/icons.png"
import Androfont1 from "@/assets/Andro/font1.png"
import Androfont2 from "@/assets/Andro/font2.png"
import Androcolors from "@/assets/Andro/colors.png"
import Androbc1 from "@/assets/Andro/bc1.png"
import Androbc2 from "@/assets/Andro/bc2.png"

import Missprimary from "@/assets/MissSummers/primary.png"
import Missicons from "@/assets/MissSummers/icons.png"
import Missfont1 from "@/assets/MissSummers/font1.png"
import Missfont2 from "@/assets/MissSummers/font2.png"
import Misscolors from "@/assets/MissSummers/colors.png"
import MissSummers from "@/assets/MissSummers/summers.png"

import CigarLounge1 from "@/assets/cigar-lounge/Jazz Night.jpg";
import CigarLounge2 from "@/assets/cigar-lounge/New Years Cigar Lounge.jpg";
import CigarLounge3 from "@/assets/cigar-lounge/WD ad1.jpg";
import CigarLounge4 from "@/assets/cigar-lounge/WD ad2.jpg";
import CigarLounge5 from "@/assets/cigar-lounge/WD ad10.jpg";

import RomanPrimary from "@/assets/Romans/primary.png"
import RomanSecondary from "@/assets/Romans/secondary.png"

export default function AndroGraphicsShowcase() {
    const [filter, setFilter] = useState("All");
    const [preview, setPreview] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const categories = ["All", "Branding", "Banners", "Posts"];
    const designs = [
        {
            id: "g-01",
            title: "Andro Logo",
            categories: ["Branding", "Banners"],
            images: [HeaderLogo, Logo1, Logo2,Logo3, AndroPrimary, Androbc1,Androbc2, Androfont1,Androfont2,Androcolors,Androicons],
        },
        {
            id: "g-02",
            title: "Cigar Lounge",
            categories: ["Posts", "Banners"],
            images: [CigarLounge1, CigarLounge2, CigarLounge3, CigarLounge4, CigarLounge5],
        },
        {
            id: "g-03",
            title: "Miss Summers",
            categories: ["Branding", "Banners"],
            images: [MissSummers, Missprimary, Misscolors, Missicons, Missfont1, Missfont2],
        },
        {
            id: "g-04",
            title: "Romans",
            categories: ["Branding"],
            images: [RomanPrimary, RomanSecondary],
        },
    ];

    const filtered =
        filter === "All"
            ? designs
            : designs.filter((d) => d.categories?.includes(filter));

    // Handle keyboard controls
    useEffect(() => {
        const handleKey = (e) => {
            if (!preview) return;
            if (e.key === "Escape") setPreview(null);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [preview, activeIndex]);

    const nextImage = () => {
        setActiveIndex((prev) =>
            prev + 1 < preview.images.length ? prev + 1 : 0
        );
    };

    const prevImage = () => {
        setActiveIndex((prev) =>
            prev - 1 >= 0 ? prev - 1 : preview.images.length - 1
        );
    };

    return (
        <section className="relative overflow-hidden py-20 px-6 md:px-16 text-[#113559]">
            {/* Background Gradient */}
            <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-[#113559]/60 via-[#B0BCC8]/30 to-white/20 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
            />

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-14"
            >
                <h2 className="font-gilmer text-4xl md:text-5xl font-bold tracking-tight">
                    Our <span className="bg-gradient-to-r from-[#113559] to-[#B0BCC8] bg-clip-text text-transparent">Creative Works</span>
                </h2>
                <p className="text-gray-500 mt-3 font-montserrat max-w-2xl mx-auto">
                    Explore a gallery of expressive visuals, blending design, interaction, and storytelling.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-3 mb-10">
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

            {/* Grid */}
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <AnimatePresence>
                    {filtered.map((design) => (
                        <motion.div
                            key={design.id}
                            layout
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => {
                                setPreview(design);
                                setActiveIndex(0);
                            }}
                            className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-xl hover:shadow-2xl transition-all"
                        >
                            <Image
                                src={design.images[0]}
                                alt={design.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113559]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-white font-bold text-xl">{design.title}</h3>
                                <p className="text-sm text-[#B0BCC8]">
                                    {design.categories?.join(" · ")}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {preview && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Content */}
                        <motion.div
                            className="relative w-[94%] h-[88dvh] bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setPreview(null)}
                                className="absolute top-6 right-6 z-30 text-white/80 hover:text-white transition text-2xl"
                            >
                                <X />
                            </button>

                            {/* Left / Right controls */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/10 text-white z-20"
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/10 text-white z-20"
                            >
                                <ArrowRight />
                            </button>

                            {/* Carousel */}
                            <div
                                ref={carouselRef}
                                className="w-full h-full flex overflow-hidden"
                            >
                                {preview.images.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        className="min-w-full flex items-center justify-center p-6 md:p-12"
                                        animate={{ x: `${-activeIndex * 100}%` }}
                                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                                        >
                                            <Image
                                                src={src}
                                                alt={`${preview.title}-${i}`}
                                                className="max-h-[70vh] w-auto object-contain rounded-2xl"
                                            />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Info Panel */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#113559]/90 via-[#113559]/40 to-transparent p-6 md:p-10 text-white"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold">{preview.title}</h3>
                                        <p className="text-sm md:text-base text-white/70 mt-2 font-montserrat">
                                            {preview.categories?.join(" · ")} — Designed to reflect creativity, precision, and emotion.
                                        </p>

                                    </div>

                                    {/* Progress dots */}
                                    <div className="flex gap-2">
                                        {preview.images.map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-3 h-3 rounded-full"
                                                animate={{
                                                    backgroundColor:
                                                        i === activeIndex ? "#B0BCC8" : "rgba(255,255,255,0.3)",
                                                    scale: i === activeIndex ? 1.2 : 1,
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
        </section>
    );
}
