"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "1+",
    label: "Years Learning",
  },
];

const interests = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Building modern and responsive web applications.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description: "Writing maintainable and reusable code.",
  },
  {
    icon: <FaRocket />,
    title: "Problem Solving",
    description: "Turning ideas and problems into practical solutions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#031011] py-24 text-white sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#19d5c5]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#19d5c5]/5 blur-[130px]" />

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
            Get to know me
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#19d5c5] to-[#9bf5ed] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8fa7a9] sm:text-lg">
            A little more about who I am, what I do, and what drives me as a
            developer.
          </p>
        </motion.div>

        {/* ================= MAIN ABOUT CARD ================= */}
        <div className="grid overflow-hidden rounded-[30px] border border-[#19d5c5]/10 bg-[#071819]/80 lg:grid-cols-[0.7fr_1.3fr]">

          {/* ================= LEFT DIV ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[400px] items-center justify-center overflow-hidden border-b border-[#19d5c5]/10 p-8 lg:border-b-0 lg:border-r"
          >
            {/* Decorative Circles */}
            <div className="absolute h-[260px] w-[260px] rounded-full border border-[#19d5c5]/10" />

            <div className="absolute h-[200px] w-[200px] rounded-full border border-[#19d5c5]/10" />

            <div className="absolute h-[140px] w-[140px] rounded-full bg-[#19d5c5]/5 blur-2xl" />

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 h-[190px] w-[190px] overflow-hidden rounded-full border-2 border-[#19d5c5]/30 bg-[#031011] shadow-[0_0_60px_rgba(25,213,197,0.12)]"
            >
              <img
                src="/images/soaus.png"
                alt="Saiful Islam Soaus"
                className="h-full w-full object-cover object-top"
              />
            </motion.div>

            {/* Floating Code Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[20%] flex h-12 w-12 items-center justify-center rounded-xl border border-[#19d5c5]/20 bg-[#0b2021] text-[#19d5c5] shadow-lg"
            >
              <FaCode />
            </motion.div>

            {/* Floating Graduation Icon */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[18%] right-[12%] flex h-12 w-12 items-center justify-center rounded-xl border border-[#19d5c5]/20 bg-[#0b2021] text-[#19d5c5] shadow-lg"
            >
              <FaGraduationCap />
            </motion.div>

            {/* Available For Work */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#19d5c5]/20 bg-[#081819]/90 px-4 py-2 text-xs font-semibold text-[#7dded5] backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#19d5c5]" />
              Available for Work
            </motion.div>
          </motion.div>

          {/* ================= RIGHT DIV ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center p-8 sm:p-10 lg:p-14"
          >
            <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#19d5c5]">
              Hello, I&apos;m
            </span>

            <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
              Saiful Islam{" "}
              <span className="text-[#19d5c5]">Soaus</span>
            </h3>

            <p className="mt-3 text-lg font-medium text-[#b6cbcc]">
              Full-Stack Developer
            </p>

            <div className="mt-6 space-y-4 text-base leading-7 text-[#91a8aa]">
              <p>
                I&apos;m a Computer Science and Engineering graduate and an aspiring
                full-stack developer who enjoys building modern, responsive,
                and user-friendly web applications.
              </p>

              <p>
                I enjoy exploring modern web technologies, solving programming
                problems, and continuously improving my development skills
                through real-world projects.
              </p>

              <p>
                My goal is to build useful, scalable, and meaningful digital
                products while growing as a professional software developer.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-[#19d5c5]/10 bg-[#0a1d1e] p-4 text-center transition-colors duration-300 hover:border-[#19d5c5]/30"
                >
                  <div className="text-2xl font-extrabold text-[#19d5c5] sm:text-3xl">
                    {stat.number}
                  </div>

                  <div className="mt-1 text-xs text-[#789193] sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= INTEREST CARDS ================= */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-[24px] border border-[#19d5c5]/10 bg-[#071819]/70 p-6 transition-all duration-300 hover:border-[#19d5c5]/30 hover:bg-[#0a1d1e]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#19d5c5]/20 bg-[#0b2021] text-xl text-[#19d5c5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#19d5c5] group-hover:text-[#031011]">
                {item.icon}
              </div>

              <h4 className="text-lg font-bold text-white">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#81999b]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}