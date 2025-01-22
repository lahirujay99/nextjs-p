import { notFound, redirect } from "next/navigation";
export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
    //redirect("/product"); // mekenuth karanne router.push() wagema wadak
  }
  return (
    <h1>
      product {productId} review {reviewId}{" "}
    </h1>
  );
}
