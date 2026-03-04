import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const NewsletterSection = () => {
  return (
    <div className="blog-section">
      <div className="newsletter-wrapper" style={{ display: 'flex', gap: '4vw', alignItems: 'flex-start' }}>
        <div className="newsletter-card">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={128}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="newsletter-card-inner">
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.6, textTransform: 'uppercase' }}>Every Saturday</p>
              <h4 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.5rem', margin: '0.8vw 0', textTransform: 'uppercase' }}>Weekly Highlights</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5vw', lineHeight: '1.4' }}>Stay updated with a curated roundup of the week's most talked-about content.</p>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', cursor: 'pointer', textDecoration: 'underline' }}>
                 <i className="ri-mail-line"></i> Subscribe
              </span>
            </div>
            <div className="newsletter-col-border" style={{ flex: 1, borderLeft: '1px solid #ddd', paddingLeft: '4vw' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.6, textTransform: 'uppercase' }}>Last week of the month</p>
              <h4 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.5rem', margin: '0.8vw 0', textTransform: 'uppercase' }}>Monthly Digest</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.5vw', lineHeight: '1.4' }}>Take a step back and savor a well-rounded recap of the month's highlights.</p>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', cursor: 'pointer', textDecoration: 'underline' }}>
                 <i className="ri-mail-line"></i> Subscribe
              </span>
            </div>
          </div>
        </div>
        <div style={{ flex: '1' }}>
          <h2 className="blog-section-title" style={{ fontSize: '5vw', marginBottom: '2vw' }}>
            Sign Up for Our Newsletter
          </h2>
          <div className="newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Enter your email here" />
            <button className="blog-button" style={{ maxWidth: '400px' }}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MomentsSection = () => {
  const originalMoments = [
    { title: 'Unmissable Shows This Season', tags: ['Performance', 'Recs'], img: '/blog/must_see_1.png' },
    { title: 'Hidden Gems: Lesser-Known Exhibits', tags: ['Sculpture', 'Art'], img: '/blog/must_see_2.png' },
    { title: 'Design Diaries: Where to Find Inspiration', tags: ['Architecture', 'Design'], img: '/blog/must_see_3.png' },
  ];

  const moments = [...originalMoments, ...originalMoments]; // Duplicate to cover width

  const trackItems = moments.map((m, i) => (
    <div key={i} className="moment-card">
      <GlowingEffect
        spread={80}
        glow={true}
        disabled={false}
        proximity={128}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="moment-card-inner">
        <img src={m.img} alt={m.title} />
        <div style={{ marginBottom: '1vw' }}>
          {m.tags.map(t => <span key={t} className="blog-tag">{t}</span>)}
        </div>
        <p style={{ fontWeight: 600, fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', marginBottom: '0.5vw' }}>November 14, 2024</p>
        <h4 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.4vw', margin: '0.5vw 0', lineHeight: '1.2' }}>{m.title}</h4>
        <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.4' }}>Get ready for an unforgettable cultural experience with our handpicked selection of shows.</p>
      </div>
    </div>
  ));

  return (
    <div className="blog-section" style={{ borderBottom: 'none !important' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4vw' }}>
        <h2 className="blog-section-title" style={{ fontSize: 'clamp(1rem, 5.5vw, 8vw)', margin: 0, whiteSpace: 'nowrap', letterSpacing: '-0.03em' }}>Must-See Moments</h2>
      </div>
      <div className="moments-marquee-wrapper">
        <div className="moments-marquee-track">
          {trackItems}
        </div>
        <div className="moments-marquee-track" aria-hidden="true">
          {trackItems}
        </div>
      </div>
    </div>
  );
};

export { NewsletterSection, MomentsSection };
