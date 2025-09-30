"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import img from "@/assets/AboutHero.png"
export default function VisionMission() {
    return (
        <section className="min-h-screen w-full bg-foreground flex flex-col justify-center px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#113559]">
                    Our Vision & Mission
                </h2>
                <p className="mt-4 text-[#113559]/80">
                    Empowering the next generation of youth and entrepreneurs in Ethiopia and Africa by
                    fostering innovation, supporting new businesses, and driving sustainable technological growth.
                </p>
            </div>

            <div className="relative flex flex-col items-center max-w-screen-xl mx-auto w-full">
                {/* Top card */}
                <Card className="rounded-2xl border border-[#B0BCC8] shadow-sm w-full md:w-2/3 lg:w-1/2 mb-16">
                    <CardContent className="p-6 space-y-3 text-center">
                        <h4 className="font-semibold text-xl text-[#113559]">Purpose</h4>
                        <p className="text-[#113559]/80">
                            Driving innovation, nurturing talent, and building an ecosystem
                            where Ethiopian and African startups thrive globally.
                        </p>
                    </CardContent>
                </Card>

                {/* Grid for image + surrounding cards */}
                <div className="grid grid-cols-3 grid-rows-3 gap-6 items-center justify-center w-full">
                    {/* Top-left card */}
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-sm row-start-1 col-start-1">
                        <CardContent className="p-4 space-y-2">
                            <h4 className="font-semibold text-lg text-[#113559]">Vision</h4>
                            <p className="text-[#113559]/80 text-sm">
                                To be the driving force behind Africa’s technological renaissance.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Top-right card */}
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-sm row-start-1 col-start-3">
                        <CardContent className="p-4 space-y-2">
                            <h4 className="font-semibold text-lg text-[#113559]">Mission</h4>
                            <p className="text-[#113559]/80 text-sm">
                                Empower youth and startups with opportunities, tools, and networks.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Center image */}
                    <div className="row-start-2 col-start-2 flex justify-center items-center">
                        <Image
                            src={img}
                            alt="Vision and Mission Illustration"
                            width={300}
                            height={300}
                            className="rounded-2xl shadow-md object-cover"
                        />
                    </div>

                    {/* Bottom-left card */}
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-sm row-start-3 col-start-1">
                        <CardContent className="p-4 space-y-2">
                            <h4 className="font-semibold text-lg text-[#113559]">Growth</h4>
                            <p className="text-[#113559]/80 text-sm">
                                Supporting sustainable business growth in Ethiopia and Africa.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Bottom-right card */}
                    <Card className="rounded-2xl border border-[#B0BCC8] shadow-sm row-start-3 col-start-3">
                        <CardContent className="p-4 space-y-2">
                            <h4 className="font-semibold text-lg text-[#113559]">Impact</h4>
                            <p className="text-[#113559]/80 text-sm">
                                Building solutions that create jobs and transform communities.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
