"use client";
import { BentoGrid } from "./BentoGrid";

export function EventSplash() {
  return (
    <section className="event-splash">
      <div className="splash-main">
        <h1 className="main-title">UPCOMING EVENTS</h1>
        
        <BentoGrid />

        <div className="splash-footer-info">
          <span>INSTAGRAM</span>
          <span>04/05/10</span>
          <span>OPENING 11AM</span>
        </div>
      </div>

      <div className="splash-description-section">
        <div className="event-details-grid">
          <div className="detail-item">
            <span className="detail-label">DATE</span>
            <span className="detail-value">March 15, 2026</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">TIME</span>
            <span className="detail-value">10:00 AM - 4:00 PM</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">LOCATION</span>
            <span className="detail-value">Main Auditorium, VIT Bhopal</span>
          </div>
        </div>
        
        <p className="description-text">
          Join us for an immersive session on 
          <span className="inline-img-wrapper">
             Quantum Mechanics <img src="/events/splash/thumb1.png" alt="quantum" />
          </span> 
          and AI integration. Experience hands-on 
          <span className="inline-img-wrapper">
            innovative workshops <img src="/events/splash/thumb2.png" alt="ai" />
          </span> 
          designed to bridge the gap between theory and real-world application.
        </p>
        
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
