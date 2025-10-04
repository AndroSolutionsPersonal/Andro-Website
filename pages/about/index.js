// app/about/page.js  (App Router version)

"use client";

import Hero from "@/components/AboutHero";
import whyUs from "@/components/WhyUs";
import Founders from "@/components/Founders";
import WhyUs from "@/components/WhyUs2";
import Head from "next/head";
import VisionMission from "@/components/AboutMV";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <Head>
                <title>About Us | Andro Solutions</title>
                <meta name="description"
                      content="Learn more about Andro Solutions, our mission, vision, and the team driving technology and business innovation."/>
                <meta name="keywords"
                      content="About Andro Solutions, technology company, business innovation team, IT experts"/>
                <meta property="og:title" content="About Us | Andro Solutions"/>
                <meta property="og:description"
                      content="Discover our story, values, and the people behind Andro Solutions."/>
                <meta property="og:image" content="/og-images/about.jpg"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://yourdomain.com/about"/>
            </Head>

            <Hero/>
            <WhyUs/>
            <VisionMission />
            <Founders/>


            {/* Additional About Content */}
            <section className=" relative z-10  max-w-full mx-auto px-6 md:px-12 py-16 text-[#113559] ">
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
            </section><Footer/>


        </main>
    );
}
