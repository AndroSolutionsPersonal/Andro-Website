import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/Services";
import MissionVision from "@/components/MissionVision";
import Head from "next/head";
import Footer from "@/components/Footer";
export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Andro Solutions — Affordable Scalable Digital Product Development</title>

                <meta
                    name="description"
                    content="We build high-value digital products that scale your business without draining your budget. Apps, websites, and software built smart, fast, and cost-efficient."
                />
                <meta
                    name="keywords"
                    content="software development, web development, app development, AI solutions, digital products, Andro Solutions"
                />

                <meta property="og:title" content="Andro Solutions — Digital Product Development"/>
                <meta
                    property="og:description"
                    content="High-value digital solutions built smart, fast, and affordably. Transform your business with modern software and scalable tech."
                />
                <meta property="og:image" content="/Logo-1.png"/>
                <meta property="og:type" content="website"/>
                <link rel="canonical" href="https://www.andro-solutions.tech/" />
                <meta property="og:url" content="https://www.andro-solutions.tech/"/>
            </Head>


            <Hero/>
            <ServicesSection/>
            <MissionVision/>
            <div>
            <section className="px-2 pb-2 md:px-4 md:pb-4 overflow-hidden z-10 relative">
                <ContactSection/>
            </section>
                <div className="sticky bottom-0 ">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
