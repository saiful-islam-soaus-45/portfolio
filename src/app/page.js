"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import SmoothScroll from "./components/SmoothScroll";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#031011] isolate">

        {/* ========================================= */}
        {/*          CONTINUOUS BACKGROUND            */}
        {/* ========================================= */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

          {/* Main Background */}
          <div className="absolute inset-0 bg-[#031011]" />

          {/* Top Right Glow */}
          <div
            className="
              absolute
              -right-40
              -top-40
              h-[550px]
              w-[550px]
              rounded-full
              bg-[#19d5c5]/10
              blur-[120px]
            "
          />

          {/* Bottom Left Glow */}
          <div
            className="
              absolute
              -bottom-40
              -left-40
              h-[550px]
              w-[550px]
              rounded-full
              bg-[#19d5c5]/10
              blur-[120px]
            "
          />

          {/* Extra Top Left Soft Glow */}
          <div
            className="
              absolute
              -left-40
              top-[25%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#19d5c5]/5
              blur-[130px]
            "
          />

          {/* Extra Bottom Right Soft Glow */}
          <div
            className="
              absolute
              -right-40
              bottom-[15%]
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#19d5c5]/5
              blur-[140px]
            "
          />

          {/* Radial Light */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_80%_15%,rgba(25,213,197,0.08),transparent_30%)]
            "
          />
        </div>


        {/* ========================================= */}
        {/*                 NAVBAR                     */}
        {/* ========================================= */}

        <Navbar />


        {/* ========================================= */}
        {/*                  CONTENT                  */}
        {/* ========================================= */}

        <main className="relative z-10">

          <Hero />
          <About />
          <Education />
          <Skills></Skills>
        </main>

      </div>
    </SmoothScroll>
  );
}