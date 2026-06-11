import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <p className="section-watermark left-8 top-0">About Us</p>
      <div className="maincontainer relative grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="relative min-h-[470px]">
          <div className="absolute left-0 top-10 h-[390px] w-[78%] overflow-hidden rounded-lg bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('/hero-bg.png')" }} />
          <div className="absolute bottom-0 right-0 h-[210px] w-[48%] overflow-hidden rounded-md border-8 border-white bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url('/hero-bg.png')" }} />
          <div className="absolute right-20 top-0 h-[270px] w-[170px] rounded-md border-4 border-[#112B6D]" />
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-[#323232] md:text-5xl">Who We Are</h2>
          <p className="mt-6 text-sm leading-7 text-slate-500">
            Khan Home Group is a dynamic business conglomerate operating across multiple industries. Through our diverse portfolio of companies, we provide high-quality products, professional services, and innovative solutions that contribute to the growth of businesses and communities.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-6">
            <div>
              <strong className="block text-4xl text-[#323232]">7+</strong>
              <span className="text-xs text-slate-500">Business Division</span>
            </div>
            <div>
              <strong className="block text-4xl text-[#323232]">15+</strong>
              <span className="text-xs text-slate-500">Years In Operation</span>
            </div>
            <div>
              <strong className="block text-4xl text-[#323232]">UAE</strong>
              <span className="text-xs text-slate-500">Head Quarters</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-semibold text-[#4285f4]">Google</span>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <span key={item} className="h-9 w-9 rounded-full border-2 border-white bg-slate-300" />
              ))}
            </div>
          </div>

          <a href="#contact" className="mt-8 inline-flex rounded-full bg-[#112B6D] px-7 py-3 text-sm font-semibold text-white">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
