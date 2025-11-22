import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const dmSans = DM_Sans({
  weight: ["700", "400", "500"], // Include whatever weights your site needs
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
