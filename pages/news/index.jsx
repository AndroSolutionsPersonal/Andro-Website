"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";

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
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="animate-pulse h-72 bg-gray-200 rounded-xl"
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
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                    className="cursor-pointer"
                                    onClick={() => setSelected(item)}
                                >
                                    <Card className="relative h-80 overflow-hidden rounded-2xl border-0 shadow-lg group">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={item.image_url || "/placeholder-blur.jpg"}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                placeholder="blur"
                                                blurDataURL="/placeholder-blur.jpg"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                                        </div>

                                        {/* Overlay Text */}
                                        <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                                            <h2 className="text-2xl font-bold line-clamp-2 drop-shadow-lg">
                                                {item.title}
                                            </h2>
                                            <p className="text-sm text-gray-200 mt-2 line-clamp-2">
                                                {item.content}
                                            </p>
                                            <div className="flex justify-between items-center mt-3 text-xs text-gray-300">
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
                <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
                    {selected && (
                        <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto p-0 rounded-2xl bg-white">
                            {/* Header image */}
                            <div className="relative h-96 w-full">
                                <Image
                                    src={selected.image_url || "/placeholder-blur.jpg"}
                                    alt={selected.title}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="/placeholder-blur.jpg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                        {selected.title}
                                    </h2>
                                    <p className="text-sm text-gray-200">
                                        By {selected.author || "Unknown"} •{" "}
                                        {new Date(selected.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* Article content */}
                            <div className="p-8 md:p-12 space-y-6">
                                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
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
