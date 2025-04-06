import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobRinger - India's Leading Job Portal | Find Your Perfect Job",
  description:
    "Explore 11,000+ job opportunities on JobRinger, India's premier job portal. Search for work-from-home, IT, healthcare, marketing, and more. Register for free and apply today!",
  keywords:
    "job search, jobs in India, work from home, IT jobs, healthcare jobs, marketing jobs, fresher jobs, job portal, JobRinger, employment opportunities",
  openGraph: {
    title: "JobRinger - Bringing You the Perfect Job!",
    description: "Discover thousands of job listings across India. Apply for free with JobRinger - your gateway to career success.",
    siteName: "JobRinger",
    images: [
      {
        url: "./og-img.png",
        width: 1200,
        height: 630,
        alt: "JobRinger Job Search Portal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobRinger - Find Your Dream Job in India",
    description: "Over 11,000+ jobs to apply! Search and apply for free on JobRinger.",
    images: ["./og-img.png"],
    creator: "@JobRingerIndia",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
