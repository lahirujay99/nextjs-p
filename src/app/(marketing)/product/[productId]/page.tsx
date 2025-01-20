import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const productName = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${productId}`);
    }, 100);
  });
  return {
    title: `product ${productName}`,
  };
};

export default async function ProductItem({ params }: Props) {
  const { productId } = await params;
  return (
    <div>
      <p>Product ID is {productId}</p>
      <div className="flx flex-row  underline">
        lets see more{" "}
        <Link href={`/product/${productId}/reviews`}>click here</Link>
      </div>
    </div>
  );
}
