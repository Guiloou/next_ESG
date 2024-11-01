import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <html lang="pt-BR" className="bg-zinc-900">
      <body className={inter.className}>{children}</body>
    </html>
  );
}