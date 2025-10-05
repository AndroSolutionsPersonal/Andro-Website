"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Code2, Users, Briefcase, Palette } from "lucide-react";

// Import images from assets/services
import uiuxImg from "@/assets/services/UIUX.png";
import fullstackImg from "@/assets/services/Fullstack.png";
import smmImg from "@/assets/services/SMM.png";
import consultancyImg from "@/assets/services/SC.png";
import graphicImg from "@/assets/services/GD.png";

const services = [
    {
        title: "UI/UX Design",
        description:
            "We craft user-centered digital experiences that combine functionality with aesthetic appeal, ensuring smooth and engaging journeys.",
        icon: <PenTool className="w-8 h-8 text-primary" />,
        href: "/services#UIUX",
        image: uiuxImg,
    },
    {
        title: "Full Stack Development",
        description:
            "End-to-end development services, covering front-end, back-end, and databases with modern frameworks and scalable architecture.",
        icon: <Code2 className="w-8 h-8 text-primary" />,
        href: "/services#fullstack",
        image: fullstackImg,
    },
    {
        title: "Social Media Management",
        description:
            "Boost your brand presence online through tailored social strategies, creative campaigns, and analytics-driven growth.",
        icon: <Users className="w-8 h-8 text-primary" />,
        href: "/services#SMM",
        image: smmImg,
    },
    {
        title: "Software Consultancy",
        description:
            "We provide expert guidance on system design, optimization, and digital transformation to meet your business needs.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        href: "/services#Consultancy",
        image: consultancyImg,
    },
    {
        title: "Graphic Design",
        description:
            "From logos to full brand identities, we deliver compelling visual content that resonates with your audience.",
        icon: <Palette className="w-8 h-8 text-primary" />,
        href: "/services#Graphic",
        image: graphicImg,
    },
];

// Shared card design (used for both desktop + mobile)
const ServiceCard = ({ service, motionProps }) => (
    <motion.div {...motionProps} className="w-full max-w-[840px]">
        <Card
            className="relative w-full h-[400px] sm:h-[400px] lg:h-[400px] rounded-4xl overflow-hidden group shadow-xl"
            style={{
                backgroundImage: `url(${service.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition duration-500 group-hover:from-black/60" />

            <CardContent className="relative z-20 flex flex-col justify-end h-full p-10" >
                <div className="flex items-center space-x-4 mb-4" >
                    {/*<div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">*/}
                    {/*    {service.icon}*/}
                    {/*</div>*/}
                    <h3 className="text-3xl sm:text-3xl font-gilmer text-white drop-shadow-lg">
                        {service.title}
                    </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-200 font-montserrat drop-shadow-md">
                    {service.description}
                </p>
                <a
                    href={service.href}
                    className="inline-flex items-center mt-6 text-lg font-medium text-white hover:text-secondary transition"
                >
                    Learn more →
                </a>
            </CardContent>
        </Card>
    </motion.div>
);

// Desktop animation wrapper
const DesktopServiceCard = ({ service }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start center", "end center"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1.05, 1.05, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.6, 1, 1, 0.6]);

    return (
        <ServiceCard
            service={service}
            motionProps={{ ref: cardRef, style: { scale, opacity } }}
        />
    );
};

// Mobile animation wrapper (sticky scroll)
const MobileServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const stickyTop = `calc(14rem + ${index * 2.5}rem)`;

    return (
        <ServiceCard
            service={service}
            motionProps={{
                ref: cardRef,
                style: {
                    position: "sticky",
                    top: stickyTop,
                    zIndex: index + 1,
                    y,
                    opacity,
                },
                className: "mb-10",
            }}
        />
    );
};

export default function ServicesSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const headingY = useTransform(scrollYProgress, [0.3, 0.1], ["50%", "0%"]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const paragraphY = useTransform(scrollYProgress, [0.08, 0.18], ["30%", "0%"]);
    const paragraphOpacity = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);

    return (
        <section ref={containerRef} className="relative bg-foreground" id="services">
            {/* Desktop */}
            <div className="hidden lg:flex flex-row min-h-screen items-stretch">
                {/* Left column */}
                <div className="w-1/2 relative">
                    <div className="sticky top-1/2 -translate-y-1/2 pl-[100px] text-left z-10">
                        <motion.h2
                            style={{ y: headingY, opacity: headingOpacity }}
                            className="text-4xl lg:text-5xl font-gilmer text-primary mb-10"
                        >
                            Our Services
                        </motion.h2>

                        <motion.p
                            style={{ y: paragraphY, opacity: paragraphOpacity }}
                            className="max-w-lg text-lg text-secondary-foreground font-montserrat"
                        >
                            Discover the range of solutions we provide to help your business
                            thrive in the digital age.
                        </motion.p>
                    </div>
                </div>

                {/* Right column */}
                <div className="w-1/2 relative flex flex-col items-start pl-[100px] pr-0 space-y-16 py-24 mr-24">
                    {services.map((service, index) => (
                        <DesktopServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <div className="sticky top-0 z-20 bg-foreground py-10 px-6 text-center">
                    <h2 className="text-3xl font-gilmer text-primary mb-4">Our Services</h2>
                    <p className="max-w-lg mx-auto text-base text-secondary-foreground font-montserrat">
                        Discover the range of solutions we provide to help your business
                        thrive in the digital age.
                    </p>
                </div>

                <div className="relative z-10 px-6 pb-12">
                    {services.map((service, index) => (
                        <MobileServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
