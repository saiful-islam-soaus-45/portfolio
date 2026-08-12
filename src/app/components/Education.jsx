"use client";

import { motion } from "framer-motion";
import {
    FaSchool,
    FaUniversity,
    FaGraduationCap,
    FaAward,
} from "react-icons/fa";

export default function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl px-6 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#2dd4bf]">
                        Academic Background
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                        My <span className="text-[#2dd4bf]">Education</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#9fb1b4] sm:text-lg">
                        My academic journey from secondary education to
                        Computer Science and Engineering.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid gap-8 lg:grid-cols-2">

                    {/* ================= SCHOOL & COLLEGE ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ y: -8 }}
                        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#071719]/70 p-7 backdrop-blur-xl sm:p-9"
                    >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2dd4bf]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2dd4bf]/20" />

                        {/* Header */}
                        <div className="relative mb-8 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2dd4bf]/20 bg-[#2dd4bf]/10">
                                <FaSchool className="text-2xl text-[#2dd4bf]" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2dd4bf]">
                                    School & College
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-white">
                                    Secondary Education
                                </h3>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative ml-2 border-l border-[#2dd4bf]/20 pl-7">

                            {/* JSC */}
                            <div className="relative pb-8">
                                <span className="absolute -left-[36px] top-1 h-4 w-4 rounded-full border-4 border-[#071719] bg-[#2dd4bf]" />

                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <h4 className="text-lg font-bold text-white">
                                        Junior School Certificate
                                    </h4>

                                    <span className="shrink-0 rounded-full bg-[#2dd4bf]/10 px-3 py-1 text-xs font-semibold text-[#2dd4bf]">
                                        2016
                                    </span>
                                </div>

                                <p className="text-sm text-[#91a4a7]">
                                    JSC
                                </p>

                                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <FaAward className="text-[#2dd4bf]" />
                                    <span className="text-sm font-semibold text-white">
                                        GPA 5.00
                                    </span>
                                </div>
                            </div>

                            {/* SSC */}
                            <div className="relative pb-8">
                                <span className="absolute -left-[36px] top-1 h-4 w-4 rounded-full border-4 border-[#071719] bg-[#2dd4bf]" />

                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <h4 className="text-lg font-bold text-white">
                                        Secondary School Certificate
                                    </h4>

                                    <span className="shrink-0 rounded-full bg-[#2dd4bf]/10 px-3 py-1 text-xs font-semibold text-[#2dd4bf]">
                                        2018
                                    </span>
                                </div>

                                <p className="text-sm text-[#91a4a7]">
                                    Sakhipur PM Pilot High School
                                </p>

                                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <FaAward className="text-[#2dd4bf]" />
                                    <span className="text-sm font-semibold text-white">
                                        GPA 5.00
                                    </span>
                                </div>
                            </div>

                            {/* HSC */}
                            <div className="relative">
                                <span className="absolute -left-[36px] top-1 h-4 w-4 rounded-full border-4 border-[#071719] bg-[#2dd4bf]" />

                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <h4 className="text-lg font-bold text-white">
                                        Higher Secondary Certificate
                                    </h4>

                                    <span className="shrink-0 rounded-full bg-[#2dd4bf]/10 px-3 py-1 text-xs font-semibold text-[#2dd4bf]">
                                        2021
                                    </span>
                                </div>

                                <p className="text-sm text-[#91a4a7]">
                                    Science • Sakhipur PM Pilot High School
                                </p>

                                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                                    <FaAward className="text-[#2dd4bf]" />
                                    <span className="text-sm font-semibold text-white">
                                        GPA 5.00
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="mt-8 h-[2px] w-0 bg-[#2dd4bf] transition-all duration-500 group-hover:w-full" />
                    </motion.div>

                    {/* ================= UNIVERSITY ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ y: -8 }}
                        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#071719]/70 p-7 backdrop-blur-xl sm:p-9"
                    >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#2dd4bf]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2dd4bf]/20" />

                        {/* Header */}
                        <div className="relative mb-8 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2dd4bf]/20 bg-[#2dd4bf]/10">
                                <FaUniversity className="text-2xl text-[#2dd4bf]" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2dd4bf]">
                                    Higher Education
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-white">
                                    University
                                </h3>
                            </div>
                        </div>

                        {/* University Content */}
                        <div className="relative">

                            {/* Degree */}
                            <div className="mb-7">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#718487]">
                                    Degree
                                </p>

                                <h4 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                                    Bachelor of Science
                                </h4>

                                <p className="mt-1 text-lg font-medium text-[#2dd4bf]">
                                    Computer Science & Engineering
                                </p>
                            </div>

                            {/* University */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                <p className="text-xs font-semibold uppercase tracking-widest text-[#718487]">
                                    Institution
                                </p>

                                <p className="mt-2 text-lg font-semibold text-white">
                                    Dhaka International University
                                </p>
                            </div>

                            {/* Details */}
                            <div className="mt-5 grid grid-cols-2 gap-4">

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-xs uppercase tracking-widest text-[#718487]">
                                        Session
                                    </p>

                                    <p className="mt-2 text-base font-semibold text-white">
                                        2021 - 2025
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-xs uppercase tracking-widest text-[#718487]">
                                        Field
                                    </p>

                                    <p className="mt-2 text-base font-semibold text-white">
                                        CSE
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-5">
                                <p className="text-sm leading-7 text-[#91a4a7] sm:text-base">
                                    Completed my undergraduate degree in
                                    Computer Science and Engineering, building
                                    a strong foundation in programming,
                                    software development, web technologies,
                                    databases and modern computing.
                                </p>
                            </div>

                            {/* Graduation Badge */}
                            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 p-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2dd4bf]/10">
                                    <FaGraduationCap className="text-xl text-[#2dd4bf]" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        B.Sc. in Computer Science & Engineering
                                    </p>

                                    <p className="text-xs text-[#819497]">
                                        Dhaka International University
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="mt-8 h-[2px] w-0 bg-[#2dd4bf] transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071719]/50 px-6 py-4 backdrop-blur-xl">
                        <FaGraduationCap className="text-xl text-[#2dd4bf]" />

                        <p className="text-sm text-[#9fb1b4]">
                            Building knowledge, skills and experience through
                            continuous learning.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}