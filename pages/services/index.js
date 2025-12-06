import Head from "next/head";
import ServiceHero from "@/components/ServiceHero";
import FullstackSection from "@/components/Fullstack";
import SMMSection from "@/components/SMM";
import UIUXSection from "@/components/UIUX";
import ConsultancySection from "@/components/Consultancy";
import GraphicDesignSection from "@/components/GraphicDesign";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
export default function Services() {
    return (
        <>
            <Head>
                <title>Services — Web, App, AI & Software Development | Andro Solutions</title>

                <meta
                    name="description"
                    content="Explore our full range of services: web development, mobile apps, AI solutions, UI/UX design, and custom software—built for speed, scalability, and startup-friendly pricing."
                />
                <meta
                    name="keywords"
                    content="services, software development services, app development, AI solutions, web development, UI/UX design"
                />

                <meta property="og:title" content="Andro Solutions — Our Services"/>
                <meta
                    property="og:description"
                    content="Web, mobile, AI, UI/UX, and custom software solutions crafted for performance and scalability."
                />
                <link rel="canonical" href="https://www.andro-solutions.tech/services" />
                <meta property="og:image" content="/Logo-1.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://andro-solutions.tech/services"/>
            </Head>


            <>
                <ServiceHero />
                <UIUXSection />
                <div className="relative">
                    {/* Fullstack - Normal flow */}
                    <div className="md:sticky md:top-0 md:z-20">
                        <FullstackSection />
                    </div>

                    {/* SMM - Overlaps on scroll */}
                    <div className="md:relative md:z-30">
                        <SMMSection />
                    </div>
                </div>
                <ConsultancySection />
                <div>
                    <section className="px-2 pb-2 md:px-4 md:pb-4 overflow-hidden relative z-10">
                        <GraphicDesignSection/>
                    </section>
                    <div className="sticky bottom-0">
                        <Footer/>
                    </div>
                </div>


            </>
        </>
    );
}
