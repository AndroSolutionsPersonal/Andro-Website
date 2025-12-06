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
                <title>About Andro Solutions — Building Smart, Scalable Tech</title>

                <meta
                    name="description"
                    content="Learn who we are and how Andro Solutions helps startups and businesses build scalable, affordable digital products with modern engineering and smart design."
                />
                <meta
                    name="keywords"
                    content="About Andro Solutions, software company, tech team, digital innovation, engineering team"
                />

                <meta property="og:title" content="About Andro Solutions"/>
                <meta
                    property="og:description"
                    content="Discover our story, mission, values, and the team behind Andro Solutions."
                />
                <link rel="canonical" href="https://www.andro-solutions.tech/about" />

                <meta property="og:image" content="/Logo-1.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://andro-solutions.tech/about"/>
            </Head>


            <Hero/>
            <WhyUs/>
            <div>

            <div className="md:sticky md:top-0"><VisionMission /></div>
<div className="md:relative"><Founders/></div>
            </div>


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
