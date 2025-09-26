"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// NOTE: You should replace these placeholder images with the correct ones for your team.
import founder1 from "@/assets/founder1.png";
import founder2 from "@/assets/founder2.png";

const founders = [
    {
        name: "Cristiano Ronaldo",
        title: "Co-Founder",
        description:
            "Cristiano drives innovation and strategic growth at Andro Solutions. His focus is on building scalable systems and empowering teams.",
        img: founder1,
    },
    {
        name: "LeBron James",
        title: "Co-Founder",
        description:
            "LeBron brings vision and leadership, ensuring that Andro Solutions delivers impactful technology for businesses worldwide.",
        img: founder2,
    },
];

// Animation variants specifically for the description text
const descriptionVariants = {
    rest: {
        opacity: 0,
        height: 0,
        marginTop: "0px",
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    hover: {
        opacity: 1,
        height: "auto", // Animates to the content's natural height
        marginTop: "16px", // Adds a space when it appears
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
};

export default function Founders() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center bg-foreground py-24">
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
                {/* Section heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-gilmer font-bold text-[#113559]">
                        Meet Our Founders
                    </h2>
                    <p className="mt-4 text-lg font-montserrat text-black/80 max-w-3xl mx-auto">
                        Andro Solutions was built on vision, leadership, and a passion for innovation.
                        Our founders bring experience, creativity, and drive to everything we do.
                    </p>
                </div>

                {/* Team members grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {founders.map((member) => (
                        <motion.div
                            key={member.name}
                            className="relative h-96 w-full rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:blur-in"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            {/* Background Image */}
                            <motion.div
                                className="absolute inset-0 z-0"
                                variants={{
                                    rest: { filter: "blur(0px)", scale: 1 },
                                    hover: { filter: "blur(4px)", scale: 1.05 },
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-center"
                                />
                            </motion.div>

                            {/* Overlay Card */}
                            <motion.div
                                className="absolute inset-0 flex flex-col justify-start p-6 bg-white opacity-75  text-left z-10"
                                variants={{
                                    rest: { y: "calc(100% - 110px)" }, // Rest position: Show top 110px of the card
                                    hover: { y: "0%" }, // Hover position: Cover the full image
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {/* Name and Title (Always visible within the card) */}
                                <h3 className="text-2xl font-gilmer font-bold text-[#113559] mb-1">
                                    {member.name}
                                </h3>
                                <p className="font-montserrat text-black/60">
                                    {member.title}
                                </p>

                                {/* Animated Description (Appears on hover) */}
                                <motion.div
                                    className="overflow-hidden"
                                    variants={descriptionVariants}
                                >
                                    <p className=" text-lg font-montserrat text-black/80 leading-relaxed">
                                        {member.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}