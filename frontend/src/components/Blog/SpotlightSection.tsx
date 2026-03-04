import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const SpotlightSection = () => {
  return (
    <div className="blog-section">
      <div className="spotlight-wrapper" style={{ display: 'flex', gap: '4vw', alignItems: 'flex-start' }}>
        <div className="spotlight-header-col" style={{ flex: '0.8' }}>
          <h2 className="blog-section-title" style={{ fontSize: '7vw' }}>
            Spotlight on Quanta
          </h2>
          <div style={{ marginTop: '2vw' }}>
            <span style={{ fontSize: '2.5rem', cursor: 'pointer', marginRight: '1.5vw', fontWeight: 800 }}>←</span>
            <span style={{ fontSize: '2.5rem', cursor: 'pointer', fontWeight: 800 }}>→</span>
          </div>
        </div>
        <div className="spotlight-grid" style={{ flex: '2' }}>
          <div className="spotlight-card">
            <GlowingEffect
              spread={80}
              glow={true}
              disabled={false}
              proximity={128}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="spotlight-card-inner">
              <img src="/blog/spotlight1.png" alt="Researcher" />
              <div style={{ marginBottom: '1vw' }}>
                <span className="blog-tag">Research</span>
                <span className="blog-tag">AI</span>
                <span className="blog-tag">Ph.D</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5vw', opacity: 0.6 }}>September 18, 2024</p>
              <h4 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.4vw', margin: '0.5vw 0', lineHeight: '1.2' }}>Soundscapes of the City: An Interview with Leo Hart</h4>
              <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.4' }}>Explore the world of sound artist Leo Hart, who transforms urban noise into captivating musical compositions.</p>
            </div>
          </div>
          <div className="spotlight-card">
            <GlowingEffect
              spread={80}
              glow={true}
              disabled={false}
              proximity={128}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="spotlight-card-inner">
              <img src="/blog/spotlight1.png" alt="Researcher" style={{ filter: 'grayscale(1)' }} />
              <div style={{ marginBottom: '1vw' }}>
                <span className="blog-tag">Art</span>
                <span className="blog-tag">Design</span>
              </div>
              <p style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5vw', opacity: 0.6 }}>November 7, 2024</p>
              <h4 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.4vw', margin: '0.5vw 0', lineHeight: '1.2' }}>Eva Martinez: The Visionary Behind QIC</h4>
              <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.4' }}>Discover the creative journey of Eva Martinez, a visionary designer whose work redefines the modern aesthetic.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
