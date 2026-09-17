import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vedant Tripathi | Full Stack Developer & CV Engineer",
  description:
    "Portfolio of Vedant Tripathi — Full Stack Web Developer (MERN) and Computer Vision Engineer specializing in real-time biometric systems, scalable web platforms, and AI-driven analytics.",
  keywords: [
    "Vedant Tripathi",
    "Full Stack Developer",
    "Computer Vision",
    "MERN Stack",
    "React",
    "Next.js",
    "Python",
    "OpenCV",
    "Portfolio",
  ],
  authors: [{ name: "Vedant Tripathi" }],
  openGraph: {
    title: "Vedant Tripathi | Full Stack Developer & CV Engineer",
    description:
      "Architecting Scalable Web Systems & Real-Time AI Pipelines",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
