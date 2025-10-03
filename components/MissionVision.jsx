"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "@/assets/MV.png";

export default function MissionVision() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scale down after initial reveal
    const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0.4]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    // Initial text fade out
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);
    // Blue overlay
    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.55]);
    // Mission fade in and out on mobile
    const missionOpacity = useTransform(scrollYProgress, [0.72, 0.85, 0.9], [0, 1, 0]);
    // Vision fade in only when image shrinks
    const visionOpacity = useTransform(scrollYProgress, [0.72, 0.85, 1], [0, 0.6, 1]);

    return (
        <section
            ref={containerRef}
            className="relative bg-foreground"
            style={{ height: "240vh", paddingTop: "4rem", paddingBottom: "4rem" }} id="missionVision"
        >
            {/* Mission (top on mobile, fades out after reveal) */}
            <motion.div
                style={{ opacity: missionOpacity, top: "4rem" }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="md:hidden h-auto flex items-center justify-center py-6 sticky"
            >
                <div className="max-w-7xl w-full px-4 flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center text-center">
                        <h3 className="font-gilmer text-2xl text-primary">Our Mission</h3>
                        <p className="mt-3 font-montserrat text-black text-justify max-w-sm mx-auto">
                            Empower businesses with scalable, reliable technology and clear product thinking so they can move faster and deliver more value.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sticky shrinking image */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center md:px-0 px-4">
                <motion.div
                    style={{ scale: imageScale, y: imageY }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                    className=" relative w-full h-[98vh] md:w-[98vw] md:h-[98vh] max-w-8xl rounded-[30px] overflow-hidden shadow-2xl "
                >
                    <Image src={bgImage} alt="Mission Vision background" fill className="object-cover" />
                    {/* Blue overlay */}
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-[#113559]"
                    />
                    {/* Initial overlay text */}
                    <motion.div
                        style={{ opacity: initialTextOpacity }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        className="absolute left-6 md:left-10 bottom-10 z-10 max-w-2xl text-white"
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

            {/* Vision (bottom on mobile) */}
            <motion.div
                style={{ opacity: visionOpacity, top: "100vh" }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="md:hidden h-auto flex items-center justify-center mt-3 py-16 sticky"
            >
                <div className="max-w-7xl w-full px-4 flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center text-center">
                        <h3 className="font-gilmer text-2xl text-primary">Our Vision</h3>
                        <p className="mt-3 font-montserrat text-black text-justify max-w-sm mx-auto">
                            Be a catalyst for sustainable digital transformation across the continent and beyond. We aim to lead transformative projects that empower communities and establish Ethiopia as a tech hub in the region.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Mission & Vision layout (desktop only) */}
            <motion.div
                style={{ opacity: visionOpacity }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="sticky top-0 h-screen flex items-center justify-center hidden md:flex"
            >
                <div className="max-w-7xl w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-20 md:gap-160">
                    {/* Mission (left on desktop) */}
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <h3 className="font-gilmer text-2xl md:text-3xl text-primary">Our Mission</h3>
                        <p className="mt-3 font-montserrat text-black pr-16 text-justify max-w-sm mx-auto md:mx-0">
                            Empower businesses with scalable, reliable technology and clear product thinking so they can move faster and deliver more value.
                        </p>
                    </div>
                    {/* Vision (right on desktop) */}
                    <div className="flex flex-col md:justify-center justify-evenly text-center md:text-left">
                        <h3 className="font-gilmer text-2xl md:text-3xl md:pl-16 text-primary">Our Vision</h3>
                        <p className="mt-3 font-montserrat md:pl-16 text-black text-justify max-w-sm mx-auto md:mx-0">
                            Be a catalyst for sustainable digital transformation across the continent and beyond.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}