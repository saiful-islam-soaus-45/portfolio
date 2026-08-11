"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#031011] text-white pt-12"
        >
            {/* Background glow - top right */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#19d5c5]/10 blur-[120px]" />

            {/* Background glow - bottom left */}
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#19d5c5]/8 blur-[120px]" />

            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(25,213,197,0.08),transparent_30%)]" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-24 lg:px-12">
                <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-16">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="flex flex-col items-start">

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
                            className="max-w-[700px] text-[40px] font-extrabold leading-[0.98] tracking-[-2.5px] sm:text-[64px] lg:text-[76px]"
                        >
                            Saiful Islam <span className="bg-gradient-to-r from-[#19d5c5] to-[#9bf5ed] bg-clip-text text-transparent">Soaus.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-8 max-w-[700px] text-lg leading-8 text-[#9db3b5] sm:text-xl"
                        >
                            I&apos;m Saiful Islam Soaus, a Computer Science and Engineering student
                            and aspiring full-stack developer. I build responsive,
                            user-friendly web applications using modern technologies and
                            continuously improve my skills through real-world projects.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            {/* Hire Me */}
                            <a
                                href="#contact"
                                className="group inline-flex h-[64px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#20d8c7] to-[#18c4b5] px-9 text-lg font-bold text-[#021312] shadow-[0_10px_35px_rgba(25,213,197,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(25,213,197,0.4)]"
                            >
                                <span>Download Resume</span>

                                <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                            {/*  contact */}
                            <a
                                href="#contact"
                                className="inline-flex h-[64px] items-center justify-center rounded-2xl border border-[#19d5c5]/60 bg-transparent px-9 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#19d5c5]/10"
                            >
                                Contact Me
                            </a>
                        </motion.div>


                    </div>

                    {/* ================= RIGHT IMAGE ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[560px]">

                            {/* Glow behind image */}
                            <div className="absolute inset-8 rounded-[30px] bg-[#19d5c5]/15 blur-[60px]" />

                            {/* Image card */}
                            <div className="relative overflow-hidden rounded-[26px] border border-[#254244] bg-[#081719] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

                                {/* Fake window header */}
                                <div className="flex h-10 items-center gap-2 px-3">
                                    <span className="h-3 w-3 rounded-full bg-[#ff6258]" />
                                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />

                                    <span className="ml-3 text-xs font-medium text-[#72888a]">
                                        Saiful Islam — Portfolio
                                    </span>
                                </div>

                                {/* Actual image */}
                                <div className="relative overflow-hidden rounded-[20px] border border-[#19d5c5]/20 bg-[#0b2021]">
                                    <Image
                                        src="/images/soaus.png"
                                        alt="Saiful Islam"
                                        width={900}
                                        height={1000}
                                        priority
                                        className="h-[470px] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                                    />

                                    {/* Bottom gradient */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#031011]/90 via-[#031011]/30 to-transparent" />

                                    {/* Small label */}
                                    <div className="absolute bottom-5 left-5 rounded-xl border border-[#19d5c5]/30 bg-[#071819]/90 px-4 py-2 backdrop-blur-md">
                                        <p className="text-sm font-semibold text-[#5ceee1]">
                                            Full-Stack Developer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-5 -left-5 rounded-2xl border border-[#19d5c5]/30 bg-[#071819]/95 px-5 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
                            >
                                <p className="text-xs text-[#829a9c]">Currently</p>
                                <p className="font-bold text-[#5ceee1]">
                                    Open to Opportunities
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}