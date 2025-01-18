import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center">
      <h1>The page not found in system</h1>
      <h1>
        <Link href="/">Go to Home</Link>
      </h1>
    </div>
  );
}
