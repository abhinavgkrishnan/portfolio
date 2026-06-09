import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav G Krishnan — AI Engineer",
  description:
    "Abhinav G Krishnan — AI Engineer & full-stack developer. Agent orchestration, high-throughput data pipelines, and the developer tools that make them usable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
