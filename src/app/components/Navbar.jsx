"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const sidebarRef = useRef(null);

    // Detect active section while scrolling
    useEffect(() => {
        const sections = navItems
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )[0];

                if (visibleSection) {
                    setActiveSection(
                        `#${visibleSection.target.id}`
                    );
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.3, 0.5],
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Close sidebar when clicking outside
    useEffect(() => {
        if (!isOpen) return;

        const handleOutsideClick = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            "pointerdown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "pointerdown",
                handleOutsideClick
            );
        };
    }, [isOpen]);

    // Close sidebar on Escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen]);

    // Smooth scroll
    const handleNavClick = (e, target) => {
        e.preventDefault();

        const element = document.querySelector(target);

        if (!element) return;

        // Set active immediately
        setActiveSection(target);

        // Close mobile sidebar
        setIsOpen(false);

        window.history.pushState(null, "", target);

        const lenis = window.__lenis;

        if (lenis) {
            setTimeout(() => {
                lenis.scrollTo(element, {
                    offset: -80,
                    duration: 1.5,
                });
            }, 150);
        } else {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 150);
        }
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="fixed top-0 left-0 right-0 z-[100]"
            >
                <nav className="h-[80px] w-full border-b border-cyan-400/10 bg-[#061113]/95 backdrop-blur-md">
                    <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-10 xl:px-12">

                        {/* ================= BRAND ================= */}
                        <a
                            href="#home"
                            onClick={(e) =>
                                handleNavClick(e, "#home")
                            }
                            className="group flex items-center"
                        >
                            <span className="text-[28px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#2dd4bf]">
                                &lt;Soaus/&gt;
                            </span>
                        </a>

                        {/* ================= DESKTOP NAVIGATION ================= */}
                        <div className="hidden items-center gap-10 md:flex lg:gap-12">
                            {navItems.map((item) => {
                                const isActive =
                                    activeSection === item.href;

                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) =>
                                            handleNavClick(
                                                e,
                                                item.href
                                            )
                                        }
                                        className={`relative text-[17px] font-medium transition-colors duration-300 ${
                                            isActive
                                                ? "text-[#2dd4bf]"
                                                : "text-[#b7c7c9] hover:text-[#2dd4bf]"
                                        }`}
                                    >
                                        {item.name}

                                        <span
                                            className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#2dd4bf] transition-all duration-300 ${
                                                isActive
                                                    ? "w-full"
                                                    : "w-0"
                                            }`}
                                        />
                                    </a>
                                );
                            })}
                        </div>

                        {/* ================= DESKTOP HIRE ME ================= */}
                        <div className="hidden items-center md:flex">
                            <a
                                href="#contact"
                                onClick={(e) =>
                                    handleNavClick(
                                        e,
                                        "#contact"
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-2xl bg-[#2dd4bf] px-8 py-3 text-[17px] font-bold text-[#061113] shadow-[0_8px_30px_rgba(45,212,191,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5eead4] hover:shadow-[0_10px_35px_rgba(45,212,191,0.30)]"
                            >
                                Hire Me
                            </a>
                        </div>

                        {/* ================= MOBILE MENU BUTTON ================= */}
                        <button
                            type="button"
                            onClick={() =>
                                setIsOpen((prev) => !prev)
                            }
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0a181a] text-[#2dd4bf] transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0d2022] md:hidden"
                        >
                            <div className="flex w-5 flex-col gap-1.5">

                                {/* Top Line */}
                                <span
                                    className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                                        isOpen
                                            ? "translate-y-[4px] rotate-45"
                                            : ""
                                    }`}
                                />

                                {/* Middle Line */}
                                <span
                                    className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                                        isOpen
                                            ? "opacity-0"
                                            : ""
                                    }`}
                                />

                                {/* Bottom Line */}
                                <span
                                    className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                                        isOpen
                                            ? "-translate-y-[4px] -rotate-45"
                                            : ""
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* ================= MOBILE SIDEBAR ================= */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        ref={sidebarRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        className="fixed right-0 top-[80px] z-[95] h-[calc(100vh-80px)] w-[280px] overflow-y-auto border-l border-cyan-400/10 bg-[#061113]/95 shadow-[-10px_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:hidden"
                    >
                        <div className="flex min-h-full flex-col px-6 py-5">

                            {/* ================= SIDEBAR NAVIGATION ================= */}
                            <div className="flex flex-col">
                                {navItems.map(
                                    (item, index) => {
                                        const isActive =
                                            activeSection ===
                                            item.href;

                                        return (
                                            <motion.a
                                                key={
                                                    item.name
                                                }
                                                href={
                                                    item.href
                                                }
                                                onClick={(e) =>
                                                    handleNavClick(
                                                        e,
                                                        item.href
                                                    )
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    x: 20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    duration: 0.25,
                                                    delay:
                                                        index *
                                                        0.05,
                                                }}
                                                className={`relative border-b border-white/5 py-5 text-[17px] font-medium transition-colors duration-300 ${
                                                    isActive
                                                        ? "text-[#2dd4bf]"
                                                        : "text-[#b7c7c9] hover:text-[#2dd4bf]"
                                                }`}
                                            >
                                                {item.name}

                                                {/* Active Indicator */}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="mobileActive"
                                                        className="absolute bottom-3 left-0 h-[2px] w-8 rounded-full bg-[#2dd4bf]"
                                                    />
                                                )}
                                            </motion.a>
                                        );
                                    }
                                )}
                            </div>

                            {/* ================= MOBILE HIRE ME ================= */}
                            <motion.a
                                href="#contact"
                                onClick={(e) =>
                                    handleNavClick(
                                        e,
                                        "#contact"
                                    )
                                }
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                    delay:
                                        navItems.length *
                                        0.05,
                                }}
                                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#2dd4bf] px-6 py-3 text-[16px] font-bold text-[#061113] shadow-[0_8px_30px_rgba(45,212,191,0.20)] transition-all duration-300 hover:bg-[#5eead4]"
                            >
                                Hire Me
                            </motion.a>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}