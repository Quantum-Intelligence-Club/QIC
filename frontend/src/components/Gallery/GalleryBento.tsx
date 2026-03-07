"use client";

import React, { useLayoutEffect, useRef } from "react";
import { pastEvents } from "@/lib/data/past-events";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sectionColors = [
  "#fcfbf8", // Original warm off-white
  "#f0f7f9", // Soft aqua / pale cyan
  "#f4f7f2", // Very subtle pale sage green
  "#f8f4f4", // Extremely soft pale rose
  "#f0f4f8", // Soft powder blue
  "#f6f5f3", // Pale stone/greige
];

export const GalleryBento = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Array of all our section wrapper DOM elements
      const sections = gsap.utils.toArray<HTMLElement>(".gsap-section");
      if (sections.length < 2) return;

      // Set initial states: sections stack natively from 0 upwards.
      // So the latest section is physically placed ON TOP.
      // The first section starts visible at 0, 0
      // The rest start hidden below.
      
      // For all sections EXCEPT the first one, initialize them to be "off screen" and masked
      const otherSections = sections.slice(1);
      const inners = otherSections.map(s => s.querySelector(".gsap-inner"));
      const outers = otherSections.map(s => s.querySelector(".gsap-outer"));
      const bgs = otherSections.map(s => s.querySelector(".gsap-bg"));

      gsap.set(outers, { yPercent: 100 });
      gsap.set(inners, { yPercent: -100 });
      gsap.set(bgs, { yPercent: 15 });
      
      // Hide all text and buttons in the hidden sections initially
      otherSections.forEach(s => {
        gsap.set(s.querySelectorAll(".gsap-heading, .gsap-button"), { autoAlpha: 0, yPercent: 50 });
      });

      // The entire pinning process
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`, // Scroll length depends on number of sections
          scrub: 1, // Smooth scrubbing
          pin: true, // Pin the container while animating through sections
        }
      });

      // Sequence the sections appearing one by one
      otherSections.forEach((section, i) => {
        const headings = section.querySelectorAll(".gsap-heading");
        const button = section.querySelector(".gsap-button");
        const prevContent = sections[i].querySelector(".gsap-content");
        
        tl.to(outers[i], { yPercent: 0, duration: 1, ease: "none" })
          .to(inners[i], { yPercent: 0, duration: 1, ease: "none" }, "<")
          .to(bgs[i], { yPercent: 0, duration: 1, ease: "none" }, "<")
          .to(headings, { autoAlpha: 1, yPercent: 0, duration: 1, stagger: 0, ease: "power2.out" }, "<")
          .to(button, { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2.out" }, "<")
          .to(prevContent, { scale: 0.95, opacity: 0, filter: "blur(10px)", yPercent: -20, duration: 1, ease: "none" }, "<");
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full md:h-screen bg-[#fcfbf8] md:overflow-hidden select-none">
      
      {/* Header Overlay (matches reference but light theme) */}
      <header className="hidden md:flex absolute top-0 left-0 w-full items-center justify-between px-[5%] h-24 sm:h-28 z-50 text-neutral-900 font-mono text-[10px] sm:text-xs tracking-[0.5em] bg-white/10 backdrop-blur-md pointer-events-none uppercase border-b border-black/5">
        <div>Quantum Intelligence Club</div>
        <div className="text-[#84cc16] font-bold">Past Explorations</div>
      </header>

      {/* Sections Container */}
      <div ref={sectionsRef} className="w-full md:h-full relative flex flex-col md:block">
        {pastEvents.map((event, i) => (
          <div 
            key={event.id} 
            className="gsap-section relative md:absolute md:inset-0 w-full md:h-full pointer-events-none"
            style={{ zIndex: i }}
          >
            <div className="gsap-outer w-full md:h-full md:overflow-hidden pointer-events-auto">
              <div className="gsap-inner w-full md:h-full md:overflow-hidden">
                <div 
                  className="gsap-bg flex items-center justify-center relative md:absolute md:inset-0 w-full md:h-full py-20 md:py-0"
                  style={{ backgroundColor: sectionColors[i % sectionColors.length] }}
                >
                  <div className="gsap-content w-[90vw] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 px-4 md:h-full md:pt-16">
                    
                    {/* Left: Text Content */}
                    <div className="flex-1 text-left flex flex-col items-start w-full">
                      <div className="text-[#84cc16] font-mono text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                        {event.category}
                      </div>
                      
                      <h2 
                        className="gsap-heading text-neutral-950 text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.05] font-serif font-medium tracking-tight text-balance drop-shadow-sm"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.03)' }}
                      >
                        {event.title.replace(/<[^>]*>/g, '')}
                      </h2>
                      
                      <p className="gsap-heading text-neutral-700 font-sans text-sm md:text-base lg:text-lg mt-6 mb-8 max-w-xl leading-relaxed font-medium">
                        {event.description}
                      </p>
                      
                      {/* View Button */}
                      <button className="gsap-button mt-2 md:mt-8 bg-neutral-900 rounded-full flex items-center shadow-md transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-800 active:scale-95 group">
                        <span 
                          className="text-white font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] py-4 whitespace-nowrap block"
                          style={{ paddingLeft: '32px', paddingRight: '16px' }}
                        >
                          Event details
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-2 shrink-0 group-hover:bg-[#84cc16] transition-colors duration-300">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </div>
                      </button>
                    </div>

                    {/* Right: Featured Image with Custom SVG Container */}
                    <div className="flex-1 w-full relative mt-12 md:mt-0 p-4 flex items-center justify-center">
                      <div className="relative w-full max-w-[500px] aspect-square mx-auto">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 200 200"
                          xmlns="http://www.w3.org/2000/svg"
                          className="drop-shadow-2xl"
                        >
                          <defs>
                            <clipPath id={`myMask-${event.id}`}>
                              <path d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"></path>
                            </clipPath>
                          </defs>
                          <image
                            href={event.imageUrl}
                            width="200"
                            height="200"
                            clipPath={`url(#myMask-${event.id})`}
                            preserveAspectRatio="xMidYMid slice"
                          ></image>
                          <path
                            d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"
                            fill="none"
                            stroke="rgba(0,0,0,0.1)"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
