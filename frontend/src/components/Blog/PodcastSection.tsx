import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import './podcast-bento.css';

const PodcastSection = () => {
  const episodes = [
    { id: '#01', title: 'Quantum Neural Networks: A Deep Dive', duration: '9:54' },
    { id: '#02', title: 'The Ethics of AGI in Quantum Horizons', duration: '11:03' },
    { id: '#03', title: 'Hardware vs Software: The Cold War', duration: '12:42' },
    { id: '#04', title: 'Qubits and Pieces: Weekly News', duration: '10:42' },
    { id: '#05', title: 'Entanglement and Encryption', duration: '13:16' },
  ];

  return (
    <div className="podcast-bento-section">
      <svg width="0" height="0" className="pb-absolute">
        <defs>
          {/* Card 1 Cutout (Bottom Right) nesting the play button */}
          <clipPath id="pb-mask-card-1" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.85 C1,0.85 1,0.92 0.92,0.92 H0.75 C0.65,0.92 0.65,1 0.65,1 H0 V0 Z" />
          </clipPath>
          
          {/* Card 4 Cutout (Top Left) */}
          <clipPath id="pb-mask-card-4" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V1 H0 V0.3 C0,0.2 0.1,0.2 0.15,0.15 C0.2,0.1 0.2,0 0.2,0 H1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="podcast-bento-grid">
        {/* Card 1: Podcast Cover (Tall) */}
        <div className="pb-card pb-card-1" style={{ clipPath: "url(#pb-mask-card-1)" }}>
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={128}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="pb-card-inner">
            <img src="/blog/podcast.png" alt="Podcast Cover" className="pb-absolute pb-inset-0 pb-w-full pb-h-full pb-object-cover pb-z-0" />
            <div className="pb-absolute pb-inset-0 pb-z-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)" }} />
            
            <div className="pb-content pb-absolute pb-inset-0 pb-flex pb-flex-col pb-justify-between pb-p-8 pb-z-10">
              <div className="pb-flex pb-items-center pb-gap-3">
                 <span className="blog-tag pb-text-white" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: 'none', margin: 0 }}>PODCAST</span>
                 <span className="pb-text-xs pb-font-bold pb-opacity-80 pb-text-white" style={{ letterSpacing: '0.05em' }}>WEEKLY EPISODES</span>
              </div>
              
              <div className="pb-text-white">
                <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '2.5rem', lineHeight: '1', marginBottom: '1rem', textShadow: '0 4px 6px rgba(0,0,0,0.5)' }}>
                  THE CREATIVE PULSE
                </h2>
                <p className="pb-text-sm pb-opacity-80">
                  Exploring the frontiers of design, technology, and art.
                </p>
              </div>
            </div>
            
            {/* Overlapping Play Button into Cutout */}
            <div className="pb-absolute pb-z-10 pb-flex pb-items-center pb-justify-center" style={{ bottom: '1rem', right: '1rem', width: '3.5rem', height: '3.5rem', background: '#e56b4f', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(229,107,79,0.4)' }}>
               <i className="ri-play-fill" style={{ color: 'white', fontSize: '1.5rem', marginLeft: '3px' }}></i>
            </div>
          </div>
        </div>

        {/* Card 2: Wide Header (Top Right) */}
        <div className="pb-card pb-card-2">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={128}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="pb-card-inner">
            <div className="pb-content">
              <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', marginBottom: '1.5rem', textTransform: 'uppercase', color: 'var(--blog-text)' }}>
                Tune In & <br/>Turn Up <br/>Your Creativity.
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8, color: 'var(--blog-text)', maxWidth: '80%' }}>
                Dive into deep conversations with industry leaders, exploring the intersection of design, technology, and art. New episodes every week.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Episodes List (Middle Right) */}
        <div className="pb-card pb-card-3 pb-p-0 pb-flex pb-flex-col pb-justify-center">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={128}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="pb-card-inner pb-p-6">
            <div className="pb-content pb-flex pb-flex-col pb-gap-2">
               {episodes.map((ep, idx) => (
                  <div key={ep.id} className="ep-row pb-flex pb-items-center pb-justify-between pb-p-4" style={{ borderRadius: '0.8rem', cursor: 'pointer', borderBottom: idx < episodes.length - 1 ? '1px solid var(--blog-border)' : 'none' }}>
                    <div className="pb-flex pb-items-center pb-gap-4">
                      <span style={{ fontWeight: 800, fontFamily: 'Syne', opacity: 0.4, fontSize: '1.2rem' }}>{ep.id}</span>
                      <span style={{ fontWeight: 600, fontSize: '1rem' }}>{ep.title}</span>
                    </div>
                    <div className="pb-flex pb-items-center pb-gap-2 pb-opacity-60" style={{ fontSize: '0.85rem' }}>
                       <i className="ri-play-circle-line" style={{ fontSize: '1.2rem' }}></i>
                       {ep.duration}
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>

        {/* Card 4: Action Card (Bottom Right) */}
        <div className="pb-card pb-card-4 pb-p-0 pb-flex pb-flex-col pb-items-center pb-justify-center" style={{ clipPath: "url(#pb-mask-card-4)" }}>
           <GlowingEffect
              spread={80}
              glow={true}
              disabled={false}
              proximity={128}
              inactiveZone={0.01}
              borderWidth={3}
            />
           <div className="pb-card-inner pb-p-8 pb-flex pb-flex-col pb-items-center pb-justify-center">
             <div className="pb-content pb-flex pb-flex-col pb-items-center pb-gap-4" style={{ textAlign: 'center' }}>
               <i className="ri-headphone-line" style={{ fontSize: '3rem', opacity: 0.9 }}></i>
               <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.5rem' }}>Want More?</h3>
               <button className="pb-action-btn" style={{ background: 'white', color: '#e56b4f', border: 'none', padding: '1rem 2rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
                  ALL EPISODES <i className="ri-arrow-right-up-line"></i>
               </button>
             </div>
             
             {/* Abstract Circle overlapping */}
             <div className="pb-absolute pb-z-0" style={{ width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', top: '-50px', left: '-50px', filter: 'blur(20px)' }} />
           </div>
        </div>

      </div>
    </div>
  );
};

export default PodcastSection;
