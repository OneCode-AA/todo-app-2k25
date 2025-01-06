import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo App 2K25",
  description: "Created by Mohamed Jalloh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-auto min-h-[100vh] bg-slate-900 text-white flex justify-center items-center w-[100vw] `}
      >
        {children}
      </body>
    </html>
  );
}
