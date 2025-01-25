"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center text-fuchsia-600 text font-bold text-xl gap-5">
      Error in Review Id😤 <br />
      <div className="text-md text-cyan-900 text-center">
        👀 Me thiyenne api component eken custom error ekak pass karama, <br />{" "}
        methana pennana eka 👉
        <span className="text-green-700">{error.message}</span>
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
