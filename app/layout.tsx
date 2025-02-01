import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

// Components
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Souvik Samanta - SDE",
  description:
    "Software Development Engineer, excels in AI, ML, and full-tack development, creating optimized solutions with Python, Java, React.js, AWS, and CI/CD expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable} suppressHydrationWarning>
        <Header />
        <StairTransition />
        <ToastContainer />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
