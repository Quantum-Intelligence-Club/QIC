"use client";

export function EventsHero() {
  return (
    <section className="events-hero">
      {/* Background SVG Lines */}
      <div className="bg-lines">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,200 C300,100 700,300 1000,100" stroke="var(--border-color)" fill="none" strokeWidth="0.5" />
          <path d="M0,250 C300,150 700,350 1000,150" stroke="var(--border-color)" fill="none" strokeWidth="0.5" />
          <path d="M0,300 C300,200 700,400 1000,200" stroke="var(--border-color)" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="hero-content">
        <div className="left-stack">
          <div className="brand-box">
            <span>QIC</span>
            <span>EVENTS</span>
          </div>
          
          <div className="main-mask-container">
            <svg width="0" height="0">
              <defs>
                <clipPath id="mask-wavy" clipPathUnits="objectBoundingBox">
                   <path d="M0.5,0 C0.7,0 0.9,0.1 1,0.3 C1.1,0.5 0.9,0.8 0.7,0.9 C0.5,1 0.2,0.9 0.1,0.7 C0,0.5 0.2,0.2 0.3,0.1 C0.4,0 0.45,0 0.5,0" />
                </clipPath>
              </defs>
            </svg>
            <div className="masked-image wavy-mask">
              <img src="/events/concert_crowd.png" alt="Event" />
            </div>
            
            <div className="mini-mask-container star-pos">
               <svg width="0" height="0">
                <defs>
                  <clipPath id="mask-star" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0 L0.6,0.4 L1,0.5 L0.6,0.6 L0.5,1 L0.4,0.6 L0,0.5 L0.4,0.4 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="masked-image star-mask">
                <img src="/events/close_up.png" alt="Performer" />
              </div>
            </div>
          </div>
        </div>

        <div className="center-text">
          <h1>TreAT <br /> PeOPLe <br /> WITH <br /> KinDNeSS</h1>
          <button className="book-btn">Book Tickets</button>
        </div>

        <div className="right-stack">
           <div className="pill-mask-container pill-pos">
             <svg width="0" height="0">
                <defs>
                  <clipPath id="mask-pill" clipPathUnits="objectBoundingBox">
                    <rect x="0" y="0" width="1" height="1" rx="0.5" />
                  </clipPath>
                </defs>
              </svg>
              <div className="masked-image pill-mask">
                <img src="/events/performer_energetic.png" alt="Concert" />
              </div>
           </div>
           
           <div className="flower-mask-container flower-pos">
             <svg width="0" height="0">
                <defs>
                  <clipPath id="mask-flower" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0 C0.6,0.1 0.7,0.1 0.8,0.2 C0.9,0.3 0.9,0.4 1,0.5 C0.9,0.6 0.9,0.7 0.8,0.8 C0.7,0.9 0.6,0.9 0.5,1 C0.4,0.9 0.3,0.9 0.2,0.8 C0.1,0.7 0.1,0.6 0,0.5 C0.1,0.4 0.1,0.3 0.2,0.2 C0.3,0.1 0.4,0.1 0.5,0 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="masked-image flower-mask">
                <img src="/events/stage_atmosphere.png" alt="Stage" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
