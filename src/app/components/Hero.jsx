"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { FiDownload, FiFolder, FiMail } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";

export default function Hero() {
    // smooth scroll
    const handleNavClick = (e, target) => {
        e.preventDefault();

        const element = document.querySelector(target);

        if (!element) return;

        const lenis = window.__lenis;

        if (lenis) {
            lenis.scrollTo(element, {
                offset: -80,
                duration: 2,
            });
        } else {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden  text-white pt-12"
        >


            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] lg:max-w-10/12 items-center px-6 py-24 lg:px-12">
                <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-16">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="order-2 flex flex-col items-start lg:order-1">

                        {/* Small badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#19d5c5]/40 bg-[#082020] px-4 py-2"
                        >
                            <span className="h-2 w-2 rounded-full bg-[#19d5c5] shadow-[0_0_12px_#19d5c5]" />

                            <span className="text-sm font-bold tracking-wide text-[#5ceee1]">
                                AVAILABLE FOR WORK · FRESHER
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.1 }}
                            className="max-w-[700px] self-center text-center text-[40px] font-extrabold leading-[0.98] tracking-[-2.5px] sm:text-[64px] lg:self-start lg:text-left lg:text-[76px]"
                        >
                            Saiful Islam{" "}
                            <span className="bg-gradient-to-r from-[#19d5c5] to-[#9bf5ed] bg-clip-text text-transparent">
                                Soaus.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-8 max-w-[700px] text-lg text-center  leading-8 text-[#9db3b5] lg:text-xl"
                        >Computer Science and Engineering graduate and aspiring full-stack developer,focused on building fast, scalable, responsive, and user-friendly web applications with modern technologies.
                        </motion.p>


                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-9 grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:gap-4"
                        >
                            {/* Download Resume */}
                            <a
                                href="/images/resume.pdf"
                                download
                                className="group inline-flex h-[56px] items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-[#20d8c7] to-[#18c4b5] px-5 text-base font-bold text-[#021312] shadow-[0_10px_35px_rgba(25,213,197,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(25,213,197,0.4)] lg:px-6"
                            >
                                <FiDownload className="shrink-0 text-lg transition-transform duration-300 group-hover:-translate-y-1" />
                                <span className="whitespace-nowrap">Download Resume</span>
                            </a>

                            {/* Contact Me */}
                            <a
                                href="#contact"
                                onClick={(e) => handleNavClick(e, "#contact")}
                                className="inline-flex h-[56px] items-center justify-center gap-2 rounded-2xl border border-[#19d5c5]/60 bg-transparent px-5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#19d5c5]/10 lg:px-6"
                            >
                                <FiMail className="text-lg" />
                                <span>Contact Me</span>
                            </a>

                            {/* Projects */}
                            <a
                                href="#projects"
                                onClick={(e) => handleNavClick(e, "#projects")}

                                className="col-span-2 mx-auto inline-flex h-[56px] items-center justify-center gap-2 rounded-2xl border border-[#19d5c5]/60 bg-[#19d5c5]/5 px-7 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#19d5c5]/15 lg:mx-0 lg:px-7"
                            >
                                <FiFolder className="text-lg" />
                                <span>Projects</span>
                            </a>
                        </motion.div>


                    </div>

                    {/* ================= RIGHT PROFILE VISUAL ================= */}
                    {/* ================= PROFILE VISUAL ================= */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative order-1 mx-auto -mt-15 flex h-[430px] w-full max-w-[560px] items-center justify-center h-[500px] lg:order-2 lg:mt-0"
                    >
                        {/* Soft background glow */}
                        <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-[#19d5c5]/10 blur-[90px] sm:h-[350px] sm:w-[350px]" />

                        {/* ================= PROFILE IMAGE ================= */}
                        {/* ================= PROFILE IMAGE ================= */}
                        <div className="relative z-10 h-[260px] w-[260px] overflow-hidden rounded-full border border-[#19d5c5]/20 bg-[#020708] shadow-[0_0_70px_rgba(25,213,197,0.12)] sm:h-[340px] sm:w-[340px]">
                            <Image
                                src="/images/soaus.png"
                                alt="Saiful Islam"
                                width={700}
                                height={700}
                                priority
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        {/* ================= TECHNOLOGY ICONS ================= */}

                        {/* HTML */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 left-[4%] top-[38%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19d5c5]/20 bg-[#081819]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:left-[5%] sm:h-16 sm:w-16"
                        >
                            <FaHtml5 className="text-2xl text-[#e44d26] sm:text-3xl" />
                        </motion.div>

                        {/* CSS */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 3.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 left-[18%] top-[7%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19d5c5]/20 bg-[#081819]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:left-[20%] sm:h-16 sm:w-16"
                        >
                            <FaCss3Alt className="text-2xl text-[#1572b6] sm:text-3xl" />
                        </motion.div>

                        {/* React */}
                        <motion.div
                            animate={{ y: [0, -9, 0] }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 right-[17%] top-[6%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19d5c5]/20 bg-[#081819]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:right-[19%] sm:h-16 sm:w-16"
                        >
                            <FaReact className="text-2xl text-[#61dafb] sm:text-3xl" />
                        </motion.div>

                        {/* JavaScript */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 bottom-[9%] left-[18%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19d5c5]/20 bg-[#081819]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bottom-[7%] sm:left-[20%] sm:h-16 sm:w-16"
                        >
                            <FaJsSquare className="text-2xl text-[#f7df1e] sm:text-3xl" />
                        </motion.div>

                        {/* Node.js */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 3.7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 right-[4%] top-[39%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19d5c5]/20 bg-[#081819]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:right-[5%] sm:h-16 sm:w-16"
                        >
                            <FaNodeJs className="text-2xl text-[#68a063] sm:text-3xl" />
                        </motion.div>

                        {/* Next.js */}
                        <motion.div
                            animate={{ y: [0, 7, 0] }}
                            transition={{
                                duration: 3.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute z-20 bottom-[10%] right-[18%] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#19d5c5]/20 bg-[#081819]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bottom-[8%] sm:right-[20%] sm:h-16 sm:w-16"
                        >
                            <SiNextdotjs className="text-2xl text-white sm:text-3xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}