import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Oil Reminder",
  description: "Nunca esqueça de trocar o óleo. Baixe agora!",
};

const poppins = Poppins({
  weight: ["400", "600", "700"], 
  subsets: ["latin"],
  display: "swap", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
