"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// 🖼️ Import images
import experienceImg from "@/assets/WhyUs/Exp.png";
import collaborativeImg from "@/assets/WhyUs/colab.png";
import futureImg from "@/assets/WhyUs/future.png";
import passionImg from "@/assets/WhyUs/passion.png";

const reasons = [
    {
        num: 1,
        title: "Proven Experience",
        desc: "We’ve successfully partnered with businesses across industries to bring ideas to life.",
        img: experienceImg,
    },
    {
        num: 2,
        title: "Collaborative Approach",
        desc: "Your goals drive our process — we work hand in hand from start to finish.",
        img: collaborativeImg,
    },
    {
        num: 3,
        title: "Future-Ready Solutions",
        desc: "We design with tomorrow in mind — scalable, innovative, and built to last.",
        img: futureImg,
    },
    {
        num: 4,
        title: "Passion & Care",
        desc: "Every project is crafted with detail, love, and a commitment to excellence.",
        img: passionImg,
    },
];

export default function WhyUsScroll() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Hook-safe transforms (fixed number of reasons)
    const makeTransform = (index) => {
        const start = index / reasons.length;
        const end = (index + 1) / reasons.length;
        return {
            fill: useTransform(scrollYProgress, [start, end], ["#B0BCC8", "#113559"]),
            opacity: useTransform(scrollYProgress, [start, end], [0.5, 1]),
        };
    };

    const transforms = [
        makeTransform(0),
        makeTransform(1),
        makeTransform(2),
        makeTransform(3),
    ];

    return (
        <section
            ref={ref}
            className="relative flex flex-col gap-32 lg:gap-48 py-32 px-6 lg:px-20 bg-foreground overflow-hidden"
        >
            {/* Header */}
            <div className="text-center mb-2">
                <h2 className="text-5xl md:text-6xl font-[Gilmer] font-bold text-[#113559]">
                    Why Work With Us
                </h2>
                <p className="text-lg mt-4 text-[#113559]/80 font-[Montserrat] max-w-2xl mx-auto">
                    Our values and approach make us more than just a service provider — we’re your growth partner.
                </p>
            </div>

            {/* Timeline and content */}
            <div className="relative">
                {/* Animated vertical line — perfectly centered with circles */}
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                        originY: 0,
                        backgroundColor: "#113559",
                    }}
                    className="absolute md:left-[26px] left-[20px] top-0 w-[3px] h-full rounded-full"
                />

                <div className="flex flex-col gap-32 relative">
                    {reasons.map((r, i) => (
                        <div
                            key={r.num}
                            className="relative flex flex-col lg:flex-row items-center gap-12"
                        >
                            {/* LEFT — Number & Text */}
                            <div className="relative flex items-center gap-6 w-full lg:w-1/2">
                                <motion.div
                                    style={{ backgroundColor: transforms[i].fill }}
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md relative z-10"
                                >
                                    {r.num}
                                </motion.div>

                                <div>
                                    <h3 className="text-2xl font-[Gilmer] text-[#113559]">
                                        {r.title}
                                    </h3>
                                    <p className="mt-3 text-[#113559]/70 font-[Montserrat] leading-relaxed max-w-md">
                                        {r.desc}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT — Clean Image only */}
                            <motion.div
                                style={{ opacity: transforms[i].opacity }}
                                className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden rounded-2xl shadow-lg"
                            >
                                <Image
                                    src={r.img}
                                    alt={r.title}
                                    fill
                                    className="object-cover rounded-2xl brightness-[0.7] transition-all duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={i === 0}
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
