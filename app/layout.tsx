import type { Metadata } from "next";
import Image from "@/public/images/Ertilulogo.png";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ertilu | Coffee Shop Bandung",
  icons: {
    icon: Image.src,
  },
  description:
    "Landing page Ertilu, coffee shop di Bandung dengan akses cepat ke menu, reservasi, dan platform online."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
