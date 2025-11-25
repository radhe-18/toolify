
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToolifyAI",
  description: "Discover and compare the best AI tools for every workflow.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "ToolifyAI",
    description: "Discover and compare the best AI tools for every workflow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolifyAI",
    description: "Discover and compare the best AI tools for every workflow."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="container py-6 bg-[#f8f9fa] dark:bg-[#111827] rounded-2xl shadow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
