import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  const countedNumber = getRandomInt(2);
  console.log(countedNumber);
  if (countedNumber === 1) {
    throw new Error("Error in handling Reviews");
  }
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
