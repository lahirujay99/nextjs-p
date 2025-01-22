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
