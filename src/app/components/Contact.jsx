"use client";

import { useState } from "react";
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
    FiGithub,
    FiFacebook,
    FiLinkedin,
} from "react-icons/fi";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

        window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
            subject
        )}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden px-6 py-24 lg:px-12"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Heading */}
                <div className="mb-14 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#19d5c5]/30 bg-[#19d5c5]/5 px-5 py-2 text-sm font-semibold tracking-wide text-[#19d5c5]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#19d5c5]" />
                        GET IN TOUCH
                    </span>

                    <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                         Contact{" "}
                        <span className="text-[#19d5c5]">Me.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                        Have a project idea, collaboration opportunity, or just want to
                        say hello? Feel free to reach out. I&apos;d love to hear from you.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Left Side */}
                    <div className="space-y-4">

                        {/* Email Card */}
                        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#19d5c5]/40 hover:bg-[#19d5c5]/5 hover:shadow-[0_15px_50px_rgba(25,213,197,0.08)]">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#19d5c5]/10 text-[#19d5c5] transition-all duration-300 group-hover:bg-[#19d5c5] group-hover:text-[#031011]">
                                <FiMail size={20} />
                            </div>

                            <p className="text-sm text-slate-500">
                                Email
                            </p>

                            <a
                                href="soausahmedbd91@gmail.com"
                                className="mt-1 block text-base font-semibold text-white transition-colors hover:text-[#19d5c5]"
                            >
                                soausahmedbd91@gmail.com
                            </a>
                        </div>

                        {/* Location Card */}
                        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#19d5c5]/40 hover:bg-[#19d5c5]/5 hover:shadow-[0_15px_50px_rgba(25,213,197,0.08)]">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#19d5c5]/10 text-[#19d5c5] transition-all duration-300 group-hover:bg-[#19d5c5] group-hover:text-[#031011]">
                                <FiMapPin size={20} />
                            </div>

                            <p className="text-sm text-slate-500">
                                Location
                            </p>

                            <p className="mt-1 text-base font-semibold text-white">
                                Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* Phone Card */}
                        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#19d5c5]/40 hover:bg-[#19d5c5]/5 hover:shadow-[0_15px_50px_rgba(25,213,197,0.08)]">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#19d5c5]/10 text-[#19d5c5] transition-all duration-300 group-hover:bg-[#19d5c5] group-hover:text-[#031011]">
                                <FiPhone size={20} />
                            </div>

                            <p className="text-sm text-slate-500">
                                Phone
                            </p>

                            <a
                                href="tel:+8801XXXXXXXXX"
                                className="mt-1 block text-base font-semibold text-white transition-colors hover:text-[#19d5c5]"
                            >
                                +880 1706651199
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">

                            {/* GitHub */}
                            <a
                                href="https://github.com/saiful-islam-soaus-45"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#19d5c5]/50 hover:bg-[#19d5c5] hover:text-[#031011] hover:shadow-[0_8px_25px_rgba(25,213,197,0.15)]"
                            >
                                <FiGithub size={20} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#19d5c5]/50 hover:bg-[#19d5c5] hover:text-[#031011] hover:shadow-[0_8px_25px_rgba(25,213,197,0.15)]"
                            >
                                <FiLinkedin size={20} />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#19d5c5]/50 hover:bg-[#19d5c5] hover:text-[#031011] hover:shadow-[0_8px_25px_rgba(25,213,197,0.15)]"
                            >
                                <FiFacebook size={20} />
                            </a>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md md:p-8">

                        {/* Glow */}
                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#19d5c5]/10 blur-[80px]" />

                        <form
                            onSubmit={handleSubmit}
                            className="relative space-y-5"
                        >

                            {/* Name + Email */}
                            <div className="grid gap-5 md:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#031011]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#19d5c5]/60 focus:bg-[#19d5c5]/5 focus:shadow-[0_0_25px_rgba(25,213,197,0.08)]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#031011]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#19d5c5]/60 focus:bg-[#19d5c5]/5 focus:shadow-[0_0_25px_rgba(25,213,197,0.08)]"
                                    />
                                </div>

                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    required
                                    className="w-full resize-none rounded-xl border border-white/10 bg-[#031011]/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#19d5c5]/60 focus:bg-[#19d5c5]/5 focus:shadow-[0_0_25px_rgba(25,213,197,0.08)]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#19d5c5] px-6 py-4 font-bold text-[#031011] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25e5d5] hover:shadow-[0_12px_35px_rgba(25,213,197,0.25)] active:translate-y-0"
                            >
                                Send Message

                                <FiSend
                                    size={19}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>

                        </form>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-12 text-center text-sm text-slate-500">
                    © 2026 Saiful Islam Soaus. Built with passion & code.
                </p>

            </div>
        </section>
    );
}