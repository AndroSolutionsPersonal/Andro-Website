"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Import from assets
import bgImage from "@/assets/MV.png";

export default function MissionVision() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scale down after initial reveal
    const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0.45]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

    // Initial text fade out
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);

    // Blue overlay
    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.55]);

    // Mission & Vision fade in only when image shrinks
    const mvOpacity = useTransform(scrollYProgress, [0.72, 0.85, 1], [0, 0.6, 1]);

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: "240vh", paddingTop: "4rem", paddingBottom: "4rem" }}
        >
            {/* Sticky shrinking image */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div
                    style={{ scale: imageScale, y: imageY }}
                    transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                    className="relative w-[95vw] h-[95vh] max-w-7xl rounded-[30px] overflow-hidden shadow-2xl"
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

            {/* Mission, Image, Vision side by side */}
            <motion.div
                style={{ opacity: mvOpacity }}
                transition={{ ease: "easeOut", duration: 0.8 }}
                className="sticky top-0 h-screen flex items-center justify-center"
            >
                <div className="max-w-7xl w-full flex justify-between px-4 md:px-6 items-center">
                    {/* Mission */}
                    <div className="flex flex-col justify-center text-center">
                        <h3 className="font-gilmer text-2xl md:text-3xl text-primary">Our Mission</h3>
                        <p className="mt-3 font-montserrat text-black text-justify px-20  max-w-sm">
                            Empower businesses with scalable, reliable technology and clear product thinking so
                            they can move faster and deliver more value.
                        </p>
                    </div>

                    {/* Center image (same shrunk image) */}
                    {/*<div className="flex items-center justify-center">*/}
                    {/*    <motion.div*/}
                    {/*        style={{ scale: imageScale }}*/}
                    {/*        className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-[20px] overflow-hidden shadow-xl"*/}
                    {/*    >*/}
                    {/*        /!*<Image src={bgImage} alt="Centered Mission Vision image" fill className="object-cover" />*!/*/}
                    {/*        <div className="absolute inset-0 bg-[#113559]/60" />*/}
                    {/*    </motion.div>*/}
                    {/*</div>*/}

                    {/* Vision */}
                    <div className="flex flex-col justify-center md:ml-20 text-center">
                        <h3 className="font-gilmer text-2xl md:text-3xl text-primary">Our Vision</h3>
                        <p className="mt-3 font-montserrat px-20 text-black text-justify max-w-sm ml-auto md:ml-0">
                            Be a catalyst for sustainable digital transformation across the continent and beyond.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
