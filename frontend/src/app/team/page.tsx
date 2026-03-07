"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TeamCarousel from "../../components/Team/TeamCarousel";
import TeamMemberDetail from "../../components/Team/TeamMemberDetail";
import { TeamMember, teamMembers } from "../../components/Team/data";
import Navbar2 from "@/components/Navbar/Navbar2";
import { Footer } from "@/components/Footer/Footer";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <main className="page-standard min-h-screen w-full text-[#1a1a1a] overflow-hidden font-sans">
      <section className="nav-section">
        <Navbar2 />
        <div className="line"></div>
      </section>
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
      <div className="w-full bg-[#f4f1ea] xl:bg-transparent">
        <Footer />
      </div>
    </main>
  );
}
