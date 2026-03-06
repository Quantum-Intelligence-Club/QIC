export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  span?: "large" | "medium" | "small"; // Control the bento grid span
  theme?: "default" | "glass" | "accent"; // Theme variation
  link?: string;
  tags?: string[];
}

export const pastEvents: GalleryItem[] = [
  {
    id: "1",
    title: "Quantum Computing Fundamentals Bootcamp",
    description: "A deep dive into the basics of quantum mechanics and its application in modern computing architectures.",
    category: "Bootcamp",
    date: "22 Feb 2026",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    span: "large",
    tags: ["Quantum", "Computing", "Hardware"],
  },
  {
    id: "2",
    title: "AI Ethics & Governance Seminar",
    description: "Discussing the societal impact of large-scale AI deployment and ethical frameworks for developers.",
    category: "Seminar",
    date: "15 Jan 2026",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    span: "medium",
    theme: "glass",
    tags: ["AI", "Ethics", "Policy"],
  },
  {
    id: "3",
    title: "Neural Networks Workshop",
    description: "Hands-on experience in building and training deep neural networks from scratch using PyTorch.",
    category: "Workshop",
    date: "05 Dec 2025",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2069&auto=format&fit=crop",
    span: "small",
    tags: ["Deep Learning", "PyTorch"],
  },
  {
    id: "4",
    title: "Decoherence in Qubits",
    description: "Exploring the challenges of maintaining quantum state in practical hardware implementations.",
    category: "Physics",
    date: "12 Nov 2025",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
    span: "small",
    tags: ["Physics", "Qubits"],
  },
  {
    id: "5",
    title: "Cybersecurity in the Quantum Era",
    description: "Preparing for the future of cryptography and post-quantum security protocols.",
    category: "Security",
    date: "20 Oct 2025",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    span: "medium",
    theme: "accent",
    tags: ["Cybersecurity", "NIST"],
  },
  {
    id: "6",
    title: "QIC Annual Hackathon",
    description: "A 48-hour sprint where students built innovative solutions using quantum and AI technologies.",
    category: "Hackathon",
    date: "01 Sep 2025",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    span: "large",
    tags: ["Innovation", "Collaboration"],
  },
];
