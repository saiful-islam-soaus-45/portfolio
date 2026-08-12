"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const projects = [
    {
        title: "StartupForge-Team Builder Platform",
        description:
            "A MERN-based startup platform connecting founders with collaborators, featuring startup opportunities,and a powerful admin dashboard for complete platform control.",
        image: "/images/projects/startup.png",
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
        github: "https://github.com/saiful-islam-soaus-45/StartupForge-Client",
        live: "https://startupforge-client-navy.vercel.app",
    },
    {
        title: "DriveFleet — Car Rental Management Platform",
        description:
            "DriveFleet is a modern car rental platform for browsing vehicles, managing bookings, and enjoying a smooth rental experience.",
        image: "/images/projects/driveFleet.png",
        technologies: [
            { name: "React", icon: <FaReact /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
        github: "https://github.com/saiful-islam-soaus-45/DriveFleet-Car-Rental-Client",
        live: "https://drivefleet-car-rental.vercel.app",
    },
    {
        title: "Online Book Borrowing Platform",
        description:
            "A modern platform to browse, search, and borrow books online with a simple and responsive user experience.",
        image: "/images/projects/book.png",
        technologies: [
            { name: "React", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Node.js", icon: <FaNodeJs /> },
        ],
        github: "https://github.com/saiful-islam-soaus-45/assignment-8",
        live: "https://assignment-8-nine-sigma.vercel.app",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden py-24 text-white sm:py-32">
            <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-10">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#19d5c5]">
                        My Recent Work
                    </span>

                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-[#19d5c5] to-[#9bf5ed] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8fa7a9] sm:text-lg">
                        Some of the projects I&apos;ve built while learning and working
                        with modern web technologies.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            whileHover={{ y: -10 }}
                            className="group overflow-hidden rounded-[26px] border border-[#19d5c5]/10 bg-[#071819]/80 shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-500 hover:border-[#19d5c5]/30 hover:shadow-[0_20px_60px_rgba(25,213,197,0.10)]"
                        >
                            {/* Project Image */}
                            <div className="relative h-[220px] overflow-hidden bg-[#0a1d1e]">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.6 }}
                                    className="h-full w-full object-cover"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#071819] via-transparent to-transparent opacity-80" />

                                {/* Project Number */}
                                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#19d5c5]/20 bg-[#061113]/80 text-sm font-bold text-[#19d5c5] backdrop-blur-md">
                                    0{index + 1}
                                </div>

                                {/* Hover Code Icon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#19d5c5]/30 bg-[#061113]/80 text-[#19d5c5] backdrop-blur-md"
                                >
                                    <FaCode />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#19d5c5]">
                                    {project.title}
                                </h3>

                                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#81999b]">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#19d5c5]/10 bg-[#0a1d1e] px-2.5 py-1.5 text-xs font-medium text-[#8fb5b6] transition-all duration-300 group-hover:border-[#19d5c5]/20"
                                        >
                                            <span className="text-[#19d5c5]">{tech.icon}</span>
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#19d5c5]/15 bg-[#0a1d1e] px-4 py-2.5 text-sm font-semibold text-[#b7c7c9] transition-all duration-300 hover:border-[#19d5c5]/40 hover:bg-[#0d2425] hover:text-[#19d5c5]"
                                    >
                                        <FaGithub className="text-base" />
                                        GitHub
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#19d5c5] px-4 py-2.5 text-sm font-bold text-[#031011] transition-all duration-300 hover:bg-[#75e9df] hover:shadow-[0_8px_25px_rgba(25,213,197,0.20)]"
                                    >
                                        Live Demo
                                        <FaExternalLinkAlt className="text-xs" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-[#789193]">
                        More projects coming soon...
                    </p>
                </motion.div>
            </div>
        </section>
    );
}