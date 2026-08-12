"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
        });

        // Make Lenis available to Navbar
        window.__lenis = lenis;

        const update = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return children;
}