"use client";
import './Testimonials.css';

import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

const testimonials = [
  { name: "Gabrielle Williams", role: "Quantum Researcher", body: "The community's resources and shared knowledge have accelerated our quantum algorithms research by months.", avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "Samantha Johnson", role: "AI Engineer", body: "Exceeded our expectations with innovative approaches that brought our vision of AI-quantum integration to life.", avatar: "https://i.pravatar.cc/150?u=2" },
  { name: "Isabella Rodriguez", role: "Tech Lead", body: "Their ability to capture the complex intersection of AI and Quantum mechanics makes this community unparalleled.", avatar: "https://i.pravatar.cc/150?u=3" },
  { name: "Natalie Martinez", role: "Data Scientist", body: "From concept to execution, the collaborative environment here knows no bounds - a true game-changer.", avatar: "https://i.pravatar.cc/150?u=4" },
  { name: "Victoria Thompson", role: "CTO, FutureTech", body: "A refreshing and imaginative community that consistently delivers exceptional insights into quantum computing.", avatar: "https://i.pravatar.cc/150?u=5" },
  { name: "John Peter", role: "Software Developer", body: "The team's strategic approach resulted in remarkable breakthroughs. A reliable partner in tech innovation.", avatar: "https://i.pravatar.cc/150?u=6" },
  { name: "David Chen", role: "Postdoctoral Fellow", body: "The bridge between theoretical quantum mechanics and practical AI applications here is simply mind-blowing.", avatar: "https://i.pravatar.cc/150?u=7" },
  { name: "Marcus Schmidt", role: "Machine Learning Director", body: "I've never seen such a stellar collection of resources and passionate individuals working on next-gen tech.", avatar: "https://i.pravatar.cc/150?u=8" },
  { name: "Aisha Patel", role: "Systems Architect", body: "This is literally the coolest tech community I've been a part of. The future is being built right here.", avatar: "https://i.pravatar.cc/150?u=9" },
  { name: "Lucas Gray", role: "Investment Analyst", body: "Keeping an eye on the innovations coming out of this group. They are consistently pushing the boundaries.", avatar: "https://i.pravatar.cc/150?u=10" },
  { name: "Elena Rostova", role: "PhD Candidate", body: "The collaborative projects have given me hands-on experience that I couldn't get anywhere else.", avatar: "https://i.pravatar.cc/150?u=11" },
  { name: "James Wilson", role: "Product Manager", body: "Everything about this community is next level: the ideas, the execution, and the people.", avatar: "https://i.pravatar.cc/150?u=12" },
  { name: "Olivia Brown", role: "Quantum Algorithms Engineer", body: "A fantastic space to discuss, ideate, and build the next frontier of hybrid AI-quantum systems seamlessly.", avatar: "https://i.pravatar.cc/150?u=13" },
  { name: "Liam Miller", role: "Software Architect", body: "An inspiring initiative bringing together brilliant minds to tackle the hardest problems in computation and physics.", avatar: "https://i.pravatar.cc/150?u=14" },
  { name: "Sophia Davis", role: "Data Analyst", body: "Being a part of this organization has profoundly shaped my understanding of advanced computational paradigms.", avatar: "https://i.pravatar.cc/150?u=15" },
  { name: "Jackson White", role: "Researcher", body: "Highly recommend engaging with QIC. The thought leadership and rigorous discussions are phenomenally valuable.", avatar: "https://i.pravatar.cc/150?u=16" },
  { name: "Emma Taylor", role: "Startup Founder", body: "We found our founding technical team here. Absolutely stellar talent who understand deep tech.", avatar: "https://i.pravatar.cc/150?u=17" },
  { name: "Noah Anderson", role: "Open Source Contributor", body: "Contributing to the shared resources is rewarding, and the feedback from leading experts is simply incredible.", avatar: "https://i.pravatar.cc/150?u=18" }
];

const firstRow = testimonials.slice(0, 6);
const secondRow = testimonials.slice(6, 12);
const thirdRow = testimonials.slice(12, 18);

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
        <MarqueeRow items={thirdRow} direction="left" />
      </div>
    </section>
  );
}
