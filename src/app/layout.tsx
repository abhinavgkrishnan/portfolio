import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Mono, Changa_One } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav G Krishnan | Portfolio",
  description: "Portfolio of Abhinav G Krishnan - AI Engineer & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${ibmPlexMono.variable} ${changaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
