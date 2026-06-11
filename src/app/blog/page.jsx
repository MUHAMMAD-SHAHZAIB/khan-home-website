import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#112B6D]">Back to Home</Link>
        <h1 className="mt-8 text-4xl font-semibold">Blogs</h1>
        <p className="mt-4 text-slate-600">Blog content will be added here.</p>
      </div>
    </main>
  );
}
