import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteChrome from "./SiteChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forge Intelligence AI | Development, strategy & AI automations",
  description:
    "Forge Intelligence AI helps ambitious businesses build smarter through expert development, clear strategy, and practical AI automation.",
  keywords: ["product strategy", "SaaS development", "AI automations", "software development", "Forge Intelligence AI"],
  openGraph: {
    title: "Forge Intelligence AI | Development, strategy & AI automations",
    description:
      "Build smarter, move faster, and automate more with Forge Intelligence AI.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <SiteChrome />
        {children}
      </body>
    </html>
  );
}
