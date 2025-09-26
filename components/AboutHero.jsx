"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import img from "@/assets/AboutHero2.png"
export default function Hero() {
    const panelRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        // Subtle settle animation: small shrink, padding and rounded corners.
        // Reduced shrink (0.985) for a very gentle effect and smoother easing.
        controls.start({
            scale: 0.985,
            paddingTop: "36px",
            paddingBottom: "36px",
            paddingLeft: "36px",
            paddingRight: "36px",
            borderRadius: "24px",
            boxShadow: "0 18px 50px rgba(8,18,25,0.25)",
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.28 },
        });
    }, [controls]);

    return (
        <section className="relative min-h-screen flex items-center justify-center">
            <motion.div
                ref={panelRef}
                // start full-bleed
                initial={{
                    scale: 1,
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    borderRadius: "0px",
                    boxShadow: "none",
                }}
                animate={controls}
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxSizing: "border-box",
                }}
                className="relative flex items-center justify-center"
            >
                {/* Full-bleed branded background */}
                <div className="absolute inset-0 -z-10" style={{ backgroundColor: "#113559" }} />

                {/* Content container (constrains text width for readability) */}
                <motion.div
                    className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-8"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
                >
                    {/* Left side - text */}
                    <div className="flex-1 text-white px-2 md:px-0">
                        <h1 className="text-4xl md:text-6xl font-gilmer font-bold mb-4 leading-tight">
                            Andro Solutions
                        </h1>

                        <p className="text-base md:text-lg font-montserrat leading-relaxed mb-4 text-[#B0BCC8]">
                            At Andro Solutions, we empower businesses through modern technology and
                            strategic thinking. Our mission is to bridge complex challenges and
                            simple, scalable solutions—delivering measurable impact.
                        </p>

                        <p className="text-base md:text-lg font-montserrat leading-relaxed mb-6">
                            From product engineering and digital transformation to consulting and
                            market insights, we partner with organizations to build the future.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Link href="/services" passHref>
                                <Button
                                    as="a"
                                    className={
                                        "bg-white text-[#113559] px-5 py-2.5 rounded-full font-semibold shadow-sm " +
                                        "hover:shadow-md hover:bg-white/80 transform hover:-translate-y-0.5 transition-all duration-200 ease-out " +
                                        "focus:outline-none focus:ring-4 focus:ring-white/20"
                                    }
                                    aria-label="Our Services"
                                >
                                    Our Services
                                </Button>
                            </Link>

                            <Link href="/projects" passHref>
                                <Button
                                    as="a"
                                    className={
                                        "bg-[#B0BCC8] text-[#113559] px-5 py-2.5 rounded-full font-semibold shadow-sm " +
                                        "hover:bg-[#98a3ad] hover:text-white transform hover:-translate-y-0.5 transition-all duration-200 ease-out " +
                                        "focus:outline-none focus:ring-4 focus:ring-white/20"
                                    }
                                    aria-label="Our Projects"
                                >
                                    Our Projects
                                </Button>
                            </Link>

                            <Link href="/contact" passHref>
                                <Button
                                    as="a"
                                    className={
                                        "bg-transparent border border-white/20 text-white px-5 py-2.5 rounded-full font-semibold " +
                                        "hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200 ease-out " +
                                        "focus:outline-none focus:ring-4 focus:ring-white/20"
                                    }
                                    aria-label="Contact Us"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side - image */}
                    <div className="flex-1 flex justify-center px-2 md:px-0">
                        <Image
                            src={img}
                            alt="Andro Solutions Illustration"
                            width={560}
                            height={560}
                            className="rounded-2xl object-contain"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
