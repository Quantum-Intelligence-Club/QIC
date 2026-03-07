"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TeamCarousel from "./TeamCarousel";
import TeamMemberDetail from "./TeamMemberDetail";
import { TeamMember, teamMembers } from "./data";

export function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="w-full bg-[#f4f1ea] text-[#1a1a1a] overflow-hidden font-sans relative" id="team">
      <AnimatePresence mode="wait">
        {selectedMember ? (
          <TeamMemberDetail
            key="detail"
            member={selectedMember}
            onBack={() => setSelectedMember(null)}
          />
        ) : (
          <TeamCarousel
            key="carousel"
            members={teamMembers}
            onSelect={setSelectedMember}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
