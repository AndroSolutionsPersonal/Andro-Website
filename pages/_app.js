"use client";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    return (
        <LenisProvider>
            <main className="font-sans bg-foreground text-[#113559]">
                <Navbar />

                {/* Routing Loading Animation */}
                {loading && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-[#113559] z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="w-16 h-16 border-4 border-[#B0BCC8] border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        />
                        <p className="ml-4 text-white text-xl font-bold tracking-widest">
                            ANDRO
                        </p>
                    </motion.div>
                )}

                {/* Page Transitions */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={router.asPath}
                        initial={{ opacity: 0, y: 1 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className=""
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>

                <Footer />
                <Toaster
                    position="top-center"
                    reverseOrder={false} />
            </main>
        </LenisProvider>
    );
}
