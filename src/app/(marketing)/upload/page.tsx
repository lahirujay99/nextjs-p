import { onSubmit } from "@/app/actions";

export default function page() {
  return (
    <div className="flex flex-col bg-cyan-300 py-5 pl-5">
      <form action={onSubmit}>
        <input type="file" name="file" />
        <input
          type="submit"
          value="upload"
          className="bg-cyan-800 rounded text-white font-medium p-2"
        />
      </form>
    </div>
  );
}
