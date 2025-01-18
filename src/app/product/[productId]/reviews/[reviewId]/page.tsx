import { notFound } from "next/navigation";
export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      product {productId} review {reviewId}{" "}
    </h1>
  );
}
