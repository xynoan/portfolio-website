import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createMetadata } from "./metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = createMetadata('ncmorva');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Nerd Font Mono from CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@4.5.0/index.css"
        />
      </head>
      <body className={`${inter.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
