import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/componenets/NavBar";
import Footer from "@/componenets/Footer";
import MetaTags from "@/componenets/MetaTags"; // Import your MetaTags component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hero-section`}
      >
        <MetaTags /> {/* Include MetaTags here for SEO */}
        <main className="flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow">{children}</div> {/* Ensures content area expands */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
