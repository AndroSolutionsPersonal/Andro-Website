"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Users, Rocket, Heart } from "lucide-react";

const features = [
    {
        icon: <Briefcase className="w-7 h-7 text-[#113559]" />,
        title: "Proven Experience",
        desc: "We’ve successfully partnered with businesses across industries to bring ideas to life.",
    },
    {
        icon: <Users className="w-7 h-7 text-[#113559]" />,
        title: "Collaborative Approach",
        desc: "Your goals drive our process — we work hand in hand from start to finish.",
    },
    {
        icon: <Rocket className="w-7 h-7 text-[#113559]" />,
        title: "Future-Ready Solutions",
        desc: "We design with tomorrow in mind — scalable, innovative, and built to last.",
    },
    {
        icon: <Heart className="w-7 h-7 text-[#113559]" />,
        title: "Passion & Care",
        desc: "Every project is crafted with detail, love, and a commitment to excellence.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyUs = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
        >
            <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
                <motion.h2
                    initial="hidden"
                    animate={controls}
                    variants={fadeUp}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-[#113559]"
                >
                    Why Work With Us?
                </motion.h2>

                <motion.p
                    initial="hidden"
                    animate={controls}
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-lg text-[#113559]/80 max-w-2xl mx-auto"
                >
                    We don’t just build projects — we build long-term partnerships and solutions
                    that stand out.
                </motion.p>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            animate={controls}
                            variants={fadeUp}
                            transition={{ delay: 0.3 + i * 0.2 }}
                        >
                            <Card className="group relative flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
                                {/* Icon + Title grouped */}
                                <div className="flex flex-col items-center space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
                                    <div className="p-3 rounded-full bg-[#113559]/10 group-hover:rotate-6 transition-transform duration-500">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#113559]">{f.title}</h3>
                                </div>
                                {/* Description (no empty space before hover) */}
                                <p className="mt-3 text-sm text-[#113559]/70 opacity-100 max-h-20 group-hover:text-[#113559] transition-colors duration-500">
                                    {f.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
