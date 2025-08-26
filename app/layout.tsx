import Header from "@/components/header";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Mohammad soleymannzhad",
  description: "Frontend & Programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased overflow-x-hidden relative min-h-screen`}
      >
        <div className="relative w-full min-h-screen">
  
            <main className="relative z-10 w-full">
              <Header />
              {children}
            </main>
      
        </div>
      </body>
    </html>
  );
}
