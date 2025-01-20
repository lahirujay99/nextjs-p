import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "me thama product page eka",
  },
};

//replace prop eken wenne browser history stack eke dan thiyena record ekath ekka replace prop eka place
//karala thiyena link eke link eka replace wenawa ethkota back unata kalin awa ekata newe refirect wenne
//itath kalin awa page ekata thama yanne

export default function Product() {
  return (
    <div>
      <p className="text-2xl">Product list</p>
      <p>
        <Link href="/product/1" replace>
          Product 1
        </Link>
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
