"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
export default function NewsIndex() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchNews() {
        setLoading(true);
        const res = await fetch("/api/news");
        const { data } = await res.json();
        setNews(data || []);
        setLoading(false);
    }

    useEffect(() => {
        fetchNews();
    }, []);

    const filtered = news.filter(
        (n) =>
            n.title.toLowerCase().includes(search.toLowerCase()) ||
            n.author?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="pt-24 px-6 md:px-12 bg-gray-50 min-h-screen">
            <Head>
                <title>Andro Solutions News — Tech Updates, Insights & Announcements</title>

                <meta
                    name="description"
                    content="Stay updated with news from Andro Solutions. Tech insights, product updates, announcements, and industry trends."
                />
                <meta
                    name="keywords"
                    content="tech news, product updates, announcements, technology insights"
                />

                <link rel="canonical" href="https://www.andro-solutions.tech/news" />

                <meta property="og:title" content="Latest News — Andro Solutions" />
                <meta
                    property="og:description"
                    content="Discover updates, insights, announcements, and stories from the Andro Solutions team."
                />
                <meta property="og:image" content="/Logo-1.png" />
                <meta property="og:url" content="https://www.andro-solutions.tech/news" />
                <meta property="og:type" content="website" />
            </Head>



            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-[#113559]">
                        News & Updates
                    </h1>
                    <p className="text-gray-600">
                        Discover the latest from Andro Solutions
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center">
                    <Input
                        placeholder="Search news by title or author..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="max-w-md bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus-visible:ring-[#113559]"
                    />
                </div>

                {/* News Grid */}
                {loading ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({length: 6}).map((_, i) => (
                            <div
                                key={i}
                                className="animate-pulse h-80 bg-gray-200 rounded-xl"
                            ></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.length === 0 ? (
                            <p className="text-gray-500 text-center col-span-full">
                                No news found.
                            </p>
                        ) : (
                            filtered.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{scale: 1.03}}
                                    transition={{duration: 0.3}}
                                    className="cursor-pointer"
                                    onClick={() => setSelected(item)}
                                >
                                    <Card
                                        className="relative h-80 overflow-hidden rounded-2xl border-0 shadow-lg group bg-secondary/80">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={item.image_url || "/placeholder-blur.jpg"}
                                                alt={item.title}
                                                fill
                                                className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                                                placeholder="blur"
                                                blurDataURL="/placeholder-blur.jpg"
                                            />
                                            {/* Overlay for contrast */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"/>
                                        </div>

                                        {/* Overlay Text */}
                                        <CardContent
                                            className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                                            <h2 className="text-2xl font-bold line-clamp-2 drop-shadow-md">
                                                {item.title}
                                            </h2>
                                            <p className="text-sm text-gray-200 mt-2 line-clamp-2">
                                                {item.content}
                                            </p>
                                            <div
                                                className="flex justify-between items-center mt-3 text-xs text-gray-300">
                                                <span>By {item.author || "Unknown"}</span>
                                                <span>
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}

                {/* Dialog for full article */}
                <Dialog open={!!selected} onOpenChange={() => setSelected(null)} classname="test-primary">
                    {selected && (
                        <DialogContent
                            className="max-w-[90vw] md:max-w-[1200px] w-full h-[90vh] overflow-hidden p-0 rounded-2xl bg-white shadow-2xl"
                            style={{scrollBehavior: "smooth"}}
                        >
                            {/* Fixed header image */}
                            <div className="relative md:h-[400px] h-[300px] w-full">
                                <Image
                                    src={selected.image_url || "/placeholder-blur.jpg"}
                                    alt={selected.title}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="/placeholder-blur.jpg"
                                />
                                <div
                                    className="absolute inset-0 bg-primary/70 md:bg-gradient-to-b md:from-primary md:via-primary/70  to-transparent md:to-transparent"></div>
                                <div className="absolute bottom-6 left-8 right-8 text-white space-y-2">
                                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                                        {selected.title}
                                    </h2>
                                    <p className="text-sm md:text-base text-gray-200">
                                        By {selected.author || "Unknown"} •{" "}
                                        {new Date(selected.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* Scrollable content */}
                            <div
                                className="overflow-y-auto h-[calc(90vh-190px)] md:h-[calc(90vh-400px)] p-8 md:p-12 bg-gray-50 scroll-smooth">
                                <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                                    {selected.content}
                                </p>
                            </div>
                        </DialogContent>
                    )}
                </Dialog>
            </div>
        </div>
    );
}
