import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Richeese Factory | Jagonya Ayam & Saus Keju",
  description: "Internship Project by Muhamad Rifqi Fadil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}