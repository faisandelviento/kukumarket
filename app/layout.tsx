import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "KukuMarket",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
