import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import localFont from "next/font/local";

const lexend = localFont({
  src: "../fonts/lexend.ttf",
  variable: "--font-lexend",
});

const bricolage = localFont({
  src: "../fonts/bricolage.ttf",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Benfort",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} ${bricolage.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
