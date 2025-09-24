"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "/assets/MV.png";

export default function MissionVision() {
    const containerRef = useRef(null);

    // Track scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scale and move image smoothly AFTER it's fully shown
    const imageScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0.45]);
    const imageY = useTransform(scrollYProgress, [0.3, 1], ["0%", "15%"]);

    // Initial overlay text fade out
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);

    // Overlay stays subtle (brand blue)
    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.55]);

    // Mission/Vision fade in later
    const mvOpacity = useTransform(scrollYProgress, [0.55, 0.75, 1], [0, 0.6, 1]);

    return (
        <section ref={containerRef} className="relative" style={{ height: "220vh" }}>
            {/* Sticky image block */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div
                    style={{ scale: imageScale, y: imageY }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                    className="relative w-full h-screen max-w-7xl rounded-[30px] overflow-hidden shadow-2xl"
                >
                    <Image src={bgImage} alt="Mission Vision background" fill className="object-cover" />

                    {/* Blue overlay */}
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-[#113559]"
                    />

                    {/* Initial text */}
                    <motion.div
                        style={{ opacity: initialTextOpacity }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        className="absolute left-6 md:left-12 bottom-10 z-10 max-w-2xl text-white"
                    >
                        <h2 className="font-gilmer text-3xl md:text-5xl lg:text-6xl leading-tight">
                            Building Digital Futures
                        </h2>
                        <p className="mt-3 font-montserrat text-base md:text-xl text-[#B0BCC8]">
                            Designing resilient, fast and human-centered software that helps teams move faster.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mission & Vision inline with final image */}
            <motion.div
                style={{ opacity: mvOpacity }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 py-16"
            >
                <div className="flex flex-col justify-center">
                    <h3 className="font-gilmer text-2xl md:text-3xl text-[#113559]">Our Mission</h3>
                    <p className="mt-3 font-montserrat text-[#B0BCC8]">
                        Empower businesses with scalable, reliable technology and clear product thinking so they
                        can move faster and deliver more value.
                    </p>
                </div>

                <div className="flex flex-col justify-center md:items-end text-left md:text-right">
                    <h3 className="font-gilmer text-2xl md:text-3xl text-[#113559]">Our Vision</h3>
                    <p className="mt-3 font-montserrat text-[#B0BCC8]">
                        Be a catalyst for sustainable digital transformation across the continent and beyond.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
