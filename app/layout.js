import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment Booking",
  description: "Doctor Appointment Booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={outfit.className}>
        <div className="md:px-10">
          <Header />
          {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}