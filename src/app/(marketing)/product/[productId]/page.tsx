import { Metadata } from "next";

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
  return <h1>Product ID is {productId}</h1>;
}
