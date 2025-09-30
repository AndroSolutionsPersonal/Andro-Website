"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import img from "@/assets/AboutMV.png";

export default function VisionMission() {
    return (
        <section className="min-h-screen w-full bg-foreground flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#113559]">Our Vision & Mission</h2>
                <p className="mt-4 text-[#113559]/80">
                    Empowering the next generation of youth and entrepreneurs in Ethiopia and Africa by fostering innovation, supporting new businesses, and driving sustainable technological growth.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg w-full">
                {/* Left column with two cards */}
                <div className="flex flex-col space-y-6">
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-md w-full">
                        <CardContent className="p-4 space-y-2 text-center">
                            <h4 className="font-semibold text-lg text-[#113559]">Vision</h4>
                            <p className="text-[#113559]/80 text-sm">
                                To be the driving force behind Africa’s technological renaissance. We aim to lead transformative projects that empower communities and establish Ethiopia as a tech hub in the region.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-md w-full">
                        <CardContent className="p-4 space-y-2 text-center">
                            <h4 className="font-semibold text-lg text-[#113559]">Growth</h4>
                            <p className="text-[#113559]/80 text-sm">
                                Supporting sustainable business growth in Ethiopia and Africa. Our initiatives provide resources, training, and mentorship to ensure startups scale effectively and contribute to economic development.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                {/* Center column with image */}
                <div className="flex justify-center items-center">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[450px] relative">
                        <Image
                            src={img}
                            alt="Vision and Mission Illustration"
                            fill
                            className="rounded-2xl shadow-lg object-cover aspect-square"
                        />
                    </div>
                </div>
                {/* Right column with two cards */}
                <div className="flex flex-col space-y-6">
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-md w-full">
                        <CardContent className="p-4 space-y-2 text-center">
                            <h4 className="font-semibold text-lg text-[#113559]">Mission</h4>
                            <p className="text-[#113559]/80 text-sm">
                                Empower youth and startups with opportunities, tools, and networks. We connect aspiring entrepreneurs with global markets and provide platforms for skill development and collaboration.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-md w-full">
                        <CardContent className="p-4 space-y-2 text-center">
                            <h4 className="font-semibold text-lg text-[#113559]">Impact</h4>
                            <p className="text-[#113559]/80 text-sm">
                                Building solutions that create jobs and transform communities. Our projects focus on education, infrastructure, and technology to uplift livelihoods across rural and urban areas.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}