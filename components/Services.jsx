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
        href: "/services#UIUX"
    },
    {
        title: "Full Stack Development",
        description:
            "End-to-end development services, covering front-end, back-end, and databases with modern frameworks and scalable architecture.",
        icon: <Code2 className="w-6 h-6 text-primary" />,
        href: "/services#fullstack"
    },
    {
        title: "Social Media Management",
        description:
            "Boost your brand presence online through tailored social strategies, creative campaigns, and analytics-driven growth.",
        icon: <Users className="w-6 h-6 text-primary" />,
        href: "/services#SMM"
    },
    {
        title: "Software Consultancy",
        description:
            "We provide expert guidance on system design, optimization, and digital transformation to meet your business needs.",
        icon: <Briefcase className="w-6 h-6 text-primary" />,
        href: "/services#Consultancy",
    },
    {
        title: "Graphic Design",
        description:
            "From logos to full brand identities, we deliver compelling visual content that resonates with your audience.",
        icon: <Palette className="w-6 h-6 text-primary" />,
        href: "/services#Graphic"
    },
];

export default function ServicesSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    });

    // Heading + paragraph animation
    const headingY = useTransform(scrollYProgress, [0, 0.1], ["50%", "0%"]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const paragraphY = useTransform(scrollYProgress, [0.1, 0.2], ["50%", "0%"]);
    const paragraphOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col lg:flex-row bg-foreground min-h-auto lg:min-h-screen"
        >
            {/* Left column */}
            <div className="w-full lg:w-1/2 relative">
                <div className="px-6 py-12 lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:pl-[100px] text-left z-10">
                    <motion.h2
                        style={{ y: headingY, opacity: headingOpacity }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-gilmer text-primary mb-4"
                    >
                        Our Services
                    </motion.h2>

                    <motion.p
                        style={{ y: paragraphY, opacity: paragraphOpacity }}
                        className="max-w-lg text-base sm:text-lg text-secondary-foreground font-montserrat"
                    >
                        Discover the range of solutions we provide to help your business
                        thrive in the digital age.
                    </motion.p>
                </div>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-1/2 relative">
                {/* Mobile: overlapping cards like a deck */}
                <div className="lg:hidden px-6 pb-12">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className={`w-full bg-secondary shadow-lg rounded-2xl ${
                                index > 0 ? "mt-8" : ""
                            }`}
                        >
                            <CardContent className="p-6 flex items-start space-x-4">
                                <div className="p-3 bg-white rounded-xl shadow">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-gilmer text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base mt-2 text-gray-700 font-montserrat">
                                        {service.description}
                                    </p>
                                    <a
                                        href={service.href}
                                        className="inline-flex items-center mt-3 text-sm font-medium text-primary hover:underline"
                                    >
                                        Learn more →
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Desktop: all cards visible with longer hold highlight */}
                <div className="hidden lg:flex flex-col items-center space-y-12 py-24">
                    {services.map((service, index) => {
                        const cardRef = useRef(null);
                        const { scrollYProgress: cardProgress } = useScroll({
                            target: cardRef,
                            offset: ["start center", "end center"],
                        });

                        // Hold the highlight longer at center
                        const scale = useTransform(
                            cardProgress,
                            [0, 0.4, 0.6, 1],
                            [0.95, 1.1, 1.1, 0.95]
                        );
                        const opacity = useTransform(
                            cardProgress,
                            [0, 0.4, 0.6, 1],
                            [0.6, 1, 1, 0.6]
                        );

                        return (
                            <motion.div
                                ref={cardRef}
                                key={index}
                                style={{ scale, opacity }}
                                className="w-full max-w-[420px]"
                            >
                                <Card className="w-full bg-secondary shadow-lg rounded-2xl">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="p-3 bg-white rounded-xl shadow">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-gilmer text-primary">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm mt-2 text-gray-700 font-montserrat">
                                                {service.description}
                                            </p>
                                            <a
                                                href={service.href}
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