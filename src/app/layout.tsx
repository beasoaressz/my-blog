import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beatriz Soares - Frontend Developer",
  description:
    "Desenvolvedora frontend apaixonada por criar interfaces modernas e funcionais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <div className="flex min-h-screen items-center justify-center p-5">
          <div className="w-full max-w-md">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
