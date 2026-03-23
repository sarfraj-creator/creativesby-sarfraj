import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Creativesby Sarfraj — Full Stack Developer & Digital Strategist",
  description: "Mumbai-based Full Stack Developer specializing in Next.js, React & WordPress. Trusted by EdTech, Healthcare & E-Commerce brands across India and globally.",
  keywords: ["Next.js developer India", "Full stack developer Mumbai", "React developer freelancer", "WordPress developer India"],
  authors: [{ name: "Sarfraj Sayyad" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Creativesby Sarfraj — Full Stack Developer",
    description: "Building web experiences that rank, convert, and scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Cursor />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#111923",
              color: "#F2EDE5",
              borderRadius: "8px",
              border: "1px solid #1E2B38",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
            },
            success: { iconTheme: { primary: "#C9A84C", secondary: "#111923" } },
          }}
        />
        {children}
      </body>
    </html>
  );
}
