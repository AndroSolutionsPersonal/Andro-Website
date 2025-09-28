"use client";

import Image from "next/image";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiGraphql,
    SiDocker,
    SiGit,
    SiGithub,
    SiVercel,
    SiTypescript,
} from "react-icons/si";
import Fullstack from "@/assets/MV.png";

export default function FullstackSection() {
    const techIcons = [
        { Icon: SiNextdotjs, name: "Next.js" },
        { Icon: SiReact, name: "React" },
        { Icon: SiTailwindcss, name: "Tailwind CSS" },
        { Icon: SiNodedotjs, name: "Node.js" },
        { Icon: SiMongodb, name: "MongoDB" },
        { Icon: SiPostgresql, name: "PostgreSQL" },
        { Icon: SiMysql, name: "MySQL" },
        { Icon: SiGraphql, name: "GraphQL" },
        { Icon: SiDocker, name: "Docker" },
        { Icon: SiGit, name: "Git" },
        { Icon: SiGithub, name: "GitHub" },
        { Icon: SiVercel, name: "Vercel" },
        { Icon: SiTypescript, name: "TypeScript" },
    ];

    return (
        <section className="bg-foreground text-primary py-20 px-6 md:px-16 min-h-screen">
            {/* Main content grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-gilmer font-bold mb-6">
                        Fullstack Development
                    </h2>
                    <p className="text-lg font-montserrat text-black leading-relaxed">
                        Our Fullstack Development service provides end-to-end solutions,
                        seamlessly connecting the front-end, back-end, and databases into
                        one robust ecosystem. From crafting engaging user interfaces to
                        building efficient APIs and designing scalable databases, we ensure
                        your applications are optimized for performance and growth. By
                        combining modern frameworks, cloud deployment, and agile practices,
                        we empower businesses to transform ideas into reliable, secure, and
                        future-ready digital products that truly make an impact.
                    </p>
                </div>

                {/* Right image with offset box */}
                <div className="relative w-full h-[400px] flex items-center justify-center">
                    {/* Offset box (slightly bigger, behind) */}
                    <div className="absolute w-[95%] h-[95%] rounded-2xl bg-[#B0BCC8] translate-x-8 translate-y-8" />

                    {/* Main image */}
                    <div className="relative w-[95%] h-[95%] rounded-2xl overflow-hidden z-10">
                        <Image
                            src={Fullstack}
                            alt="Fullstack Development"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>


            </div>

            {/* Tech Carousel */}
            <div className="border-t border-white/20 mt-16 pt-10 overflow-hidden">
                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-16 animate-marquee whitespace-nowrap">
                        {techIcons.map(({ Icon, name }, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <Icon className="text-6xl text-primary" />
                                <p className="mt-2 text-sm text-primary">{name}</p>
                            </div>
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {techIcons.map(({ Icon, name }, idx) => (
                            <div
                                key={`dup-${idx}`}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <Icon className="text-6xl text-primary" />
                                <p className="mt-2 text-sm text-primary">{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </section>
    );
}
