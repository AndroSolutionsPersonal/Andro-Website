import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/Services";
import MissionVision from "@/components/MissionVision";

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <MissionVision />
            <section className="px-2 pb-2 md:px-4 md:pb-4 overflow-hidden">
                <ContactSection />
            </section>
        </>
    );
}
