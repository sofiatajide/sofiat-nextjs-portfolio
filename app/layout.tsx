import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofiat Ajide — Product & Data",
  description: "Product Manager & Data Analyst turning messy problems into measurable results.",
  openGraph: {
    title: "Sofiat Ajide — Product & Data",
    description: "Portfolio of Sofiat Ajide",
    url: "https://sofiatajide.com",
    siteName: "Sofiat Ajide",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofiat Ajide — Product & Data",
    description: "Portfolio of Sofiat Ajide"
  },
  metadataBase: new URL("https://sofiatajide.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
