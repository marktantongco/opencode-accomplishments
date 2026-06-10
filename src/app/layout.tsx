import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar, NavbarSpacer } from "@/components/layout/navbar";
import { CommandPalette } from "@/components/layout/command-palette";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenCode Accomplishments — 48 Skills & 7 Agent Modes",
  description:
    "Interactive showcase of 48 AI agent skills across 10 categories, 7 cognitive Agent Modes, and 8 pre-built MCP stacks. Built with Next.js, Framer Motion, and Tailwind CSS.",
  keywords: [
    "AI agents",
    "skills",
    "opencode",
    "MCP",
    "agent modes",
    "prompt engineering",
    "AI ecosystem",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jakarta.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--zone-home)] focus:text-[var(--primary-foreground)] focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <NavbarSpacer />
          <main id="main-content">{children}</main>
          <footer className="border-t border-[var(--glass-border)] py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm text-muted-foreground">
              <p>
                OpenCode Accomplishments — 48 Skills, 7 Agent Modes, 8 MCP
                Stacks
              </p>
              <p className="mt-1">
                Built with{" "}
                <span className="text-[var(--zone-home)]">Kinetic Autopoiesis</span>
              </p>
            </div>
          </footer>
          <CommandPalette />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
