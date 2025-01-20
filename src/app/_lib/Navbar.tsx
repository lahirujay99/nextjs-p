import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row sticky top-0 left-0 space-x-5 bg-sky-300 justify-center mb-10 py-5">
      <p className="text-lg">
        <Link href="/">home</Link>
      </p>
      <p className="text-lg">
        <Link href="/blog">blog</Link>
      </p>
      <p className="text-lg">
        <Link href="/about">about</Link>
      </p>
      <p className="text-lg">
        <Link href="/counter">counter</Link>
      </p>
      <p className="text-lg">
        <Link href="/product">products</Link>
      </p>
    </div>
  );
}
