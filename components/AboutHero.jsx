"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import img from "@/assets/AboutH.png";

export default function Hero() {
    const panelRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
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
        <section className="relative min-h-screen flex items-center">
            <motion.div
                ref={panelRef}
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
                    justifyContent: "flex-start", // 👈 align left
                    overflow: "hidden",
                    boxSizing: "border-box",
                }}
                className="relative flex items-center"
            >
                {/* Background Image with blur placeholder */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={img}
                        alt="Andro Solutions Background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover"
                    />
                    {/* Overlay tint for readability */}
                    <div className="absolute inset-0 bg-[#113559]/70" />
                </div>

                {/* Left-side text only */}
                <motion.div
                    className="relative z-10 max-w-2xl px-6 md:px-12 text-left"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-gilmer font-bold mb-4 leading-tight text-white">
                        Andro Solutions
                    </h1>

                    <p className="text-base md:text-2xl font-montserrat leading-relaxed mb-4 text-[#B0BCC8]/90">
                        At Andro Solutions, we empower businesses through modern technology
                        and strategic thinking. Our mission is to bridge complex challenges
                        and simple, scalable solutions—delivering measurable impact.
                    </p>

                    <p className="text-base md:text-2xl font-montserrat leading-relaxed mb-6 text-white">
                        From product engineering and digital transformation to consulting
                        and market insights, we partner with organizations to build the
                        future.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link href="/services" passHref>
                            <Button
                                as="a"
                                className="bg-white text-[#113559] px-5 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md hover:bg-white/80 transform hover:-translate-y-0.5 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-white/20"
                            >
                                Our Services
                            </Button>
                        </Link>

                        <Link href="/projects" passHref>
                            <Button
                                as="a"
                                className="bg-[#B0BCC8] text-[#113559] px-5 py-2.5 rounded-full font-semibold shadow-sm hover:bg-[#98a3ad] hover:text-white transform hover:-translate-y-0.5 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-white/20"
                            >
                                Our Projects
                            </Button>
                        </Link>

                        <Link href="/contact" passHref>
                            <Button
                                as="a"
                                className="bg-transparent border border-white/20 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-white/20"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
