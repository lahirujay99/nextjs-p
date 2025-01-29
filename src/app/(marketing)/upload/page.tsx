import { onSubmit } from "@/app/actions";

export default function page() {
  return (
    <div className=" bg-cyan-300 py-5 pl-5">
      <form action={onSubmit} className="flex flex-col max-w-lg gap-5">
        <input type="file" name="file" />
        <input
          type="submit"
          value="upload"
          className="bg-cyan-800 rounded text-white font-medium p-2 w-1/4"
        />
      </form>
    </div>
  );
}
