"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MorphingTextProps {
  className?: string;
  texts: string[];
}

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    let timeout: NodeJS.Timeout;
    const currentText = texts[textIndex];
    
    // Typing state logic
    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, 30); // Fast deleting speed
      }
    } else {
      if (displayText === currentText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Pause time when fully typed out
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 80); // Typing speed per character
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <div className={cn("relative w-full h-full flex items-start text-left", className)}>
      <span
        style={{
          textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        }}
      >
        {displayText}
        {/* Blinking Cursor */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[0.08em] h-[0.9em] bg-white ml-[0.1em] rounded-sm"
          style={{
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            verticalAlign: "middle"
          }}
        />
      </span>
    </div>
  );
};
