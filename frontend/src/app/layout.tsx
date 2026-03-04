import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "QIC - Quantum Intelligence Club",
  description: "Quantum Intelligence Club at VIT Bhopal University. Explore Quantum Computing, AI, and Research.",
  openGraph: {
    title: "QIC - Quantum Intelligence Club",
    description: "Quantum Intelligence Club at VIT Bhopal University. Explore Quantum Computing, AI, and Research.",
    url: "http://localhost:3000",
    siteName: "QIC",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "QIC Hero View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QIC - Quantum Intelligence Club",
    description: "Quantum Intelligence Club at VIT Bhopal University. Explore Quantum Computing, AI, and Research.",
    images: ["/hero.jpeg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

import { StairsProvider } from "@/components/stairs/StairsContext";
import StairsWrapper from "@/components/stairs/StairsWrapper";

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
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StairsProvider>
            <StairsWrapper>
              <SmoothScroll>{children}</SmoothScroll>
            </StairsWrapper>
          </StairsProvider>
        </ThemeProvider>
      </body>

    </html>
  );
}
