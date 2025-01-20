import { Metadata } from "next";
import "../globals.css";
import Navbar from "../_lib/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Hallow me thama man practice wenna use karana project eka",
    template: "%s | lahiru",
  },
  description: "Generated by Next.js",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto mb-5 ">{children}</div>
        <footer>footer</footer>
      </body>
    </html>
  );
}
