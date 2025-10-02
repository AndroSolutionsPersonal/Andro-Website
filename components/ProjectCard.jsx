"use client"

import Image from "next/image"
import { Github, ExternalLink, Info } from "lucide-react"

export default function ProjectCard({ project, onDetails, onLink }) {
    return (
        <div className="relative group w-screen h-screen flex-shrink-0 overflow-hidden">
            {/* Background Image */}
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 rounded-2xl" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white font-montserrat">
                <h3 className="text-3xl font-gilmer tracking-wide text-secondary">
                    {project.id}
                </h3>
                <h2 className="mt-2 text-4xl font-bold">{project.title}</h2>
                <p className="mt-3 text-base md:text-lg max-w-xl text-gray-200">
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                    <button
                        onClick={() => onDetails(project)}
                        className="flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-lg hover:scale-105 transition"
                    >
                        <Info size={18} /> <span>Details</span>
                    </button>
                    <button
                        onClick={() => onLink(project.github, "GitHub")}
                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                    >
                        <Github size={18} /> <span>GitHub</span>
                    </button>
                    <button
                        onClick={() => onLink(project.liveDemo, "Live Demo")}
                        className="flex items-center gap-2 border border-white/40 px-4 py-2 rounded-lg hover:scale-105 transition"
                    >
                        <ExternalLink size={18} /> <span>Live Demo</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
