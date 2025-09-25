"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const panelRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        // Start a subtle shrink + small padding after mount
        controls.start({
            scale: 0.97, // tiny shrink
            paddingTop: "25px", // subtle padding changes (few pixels)
            paddingBottom: "25px",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderRadius: "30px", // rounded corners when shrunk
            transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay: 0.45 },
        });

        // Load particles.js in the browser and load config from /particles.json
        import("particles.js")
            .then(() => {
                if (typeof window !== "undefined" && window.particlesJS) {
                    window.particlesJS.load("particles-js", "/particles.json", () => {
                        // console.log("particles.json loaded");
                    });
                }
            })
            .catch((err) => {
                console.error("particles.js failed to load:", err);
            });

        // Small particle burst when entering the panel
        const onPanelMouseEnter = (e) => {
            try {
                if (window.pJSDom && window.pJSDom.length) {
                    const pJS = window.pJSDom[0].pJS;
                    const pos = { x: e.clientX, y: e.clientY };
                    if (
                        pJS &&
                        pJS.fn &&
                        pJS.fn.modes &&
                        typeof pJS.fn.modes.pushParticles === "function"
                    ) {
                        // small burst — adjust number (3-8)
                        pJS.fn.modes.pushParticles(5, pos);
                    }
                }
            } catch (err) {
                // non-fatal, ignore
            }
        };

        const panel = panelRef.current;
        if (panel) panel.addEventListener("mouseenter", onPanelMouseEnter);

        return () => {
            if (panel) panel.removeEventListener("mouseenter", onPanelMouseEnter);
        };
    }, [controls]);

    return (
        <section className="relative min-h-screen flex items-center justify-center">
            <motion.div
                ref={panelRef}
                // initial = full-bleed (no padding, no radius)
                initial={{
                    scale: 1,
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    borderRadius: "0px",
                }}
                animate={controls}
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                className="relative flex items-center justify-center"
            >
                {/* Particles canvas + background (brand blue).
            No background on the outer section so this shows through. */}
                <div
                    id="particles-js"
                    className="absolute inset-0 -z-10"
                    style={{ backgroundColor: "#113559" }}
                />

                {/* Content sits above the canvas */}
                <div className="relative z-10 max-w-4xl text-center px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Where Ideas Become Impact
                    </h1>
                    <p className="mt-5 text-md md:text-2xl text-secondary">
                        We transform challenges into opportunities with smart, scalable,
                        and innovative technology solutions. Whether you’re a startup or an
                        enterprise, we help you move faster, work smarter, and grow stronger.
                    </p>
                    <div className="mt-8">
                        <Link href="/contact">
                            <Button
                                className="bg-secondary text-[#113559] font-semibold hover:bg-secondary/60 hover:text-white transition"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
