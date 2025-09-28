"use client";

import Image from "next/image";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiGraphql,
    SiDocker,
    SiGit,
    SiGithub,
    SiVercel,
    SiAmazonaws,
    SiTypescript,
    SiRedux,
} from "react-icons/si";

export default function FullstackSection() {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-gilmer font-bold leading-tight mb-6">
                        Fullstack Development
                    </h2>
                    <p className="text-lg font-montserrat text-gray-300 leading-relaxed">
                        Our Fullstack Development service provides end-to-end solutions
                        covering front-end, back-end, and databases.
                        We build scalable, modern, and high-performance applications using
                        industry-leading frameworks and best practices — delivering reliable,
                        secure, and future-ready systems for your business.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-2xl border-4 border-emerald-600 translate-x-3 translate-y-3 -z-10" />
                    <Image
                        src="/services/fullstack-showcase.jpg"
                        alt="Fullstack Development"
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover"
                    />
                </div>
            </div>

            {/* Tools / Tech Stack */}
            <div className="border-t border-gray-700 mt-16 pt-10">
                <h3 className="text-center text-2xl font-semibold mb-8">
                    Tools & Technologies We Use
                </h3>
                <div className="flex flex-wrap justify-center gap-10 text-6xl opacity-90">
                    <SiNextdotjs title="Next.js" />
                    <SiReact title="React" className="text-sky-400" />
                    <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />
                    <SiNodedotjs title="Node.js" className="text-green-500" />
                    <SiExpress title="Express" className="text-gray-400" />
                    <SiMongodb title="MongoDB" className="text-green-600" />
                    <SiPostgresql title="PostgreSQL" className="text-sky-600" />
                    <SiMysql title="MySQL" className="text-blue-500" />
                    <SiGraphql title="GraphQL" className="text-pink-500" />
                    <SiDocker title="Docker" className="text-blue-400" />
                    <SiGit title="Git" className="text-orange-500" />
                    <SiGithub title="GitHub" className="text-white" />
                    <SiVercel title="Vercel" className="text-white" />
                    <SiAmazonaws title="AWS" className="text-yellow-500" />
                    <SiTypescript title="TypeScript" className="text-blue-500" />
                    <SiRedux title="Redux" className="text-purple-500" />
                </div>
            </div>
        </section>
    );
}
