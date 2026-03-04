"use client";
import './Contact.css';
import '../contact.css';

export function Contact() {
  return (
    <section className="contact-bento-section" id="contact">
      
      {/* SVG Clip Path Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Dark card: bottom-right notch */}
          <clipPath id="contact-clip-dark" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.7 C1,0.7 1,0.78 0.92,0.78 H0.75 C0.68,0.78 0.68,1 0.68,1 H0 V0 Z" />
          </clipPath>
          {/* Accent card: top-left notch */}
          <clipPath id="contact-clip-accent" clipPathUnits="objectBoundingBox">
            <path d="M0.3,0 H1 V1 H0 V0.3 C0,0.22 0.08,0.22 0.12,0.15 C0.16,0.08 0.16,0 0.3,0 Z" />
          </clipPath>
        </defs>
      </svg>
      
      {/* Left Column: Form */}
      <div className="contact-left">
        <div className="contact-header">
          <h5>Membership</h5>
          <h1>Join the <br /> Revolution</h1>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Why do you want to join QIC?" className="form-textarea" rows={3}></textarea>
          </div>
          <button type="submit" className="form-button">Apply Now</button>
        </form>
      </div>

      {/* Vertical Divider */}
      <div className="contact-divider"></div>

      {/* Right Column: Bento Info Cards + Map */}
      <div className="contact-right">
        
        {/* Card 1: Email — SVG clipped bottom-right */}
        <div className="contact-info-card dark-card" style={{ clipPath: "url(#contact-clip-dark)" }}>
          <div className="card-icon-wrap">
            <i className="ri-mail-line"></i>
          </div>
          <h5>General Inquiries</h5>
          <h4>qic.vitb@gmail.com</h4>
        </div>
        
        {/* Card 2: Location — SVG clipped top-left */}
        <div className="contact-info-card accent-card" style={{ clipPath: "url(#contact-clip-accent)" }}>
          <div className="card-icon-wrap">
            <i className="ri-map-pin-line"></i>
          </div>
          <h5>Location</h5>
          <h4>VIT Bhopal University, <br /> Sehore, MP 466114</h4>
        </div>
        
        {/* Card 3: Social (spans full width) */}
        <div className="contact-info-card social-card">
          <h5>Social Connect</h5>
          <div className="social-grid">
            <a href="#" className="social-pill"><i className="ri-linkedin-box-fill"></i> LinkedIn</a>
            <a href="#" className="social-pill"><i className="ri-discord-fill"></i> Discord</a>
            <a href="#" className="social-pill"><i className="ri-instagram-line"></i> Instagram</a>
          </div>
        </div>

        {/* Card 4: Google Maps Embed (spans full width, fills blank space) */}
        <div className="contact-map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0!2d77.4!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVIT+Bhopal+University!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VIT Bhopal University Location"
          ></iframe>
          <div className="map-overlay">
            <span><i className="ri-map-pin-2-fill"></i> VIT Bhopal University</span>
          </div>
        </div>

      </div>
    </section>
  );
}
