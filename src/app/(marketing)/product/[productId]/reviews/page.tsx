import Link from "next/link";

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <ul className="text-xl">
      <li>
        <Link href={`/product/${productId}/reviews/1`}>review one</Link>
      </li>
      <li>
        <Link href={`/product/${productId}/reviews/2`}>review 2</Link>
      </li>
      <li>
        <Link href={`/product/${productId}/reviews/3`}>
          review 3
        </Link>
      </li>
    </ul>
  );
}
