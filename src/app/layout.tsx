import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Script from "next/script";
import AnimatedBackground from "./Components/AnimatedBackground";
import EasterEgg from './Components/EasterEgg';

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradyumna Upadhyay | Full Stack Developer",
  description: "Full Stack Developer | Software Engineering Master's Student",
  icons: {
    icon: '/Logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <AnimatedBackground />
        <Navbar />
        <EasterEgg />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TCY8Y0LQD2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TCY8Y0LQD2');
        `}
        </Script>
        {children}
      </body>
    </html>
  );
}