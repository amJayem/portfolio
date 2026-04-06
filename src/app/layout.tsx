import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asifmahmud-jayem.dev"),
  title: {
    default: "Asif Mahmud Jayem — Full Stack Developer",
    template: "%s | Asif Mahmud Jayem",
  },
  description:
    "Full Stack Developer specialising in Next.js, React, TypeScript, Node.js, NestJS, and PostgreSQL. Building scalable, performant web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Bangladesh",
    "Asif Mahmud Jayem",
  ],
  authors: [{ name: "Asif Mahmud Jayem" }],
  creator: "Asif Mahmud Jayem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asifmahmud-jayem.dev",
    title: "Asif Mahmud Jayem — Full Stack Developer",
    description:
      "Full Stack Developer specialising in Next.js, React, TypeScript, Node.js, NestJS, and PostgreSQL.",
    siteName: "Asif Mahmud Jayem Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Asif Mahmud Jayem — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Mahmud Jayem — Full Stack Developer",
    description:
      "Full Stack Developer specialising in Next.js, React, TypeScript, Node.js, NestJS, and PostgreSQL.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
