import { Inter } from "next/font/google";

// Components
import Footer from "../components/Footer";
import Header from "../components/Header";

// Styling
import "./globals.css";
import { PriceTableProvider } from "@/context/PriceTableProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopper",
  description: "Full stack Shopper challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PriceTableProvider>
          <Header />
          {children}
          <Footer />
        </PriceTableProvider>
      </body>
    </html>
  );
}
