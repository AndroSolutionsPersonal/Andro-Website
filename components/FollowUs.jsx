"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaFacebookF,
    FaXTwitter, // For X (Twitter)
    FaTwitter,  // Fallback
} from "react-icons/fa6";

import SocialImg from "@/assets/FollowUs.png"; // transparent illustration

const socials = [
    {
        name: "Instagram",
        icon: <FaInstagram className="w-8 h-8 text-pink-500" />,
        link: "https://instagram.com/yourpage",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="w-8 h-8 text-blue-600" />,
        link: "https://linkedin.com/company/yourpage",
    },
    {
        name: "Telegram",
        icon: <FaTelegram className="w-8 h-8 text-sky-500" />,
        link: "https://t.me/andro_solutions",
    },
    {
        name: "Facebook",
        icon: <FaFacebookF className="w-8 h-8 text-blue-700" />,
        link: "https://www.facebook.com/share/17FYccYdb6/",
    },
    {
        name: "X",
        icon: (
            <FaXTwitter className="w-8 h-8 text-black" /> || (
                <FaTwitter className="w-8 h-8 text-white" />
            )
        ),
        link: "https://x.com/Andro_Solutions",
    },
];

export default function FollowUsSection() {
    return (
        <section
            id="follow-us"
            className="relative h-screen w-screen flex items-center justify-center bg-foreground z-10"
        >
            {/* Parent box filling the screen but with padding + rounded edges */}
            <div className="h-full w-full bg-foreground rounded-3xl shadow-2xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-evenly">
                {/* Left illustration */}
                <div className="w-full lg:w-1/2 flex justify-center items-end mb-12 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative w-full flex justify-center"
                    >
                        <Image
                            src={SocialImg}
                            alt="Socials Illustration"
                            className="object-contain max-h-[500px] md:max-h-[800px] w-auto"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Right content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-gilmer text-primary mb-6"
                    >
                        Stay Connected
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-lg max-w-xl font-montserrat mb-10 text-primary/80"
                    >
                        Follow Andro Solutions across all major platforms to stay updated
                        with our latest news, insights, and projects.
                    </motion.p>

                    {/* Social icons */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-lg mx-auto lg:mx-0">
                        {socials.map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group"
                            >
                                <div className=" rounded-full p-4 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    {social.icon}
                                </div>
                                <p className="mt-3 text-sm font-montserrat text-primary/70 group-hover:text-primary">
                                    {social.name}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
