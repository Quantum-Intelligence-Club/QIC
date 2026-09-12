"use client";
import './Testimonials.css';
import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const testimonials = [

{ name: "Om", role: "Founder", body: "QIC started as a simple idea: create a space where students can come together, explore technology, and share what they're curious about.", avatar: "/blank-profile.svg" },

{ name: "Mangal", role: "Development Lead", body: "Working with the developers at QIC has been a great way to learn, build things together, and turn our ideas into something we can actually use.", avatar: "/blank-profile.svg" },

{ name: "Mausam", role: "Development Co-lead", body: "I enjoy the collaborative side of QIC. It's a place where we can discuss ideas, experiment with different technologies, and learn along the way.", avatar: "/blank-profile.svg" },

{ name: "Arunima", role: "Development Core Member", body: "QIC gives us a space to explore tech beyond our coursework, have interesting discussions, and learn from people with different interests.", avatar: "/blank-profile.svg" },

{ name: "Akshat", role: "Development Core Member", body: "What I like most about QIC is that there is always room to explore something new, whether it's through a discussion, activity, or project.", avatar: "/blank-profile.svg" },

{ name: "Yash", role: "Development Core Member", body: "Being part of QIC is a good way to meet other students who are interested in technology and share ideas without making everything overly formal.", avatar: "/blank-profile.svg" },

{ name: "Sparsh", role: "Development Core Member", body: "QIC is a fun community to learn, collaborate, and explore different areas of technology with other students.", avatar: "/blank-profile.svg" }

];



const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 7);

const TestimonialCard = ({ name, role, body, avatar }: {name: string, role: string, body: string, avatar: string}) => (
  <div className="testi-card">
    <GlowingEffect
      spread={80}
      glow={true}
      disabled={false}
      proximity={128}
      inactiveZone={0.01}
      borderWidth={3}
    />
    <div className="testi-card-inner">
      <div className="quote-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      <p>{body}</p>
      <div className="author">
        <img src={avatar} alt={name} />
        <div className="info">
          <span className="name">{name}</span>
          <span className="role">{role}</span>
        </div>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction }: { items: typeof testimonials, direction: 'left' | 'right' }) => (
  <div className="marquee">
    <div className={`marquee-content ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}>
      {items.map((item, i) => <TestimonialCard key={i} {...item} />)}
    </div>
    <div className={`marquee-content ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`} aria-hidden="true">
      {items.map((item, i) => <TestimonialCard key={`dup-${i}`} {...item} />)}
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section className="view-testi">
      <div className="header">
        <h5>Testimonials</h5>
        <h2>What People Say<br/>About Us</h2>
      </div>

      <div className="scroll-container">
        <MarqueeRow items={firstRow} direction="left" />
        <MarqueeRow items={secondRow} direction="right" />
      </div>
    </section>
  );
}
