import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./styles.css";
import { Suspense } from "react";
import { StairsProvider } from "@/components/stairs/StairsContext";
import StairsWrapper from "@/components/stairs/StairsWrapper";
import MusicBox from "@/components/MusicBox";
import { RootErrorLogger } from "@/components/RootErrorLogger";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qicvitbhopal.com";

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Quantum Intelligence Club | QIC VIT Bhopal",
    template: "%s | QIC VIT Bhopal",
  },
  description:
    "Official website of the Quantum Intelligence Club (QIC) at VIT Bhopal University. Advancing Quantum Computing, Artificial Intelligence, Machine Learning, and Student Research Innovations.",
  applicationName: "QIC VIT Bhopal",
  keywords: [
    "Quantum Intelligence Club",
    "QIC",
    "QIC VIT Bhopal",
    "VIT Bhopal Clubs",
    "Quantum Computing Club",
    "Artificial Intelligence Club",
    "Machine Learning VIT Bhopal",
    "Quantum Research India",
    "Tech Club VIT Bhopal",
    "QIC VITB",
    "Student Club VIT",
    "Quantum Computing India"
  ],
  authors: [{ name: "Quantum Intelligence Club", url: SITE_URL }],
  creator: "Quantum Intelligence Club",
  publisher: "VIT Bhopal University",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quantum Intelligence Club | QIC VIT Bhopal",
    description:
      "Explore Quantum Computing, Artificial Intelligence, workshops, hackathons, and research projects at Quantum Intelligence Club (QIC), VIT Bhopal.",
    url: "/",
    siteName: "Quantum Intelligence Club (QIC)",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Quantum Intelligence Club - QIC VIT Bhopal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Intelligence Club | QIC VIT Bhopal",
    description:
      "Explore Quantum Computing, AI, workshops, hackathons, and research at QIC VIT Bhopal.",
    images: ["/hero.jpeg"],
    creator: "@qic_vitbhopal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon.png" }
    ],
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Quantum Intelligence Club",
      "alternateName": [
        "QIC",
        "QIC VIT Bhopal",
        "Quantum Intelligence Club VITB"
      ],
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      "image": `${SITE_URL}/hero.jpeg`,
      "description":
        "Quantum Intelligence Club (QIC) at VIT Bhopal University is a student organization dedicated to Quantum Computing, Artificial Intelligence, Machine Learning, and cutting-edge tech research.",
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "VIT Bhopal University",
        "url": "https://vitbhopal.ac.in",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sehore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "466114",
          "addressCountry": "IN"
        }
      },
      "sameAs": [
        "https://www.instagram.com/qic_vitbhopal",
        "https://www.linkedin.com/company/quantum-intelligence-club",
        "https://github.com/Quantum-Intelligence-Club"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Quantum Intelligence Club - VIT Bhopal",
      "publisher": {
        "@id": `${SITE_URL}/#organization`
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <RootErrorLogger />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StairsProvider>
            <Suspense fallback={null}>
              <MusicBox showMusicBurger={true} />
              <StairsWrapper>
                <SmoothScroll>{children}</SmoothScroll>
              </StairsWrapper>
            </Suspense>
          </StairsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
