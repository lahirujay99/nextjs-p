"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="bg-cyan-600 py-5 text-white pl-5 space-y-5">
      <p className="text-xl ">To order this product Click the button</p>
      <p className="">
        <span>Mama lahiru </span>
        <button className="underline" onClick={handleClick}>
          Click karanna meka
        </button>
      </p>
    </div>
  );
}
