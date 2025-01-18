export default async function ProductItem({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <h1>Product ID is {productId}</h1>;
}
