import Head from "next/head";
import ServiceHero from "@/components/ServiceHero";
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

            </>
        </>
    );
}
