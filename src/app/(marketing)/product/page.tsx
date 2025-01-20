import Link from "next/link";

export default function Product() {
  return (
    <div>
      <p className="text-2xl">Product list</p>
      <p>
        <Link href="/product/1">Product 1</Link>
      </p>
      <p>
        <Link href="/product/2">Product 2</Link>
      </p>
      <p>
        <Link href="/product/3">Product 3</Link>
      </p>
      <p>
        <Link href="/product/4">Product 4</Link>
      </p>
    </div>
  );
}
