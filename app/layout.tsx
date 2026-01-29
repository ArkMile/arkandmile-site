import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Ark & Mile",
  description: "Independent software built for the long haul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gunmetal text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
