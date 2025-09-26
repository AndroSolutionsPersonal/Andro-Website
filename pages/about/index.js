// app/about/page.js  (App Router version)

"use client";

import Hero from "@/components/AboutHero";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <Hero />

            {/* Additional About Content */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-[#113559]">
                <h2 className="text-3xl font-gilmer font-bold mb-6">
                    About Andro Solutions
                </h2>
                <p className="text-lg font-montserrat leading-relaxed mb-6">
                    Andro Solutions is more than a technology company—we are a partner in
                    transformation. Guided by innovation and collaboration, we help
                    organizations of all sizes unlock their potential through digital
                    solutions tailored to their unique challenges.
                </p>
                <p className="text-lg font-montserrat leading-relaxed">
                    Our expertise spans software development, digital consulting, and
                    market insights, enabling us to deliver solutions that are not only
                    scalable but also sustainable. At Andro, we believe in building
                    long-term relationships, empowering businesses to thrive in today’s
                    dynamic landscape.
                </p>
            </section>
        </main>
    );
}
