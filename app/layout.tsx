import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kompuyá – Reparación de computadores a domicilio en Bogotá",
  description: "Reparación de equipos, licencias originales, encriptación telefónica y servicio a domicilio con rastreo GPS en tiempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}