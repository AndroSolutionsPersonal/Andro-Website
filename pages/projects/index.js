"use client"

import { useEffect, useState, useRef } from "react"
import { animate, scroll, inView } from "motion"
import Head from "next/head"
import Image from "next/image" // Added import for Image component
import toast from "react-hot-toast"

import ProjectsHeader from "@/components/ProjectsHeader"
import ProjectCard from "@/components/ProjectCard"

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
    github: "",
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
  const projectGroupRef = useRef(null)

  useEffect(() => {
    const projectGroup = projectGroupRef.current
    const items = document.querySelectorAll(".project-container")

    // Calculate the total scrollable width
    const totalWidth = projectGroup.scrollWidth - window.innerWidth

    scroll(
        animate(projectGroup, {
          transform: ["translateX(0)", `translateX(-${totalWidth}px)`],
        }),
        {
          target: document.querySelector(".project-group-container"),
          offset: ["start start", "end end"],
        }
    )

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
        <Head>
          <title>Our Projects | Andro Solutions</title>
          <meta
              name="description"
              content="See how Andro Solutions has helped businesses transform with impactful technology and innovation projects."
          />
          <meta
              name="keywords"
              content="Andro Solutions projects, technology case studies, innovation portfolio, IT solutions"
          />
          <meta property="og:title" content="Our Projects | Andro Solutions" />
          <meta
              property="og:description"
              content="Explore real-world projects where we’ve delivered innovation and measurable results."
          />
          <meta property="og:image" content="/og-images/projects.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com/projects" />
        </Head>

        <ProjectsHeader />

        {/* Projects Header */}
        <section className="py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-4">Our Software Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the innovative solutions we’ve crafted to empower businesses and individuals with cutting-edge technology.
          </p>
        </section>

        {/* Scroll Animation Section */}
        <section className="project-group-container h-[400vh] relative">
          <div className="sticky top-0 overflow-hidden h-screen flex items-center">
            <ul ref={projectGroupRef} className="project-group flex gap-x-8 md:gap-x-12 px-6">
              {projects.map((project) => (
                  <li
                      key={project.id}
                      className="project-container flex items-center justify-center"
                  >
                    <ProjectCard
                        project={project}
                        onDetails={setActiveProject}
                        onLink={handleLinkClick}
                    />
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
                    width={600} // Specify width for next/image
                    height={200} // Specify height for next/image
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