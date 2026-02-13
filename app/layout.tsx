import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RT Detail - Perfección en cada detalle",
  description: "Taller premium de detailing automotriz. Sellados, pulidos, tapizados y más.",
  keywords: ["detailing", "automotriz", "sellado", "pulido", "tapizado", "RT Detail"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bebas.variable}`}>
      <body className="overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
