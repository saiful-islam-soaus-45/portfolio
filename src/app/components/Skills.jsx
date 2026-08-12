"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaServer,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiFirebase,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern, responsive and interactive interfaces.",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        level: 90,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        level: 88,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        level: 85,
      },
      {
        name: "React.js",
        icon: <FaReact />,
        level: 85,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        level: 78,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 88,
      },
    ],
  },

  {
    title: "Backend",
    description: "Creating APIs, server-side logic and application architecture.",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: 82,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 82,
      },
      {
        name: "REST API",
        icon: <FaServer />,
        level: 80,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 65,
      },
    ],
  },

  {
    title: "Database & Tools",
    description: "Managing data, development workflow and deployment.",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: 82,
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: 85,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        level: 85,
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        level: 78,
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        level: 75,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        level: 65,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 text-white sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#19d5c5]/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#19d5c5]/[0.025] blur-[150px]" />

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
            My Expertise
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#19d5c5] to-[#9bf5ed] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8fa7a9] sm:text-lg">
            Technologies and tools I use to build modern, scalable and
            user-friendly web applications.
          </p>
        </motion.div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mb-10 overflow-hidden rounded-[30px] border border-[#19d5c5]/15 bg-[#071819]/70 p-8 backdrop-blur-sm sm:p-10"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-[#19d5c5]/[0.07] blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">

            {/* Left */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#19d5c5]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#19d5c5]">
                  Main Stack
                </span>
              </div>

              <h3 className="text-3xl font-extrabold sm:text-4xl">
                MERN Stack{" "}
                <span className="text-[#19d5c5]">Developer</span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#81999b] sm:text-base">
                I have learned and practiced the MERN stack for building
                full-stack web applications, from responsive frontend
                interfaces to backend APIs and database management.
              </p>
            </div>

            {/* MERN Icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              {[
                {
                  name: "MongoDB",
                  icon: <SiMongodb />,
                },
                {
                  name: "Express",
                  icon: <SiExpress />,
                },
                {
                  name: "React",
                  icon: <FaReact />,
                },
                {
                  name: "Node",
                  icon: <FaNodeJs />,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.08,
                  }}
                  className="group flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-[#19d5c5]/15 bg-[#0a1d1e] text-[#19d5c5] transition-all duration-300 hover:border-[#19d5c5]/40 hover:bg-[#0d2425] hover:shadow-[0_10px_35px_rgba(25,213,197,0.12)] sm:h-20 sm:w-20"
                >
                  <div className="text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                    {item.icon}
                  </div>

                  <span className="mt-1 hidden text-[10px] font-medium text-[#789193] sm:block">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              className="group rounded-[26px] border border-[#19d5c5]/10 bg-[#071819]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#19d5c5]/25 hover:bg-[#0a1d1e]"
            >
              {/* Category Header */}
              <div className="mb-7">
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#789193]">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg text-[#19d5c5]">
                          {skill.icon}
                        </span>

                        <span className="text-sm font-semibold text-[#c5d3d4]">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-xs font-medium text-[#668183]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#102526]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + index * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#19d5c5] to-[#75eee3]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-[#19d5c5]/10 bg-[#071819]/50 px-6 py-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-[#718a8c]">
            <span>JavaScript</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>React</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>Node.js</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>Express.js</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>MongoDB</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>Next.js</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>Tailwind CSS</span>
            <span className="text-[#19d5c5]/40">•</span>
            <span>Git & GitHub</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}