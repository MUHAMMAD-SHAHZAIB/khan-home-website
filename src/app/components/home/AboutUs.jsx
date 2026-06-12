import Image from "next/image";

const stats = [
  { value: "7+", label: "Business Division" },
  { value: "15+", label: "Years In Operation" },
  { value: "UAE", label: "Head Quarters" },
];

const googleLetters = [
  ["G", "#4285f4"],
  ["o", "#db4437"],
  ["o", "#f4b400"],
  ["g", "#4285f4"],
  ["l", "#0f9d58"],
  ["e", "#db4437"],
];

const reviewers = [
  "bg-[#b78a62]",
  "bg-[#d6b08a]",
  "bg-[#9fb5c8]",
  "bg-[#ecd0ae]",
  "bg-[#8e9fb5]",
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden  py-16 md:py-20 lg:py-24">
      <p className="pointer-events-none absolute left-6 top-5 select-none text-[72px] font-bold leading-none text-transparent [-webkit-text-stroke:1px_#c8d3e9] md:left-12 md:top-8 md:text-[112px] lg:left-16 lg:text-[142px]">
        About Us
      </p>

      <div className="maincontainer relative grid gap-12 lg:grid-cols-[1.03fr_1fr] lg:items-center">
        <div className="relative min-h-90 sm:min-h-107.5 lg:min-h-128.75">
          <div className="absolute left-0 top-11 h-72.5 w-[78%] overflow-hidden rounded-lg shadow-[0_18px_40px_rgba(15,42,113,0.18)] sm:h-91.25 lg:h-107.25">
            <Image
              src="/hero-bg.png"
              alt="Modern skyline towers"
              fill
              priority
              sizes="(min-width: 1024px) 43vw, 78vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute right-[10%] top-20 h-56.25 w-[34%] rounded-[9px] border-[5px] border-primary sm:h-75 lg:right-[12%] lg:h-87.5" />

          <div className="absolute bottom-4 right-0 h-38.75 w-[42%] overflow-hidden rounded-lg border-8 border-white shadow-[0_18px_32px_rgba(15,42,113,0.16)] sm:h-51.25 lg:bottom-10 lg:h-62.25">
            <Image
              src="/hero-bg.png"
              alt="Glass building detail"
              fill
              sizes="(min-width: 1024px) 24vw, 42vw"
              className="scale-125 object-cover object-right"
            />
          </div>
        </div>

        <div className="lg:pl-4">
          <h2 className="text-[38px] font-semibold leading-tight tracking-normal text-secondary md:text-[52px]">
            Who We Are
          </h2>
          <p className="mt-4 max-w-152.25 text-[14px] leading-[1.9] text-[#4f5663]">
            Khan Home Group is a dynamic business conglomerate operating across multiple industries. Through our diverse portfolio of companies, we provide high-quality products, professional services, and innovative solutions that contribute to the growth of businesses and communities.
          </p>

          <div className="mt-8 grid max-w-140 grid-cols-3 gap-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong className="block text-[32px] font-semibold leading-none text-secondary md:text-[42px]">
                  {stat.value}
                </strong>
                <span className="mt-2 block border-b border-slate-300 pb-2 text-[12px] leading-tight text-[#5e6570]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="leading-none">
              <span className="text-[32px] font-medium tracking-normal">
                {googleLetters.map(([letter, color], index) => (
                  <span key={`${letter}-${index}`} style={{ color }}>
                    {letter}
                  </span>
                ))}
              </span>
              <span className="ml-1 align-baseline text-[11px] text-[#5f6368]">
                Reviews
              </span>
              <span className="ml-1 text-[11px] tracking-[1px] text-[#f4b400]">
                ★★★★★
              </span>
            </div>

            <div className="flex -space-x-3">
              {reviewers.map((color, index) => (
                <span
                  key={color}
                  className={`grid h-9 w-9 place-items-center rounded-full border-2 border-white text-[15px] font-semibold text-white shadow-sm ${color}`}
                  aria-label={`Reviewer ${index + 1}`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(17,43,109,0.18)] transition hover:bg-[#0b2259]"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
