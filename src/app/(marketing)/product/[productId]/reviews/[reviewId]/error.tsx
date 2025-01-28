"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="flex flex-col items-center text-fuchsia-600 text font-bold text-xl gap-5">
      Error in Review Id😤 <br />
      <div className="text-md text-cyan-900 text-center">
        👀 Me thiyenne api component eken custom error ekak pass karama, <br />{" "}
        methana pennana eka 👉
        <span className="text-green-700">{error.message}</span>
      </div>
      <div className="text-lg text-slate-700 flex items-center flex-col">
        <p>😒 if you need to try again? then click the Try Again button </p>
        <button onClick={reload} className="bg-blue-200 rounded p-2">
          Try Again
        </button>
      </div>
      if you need more assistance? <br />
      Go Back to Homepage 😏👇
      <br />
      <Link href="/" className="text-purple-500 mb-4 mt-[-10px] ">
        👉 Methana Obanna 👈
      </Link>
    </div>
  );
}

//error.tsx file eka add karama apita aye wenama msg dada inna onna
//meke asse dana dewal mekata adala directory ekata pennanawa
//meken thiyena benifit ekak thama error ekak unama mulu site ekama down wenne nathuwa e error eka
//wechchi component eka hari page eka hri witharak wada karanne nathuwa yana eka
//ethakota apita kisima case ekak nathuwa anikwa wada karana gaman meka hadganna puluwan
