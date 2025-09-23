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

    // Heading motion (left column)
    const headingY = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], ["100%", "0%", "0%", "50%"]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.95, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative flex min-h-[600vh] bg-white">
            {/* Left column */}
            <div className="w-1/2 relative">
                <motion.div
                    style={{ y: headingY, opacity: headingOpacity }}
                    className="sticky top-1/2 -translate-y-1/2 pl-[100px] text-left z-10"
                >
                    <h2 className="text-5xl font-gilmer text-primary mb-4">Our Services</h2>
                    <p className="max-w-md text-secondary-foreground font-montserrat">
                        Discover the range of solutions we provide to help your business thrive in the digital age.
                    </p>
                </motion.div>
            </div>

            {/* Right column */}
            <div className="w-1/2 relative">
                <div className="relative h-[600vh]">
                    {services.map((service, index) => {
                        const total = services.length;

                        // Cards animate only after heading is centered
                        const sectionStart = 0.2;
                        const sectionEnd = 0.9;
                        const slice = (sectionEnd - sectionStart) / total;

                        const start = sectionStart + slice * index;
                        const holdStart = start + slice * 0.25; // point when it reaches center
                        const holdEnd = start + slice * 0.75; // hold in center
                        const end = start + slice;

                        // Y movement: bottom -> center -> hold -> top
                        const cardY = useTransform(
                            scrollYProgress,
                            [start, holdStart, holdEnd, end],
                            ["100%", "0%", "0%", "-100%"]
                        );

                        // Fade only when leaving top
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
                                <Card className="w-[420px] mx-auto bg-secondary shadow-lg rounded-2xl">
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
