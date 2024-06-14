import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} flex flex-col min-h-dvh bg-light-gray-200 dark:bg-dark-gray-100 overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
