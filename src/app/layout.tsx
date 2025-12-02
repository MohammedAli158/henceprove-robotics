"use client"
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";

const dmSans = DM_Sans({
  weight: ["700", "400", "500"], // Include whatever weights your site needs
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let path = usePathname();
  path = "/" +  (path).split("/")[1]
  const bare = ['/dashboard']
  const isBare = bare.includes(path);
  
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
         {!isBare && <Navbar />}
        {children}
        {!isBare && <Footer />}
      </body>
    </html>
  );
}
