"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import img from "@/assets/staff.png";

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
        <section className="relative min-h-screen flex items-center" id="staff">
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
                    className="relative z-10 max-w-6xl px-6 md:mt-75 md:px-12 text-left"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
                >

                    <p className="text-base md:text-3xl font-montserrat leading-relaxed  text-[#B0BCC8]/90">
                        At Andro Solutions, our team is dedicated to delivering innovative, high-quality solutions with precision and care. We take pride in our commitment to excellence, collaboration, and creating impactful digital experiences that help our clients grow
                    </p>


                </motion.div>
            </motion.div>
        </section>
    );
}
