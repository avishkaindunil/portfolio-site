import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-36">{children}</main> {/* extra padding for navbar */}
        <Footer />
      </body>
    </html>
  );
}
