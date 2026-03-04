"use client";
import { useState, useEffect } from "react";

export function FeaturedEvents() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 6,
    minutes: 35,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="featured-events-section">
      <div className="featured-card">
        <div className="card-left">
          <div className="event-label">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
            <span>Featured Events</span>
          </div>
          <h2 className="event-title">MADiSoN SQUArE GArDeNS</h2>
          <button className="ticket-btn">Get Your Tickets</button>
        </div>

        <div className="card-center">
          <h5>Starts in...</h5>
          <div className="countdown-grid">
            <div className="time-unit">
              <h3>{timeLeft.days.toString().padStart(2, '0')}</h3>
              <span>Days</span>
            </div>
            <div className="time-unit">
              <h3>{timeLeft.hours.toString().padStart(2, '0')}</h3>
              <span>Hours</span>
            </div>
            <div className="time-unit">
              <h3>{timeLeft.minutes.toString().padStart(2, '0')}</h3>
              <span>Mins</span>
            </div>
            <div className="time-unit">
              <h3>{timeLeft.seconds.toString().padStart(2, '0')}</h3>
              <span>Sec</span>
            </div>
          </div>
        </div>

        <div className="card-right">
           <div className="info-item">
             <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
               <circle cx="12" cy="10" r="3" />
             </svg>
             <span>Arena in New York City</span>
           </div>
           <div className="info-item">
             <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
               <circle cx="12" cy="12" r="10" />
               <polyline points="12 6 12 12 16 14" />
             </svg>
             <span>8:30 PM MST</span>
           </div>
        </div>

        </div>
    </section>
  );
}
