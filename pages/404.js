"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Custom404() {
    return (
        <motion.main
            className="flex flex-col items-center justify-center min-h-screen bg-white text-[#113559] text-center px-6"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: "easeOut"}}
        >
            <Head>
                <title>Andro Solutions | Driving Innovation in Technology & Business</title>
                <meta name="description"
                      content="Andro Solutions delivers innovative technology, software, and business solutions to help organizations grow and succeed. Explore our services, projects, and expertise."/>
                <meta name="keywords"
                      content="Andro Solutions, technology solutions, software development, business innovation, IT services"/>
                <meta property="og:title" content="Andro Solutions | Driving Innovation in Technology & Business"/>
                <meta property="og:description"
                      content="We help businesses transform with cutting-edge technology, creative solutions, and impactful results."/>
                <meta property="og:image" content="/og-images/home.jpg"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content=""/>
            </Head>

            {/* Animated Number */}
            <motion.h1
                className="text-9xl font-extrabold tracking-widest"
                initial={{scale: 0.8}}
                animate={{scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <p className="mt-4 text-xl md:text-2xl text-[#B0BCC8]">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            {/* Call to Action */}
            <motion.div
                className="mt-8"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8, duration: 0.6}}
            >
                <Link
                    href="/"
                    className="px-6 py-3 rounded-2xl font-semibold text-white bg-[#113559] shadow-lg hover:bg-[#0e2c48] transition"
                >
                    Back to Home
                </Link>
            </motion.div>

            {/* Floating Accent Animation */}
            <motion.div
                className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#113559] to-[#B0BCC8] opacity-20"
                animate={{y: [0, -20, 0]}}
                transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#B0BCC8] to-[#113559] opacity-20"
                animate={{y: [0, 20, 0]}}
                transition={{repeat: Infinity, duration: 6, ease: "easeInOut"}}
            />
        </motion.main>
    );
}
