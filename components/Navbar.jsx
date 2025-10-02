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

            // ✅ Collapse if expanded while scrolling
            if (expanded) setExpanded(false);
        };

        // ✅ Removed the TS type annotation here
        const onMouseMove = (e) => {
            if (e.clientY < 100) setIsVisible(true);
        };

        window.addEventListener("scroll", onScroll);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [lastScrollY, expanded]);

    // Collapse when any link is clicked
    const handleLinkClick = () => {
        if (expanded) setExpanded(false);
    };

    // Sizes
    const collapsedWidth = "280px";
    const collapsedHeight = 60;

    const expandedWidth = "60vw"; // desktop width
    const expandedHeight = 320; // desktop height
    const expandedHeightMobile = 480; // phone height

    return (
        <motion.nav
            initial={{ y: -120 }}
            animate={{ y: isVisible ? 0 : -120 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-full max-w-[95%] md:max-w-none"
        >
            <motion.div
                animate={{
                    width: expanded
                        ? window.innerWidth < 768
                            ? "100%" // phone = full width
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
                    className={`flex items-center px-4 py-3 mb-6 font-primary ${
                        expanded ? "justify-between" : "justify-evenly"
                    }`}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-2"
                        onClick={handleLinkClick}
                    >
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
                                <Link href="/" onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={handleLinkClick}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        // Expanded view
                        <ul className="flex-1 flex items-center justify-center md:justify-start md:px-4 md:gap-4 gap-2 md:text-sm text-xs font-medium flex-wrap">
                            <li>
                                <Link href="/" onClick={handleLinkClick}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={handleLinkClick}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" onClick={handleLinkClick}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" onClick={handleLinkClick}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" onClick={handleLinkClick}>
                                    News
                                </Link>
                            </li>
                            <li className="hidden md:block">
                                <Link href="/contact" onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    )}

                    {/* Toggle button */}
                    <button
                        onClick={() => setExpanded((s) => !s)}
                        className="p-2 rounded-full hover:bg-black/5"
                    >
                        {!expanded ? <Menu size={20} /> : <X size={20} />}
                    </button>
                </div>

                {/* Subsections (expanded only) */}
                {expanded && (
                    <div className="px-6 pb-6 font-secondary">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            {/* Home subsections */}
                            <div>
                                <h4 className="text-base font-semibold mb-2">Home</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/#services" onClick={handleLinkClick}>
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#missionVision" onClick={handleLinkClick}>
                                            Mission & Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" onClick={handleLinkClick}>
                                            Reach Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* About subsections (desktop only) */}
                            <div className="hidden md:block">
                                <h4 className="text-base font-semibold mb-2">About</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/about#why-us" onClick={handleLinkClick}>
                                            Why Work With Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about#vision" onClick={handleLinkClick}>
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about#staff" onClick={handleLinkClick}>
                                            Our Staff
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about#founders" onClick={handleLinkClick}>
                                            Founders
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Services subsections */}
                            <div>
                                <h4 className="text-base font-semibold mb-2">Services</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/services#UIUX" onClick={handleLinkClick}>
                                            UI/UX
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#fullstack" onClick={handleLinkClick}>
                                            Full Stack Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#SMM" onClick={handleLinkClick}>
                                            Social Media Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services#Consultancy"
                                            onClick={handleLinkClick}
                                        >
                                            Software Consultancy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services#Graphic" onClick={handleLinkClick}>
                                            Graphic Design
                                        </Link>
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
