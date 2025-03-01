import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Urbanist, Lato } from "next/font/google";
import "./globals.css";

 const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

 const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

 const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

 const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jenaro Lopez",
  description: "Welcome to my portfolio! I'm a Full Stack Developer passionate about creating innovative solutions.",
  openGraph: {
    images: [
      {
        url: '/image/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Jenaro Lopez',
      }
    ],
    title: "Jenaro Lopez",
    description: "Welcome to my portfolio! I'm a Full Stack Developer passionate about creating innovative solutions.",
    siteName: "Jenaro Lopez",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${urbanist.variable} ${lato.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
