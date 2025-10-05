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
                <title>Our Services | Andro Solutions</title>
                <meta
                    name="description"
                    content="Discover Andro Solutions' services — from software development and design to business consulting and digital transformation."
                />

                <meta
                    name="keywords"
                    content="technology services, software development, business consulting, IT strategy, Andro Solutions services"
                />
                <meta property="og:title" content="Our Services | Andro Solutions" />
                <meta
                    property="og:description"
                    content="Explore our tailored technology and business solutions designed to accelerate your success."
                />
                <meta property="og:image" content="/og-images/services.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/services" />
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
