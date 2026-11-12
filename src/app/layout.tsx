import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#166534",
};

export const metadata: Metadata = {
  title: {
    default: "Al-Qalam — Writing Lives, Shaping Humanity",
    template: "%s | Al-Qalam",
  },
  description:
    "Inclusive education, research, innovation and social enterprise. Research. Create. Empower. Transform.",
  metadataBase: new URL("https://alqalam.org"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Al-Qalam",
    title: "Al-Qalam — Writing Lives, Shaping Humanity",
    description:
      "Inclusive education, research, innovation and social enterprise transforming knowledge into accessible resources and opportunities.",
    url: "https://alqalam.org",
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Qalam — Writing Lives, Shaping Humanity",
    description:
      "Inclusive education, research, innovation and social enterprise.",
  },
  robots: {
    index: false,
    follow: false,
    // Change to true when ready for search engines
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Skip to content — visible only on keyboard focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}