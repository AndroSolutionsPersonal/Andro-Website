import Head from "next/head";

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

            <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <div className="max-w-2xl text-center space-y-4">
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className="text-lg text-gray-600">
                        This is a placeholder for the Services page. Content about software
                        development, design, and consulting will go here.
                    </p>
                </div>
            </main>
        </>
    );
}
