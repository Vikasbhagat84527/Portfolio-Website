import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Full-Stack Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}