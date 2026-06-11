import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#303030] pt-24 text-white">
      <div className="maincontainer">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1fr_1.15fr_0.9fr] lg:items-center">
          <div>
            <Image src="/KhanHomeLogo.png" alt="Khan Home Logo" width={170} height={60} className="brightness-0 invert" />
            <h2 className="mt-8 max-w-sm text-3xl font-semibold leading-tight">
              Ready to Transform Your Outdoor Indoor Spaces
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#112B6D]">Request A Quote</a>
              <a href="tel:+971542046142" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold">Call Us<br />+971 54 204 6142</a>
            </div>
          </div>
          <div className="min-h-[210px] rounded-lg bg-[#d9d9d9]" />
          <address className="space-y-5 text-sm not-italic text-white/70">
            <p><strong className="block text-white">Address</strong> Dragon Mart 1, 1st Floor, Shop GF089, International City, Dubai - UAE</p>
            <p><strong className="block text-white">Email</strong> info@khanhome.ae</p>
            <p><strong className="block text-white">Business Hours</strong> Mon-Sun: 9:00 am - 10:00pm</p>
          </address>
        </div>
        <div className="flex flex-col gap-5 py-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-5">
            {["Home", "About Us", "Group Companies", "Services", "Projects", "Blogs", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>
            ))}
          </nav>
          <div className="flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook">f</a>
            <a href="https://instagram.com" aria-label="Instagram">ig</a>
            <a href="https://youtube.com" aria-label="YouTube">yt</a>
            <a href="https://tiktok.com" aria-label="TikTok">tt</a>
          </div>
        </div>
      </div>
      <div className="bg-[#112B6D] py-4 text-center text-xs text-white/70">
        ©2026 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer
