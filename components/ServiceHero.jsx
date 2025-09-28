"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import img from "@/assets/AboutH.png"; // background image
import UIUX from"@/assets/services/UIUX.png"
import Fullstack from"@/assets/services/Fullstack.png"
import SMM from"@/assets/services/SMM.png"
import SC from"@/assets/services/SC.png"
import GD from"@/assets/services/GD.png"
const services = [
    {
        slug: "uiux",
        title: "UI/UX Design",
        image: UIUX,
    },
    {
        slug: "fullstack",
        title: "Full Stack Development",
        image: Fullstack,
    },
    {
        slug: "smm",
        title: "Social Media Management",
        image: SMM,
    },
    {
        slug: "consultancy",
        title: "Software Consultancy",
        image: SC,
    },
    {
        slug: "graphic",
        title: "Graphic Design",
        image: GD,
    },
];

export default function ServicesHero() {
    const panelRef = useRef(null);
    const controls = useAnimation();
    const [active, setActive] = useState(0);
    const router = useRouter();

    useEffect(() => {
        controls.start({
            scale: 0.985,
            padding: "36px",
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
                    padding: "0px",
                    borderRadius: "0px",
                    boxShadow: "none",
                }}
                animate={controls}
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    boxSizing: "border-box",
                }}
                className="relative flex"
            >
                {/* Background Image slightly blurred */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={img}
                        alt="Andro Solutions Background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover blur-sm"
                    />
                    <div className="absolute inset-0 bg-[#113559]/70" />
                </div>

                {/* Left text */}
                <motion.div
                    className="relative z-10 max-w-2xl px-6 md:px-12 text-left"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-gilmer font-bold mb-4 leading-tight text-white">
                        Explore our Services
                    </h1>

                    <p className="text-base md:text-2xl font-montserrat leading-relaxed mb-6 text-[#B0BCC8]/90">
                        Tailored solutions that simplify your business challenges and
                        empower your digital growth.
                    </p>

                    <Button
                        className="bg-white text-[#113559] px-5 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md hover:bg-white/80 transform hover:-translate-y-0.5 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-white/20"
                        onClick={() => router.push("/contact")}
                    >
                        Get Started →
                    </Button>
                </motion.div>

                {/* Right hover-expand services */}
                <div className="flex flex-1 gap-4 h-[420px] pr-6 md:pr-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            onMouseEnter={() => setActive(index)}
                            onClick={() => router.push(`/services/${service.slug}`)}
                            animate={{ flex: active === index ? 3 : 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="relative rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center"
                        >
                            {/* Service image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />

                            {/* Overlay with title at the bottom */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: active === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/40 flex items-end"
                            >
                                <motion.h3
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{
                                        y: active === index ? 0 : 40,
                                        opacity: active === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full text-center py-4 text-xl font-semibold text-white bg-gradient-to-t from-black/70 to-transparent"
                                >
                                    {service.title}
                                </motion.h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
