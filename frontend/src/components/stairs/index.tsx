import React from 'react';
import { motion, Variants } from 'framer-motion';
import { opacity } from './anim';

interface StairsProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Stairs({ children, backgroundColor }: StairsProps) {
  const nbOfColumns = 5;

  const createExpandVariant = (i: number): Variants => ({
    initial: { 
      top: 0,
      height: "100vh" 
    },
    enter: { 
      top: "100vh",
      height: "0vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1]
      } as any, // Cast transition to any to bypass strict Framer Motion type issue with cubic-bezier array
      transitionEnd: { height: "0", top: "0" }
    }
  });

  const bg = backgroundColor || 'black';

  return (
    <div className="stairs-container">
      <motion.div 
        initial="initial"
        animate="enter"
        variants={opacity}
        className="transition-background"
        style={{ position: 'fixed', width: '100%', height: '100vh', backgroundColor: bg, zIndex: 9999, pointerEvents: 'none', top: 0, left: 0 }}
      />
      <div className="transition-container" style={{ position: 'fixed', width: '100vw', height: '100vh', display: 'flex', left: 0, top: 0, pointerEvents: 'none', zIndex: 9999 }}>
        {
          [...Array(nbOfColumns)].map((_, i) => {
            return (
              <motion.div 
                key={i}
                initial="initial"
                animate="enter"
                variants={createExpandVariant(i)}
                style={{ position: 'relative', height: '100%', width: '100%', backgroundColor: bg, zIndex: 9999 }}
              />
            );
          })
        }
      </div>
      {children}
    </div>
  );
}

