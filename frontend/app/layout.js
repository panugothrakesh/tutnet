import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutnet - Your tutor finder.",
  description: "Find your tutor at your ease. Multiple choices to make the right decision that suits your requirements...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7F7F8] text-sm `}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
