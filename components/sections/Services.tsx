"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Restaurant & Food",
    desc: "Online menus, reservation systems, food ordering & loyalty programs built for conversions.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75&auto=format&fit=crop",
    tag: "F&B",
  },
  {
    title: "E-Commerce Stores",
    desc: "WooCommerce & custom Next.js stores with payment gateways, filters & inventory management.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75&auto=format&fit=crop",
    tag: "E-Commerce",
  },
  {
    title: "EdTech Platforms",
    desc: "Course portals, college comparison engines & SEO-optimized content for organic growth.",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=75&auto=format&fit=crop",
    tag: "Education",
  },
  {
    title: "Healthcare Portals",
    desc: "Appointment booking, doctor directories, patient dashboards & medical listing websites.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=75&auto=format&fit=crop",
    tag: "Healthcare",
  },
  {
    title: "Real Estate",
    desc: "Property listing portals with maps, virtual tours, lead capture & agent dashboards.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75&auto=format&fit=crop",
    tag: "Real Estate",
  },
  {
    title: "Job Boards",
    desc: "Full-stack hiring platforms with advanced search, resume upload & employer dashboards.",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=75&auto=format&fit=crop",
    tag: "Recruitment",
  },
  {
    title: "SaaS & MVPs",
    desc: "Scalable MVPs with auth, billing (Stripe), dashboards & API-first cloud architecture.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75&auto=format&fit=crop",
    tag: "SaaS",
  },
  {
    title: "Corporate Websites",
    desc: "Professional brand websites with CMS, multi-language, analytics & performance built-in.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75&auto=format&fit=crop",
    tag: "Corporate",
  },
  {
    title: "WordPress & WooCommerce",
    desc: "Custom themes, plugin development, WooCommerce stores & speed optimization.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=75&auto=format&fit=crop",
    tag: "WordPress",
  },
  {
    title: "SEO Landing Pages",
    desc: "High-converting landing pages built for Google — 90+ Lighthouse, schema & Core Web Vitals.",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=75&auto=format&fit=crop",
    tag: "SEO",
  },
  {
    title: "Photography & Creative",
    desc: "Stunning portfolio sites for photographers, designers & creative professionals.",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=75&auto=format&fit=crop",
    tag: "Creative",
  },
  {
    title: "Performance Audits",
    desc: "Speed up existing sites — Core Web Vitals, bundle analysis, Redis caching, SSR migration.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75&auto=format&fit=crop",
    tag: "Performance",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".sc").forEach((el, i) => {
          const elem = el as HTMLElement;
          setTimeout(() => {
            elem.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)";
            elem.style.opacity = "1";
            elem.style.transform = "translateY(0)";
          }, i * 50);
        });
      });
    }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="sec" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="label-tag mb-4">What I Build</div>
          <h2 className="section-title mb-4" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
            Services &{" "}
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Industries</em>
          </h2>
          <div className="divider"/>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            Performance, SEO, and conversion built in from day one — across every industry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(s => (
            <div key={s.title} className="sc card-dark overflow-hidden group" style={{ opacity: 0, transform: "translateY(20px)" }}>
              {/* Image */}
              <div className="relative h-40 img-wrap overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"/>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 20%, var(--card) 100%)" }}/>
                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm"
                        style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)" }}>
                    {s.tag}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-sm mb-2 transition-colors duration-200 group-hover:text-gold-light"
                    style={{ color: "var(--text-primary)", fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontWeight: 600 }}>
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="btn-gold">
            Discuss Your Project <FiArrowRight size={15}/>
          </a>
        </div>
      </div>
    </section>
  );
}
