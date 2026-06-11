import React from "react";

const services = [
  {
    number: "01",
    title: "Building Material",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "🏗",
  },
  {
    number: "02",
    title: "Interior Decoration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "🛋",
  },
  {
    number: "03",
    title: "Flower Shop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "🌸",
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative bg-slate-100 py-10">
      <div className="bigcontainer mx-auto px-4 sm:px-6 lg:px-4">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_40px_120px_rgba(15,42,113,0.12)]">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero-bg.png')",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/20 to-slate-950/70" />
            <div className="relative px-6 py-16 sm:px-10 sm:py-24 lg:px-14 lg:py-28">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200">
                    Seven Division One Group
                  </span>
                  <h1 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                    Everything a Home is made of, under one group
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-200/90 md:text-lg">
                    From the materials that build it to the kitchen, the interiors, and the flowers on the table seven specialist divisions, working as one across the UAE.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f3471] shadow-lg shadow-slate-950/20 transition hover:bg-slate-100"
                    >
                      Services
                    </a>
                    <a
                      href="#group"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      Explore Division <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto px-12 -mt-15 grid gap-6 pb-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[28px] bg-white p-6 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0f3471] text-2xl text-white shadow-lg shadow-[#0f3471]/20">
                  {service.icon}
                </div>
                <span className="text-2xl font-bold text-slate-400">{service.number}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              <a
                href="#services"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#0f3471] transition group-hover:text-[#0d2762]"
              >
                Read More <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
