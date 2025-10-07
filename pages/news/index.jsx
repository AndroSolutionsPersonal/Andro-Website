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

    async function fetchNews() {
        const res = await fetch("/api/news");
        const { data } = await res.json();
        setNews(data || []);
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
                    <h1 className="text-4xl font-bold text-[#113559]">News & Updates</h1>
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
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.length === 0 ? (
                        <p className="text-gray-500 text-center col-span-full">
                            No news found.
                        </p>
                    ) : (
                        filtered.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.02 }}
                                className="cursor-pointer"
                                onClick={() => setSelected(item)}
                            >
                                <Card className="relative h-72 overflow-hidden rounded-xl shadow-md border-0 group">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={item.image_url || "/placeholder-blur.jpg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            placeholder="blur"
                                            blurDataURL="/placeholder-blur.jpg"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    </div>

                                    {/* Overlay Text */}
                                    <CardContent className="relative z-10 h-full flex flex-col justify-end text-white p-5">
                                        <h2 className="text-xl font-semibold line-clamp-2">
                                            {item.title}
                                        </h2>
                                        <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                                            {item.content}
                                        </p>
                                        <p className="text-xs text-gray-300 mt-2">
                                            By {item.author || "Unknown"} •{" "}
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    )}
                </div>

                {/* Dialog for full article */}
                <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
                    {selected && (
                        <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-lg">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={selected.image_url || "/placeholder-blur.jpg"}
                                    alt={selected.title}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="/placeholder-blur.jpg"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h2 className="text-2xl font-bold">{selected.title}</h2>
                                    <p className="text-sm text-gray-200">
                                        By {selected.author || "Unknown"} •{" "}
                                        {new Date(selected.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 bg-white">
                                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
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
