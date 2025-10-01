"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import graffitiImg from "@/assets/services/GDsec3.png"; // your transparent image

export default function GraphicDesignSection() {
    return (
        <section className="w-full min-h-screen max-h-screen bg-background flex flex-col md:flex-row items-center justify-center px-12 py-24 gap-16" id="Graphic">

            {/* Left Side - Graphic Design Importance */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/3 text-left space-y-4 md:mt-24"
            >
                <h2 className="text-4xl font-gilmer font-bold text-primary mb-6">
                    The Power of Graphic Design
                </h2>
                <p className="text-lg font-montserrat text-muted-foreground leading-relaxed">
                    Graphic design is more than visuals — it’s the language of creativity
                    and communication. Through shapes, colors, and layouts, design tells
                    stories, sparks emotions, and creates impact.
                    <br /><br />
                    It’s essential for capturing attention, delivering messages effectively,
                    and creating lasting impressions in today’s fast-paced digital world.
                </p>
            </motion.div>

            {/* Center Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/3 flex justify-center md:mb-18"
            >
                <Image
                    src={graffitiImg}
                    alt="Andro Solutions Graphic Design"
                    className="w-full object-contain" // increased max width
                    priority
                />
            </motion.div>

            {/* Right Side - Branding Importance */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/3 text-left space-y-4 md:mt-24"
            >
                <h2 className="text-4xl font-gilmer font-bold text-primary mb-6">
                    Branding That Lasts
                </h2>
                <p className="text-lg font-montserrat text-muted-foreground leading-relaxed">
                    Branding goes beyond logos — it defines identity, values, and
                    connection. A strong brand builds trust, recognition, and loyalty.
                    <br /><br />
                    At Andro Solutions, we craft cohesive branding experiences — from
                    posters, social media visuals, and campaigns to full-scale branding
                    systems. We ensure your business not only looks professional but
                    communicates its true essence across every touchpoint.
                </p>
            </motion.div>
        </section>
    );
}
