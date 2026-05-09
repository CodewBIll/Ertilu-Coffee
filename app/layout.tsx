import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ertilu | Coffee Shop Bandung",
  icons: {
    icon: "/images/Ertilulogo.png",
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
