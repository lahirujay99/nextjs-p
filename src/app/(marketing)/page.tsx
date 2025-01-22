import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-4 bg-cyan-900 text-white my-10">
        <h1 className="text-xl">Halo kohomada</h1>
        <h1 className="text-xl">Welcome</h1>
        <h1 className="text-xl">Wanakkam</h1>
        <h1 className="text-xl">Asalam Malaikkum</h1>
      </div>

      <div className="flex flex-col items-start gap-y-4 bg-cyan-950 text-white my-10 py-5 pl-3">
        <p className="text-xl">Articles</p>
        <p className="text-lg">Click following what you want</p>
        <div className="flex flex-row gap-3 underline">
          <Link href="/articles/breaking-news-123?lang=en">
            Read In English
          </Link>
          <Link href="/articles/breaking-news-123?lang=es">
            Read In Spanish
          </Link>
        </div>
      </div>
    </div>
  );
}
