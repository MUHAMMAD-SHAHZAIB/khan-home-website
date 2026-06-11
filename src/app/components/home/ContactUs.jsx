import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="relative z-10 -mb-12 px-5 pt-20">
      <div className="maincontainer rounded-lg bg-white p-8 shadow-[0_20px_70px_rgba(15,42,113,0.14)]">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#323232]">Subscribe to Newsletter</h2>
            <p className="mt-2 text-sm text-slate-500">
              Lorem ipsum dolor consectetur nisi montes eu mauris congue. Eget penatibus.
            </p>
          </div>
          <form className="flex gap-3">
            <label className="sr-only" htmlFor="newsletter-email">Email</label>
            <input id="newsletter-email" type="email" placeholder="Email Address" className="min-w-0 flex-1 rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#112B6D]" />
            <button type="submit" className="rounded-md bg-[#112B6D] px-5 text-white">➜</button>
          </form>
        </div>
      </div>
    </section>
  );
}
