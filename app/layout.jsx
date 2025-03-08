import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/componenets/NavBar";
import Footer from "@/componenets/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nkosinathi Silinda's portfolio website",
  description: "Nkosinathi Silinda's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <main className="flex flex-col">
          <NavBar />
          {children}
          <Footer />
        </main>
        
      </body>
    </html>
  );
}
