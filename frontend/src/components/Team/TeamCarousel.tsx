"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TeamMember, departments, DepartmentType } from "./data";
import clsx from "clsx";

interface TeamCarouselProps {
  members: TeamMember[];
  onSelect: (member: TeamMember) => void;
  selectedDepartment?: DepartmentType;
  onDepartmentChange?: (dept: DepartmentType) => void;
}

export default function TeamCarousel({
  members,
  onSelect,
  selectedDepartment = "Developer Team",
  onDepartmentChange,
}: TeamCarouselProps) {
  const [currentDept, setCurrentDept] = useState<DepartmentType>(selectedDepartment);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Sync internal and external department state
  const handleDepartmentSelect = (dept: DepartmentType) => {
    setCurrentDept(dept);
    setActiveIndex(0);
    if (onDepartmentChange) {
      onDepartmentChange(dept);
    }
  };

  const filteredMembers = useMemo(() => {
    if (currentDept === "All") {
      return members;
    }
    return members.filter((m) => m.department === currentDept);
  }, [members, currentDept]);

  const totalMembers = filteredMembers.length;

  const handleNext = useCallback(() => {
    if (totalMembers <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalMembers);
  }, [totalMembers]);

  const handlePrev = useCallback(() => {
    if (totalMembers <= 1) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
  }, [totalMembers]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Safe active member
  const currentMember = filteredMembers[activeIndex] || filteredMembers[0];

  // Perspective cards calculation
  const visibleCards = useMemo(() => {
    if (totalMembers === 0) return [];
    const countToShow = Math.min(4, totalMembers);
    return Array.from({ length: countToShow }, (_, i) => {
      const memberIndex = (activeIndex + i) % totalMembers;
      return {
        member: filteredMembers[memberIndex],
        slotIndex: i,
        uniqueKey: `${filteredMembers[memberIndex].id}-slot-${i}`,
      };
    });
  }, [filteredMembers, activeIndex, totalMembers]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between relative px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 select-none">
      {/* Department Filter Bar - Clean, spacious & never cramped */}
      <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 z-30">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] opacity-50 px-1">
            <span>Filter By Department</span>
            <span>{totalMembers} {totalMembers === 1 ? "Profile" : "Profiles"}</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none no-scrollbar flex-nowrap sm:flex-wrap">
            {departments.map((dept) => {
              const count =
                dept === "All"
                  ? members.length
                  : members.filter((m) => m.department === dept).length;
              const isSelected = currentDept === dept;

              return (
                <button
                  key={dept}
                  onClick={() => handleDepartmentSelect(dept)}
                  className={clsx(
                    "pl-4 pr-3.5 py-2 sm:pl-5 sm:pr-4 sm:py-2.5 rounded-full border text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-200 flex items-center gap-2.5 cursor-pointer shrink-0 select-none",
                    isSelected
                      ? "bg-[var(--foreground-text)] text-[var(--background-bg)] border-[var(--foreground-text)] shadow-md"
                      : "bg-transparent text-[var(--foreground-text)] border-[var(--border-color)]/30 hover:border-[var(--border-color)] hover:bg-[var(--foreground-text)]/5 opacity-75 hover:opacity-100"
                  )}
                >
                  <span>{dept}</span>
                  <span
                    className={clsx(
                      "shrink-0 inline-flex items-center justify-center min-w-[22px] h-[20px] px-1.5 rounded-full text-[11px] font-mono leading-none",
                      isSelected
                        ? "bg-[var(--background-bg)] text-[var(--foreground-text)] font-bold"
                        : "bg-[var(--foreground-text)]/10 text-[var(--foreground-text)] font-semibold"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column: Heading & Department Highlights */}
        <div className="lg:col-span-5 flex flex-col justify-center z-20 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)]/30 text-xs tracking-widest uppercase mb-4 text-[var(--foreground-text)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>{currentDept}</span>
            </div>
            <motion.h1
              key={currentDept}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair leading-[0.9] tracking-tight text-[var(--foreground-text)]"
            >
              MEET<br />
              <span className="italic text-[#FF6B6B] opacity-90">OUR</span><br />
              TEAM
            </motion.h1>
          </div>

          <div className="max-w-md space-y-5">
            <p className="text-sm md:text-base text-[var(--foreground-text)] opacity-75 leading-relaxed font-sans">
              Discover the passionate builders, innovators, and leaders driving the Quantum Intelligence Club forward.
            </p>

            {/* Active Member Spotlight - Minimal & Editorial */}
            {currentMember && (
              <motion.div
                key={currentMember.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="pt-5 border-t border-[var(--border-color)]/20 flex flex-col gap-2 cursor-pointer group select-none"
                onClick={() => onSelect(currentMember)}
              >
                <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase">
                  <span className="text-[#FF6B6B] font-bold">
                    {currentMember.role}
                  </span>
                  <span className="opacity-30">•</span>
                  {currentMember.isPlaceholder ? (
                    <span className="text-amber-600 dark:text-amber-400 font-medium">
                      TBA / OPEN
                    </span>
                  ) : (
                    <span className="opacity-60">
                      {currentMember.department}
                    </span>
                  )}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-[var(--foreground-text)] group-hover:text-[#FF6B6B] transition-colors leading-tight">
                      {currentMember.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--foreground-text)] opacity-70 font-sans mt-0.5">
                      {currentMember.title}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--foreground-text)] opacity-60 group-hover:opacity-100 group-hover:text-[#FF6B6B] transition-all pb-1">
                    <span className="hidden sm:inline">Profile</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Column: 3D Stack Carousel */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] md:h-[530px] flex items-center justify-center perspective-1000 z-10 overflow-hidden sm:overflow-visible">
          {totalMembers === 0 ? (
            <div className="text-center p-8 rounded-2xl border border-dashed border-[var(--border-color)]/30">
              <p className="text-lg font-playfair opacity-60">No members in this department yet.</p>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center sm:justify-start sm:pl-10">
              <AnimatePresence mode="popLayout" custom={direction}>
                {visibleCards.map(({ member, slotIndex, uniqueKey }) => {
                  const isFirst = slotIndex === 0;

                  return (
                    <motion.div
                      key={uniqueKey}
                      layoutId={isFirst ? `card-${member.id}` : undefined}
                      initial={{
                        x: isFirst ? 0 : 80 * slotIndex,
                        opacity: 0,
                        scale: 0.8,
                        zIndex: 10 - slotIndex,
                      }}
                      animate={{
                        x: slotIndex * 140,
                        scale: 1 - slotIndex * 0.12,
                        opacity: 1 - slotIndex * 0.22,
                        zIndex: 10 - slotIndex,
                        filter: isFirst ? "blur(0px)" : "blur(2px)",
                      }}
                      exit={{ x: -160, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className={clsx(
                        "absolute w-[260px] sm:w-[320px] md:w-[350px] aspect-[3/4] cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group border border-[var(--border-color)]/25",
                        !isFirst && "pointer-events-none"
                      )}
                      onClick={() => isFirst && onSelect(member)}
                    >
                      <div className="w-full h-full relative overflow-hidden bg-[var(--background-bg)] flex flex-col justify-between p-5 sm:p-6">
                        {/* Background Image if available */}
                        {member.image && (
                          <>
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Smooth gradient at bottom so face is bright and text at bottom is clear */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-40% to-transparent pointer-events-none" />
                          </>
                        )}

                        {/* Card Top Badges */}
                        <div className="flex justify-between items-center z-20">
                          <span
                            className={clsx(
                              "px-3 py-1 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider font-semibold border",
                              member.image
                                ? "bg-black/60 text-white border-white/20"
                                : "bg-[var(--foreground-text)]/5 text-[var(--foreground-text)] border-[var(--border-color)]/30"
                            )}
                          >
                            {member.department}
                          </span>
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#FF6B6B] text-white font-bold uppercase tracking-wider shadow-sm">
                            {member.role}
                          </span>
                        </div>

                        {/* Card Center: Initials Avatar for members without image */}
                        {!member.image && (
                          <div className="my-auto flex flex-col items-center justify-center text-center z-10 py-4">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#FF6B6B]/20 to-purple-500/20 border border-[var(--border-color)]/20 flex items-center justify-center shadow-inner">
                              <span className="text-3xl sm:text-4xl font-bold font-playfair text-[var(--foreground-text)] tracking-wider">
                                {member.name
                                  .split(" ")
                                  .filter(Boolean)
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 3)}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Bottom Docked Section: Name, Title & Tags cleanly placed at bottom with zero underflow */}
                        <div className="z-20 mt-auto pt-4 pb-0.5 flex flex-col justify-end">
                          <h4
                            className={clsx(
                              "text-2xl sm:text-3xl font-playfair font-bold leading-tight drop-shadow-md",
                              member.image ? "text-white" : "text-[var(--foreground-text)]"
                            )}
                          >
                            {member.name}
                          </h4>
                          <p
                            className={clsx(
                              "text-xs mt-1 mb-3 line-clamp-1 font-sans",
                              member.image ? "text-neutral-200" : "text-[var(--foreground-text)] opacity-70"
                            )}
                          >
                            {member.title}
                          </p>

                          {/* Tags - neatly docked inside the card */}
                          <div
                            className={clsx(
                              "flex flex-wrap gap-1.5 pt-2.5",
                              member.image
                                ? "border-t border-white/20"
                                : "border-t border-[var(--border-color)]/20"
                            )}
                          >
                            {member.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className={clsx(
                                  "text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider font-mono shrink-0",
                                  member.image
                                    ? "bg-white/20 text-white backdrop-blur-sm border border-white/20"
                                    : "bg-[var(--foreground-text)]/5 text-[var(--foreground-text)] border border-[var(--border-color)]/20"
                                )}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="w-full max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-20 border-t border-[var(--border-color)]/20">
        {/* Active Member Summary */}
        <div className="text-center sm:text-left">
          {currentMember && (
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
              <p className="text-xs sm:text-sm text-[var(--foreground-text)] opacity-80 font-sans">
                Viewing <strong className="opacity-100">{currentMember.name}</strong> ({currentMember.title})
              </p>
            </div>
          )}
        </div>

        {/* Carousel Arrow Controls & Counter */}
        <div className="flex items-center gap-6">
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={totalMembers <= 1}
              aria-label="Previous member"
              title="Previous member"
              className={clsx(
                "w-12 h-12 rounded-full border border-[var(--border-color)]/30 flex items-center justify-center transition-all cursor-pointer",
                totalMembers <= 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[var(--foreground-text)] hover:text-[var(--background-bg)] text-[var(--foreground-text)] active:scale-95"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={totalMembers <= 1}
              aria-label="Next member"
              title="Next member"
              className={clsx(
                "w-12 h-12 rounded-full border border-[var(--border-color)]/30 flex items-center justify-center transition-all cursor-pointer",
                totalMembers <= 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[var(--foreground-text)] hover:text-[var(--background-bg)] text-[var(--foreground-text)] active:scale-95"
              )}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-2xl sm:text-3xl font-playfair text-[var(--foreground-text)]">
            {totalMembers > 0 ? activeIndex + 1 : 0}{" "}
            <span className="text-sm sm:text-base opacity-40 font-sans">
              / {totalMembers}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}