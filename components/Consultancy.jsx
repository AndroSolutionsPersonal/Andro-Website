"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, Globe2, ShieldCheck } from "lucide-react";

export default function ConsultancySection() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-foreground text-center px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#113559] mb-4">
                    Tech Consultancy Services
                </h2>
                <p className="text-lg md:text-xl text-[#113559]/80 mb-12">
                    Helping businesses in Ethiopia and Africa grow smarter through
                    technology-driven strategies, expert insights, and tailored solutions.
                    We bridge innovation with local challenges to build sustainable growth.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center mb-16">
                    <Link href="/contact">
                        <button className="px-6 py-3 rounded-lg bg-[#113559] text-white font-medium hover:bg-[#0e2a46] transition">
                            Get Consultancy
                        </button>
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white rounded-2xl shadow-md"
                    >
                        <Lightbulb className="w-10 h-10 text-[#113559] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-[#113559] mb-2">
                            Strategic Guidance
                        </h3>
                        <p className="text-[#113559]/70">
                            Get tailored advice on digital transformation, tech adoption, and
                            innovation strategies designed for your business.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white rounded-2xl shadow-md"
                    >
                        <Globe2 className="w-10 h-10 text-[#113559] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-[#113559] mb-2">
                            Market & Tech Insights
                        </h3>
                        <p className="text-[#113559]/70">
                            Access deep insights into emerging technologies,
                            Ethiopian tech ecosystem, and African market opportunities.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white rounded-2xl shadow-md"
                    >
                        <ShieldCheck className="w-10 h-10 text-[#113559] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-[#113559] mb-2">
                            Risk & Security
                        </h3>
                        <p className="text-[#113559]/70">
                            Ensure safe adoption of new technologies with
                            our security-first consultancy and risk management solutions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
