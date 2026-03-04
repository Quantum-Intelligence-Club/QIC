"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import './Navbar.css';
import { ThemeToggle } from "../ThemeToggle";
import { useStairs } from "../stairs/StairsContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();
  const { startTransition } = useStairs();

  // Refs for GSAP animations
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // GSAP animations
  useGSAP(() => {
    // Set initial states
    if (navRef.current) {
      gsap.set(navRef.current, { xPercent: 101, display: 'none' });
    }
    
    const allLinks = gsap.utils.toArray(linksRef.current);
    const contactElement = contactRef.current;
    
    if (allLinks.length > 0 || contactElement) {
      gsap.set(allLinks, {
        y: "100%",
        autoAlpha: 0,
      });
      gsap.set(contactElement, {
        autoAlpha: 0,
        y: 20,
      });
    }

    // Slide in menu animation
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        display: "flex",
        xPercent: 0,
        duration: 0.8,
        ease: "power4.out",
      })
      .to(
        allLinks,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
        },
        "<+0.2"
      )
      .to(
        contactElement,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<+0.4"
      );

  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      if (tl.current) {
        tl.current.reverse().then(() => {
          if (navRef.current) {
            gsap.set(navRef.current, { display: 'none' });
          }
          setIsMenuVisible(false);
        });
      }
    } else {
      setIsMenuVisible(true);
      if (navRef.current) {
        gsap.set(navRef.current, { display: 'flex' });
      }
      if (tl.current) {
        tl.current.play();
      }
    }
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "home", href: "/" },
    { name: "events", href: "/events" },
    { name: "blogs", href: "/blogs" },
    { name: "team", href: "/#team" },
    { name: "gallery", href: "/#gallery" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('/#') || href === '/') {
      e.preventDefault();
      if (href === '/' || href === '/#home') {
        if (window.location.pathname !== '/') {
          window.location.href = '/';
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (href.startsWith('/#')) {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (isOpen) toggleMenu();
    }
  };

  return (
    <>
      <nav>
        <div className="logos">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 'inherit', textDecoration: 'none', color: 'inherit' }}>
            <img src="/logo.png" alt="QIC Logo" id="logo-img" />
            <span id="logo-text">QIC</span>
          </Link>
        </div>
        <div className="right">
          <div className="part-1">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
              >
                <h4 className="hovering-elements">{item.name}</h4>
              </Link>
            ))}
          </div>
          <div className="part-2">
            <button>join us</button>
            <div className="links">
              <div className="link"><a href="#">in</a></div>
              <div className="link"><a href="#">pi</a></div>
              <div className="link"><a href="#">tw</a></div>
            </div>
            <ThemeToggle />
            
            {/* Mobile Menu Trigger - strictly hidden only on screens wider than 1020px */}
            <button
              onClick={toggleMenu}
              className={`focus:outline-none z-[10000] relative custom-menu-trigger hover:opacity-70 transition-opacity ${isMenuVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Toggle menu"
              ref={burgerRef}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        ref={navRef}
        className="fixed top-0 right-0 z-[50] flex flex-col w-full h-screen uppercase pt-20 pb-14 shadow-2xl md:hidden"
        style={{ 
          pointerEvents: isOpen ? 'all' : 'none', 
          display: 'none',
          backgroundColor: 'var(--background-bg)',
          color: 'var(--foreground-text)',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        {/* Close Button */}
        <button 
          onClick={toggleMenu}
          className="absolute top-8 right-8 p-2 hover:opacity-50 transition-opacity"
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Nav Links — centered in the remaining flex-grow space */}
        <div className="flex-1 flex flex-col justify-center gap-y-2">
          <div className="flex flex-col text-4xl sm:text-5xl font-medium tracking-tight gap-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="overflow-hidden"
              >
                <Link
                  href={item.href}
                  ref={(el) => { if (el) linksRef.current[index] = el; }}
                  className="transition-all duration-300 cursor-pointer hover:opacity-30 inline-block py-2"
                  onClick={(e) => {
                    handleScroll(e, item.href);
                    if (isOpen) toggleMenu();
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact — pinned to bottom */}
        <div ref={contactRef} className="flex flex-col gap-6">
          <div>
            <p className="tracking-[0.2em] opacity-30 text-[10px] mb-2 font-semibold uppercase">CONTACT</p>
            <a className="text-base lowercase hover:opacity-50 transition-all duration-300" href="mailto:contact@matlablatex.club">
              contact@matlablatex.club
            </a>
          </div>
          <div>
            <p className="tracking-[0.2em] opacity-30 text-[10px] mb-2 font-semibold uppercase">SOCIAL MEDIA</p>
            <div className="flex flex-col gap-1">
              <a href="https://github.com/matlab-latex-club" target="_blank" rel="noopener noreferrer" className="text-base hover:opacity-50 transition-all">
                {"{ GITHUB }"}
              </a>
              <a href="https://linkedin.com/company/matlab-latex-club" target="_blank" rel="noopener noreferrer" className="text-base hover:opacity-50 transition-all">
                {"{ LINKEDIN }"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
