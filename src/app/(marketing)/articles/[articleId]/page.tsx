import Link from "next/link";

export default async function Articles({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News Article is {articleId}</h1>
      <p>Reading in Language is {lang}</p>
      <div className="flex flex-row gap-5 text-lg bg-cyan-800 text-white py-5 pl-3 mt-5">
        <Link href={`/articles/${articleId}?lang=en`}>Englsh</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
// "use client";
// import Link from "next/link";
// import { use } from "react"; //use eken karanne client side component waladi async await wada karanne nane
// // ehinda client side component wala promise ekak call karanna meka use karnna pululwan
// // ehema nttn use state, use effect pawichchi karanna wenawa. nttn react-query wage library ekak use karnnath wenwa
//layout components wala access karanna pululwan params witharai, search params access karanna ba. page.tsx wala dekama access karanna puluwan

// export default function Articles({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) {
//   const { articleId } = use(params);
//   const { lang = "en" } = use(searchParams);
//   return (
//     <div>
//       <h1>News Article is {articleId}</h1>
//       <p>Reading in Language is {lang}</p>
//       <div className="flex flex-row gap-5 text-lg bg-cyan-800 text-white py-5 pl-3 mt-5">
//         <Link href={`/articles/${articleId}?lang=en`}>Englsh</Link>
//         <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//         <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//       </div>
//     </div>
//   );
// }
