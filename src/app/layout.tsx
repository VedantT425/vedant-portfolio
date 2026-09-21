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
  metadataBase: new URL("https://vedant-portfolio.vercel.app"),
  openGraph: {
    title: "Vedant Tripathi | Full Stack Developer & CV Engineer",
    description:
      "Architecting Scalable Web Systems & Real-Time AI Pipelines",
    type: "website",
    url: "https://vedant-portfolio.vercel.app",
    siteName: "Vedant Tripathi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Tripathi | Full Stack Developer & CV Engineer",
    description:
      "Full Stack Developer and Computer Vision Engineer building production-ready web and AI systems.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vedant Tripathi",
              jobTitle: "Full Stack Developer & Computer Vision Engineer",
              url: "https://vedant-portfolio.vercel.app",
              email: "mailto:vedantripathi05@gmail.com",
              sameAs: [
                "https://github.com/VedantT425",
                "https://linkedin.com/in/vedant-tripathi-800896273",
              ],
              knowsAbout: [
                "MERN Stack",
                "Computer Vision",
                "Python",
                "OpenCV",
                "REST APIs",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
