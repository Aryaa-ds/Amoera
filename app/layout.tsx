import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "AMOERA — Digital Invitation",
  description: "Undangan pernikahan digital elegan dengan desain eksklusif, musik pengiring, RSVP interaktif, dan amplop digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Toaster
          position="top-right"
          duration={2500}
        />
      </body>
    </html>
  );
}
