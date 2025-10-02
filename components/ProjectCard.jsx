"use client"

import Image from "next/image"
import { Github, ExternalLink, Info } from "lucide-react"

export default function ProjectCard({ project, onDetails, onLink }) {
    return (
        <div className="relative group w-[85vw] h-[75vh] md:w-[65vw] md:h-[70vh] flex-shrink-0 overflow-hidden rounded-2xl shadow-xl transition-all duration-500">
            {/* Background Image */}
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-2xl transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl opacity-60 group-hover:opacity-100 transition duration-500" />

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/60 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_#11355955]" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white font-montserrat">
                <h3 className="text-xl md:text-2xl font-gilmer tracking-wide text-secondary">
                    {project.id}
                </h3>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold">{project.title}</h2>
                <p className="mt-3 text-sm md:text-base max-w-md text-gray-200 line-clamp-3">
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex gap-3 flex-wrap">
                    <button
                        onClick={() => onDetails(project)}
                        className="flex items-center gap-2 bg-secondary text-primary px-3 py-2 rounded-lg hover:scale-110 transition"
                    >
                        <Info size={16} /> <span>Details</span>
                    </button>
                    <button
                        onClick={() => onLink(project.github, "GitHub")}
                        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:scale-110 transition"
                    >
                        <Github size={16} /> <span>GitHub</span>
                    </button>
                    <button
                        onClick={() => onLink(project.liveDemo, "Live Demo")}
                        className="flex items-center gap-2 border border-white/40 px-3 py-2 rounded-lg hover:scale-110 transition"
                    >
                        <ExternalLink size={16} /> <span>Live Demo</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
