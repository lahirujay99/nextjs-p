"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  //   const a = pathname.split("/");
  const reviewId = pathname.split("/")[4];
  return (
    <div className="flex flex-col justify-center">
      <h1>
        Product id {productId} and review id {reviewId} not found
      </h1>
      <h1>{pathname} not found</h1>
      <h1>
        <Link href="/product">Go to product</Link>
      </h1>
    </div>
  );
}
