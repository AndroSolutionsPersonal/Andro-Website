"use client"

import { useEffect, useState } from "react"
import { animate, scroll, inView } from "motion"
import Image from "next/image"
import { ExternalLink, Github, Info } from "lucide-react"
import toast from "react-hot-toast"
import ProjectsHeader from "@/components/ProjectsHeader"

import AboutHero from "@/assets/ProjectsHeader.jpg"
import AndroWebsite from "@/assets/projects/AndroWebsite.png"
import SpawnPoint from "@/assets/projects/SpawnPoint.png"
import StreamSynx from "@/assets/projects/StreamSynx.png"

const projects = [
  {
    id: "#001",
    title: "StreamSynx",
    description:
      "A synchronized streaming platform for couples and groups to enjoy movies or sports together remotely.",
    image: StreamSynx,
    liveDemo: "https://streamsynx.vercel.app",
    github: "https://github.com/example/streamsynx",
    technologies: ["Next.js", "Firebase", "Tailwind", "TMDB API"],
    details:
      "StreamSynx allows real-time video synchronization between users in different locations. It includes room management, playback controls, and low-latency communication to simulate a shared watching experience.",
  },
  {
    id: "#002",
    title: "AndroWebsite",
    description:
      "Modern company website showcasing Andro Solutions services, portfolio, and contact information.",
    image: AndroWebsite,
    liveDemo: "https://andro-solutions.vercel.app",
    github: "", // not available
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    details:
      "The official Andro Solutions website designed with a clean aesthetic. Features responsive layouts, smooth animations, and optimized SEO structure.",
  },
  {
    id: "#003",
    title: "Spawn Point Hospital Mgmt",
    description:
      "Simulation and management project centered around hospital systems and patient care design.",
    image: SpawnPoint,
    liveDemo: "",
    github: "",
    technologies: ["C#", "Guna UI", "SQL"],
    details:
      "Spawn Point Hospital Management lets players build, manage, and optimize a hospital. It includes patient AI, staff scheduling, and resource allocation challenges.",
  },
  {
    id: "#004",
    title: "Homely",
    description:
      "A platform connecting clients with trusted household service providers, featuring location-based hiring and real-time tracking.",
    image: AboutHero,
    liveDemo: "",
    github: "https://github.com/example/homely",
    technologies: ["Next.js", "Firebase", "Node.js"],
    details:
      "Homely is a service marketplace for household work. Clients can hire, track, and rate providers, while providers manage schedules and payments within the platform.",
  },
]

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const items = document.querySelectorAll(".project-container")

    // Horizontal scroll animation
    scroll(
      animate(".project-group", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.querySelector(".project-group-container") }
    )

    // Animate each project on enter
    items.forEach((item) => {
      inView(item, () => {
        animate(item, { opacity: [0, 1], y: [80, 0] }, { duration: 1, easing: "ease-out" })
      })
    })
  }, [])

  const handleLinkClick = (url, type) => {
    if (!url) {
      toast.error(`${type} link is not available.`)
    } else {
      window.open(url, "_blank")
    }
  }

  return (
    <article id="projects" className="w-[100vw] p-2 md:p-4">
      <ProjectsHeader />

      <section className="project-group-container h-[500vh] relative">
        <div className="sticky top-0 overflow-hidden h-screen">
          <ul className="project-group flex">
            {projects.map((project) => (
              <li
                key={project.id}
                className="project-container flex flex-col items-center justify-center w-screen h-screen flex-shrink-0 px-4 md:px-8 opacity-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-[45vw] h-[40vh] md:h-[25vw] object-contain rounded-2xl shadow-lg"
                />
                <aside className="mt-4 flex flex-col items-center bg-secondary/10 py-6 px-4 md:px-8 rounded-2xl w-full md:w-[45vw] outline-1 outline-secondary/40">
                  <h3 className="text-4xl font-bold">{project.id}</h3>
                  <h4 className="mt-2 text-2xl font-semibold">
                    {project.title}
                  </h4>
                  <p className="mt-4 max-w-md text-center text-secondary">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-lg hover:scale-105 transition"
                    >
                      <Info size={18} />
                    </button>
                    <button
                      onClick={() => handleLinkClick(project.github, "GitHub")}
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                    >
                      <Github size={18} /> <span>GitHub</span>
                    </button>
                    <button
                      onClick={() => handleLinkClick(project.liveDemo, "Live Demo")}
                      className="flex items-center gap-2 bg-transparent text-primary hover:outline-1 outline-primary/30 px-4 py-2 rounded-lg hover:scale-105 transition"
                    >
                      <ExternalLink size={18} /> <span>Live Demo</span>
                    </button>
                  </div>
                </aside>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-3xl w-[90%] p-6 relative animate-in fade-in slide-in-from-bottom-8 duration-300"
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            <Image
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-[200px] object-contain rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {activeProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-700">{activeProject.details}</p>
          </div>
        </div>
      )}
    </article>
  )
}
