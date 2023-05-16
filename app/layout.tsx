import "./globals.css";
import { Inter } from "next/font/google";
import { greatVibes } from "./styles/style";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Ken Mwangi",
  description:
    "My personal blog to showcase my full stack development journey, open-source contributions technical writing and my everyday thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
