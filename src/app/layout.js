import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { AuthProvider } from "./components/common/Authcontext";
import LoginModal from "./components/common/Loginmodal";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizza Nest",
  description: "Upholstery Services Trusted Across Singapore",
  openGraph: {
    title: "Pizza Nest",
    description: "Upholstery Services Trusted Across Singapore",
    images: ["/meta.png"],
  },
};
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <AuthProvider>
          <Navbar />
          <LoginModal />   
          <Suspense>
          {children}
          </Suspense>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
