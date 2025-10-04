import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/Services";
import MissionVision from "@/components/MissionVision";
import Head from "next/head";
import Footer from "@/components/Footer";
export default function Home() {
    return (
        <>
            <Head>
                <title>Andro Solutions | Driving Innovation in Technology & Business</title>
                <meta name="description"
                      content="Andro Solutions delivers innovative technology, software, and business solutions to help organizations grow and succeed. Explore our services, projects, and expertise."/>
                <meta name="keywords"
                      content="Andro Solutions, technology solutions, software development, business innovation, IT services"/>
                <meta property="og:title" content="Andro Solutions | Driving Innovation in Technology & Business"/>
                <meta property="og:description"
                      content="We help businesses transform with cutting-edge technology, creative solutions, and impactful results."/>
                <meta property="og:image" content="/og-images/home.jpg"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content=""/>
            </Head>

            <Hero/>
            <ServicesSection/>
            <MissionVision/>
            <div>
            <section className="px-2 pb-2 md:px-4 md:pb-4 overflow-hidden relative">
                <ContactSection/>
            </section>
                <div className="sticky bottom-0 z-10">
                    <Footer/>
                </div>
            </div>
        </>
    );
}
