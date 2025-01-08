import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "VNEST",
  description: "entrprunership and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen w-full bg-background text-foreground flex flex-col overflow-x-hidden">
        <Navbar />

        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
