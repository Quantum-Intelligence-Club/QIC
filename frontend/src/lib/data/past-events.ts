export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  galleryItems?: { name: string; year: number | string; img: string }[];
  span?: "large" | "medium" | "small"; // Control the bento grid span
  theme?: "default" | "glass" | "accent"; // Theme variation
  link?: string;
  tags?: string[];
}

const DEFAULT_GALLERY_ITEMS = [
  { name: "Fieldnotes", year: 2020, img: "/images/img1.jpg" },
  { name: "Redline", year: 2021, img: "/images/img2.jpg" },
  { name: "Gallery walk", year: 2019, img: "/images/img3.jpg" },
  { name: "Side Profile", year: 2022, img: "/images/img4.jpg" },
  { name: "Open Mic", year: 2023, img: "/images/img5.jpg" },
  { name: "Backboard", year: 2024, img: "/images/img6.jpg" },
  { name: "Afterglow", year: 2021, img: "/images/img7.jpg" },
  { name: "Hill House", year: 2020, img: "/images/img8.jpg" },
  { name: "Low Tide", year: 2018, img: "/images/img9.jpg" },
  { name: "Timepiece", year: 2019, img: "/images/img10.jpg" },
  { name: "Close Focus", year: 2022, img: "/images/img11.jpg" },
  { name: "AirFrame", year: 2023, img: "/images/img12.jpg" },
  { name: "Hardcase", year: 2024, img: "/images/img13.jpg" },
  { name: "Deep Red", year: 2021, img: "/images/img14.jpg" },
  { name: "Fast Track", year: 2025, img: "/images/img15.jpg" },
  { name: "Night Shift", year: 2026, img: "/images/img16.jpg" },
];

export const pastEvents: GalleryItem[] = [
  {
    id: "1",
    title: "Quantum Computing Fundamentals Bootcamp",
    description: "A deep dive into the basics of quantum mechanics and its application in modern computing architectures.",
    category: "Bootcamp",
    date: "22 Feb 2026",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    galleryItems: DEFAULT_GALLERY_ITEMS,
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
    galleryItems: DEFAULT_GALLERY_ITEMS,
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
    galleryItems: DEFAULT_GALLERY_ITEMS,
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
    galleryItems: DEFAULT_GALLERY_ITEMS,
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
    galleryItems: DEFAULT_GALLERY_ITEMS,
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
    galleryItems: DEFAULT_GALLERY_ITEMS,
    span: "large",
    tags: ["Innovation", "Collaboration"],
  },
];
