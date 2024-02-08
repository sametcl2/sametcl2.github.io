import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samet Şahin",
  description: "Portfolio Site of Samet Şahin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-black ${inter.className} antialiased`}>
        <nav className="flex justify-center md:justify-end w-full sticky bg-black py-4 px-12 top-0 z-50">
          <a href="#projects" className="text-white font-light text-lg mr-6">
            Projects
          </a>
          <a
            href="/SametSahin_Resume2024.pdf"
            download={true}
            className="text-white font-light text-lg mr-6"
          >
            Resume
          </a>
          <a href="#contact" className="text-white font-light text-lg">
            Contact
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
