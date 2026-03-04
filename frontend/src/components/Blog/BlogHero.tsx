import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BlogHero = () => {
  return (
    <div className="blog-section">
      <div className="hero-content">
        <div className="hero-text">
          <p style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1vw' }}>November 15, 2024</p>
          <h2 className="blog-display" style={{ fontSize: '4vw', fontWeight: 800, lineHeight: '1.0', marginBottom: '2vw', letterSpacing: '-0.02em' }}>
            The Quantum Leap: Navigating the Future of Intelligence
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.4', opacity: 0.9, marginBottom: '2.5vw', fontWeight: 500 }}>
            In the digital era, quantum computing remains a mysterious frontier. At QIC, we bridge the gap between abstract theory and impactful application. What makes quantum neural networks so endurly relevant in a world dominated by silicon?
          </p>
          <div style={{ display: 'flex', gap: '0.5vw' }}>
            <span className="blog-tag">Quantum</span>
            <span className="blog-tag">AI</span>
            <span className="blog-tag">Future</span>
          </div>
        </div>
        <div className="hero-image">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={128}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="hero-image-inner">
            <img 
              src="/blog/hero.png" 
              alt="Quantum optics experiment" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
