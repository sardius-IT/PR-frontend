import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ImmigraPath — Immigration Consultants",
  description:
    "Ethical guidance for PR, Study, and Work visas. Hyderabad • Chennai • Pan-India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Navbar fixed at top */}
        <Navbar />

        {/* Main content with top padding to avoid overlap */}
        <main className="flex-1 pt-24">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

