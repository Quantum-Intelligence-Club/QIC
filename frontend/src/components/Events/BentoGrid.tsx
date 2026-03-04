import React from "react";
import "./bento.css";

export function BentoGrid() {
  return (
    <div className="bento-container w-full max-w-7xl mx-auto px-4">
      {/* SVG Definitions for Masks */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Mask for Card 1 (Bottom Right Cutout) */}
          <clipPath id="mask-card-1" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.7 C1,0.7 1,0.85 0.85,0.85 H0.65 C0.5,0.85 0.5,1 0.5,1 H0 V0 Z" />
          </clipPath>
          
          {/* Mask for Card 2 (Top Right Cutout) */}
          <clipPath id="mask-card-2" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H0.8 C0.85,0 0.85,0.1 0.9,0.15 C0.95,0.2 1,0.2 1,0.3 V1 H0 V0 Z" />
          </clipPath>

          {/* Mask for Card 5 (Bottom Right Cutout) */}
          <clipPath id="mask-card-5" clipPathUnits="objectBoundingBox">
             <path d="M0,0 H1 V0.6 C1,0.7 0.9,0.7 0.8,0.75 C0.7,0.8 0.7,0.9 0.7,1 H0 V0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="bento-grid">
        {/* Card 1: Main Event (Left) */}
        <div className="bento-card card-1" style={{ clipPath: "url(#mask-card-1)" }}>
          <img src="/events/splash/hall.png" alt="Main Event" className="bento-bg" />
          <div className="bento-overlay" />
          <div className="bento-content text-white flex-col justify-between h-full p-8" style={{ width: "60%" }}>
            <div className="w-12 h-12 rounded-full bg-white-20 backdrop-blur flex-row items-center justify-center">
              <span style={{ fontSize: "1.5rem" }}>🔥</span>
            </div>
            <div>
               <p className="text-sm font-medium mb-2 opacity-80">Category . Bootcamp | 22 Feb</p>
               <h3 className="text-2xl md-text-3xl font-bold uppercase leading-tight">Quantum Computing Fundamentals Bootcamp!</h3>
            </div>
          </div>
        </div>

        {/* Card 2: Top Middle */}
        <div className="bento-card card-2 bg-[#e0fba8] text-black" style={{ clipPath: "url(#mask-card-2)", backgroundColor: "#e0fba8" }}>
           <div className="bento-content p-6 flex-col justify-between h-full">
             <div className="flex-row justify-between items-start w-full">
               <p className="text-sm font-medium">Category . AI/ML</p>
             </div>
             
             <div className="mt-4">
               <h3 className="text-2xl md-text-2rem font-black uppercase leading-none tracking-tight mb-4">
                 Ready, Set, Go!<br/>How to start<br/>Building Neural<br/>Networks
               </h3>
               <p className="text-sm font-medium opacity-80 mb-6 leading-relaxed">
                 Neural networks are recognized as the core of modern AI. Learn the safe and effective mode of training when the goal is to improve accuracy ... <span className="underline cursor-pointer">More</span>
               </p>
             </div>

             <div className="border-t border-black-20 pt-4 flex-col gap-3 w-full">
               <div className="flex-row justify-between items-center group cursor-pointer w-full">
                 <h4 className="font-bold text-sm uppercase">How to read data like a pro</h4>
                 <span className="group-hover-translate-x-1 transition-transform">→</span>
               </div>
               <div className="border-t border-black-10 pt-3 flex-row justify-between items-center group cursor-pointer w-full">
                 <h4 className="font-bold text-sm uppercase">Optimize in a limited space</h4>
                 <span className="group-hover-translate-x-1 transition-transform">→</span>
               </div>
             </div>
           </div>
           
           <div className="bento-external-btn absolute top-4 right-4 rounded-full w-10 h-10 flex-row items-center justify-center cursor-pointer hover-bg-white transition-colors" style={{ backgroundColor: "#e0fba8" }}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
           </div>
        </div>

        {/* Card 3: Top Right */}
        <div className="bento-card card-3 text-black relative bg-[#c7dbe8]">
           {/* Replaced mix-blend-multiply causing dull images, keeping it clean object-cover */}
           <img src="/events/performer_energetic.png" alt="Decoherence" className="absolute bottom-0 right-0 w-full h-full object-cover z-0 opacity-100" />
           {/* Add a transparent to black gradient overlay from the bottom so the black text pops out more or we can make text color adapt */}
           <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to bottom, rgba(199,219,232,0.85) 0%, rgba(199,219,232,0.3) 50%, rgba(0,0,0,0.6) 100%)" }} />
           
           <div className="bento-content p-6 relative z-10 flex-col gap-2 h-full justify-between">
             <div>
               <p className="text-sm font-medium w-full text-black">Category . Physics</p>
               <p className="text-xs opacity-60 w-full text-black">Hot . 12 Feb</p>
               <h3 className="text-xl md-text-3xl font-black uppercase leading-tight mt-2 tracking-tight w-full text-black">Overcoming <br/>Decoherence in <br/>Qubits</h3>
             </div>
           </div>
        </div>

        {/* Card 4: Bottom Middle */}
        <div className="bento-card card-4 relative overflow-hidden rounded-2xl text-white bg-[#111]">
           {/* Keeping it full opacity so image pops exactly like reference */}
           <img src="/events/stage_atmosphere.png" alt="Circuit" className="bento-bg opacity-100" />
           <div className="absolute inset-0 flex-row items-center justify-center z-10 w-full h-full">
             <div className="w-14 h-14 bg-white-20 backdrop-blur rounded-full flex-row items-center justify-center cursor-pointer hover-bg-white-30 transition-colors">
               <svg viewBox="0 0 24 24" width="20" height="20" fill="white" style={{ marginLeft: "4px" }}><path d="M8 5v14l11-7z"/></svg>
             </div>
           </div>
           
           {/* Giving drop-shadows to ensure readability on bright festival images */}
           <div className="bento-content p-6 flex-col justify-between h-full w-full absolute inset-0 z-0">
             <p className="text-sm font-medium drop-shadow-lg pb-4">Category . Tutorial</p>
             <div className="mt-auto pt-8">
               <p className="text-xs opacity-80 mb-1 drop-shadow-lg font-bold">5 Min . 22 Feb</p>
               <h3 className="text-base font-bold uppercase drop-shadow-lg">Hands-on | Soft and Hard Styles of Circuitry</h3>
             </div>
           </div>
        </div>

        {/* Card 5: Bottom Right */}
        <div className="bento-card card-5 text-black" style={{ clipPath: "url(#mask-card-5)", backgroundColor: "#d9b8ff" }}>
           <div className="bento-content p-6 flex-col justify-between h-full">
             <div className="flex-row flex-wrap gap-2 w-full">
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Quantum Theory</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Algorithms</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Neural Nets</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Superposition</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Qubits</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>AI Ethics</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Cryptography</span>
               <span className="tag" style={{ backgroundColor: "#fef6ca" }}>Hardware</span>
             </div>
             
             <h3 className="text-lg font-bold mt-4">View All Categories</h3>
           </div>
           
           <div className="bento-external-btn shadow-lg absolute bottom-4 right-4 bg-white rounded-full w-12 h-12 flex-row items-center justify-center cursor-pointer hover-bg-gray-50 transition-colors">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
           </div>
        </div>

      </div>
    </div>
  );
}
