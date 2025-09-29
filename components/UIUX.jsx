"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import UIUX from "@/assets/services/UIUXback2.png";

import { SiFigma, SiAdobephotoshop, SiAdobexd, SiSketch } from "react-icons/si";

const tools = [
    {
        name: "Figma",
        icon: <SiFigma className="w-12 h-12 text-[#F24E1E]" />,
    },
    {
        name: "Adobe XD",
        icon: <SiAdobexd className="w-12 h-12 text-[#FF61F6]" />,
    },
    {
        name: "Sketch",
        icon: <SiSketch className="w-12 h-12 text-[#F7B500]" />,
    },
    {
        name: "Photoshop",
        icon: <SiAdobephotoshop className="w-12 h-12 text-[#31A8FF]" />,
    },
];

export default function UIUXSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-[#113559] text-white" id="UIUX">
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
                {/* Left column - Transparent UI/UX image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative w-full flex justify-center"
                    >
                        <Image
                            src={UIUX}
                            alt="UI/UX Illustration"
                            className="object-contain max-h-[400px] lg:max-h-[800px] w-auto"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Right column - heading + description + tools */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-gilmer text-[#B0BCC8] mb-6"
                    >
                        UI/UX Design
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-lg max-w-xl font-montserrat mb-10"
                    >
                        We craft user-centered digital experiences that blend functionality
                        with aesthetic appeal. Using modern design tools like Figma, Adobe XD,
                        Sketch, and Photoshop, we deliver engaging interfaces that delight
                        users and drive results.
                    </motion.p>

                    {/* Tool icons (like apps in banking design) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto lg:mx-0">
                        {tools.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-center">
                                    {tool.icon}
                                </div>
                                <p className="mt-3 text-sm font-montserrat">{tool.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
