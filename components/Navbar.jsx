"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/public/Logo-2.png";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        const onMouseMove = (e) => {
            if (e.clientY < 100) setIsVisible(true);
        };

        window.addEventListener("scroll", onScroll);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [lastScrollY]);

    // Sizes
    const collapsedWidth = "280px";
    const collapsedHeight = 60;

    // Expanded width & height adjust per device
    const expandedWidth = "60vw"; // desktop
    const expandedHeight = 320; // desktop
    const expandedHeightMobile = 480; // taller for phones

    return (
        <motion.nav
            initial={{ y: -120 }}
            animate={{ y: isVisible ? 0 : -120 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-full max-w-[95%] md:max-w-none"
        >
            <motion.div
                animate={{
                    width: expanded
                        ? window.innerWidth < 768
                            ? "100%" // phones = full width
                            : expandedWidth
                        : collapsedWidth,
                    height: expanded
                        ? window.innerWidth < 768
                            ? expandedHeightMobile
                            : expandedHeight
                        : collapsedHeight,
                    borderRadius: expanded ? 30 : 9999,
                }}
                transition={{ duration: 0.3, ease: [0.2, 0.5, 0.9, 1] }}
                style={{ overflow: "hidden" }}
                className={`mx-auto bg-secondary shadow-lg ${
                    isScrolled ? "backdrop-blur-sm bg-secondary/90" : ""
                } ${expanded && "px-2 md:px-0"}`}
            >
                {/* Top Row */}
                <div
                    className={`flex items-center px-4 py-3 ${
                        expanded ? "justify-between" : "justify-evenly"
                    }`}
                >
                    <div className="flex items-center gap-5 flex-wrap">
                        <Link href="/" className="flex items-center gap-2 px-2">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={36}
                                height={36}
                                className="object-contain"
                            />
                        </Link>

                        {/* Collapsed view */}
                        {!expanded ? (
                            <ul className="flex items-center gap-6 text-sm font-medium">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                            </ul>
                        ) : (
                            // Expanded view
                            <ul className="flex items-center gap-4 text-sm font-medium flex-wrap">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/services">Services</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/projects">Projects</Link>
                                </li>
                                <li className="hidden md:block">
                                    {/* Contact only for desktop expanded */}
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={() => setExpanded((s) => !s)}
                        className="p-2 rounded-full hover:bg-black/5"
                    >
                        {!expanded ? <Menu size={20} /> : <X size={20} />}
                    </button>
                </div>

                {/* Subsections (expanded only) */}
                {expanded && (
                    <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            {/* Desktop shows Home + About + Services */}
                            {/* Mobile shows only Home + Services */}
                            <div>
                                <h4 className="text-base font-semibold mb-2">Home</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/mission">Mission & Vision</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Reach Out</Link>
                                    </li>
                                </ul>
                            </div>

                            {typeof window !== "undefined" &&
                                window.innerWidth >= 768 && (
                                    <div>
                                        <h4 className="text-base font-semibold mb-2">About</h4>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link href="/why-us">Why Work With Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/vision">Vision</Link>
                                            </li>
                                            <li>
                                                <Link href="/staff">Our Staff</Link>
                                            </li>
                                            <li>
                                                <Link href="/founders">Founders</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                            <div>
                                <h4 className="text-base font-semibold mb-2">Services</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/services/ui-ux">UI/UX</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/fullstack">
                                            Full Stack Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/social-media">
                                            Social Media Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/consultancy">
                                            Software Consultancy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/design">Graphic Design</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.nav>
    );
}
