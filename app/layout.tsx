import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "./components/navbar/Menu";
import { Footer } from "./components/footer/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hard360",
  description:
    "Tienda de hardware para PC: placas de video, procesadores, motherboards y más.",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Clásico
      { url: "/favicon-16x16.png", sizes: "16x16" }, // Pequeño
      { url: "/favicon-32x32.png", sizes: "32x32" }, // Grande
    ],
    apple: [
      { url: "/android-chrome-192x192.png", sizes: "192x192" }, // iOS/Android compatible
      { url: "/android-chrome-512x512.png", sizes: "512x512" }, // Alta resolución (opcional pero la incluimos)
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <CartProvider>
          <ToastContainer position="top-right" autoClose={6000} />
          <Menu />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
