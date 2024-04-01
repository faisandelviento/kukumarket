import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer";
import NavBar from "./ui/navbar";

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
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
