import type { Metadata } from "next";
import '@/app/ui/global.css';
import Footer from "./ui/footer";
import NavBar from "./ui/navbar";
import { inter } from "./ui/fonts";

//TODO: BUSCAR FONT 

//import { lusitana } from '@/app/ui/fonts';

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
      {/* className={`${lusitana.className} antialiased`} */}
        <body className={`${inter.className} antialiased`}>
            <NavBar/>
              {children}
            <Footer/>
      </body>
    </html>
  );
}
