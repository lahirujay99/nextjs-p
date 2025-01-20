import { Metadata } from "next";

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
        <div className="sticky top-0 h-36 max-w-full bg-slate-400 m-0 p-0 flex flex-grow justify-center">
          header
        </div>
        {children}
        <div className="sticky top-0 h-36 max-w-full bg-slate-400 m-0 p-0">
          footer
        </div>
      </body>
    </html>
  );
}
