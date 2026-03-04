"use client";

import { useEffect, useRef } from 'react';
import './Team.css';

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // Handle autoplay block
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    const videos = containerRef.current?.querySelectorAll('video');
    videos?.forEach((video) => observer.observe(video));

    return () => {
      videos?.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <section className="view-3">
      <div className="line"></div>
      <div className="wrap">
        <div className="top">
          <div className="text">
            <h2>Past <br /> events</h2>
            <h4>Explore our previous workshops, seminars, and hackathons</h4>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom" ref={containerRef}>
          <div className="elem a">
            <div className="video-container">
              <video muted loop playsInline preload="none" src="/videos/jones.mp4"></video>
            </div>
            <h3>Quantum Workshop</h3>
            <h5>Nov 2024 • Hybrid</h5>
          </div>
          <div className="elem b">
            <div className="video-container">
              <video muted loop playsInline preload="none" src="/videos/watson.mp4"></video>
            </div>
            <h3>AI Innovation Hack</h3>
            <h5>Oct 2024 • VIT Bhopal</h5>
          </div>
          <div className="elem c">
            <div className="video-container">
              <video muted loop playsInline preload="none" src="/videos/cameron.mp4"></video>
            </div>
            <h3>Research Symposium</h3>
            <h5>Aug 2024 • Online</h5>
          </div>
          <div className="elem d">
            <div className="video-container">
              <video muted loop playsInline preload="none" src="/videos/hawkins.mp4"></video>
            </div>
            <h3>Tech Networking</h3>
            <h5>June 2024 • Bhopal</h5>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
}
