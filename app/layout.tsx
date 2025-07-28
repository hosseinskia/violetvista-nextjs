import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// Configure Poppins font with optimized loading for performance
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  display: "swap",
});

// Define metadata for SEO and PWA compatibility
export const metadata: Metadata = {
  title: "VioletVista",
  description: "Welcome to VioletVista - Your portal to vibrant experiences.",
  manifest: "/manifest.json", // Link to PWA manifest
};

// Root layout with PWA meta tags and full-height layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="jh4M3O9h4h6N0abGGjbzdi09_MbPktaRKi7lnvAa3s8"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.className} antialiased bg-violet-50 text-violet-900 h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
