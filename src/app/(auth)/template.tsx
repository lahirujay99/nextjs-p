"use client";
import Navbar from "../_lib/Navbar";
import { useState } from "react";
import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  return (
    <html lang="en">
      <body>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
