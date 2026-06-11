import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Hero from "./components/home/Hero";

const projects = ["Luxury Residence", "Commercial Tower", "Retail Fit-Out"];

const offers = [
  "Construction & Building",
  "Interior Design & Fit-Out",
  "Custom Production",
  "Digital & Business",
  "Lifestyle & Retail Solutions",
];

const companies = [
  {
    title: "Retail & Lifestyle Solutions",
    icon: "shop",
    active: false,
  },
  {
    title: "Business Setup Service",
    icon: "card",
    active: true,
  },
  {
    title: "Digital Solution",
    icon: "globe",
    active: false,
  },
];

const blogs = [
  "The Power of Strong Branding Strategy",
  "Content That Connects With Audience",
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Header />
      <Hero />
      <AboutUs />

      <section id="projects" className="bg-[#303030] py-20 text-white">
        <div className="bigcontainer relative grid gap-10 lg:grid-cols-[0.75fr_1.45fr] lg:items-center">
          <p className="section-watermark left-0 top-auto text-white/5">Projects</p>
          <div>
            <h2 className="max-w-sm text-4xl font-semibold leading-tight md:text-5xl">
              Delivering Excellence Across Industries
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="mt-7 flex gap-3">
              <button className="nav-dot" aria-label="Previous project">‹</button>
              <button className="nav-dot" aria-label="Next project">›</button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {projects.map((project) => (
              <article key={project} className="project-card">
                <span className="sr-only">{project}</span>
                <a href="#portfolio" className="project-arrow" aria-label={`Open ${project}`}>↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden py-20">
        <p className="section-watermark left-1/2 top-6 -translate-x-1/2">Services</p>
        <div className="maincontainer relative">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-4xl font-semibold text-[#323232]">What We Offer</h2>
            <p className="mt-3 text-sm text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.78fr_1.1fr_1fr] lg:items-center">
            <div className="space-y-4">
              {offers.map((offer, index) => (
                <a key={offer} href="#contact" className={`offer-pill ${index === 0 ? "offer-pill-active" : ""}`}>
                  {offer}
                  <span>↗</span>
                </a>
              ))}
            </div>
            <div className="h-[330px] rounded-lg bg-[#d9d9d9]" />
            <div>
              <h3 className="text-2xl font-semibold text-[#323232]">
                Giving Your Home a New Style...
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {[
                  "Experienced, time served engineers",
                  "Commitment to customer service",
                  "Commitment to taking the stress out of your project",
                  "Flexible with any structure of the building",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-[#112B6D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#303030] py-16 text-white">
        <div className="maincontainer grid gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:items-center">
          <div>
            <h2 className="max-w-md text-4xl font-semibold leading-tight">
              Why Choose Khan Home Group
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="feature-badge">
                <span>☎</span>
                <p>24/7<br />Support</p>
              </div>
              <div className="feature-badge">
                <span>⚙</span>
                <p>Work<br />Experiences</p>
              </div>
            </div>
          </div>
          <div className="min-h-[270px] rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png')" }} />
        </div>
      </section>

      <section id="group" className="relative overflow-hidden py-20">
        <p className="section-watermark left-1/2 top-4 -translate-x-1/2">Divisions</p>
        <div className="maincontainer relative text-center">
          <h2 className="text-4xl font-semibold text-[#323232]">Group Companies</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companies.map((company) => (
              <article key={company.title} className={`company-card ${company.active ? "company-card-active" : ""}`}>
                <div className="company-icon">{company.icon === "shop" ? "▤" : company.icon === "card" ? "▭" : "◉"}</div>
                <h3>{company.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#contact">View Division <span>›</span></a>
              </article>
            ))}
          </div>
          <a href="#contact" className="mt-10 inline-flex rounded-full bg-[#303030] px-7 py-3 text-sm font-semibold text-white">
            View All Division
          </a>
        </div>
      </section>

      <section id="portfolio" className="relative overflow-hidden bg-[#08255d] py-20 text-white">
        <p className="section-watermark left-20 top-6 text-white/5">Portfolio</p>
        <div className="maincontainer relative grid gap-10 lg:grid-cols-[0.72fr_1.55fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight">Portfolio Highlights</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-tile tall" />
            <div className="portfolio-tile" />
            <div className="portfolio-tile" />
            <div className="portfolio-tile tall" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <p className="section-watermark left-1/2 top-5 -translate-x-1/2">Testimonials</p>
        <div className="maincontainer relative text-center">
          <h2 className="text-4xl font-semibold text-[#323232]">What Our Client Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {["Ahmed, Ali", "Marion"].map((name) => (
              <article key={name} className="testimonial-card">
                <div className="text-4xl font-serif text-[#112B6D]">“</div>
                <p>Lorem ipsum Dolor consectetur nisi montes eu mauris congue. Eget penatibus cum amet, suscipit blandit felis commodo ut mi.</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png')" }} />
                    <div>
                      <strong>{name}</strong>
                      <span>Assistant Manager</span>
                    </div>
                  </div>
                  <span className="text-amber-400">★★★★★</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button className="nav-dot dark" aria-label="Previous testimonial">‹</button>
            <button className="nav-dot dark" aria-label="Next testimonial">›</button>
          </div>
        </div>
      </section>

      <section id="blogs" className="bg-[#08255d] py-20 text-white">
        <div className="maincontainer grid gap-10 lg:grid-cols-[0.7fr_1.4fr] lg:items-end">
          <div>
            <h2 className="text-4xl font-semibold">Our Blogs</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/blog" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#112B6D]">
              View All Blogs
            </a>
            <div className="mt-7 flex gap-3">
              <button className="nav-dot" aria-label="Previous blog">‹</button>
              <button className="nav-dot" aria-label="Next blog">›</button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <article key={blog}>
                <div className="h-48 rounded-lg bg-[#d9d9d9]" />
                <p className="mt-5 text-xs text-white/70">● {index === 0 ? "4" : "7"} Day Ago</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{blog}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <a href="/blog" className="mt-4 inline-flex text-sm font-semibold">Read More ›</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
