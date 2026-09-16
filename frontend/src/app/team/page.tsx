import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the passionate student leads, researchers, developers, and designers driving the Quantum Intelligence Club at VIT Bhopal University.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Meet the Team | QIC VIT Bhopal",
    description:
      "Meet the passionate student leads, researchers, developers, and designers driving the Quantum Intelligence Club at VIT Bhopal University.",
    url: "/team",
    images: ["/hero.jpeg"],
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
