import React from "react";

const services = [
  {
    number: "01",
    title: "Building Material",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "▧",
  },
  {
    number: "02",
    title: "Interior Decoration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "▦",
  },
  {
    number: "03",
    title: "Flower Shop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "▣",
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative bg-white pb-16 pt-4">
      <div className="bigcontainer mx-auto">
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_90px_rgba(15,42,113,0.14)]">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero-bg.png')",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#061852]/90 via-[#14246a]/30 to-[#061852]/55" />
            <div className="relative min-h-[580px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="max-w-2xl">
                  <span className="text-sm font-medium text-slate-200">
                    Seven Division One Group
                  </span>
                  <h1 className="mt-4 text-4xl font-semibold uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
                    Everything a Home is made of, under one group
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-200/90">
                    From the materials that build it to the kitchen, the interiors, and the flowers on the table seven specialist divisions, working as one across the UAE.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#112B6D] shadow-lg shadow-slate-950/20 transition hover:bg-slate-100"
                    >
                      Services
                    </a>
                    <a
                      href="#group"
                      className="inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-semibold text-white transition hover:text-slate-200"
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

        <div className="relative z-10 mx-auto -mt-24 grid gap-6 px-6 pb-2 lg:grid-cols-3 lg:px-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-lg bg-white p-7 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#112B6D] text-3xl text-white shadow-lg shadow-[#0f3471]/20">
                  {service.icon}
                </div>
                <span className="text-2xl font-bold text-slate-400">{service.number}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              <a
                href="#services"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#112B6D] transition group-hover:text-[#0d2762]"
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
