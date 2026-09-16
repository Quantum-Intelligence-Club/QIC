"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Mail, Phone, IdCard, Sparkles, Building, Award, Send } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "./data";
import clsx from "clsx";

interface TeamMemberDetailProps {
  member: TeamMember;
  onBack: () => void;
}

export default function TeamMemberDetail({ member, onBack }: TeamMemberDetailProps) {
  const isPlaceholder = member.isPlaceholder;

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between py-6 px-4 sm:px-8 md:px-12 lg:px-20 text-[var(--foreground-text)]">
      {/* Top Bar Navigation */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-30 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-[var(--foreground-text)] hover:text-[var(--background-bg)] transition-all text-xs tracking-widest uppercase font-medium cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO TEAM
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-xs font-medium uppercase tracking-wider">
            {member.department}
          </span>
          <span className="px-3 py-1 bg-[#FF6B6B]/15 text-[#FF6B6B] rounded-full text-xs font-bold uppercase tracking-wider">
            {member.role}
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center flex-1 my-8">
        {/* Left Column: Visual Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            layoutId={`card-${member.id}`}
            className="w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-neutral-300 dark:border-neutral-700 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 flex flex-col justify-between p-8 relative"
          >
            {/* Background Image if available */}
            {member.image && (
              <>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
              </>
            )}

            <div className="flex justify-between items-start z-10">
              <span
                className={clsx(
                  "text-[10px] uppercase tracking-widest font-mono",
                  member.image ? "text-neutral-200" : "text-neutral-400"
                )}
              >
                {member.registrationNumber || "QIC MEMBER"}
              </span>
              <Sparkles className="w-5 h-5 text-[#FF6B6B]" />
            </div>

            {member.image ? (
              <div className="z-10 mt-auto pt-10">
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white drop-shadow-md">
                  {member.name}
                </h2>
                <p className="text-sm text-neutral-300 mt-1 font-sans">
                  {member.title}
                </p>
              </div>
            ) : (
              <div className="my-auto flex flex-col items-center text-center z-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#FF6B6B]/30 to-purple-500/30 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shadow-inner">
                  <span className="text-5xl sm:text-6xl font-bold font-playfair text-[var(--foreground-text)] tracking-wider">
                    {member.name
                      .split(" ")
                      .filter(Boolean)
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 3)}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl sm:text-3xl font-playfair font-bold text-[var(--foreground-text)]">
                  {member.name}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-sans">
                  {member.title}
                </p>
              </div>
            )}

            {/* Tags Bottom Bar */}
            <div
              className={clsx(
                "flex flex-wrap gap-2 justify-center pt-4 z-10",
                member.image
                  ? "border-t border-white/20"
                  : "border-t border-neutral-300/60 dark:border-neutral-700/60"
              )}
            >
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className={clsx(
                    "text-[10px] px-2.5 py-1 rounded-full font-mono uppercase tracking-wider",
                    member.image
                      ? "bg-white/20 text-white backdrop-blur-sm border border-white/20"
                      : "bg-white/70 dark:bg-black/50 text-[var(--foreground-text)] border border-neutral-200 dark:border-neutral-800"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Detailed Info, Bio, Contact, Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF6B6B] font-semibold">
                About The Role & Member
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mt-1 text-[var(--foreground-text)]">
                {member.name}
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-sans mt-2">
                {member.title} &mdash; <span className="font-semibold">{member.department}</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans pt-2">
              {member.bio}
            </p>
          </motion.div>

          {/* Member Metadata Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
          >
            {member.registrationNumber && (
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60">
                <IdCard className="w-5 h-5 text-[#FF6B6B]" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Reg Number</div>
                  <div className="text-sm font-semibold text-[var(--foreground-text)]">{member.registrationNumber}</div>
                </div>
              </div>
            )}

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 hover:border-[#FF6B6B] transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#FF6B6B] group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Email Contact</div>
                  <div className="text-sm font-semibold text-[var(--foreground-text)] truncate">{member.email}</div>
                </div>
              </a>
            )}

            {member.department && (
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60">
                <Building className="w-5 h-5 text-[#FF6B6B]" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Department</div>
                  <div className="text-sm font-semibold text-[var(--foreground-text)]">{member.department}</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60">
              <Award className="w-5 h-5 text-[#FF6B6B]" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Position</div>
                <div className="text-sm font-semibold text-[var(--foreground-text)]">{member.role}</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          {member.stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-12 pt-4 border-t border-neutral-200 dark:border-neutral-800"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-playfair font-bold text-[var(--foreground-text)]">
                  {member.stats.yearsInPractice ?? 1}+
                </span>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 mt-1">
                  Years Active
                </span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-playfair font-bold text-[#FF6B6B]">
                  {member.stats.projects ?? 5}+
                </span>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 mt-1">
                  Projects & Works
                </span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-playfair font-bold text-[var(--foreground-text)]">
                  {member.stats.rating ?? 4.8}
                </span>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 mt-1">
                  Club Rating
                </span>
              </div>
            </motion.div>
          )}

          {/* Call to Action for Placeholders / Connect for Active */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            {isPlaceholder ? (
              <a
                href="mailto:quantumintelligenceclub@vitbhopal.ac.in"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B6B] text-white text-sm font-semibold hover:bg-[#ff5252] transition-colors shadow-lg shadow-[#FF6B6B]/20 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Apply For This Role
              </a>
            ) : (
              member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground-text)] text-[var(--background-bg)] text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4" /> Connect via Email
                </a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
