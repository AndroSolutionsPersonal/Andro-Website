"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Code2, Users, Briefcase, Palette } from "lucide-react";

const services = [
    {
        title: "UI/UX Design",
        description:
            "We craft user-centered digital experiences that combine functionality with aesthetic appeal, ensuring smooth and engaging journeys.",
        icon: <PenTool className="w-6 h-6 text-primary" />,
    },
    {
        title: "Full Stack Development",
        description:
            "End-to-end development services, covering front-end, back-end, and databases with modern frameworks and scalable architecture.",
        icon: <Code2 className="w-6 h-6 text-primary" />,
    },
    {
        title: "Social Media Management",
        description:
            "Boost your brand presence online through tailored social strategies, creative campaigns, and analytics-driven growth.",
        icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
        title: "Software Consultancy",
        description:
            "We provide expert guidance on system design, optimization, and digital transformation to meet your business needs.",
        icon: <Briefcase className="w-6 h-6 text-primary" />,
    },
    {
        title: "Graphic Design",
        description:
            "From logos to full brand identities, we deliver compelling visual content that resonates with your audience.",
        icon: <Palette className="w-6 h-6 text-primary" />,
    },
];

export default function ServicesSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Heading animation (desktop only)
    const headingY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ["-100%", "0%", "0%", "50%"]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    const paragraphY = useTransform(scrollYProgress, [0.15, 0.85, 1], ["20%", "0%", "50%"]);
    const paragraphOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.95, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col lg:flex-row bg-white min-h-auto lg:min-h-[600vh]"
        >
            {/* Left column */}
            <div className="w-full lg:w-1/2 relative">
                <div className="px-6 py-12 lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:pl-[100px] text-left z-10">
                    {/* Heading */}
                    <motion.h2
                        style={{ y: headingY, opacity: headingOpacity }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-gilmer text-primary mb-4"
                    >
                        Our Services
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p
                        style={{ y: paragraphY, opacity: paragraphOpacity }}
                        className="max-w-lg text-base sm:text-lg text-secondary-foreground font-montserrat"
                    >
                        Discover the range of solutions we provide to help your business thrive in the digital
                        age.
                    </motion.p>
                </div>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-1/2 relative">
                {/* Mobile: simple stacked deck */}
                <div className="lg:hidden px-6 pb-12 space-y-6">
                    {services.map((service, index) => (
                        <Card key={index} className="w-full bg-secondary shadow-lg rounded-2xl">
                            <CardContent className="p-6 flex items-start space-x-4">
                                <div className="p-3 bg-white rounded-xl shadow">{service.icon}</div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-gilmer text-primary">{service.title}</h3>
                                    <p className="text-sm sm:text-base mt-2 text-gray-700 font-montserrat">
                                        {service.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center mt-3 text-sm font-medium text-primary hover:underline"
                                    >
                                        Learn more →
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Desktop: animated sticky cards */}
                <div className="hidden lg:block relative h-[600vh]">
                    {services.map((service, index) => {
                        const total = services.length;
                        const sectionStart = 0.2;
                        const sectionEnd = 0.9;
                        const slice = (sectionEnd - sectionStart) / total;

                        const start = sectionStart + slice * index;
                        const holdStart = start + slice * 0.25;
                        const holdEnd = start + slice * 0.75;
                        const end = start + slice;

                        const cardY = useTransform(
                            scrollYProgress,
                            [start, holdStart, holdEnd, end],
                            ["100%", "0%", "0%", "-100%"]
                        );

                        const cardOpacity = useTransform(
                            scrollYProgress,
                            [start, holdStart, holdEnd, end],
                            [0, 1, 1, 0]
                        );

                        return (
                            <motion.div
                                key={index}
                                style={{ y: cardY, opacity: cardOpacity }}
                                className="sticky top-1/2 -translate-y-1/2"
                            >
                                <Card className="w-full max-w-[420px] mx-auto bg-secondary shadow-lg rounded-2xl">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="p-3 bg-white rounded-xl shadow">{service.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-gilmer text-primary">{service.title}</h3>
                                            <p className="text-sm mt-2 text-gray-700 font-montserrat">
                                                {service.description}
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-flex items-center mt-3 text-sm font-medium text-primary hover:underline"
                                            >
                                                Learn more →
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
