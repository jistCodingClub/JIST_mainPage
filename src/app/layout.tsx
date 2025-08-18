import type { Metadata } from "next";
import { Luckiest_Guy, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/Dashboard/LenisProvider";



const luckiestGuy = Luckiest_Guy({
  weight: "400",
  variable: "--font-lucky",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JIST Coding Club",
  description: "Official website of JIST Coding Club",
   icons: {
    icon: "/club-logo.svg", 
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} ${poppins.variable} antialiased`}>
 
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
