import Navbar from "../_lib/Navbar";
import "../globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
