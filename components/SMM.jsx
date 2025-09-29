"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { SiTiktok, SiX } from "react-icons/si";

import smmBg from "@/assets/services/SMMback3.png"; // your background image asset

const platforms = [
    { name: "Instagram", icon: <Instagram className="w-12 h-12 text-[#E1306C]" /> },
    { name: "TikTok", icon: <SiTiktok className="w-12 h-12 text-black" /> },
    { name: "Facebook", icon: <Facebook className="w-12 h-12 text-[#1877F2]" /> },
    { name: "X", icon: <SiX className="w-12 h-12 text-black" /> },
];

export default function SMMSection() {
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
        <section className="relative min-h-screen flex items-center" id="SMM">
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
                    justifyContent: "flex-end", // 👈 content aligned right
                    overflow: "hidden",
                    boxSizing: "border-box",
                }}
                className="relative flex items-center"
            >
                {/* Background image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={smmBg}
                        alt="Social Media Management Background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover "
                    />
                </div>

                {/* Content (right side) */}
                <motion.div
                    className="relative z-10 max-w-2xl px-6 md:px-12 text-left"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl font-gilmer font-bold mb-4 leading-tight text-white">
                        Social Media Management
                    </h2>

                    <p className="text-base md:text-xl font-montserrat leading-relaxed mb-8 text-white">
                        We help your brand shine on Instagram, TikTok, Facebook, and X. From
                        strategy to execution, we drive engagement, growth, and results.
                    </p>

                    {/* Apps */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                        {platforms.map((platform, i) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="flex flex-col items-center text-white"
                            >
                                <div className="bg-secondary rounded-xl p-4 shadow-md flex items-center justify-center">
                                    {platform.icon}
                                </div>
                                <p className="mt-3 text-sm font-montserrat">{platform.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
