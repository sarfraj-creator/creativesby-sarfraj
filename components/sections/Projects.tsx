"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const PROJECTS = [
  {
    title: "we-carestaffing.com",
    type: "Healthcare Job Portal",
    year: "2025",
    context: "Full Stack Developer · Brocus, Navi Mumbai",
    desc: "Built end-to-end — real-time job listings via Oorwin API, typo-tolerant Meilisearch-powered search, Redis caching for traffic spikes, and secure email-OTP auth. Thousands of healthcare professionals use this daily.",
    /* Healthcare / medical image */
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
    tags: ["Next.js","ShadCN","Redis","Meilisearch","Oorwin API","Zod"],
    live: "https://we-carestaffing.com",
    metric: "60% faster search",
    accent: "#3DBFBC",
  },
  {
    title: "onlyeducation.in",
    type: "EdTech Platform",
    year: "2024",
    context: "Frontend Developer · Only Education International",
    desc: "25,000+ college and exam pages auto-generated via Python scraper on AWS EC2. Comparison engine with Next.js middleware, SSR/SSG architecture, and a consistent 90+ Lighthouse score in production.",
    /* Education / university campus image */
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop",
    tags: ["Next.js","Strapi","shadcn","Python","AWS EC2","Next-Auth"],
    live: "https://onlyeducation.in",
    metric: "90+ Lighthouse",
    accent: "#C9A84C",
  },
  {
    title: "manipalflora.com",
    type: "E-Commerce Store",
    year: "2023",
    context: "Web Developer · Zencommerce India",
    desc: "Custom WooCommerce store — PHP theme from scratch, dynamic product filters, mobile-first checkout. Conversion rate doubled after launch.",
    /* Flowers / plants image */
    img: "https://images.unsplash.com/photo-1487530811015-780b6b9c93bc?w=800&q=80&auto=format&fit=crop",
    tags: ["WordPress","WooCommerce","PHP","Custom Theme"],
    live: "https://manipalflora.com",
    metric: "2× conversions",
    accent: "#3DBFBC",
  },
  {
    title: "mbacet.in",
    type: "Lead Generation Portal",
    year: "2023",
    context: "Web Developer · Zencommerce India",
    desc: "Mobile-first MBA/CET landing pages with automated Google Sheets lead capture. Lead volume tripled in first 30 days.",
    /* Study / exam image */
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80&auto=format&fit=crop",
    tags: ["HTML","SCSS","Apps Script","SEO"],
    live: "https://mbacet.in",
    metric: "3× leads in 30 days",
    accent: "#C9A84C",
  },
  {
    title: "College Comparison Tool",
    type: "SaaS Web App",
    year: "2024",
    context: "Frontend Developer · Only Education International",
    desc: "Real-time side-by-side college comparisons. Redis-cached API responses deliver sub-200ms loads at scale. Used daily by thousands of students.",
    /* Students / comparison image */
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
    tags: ["Next.js","TypeScript","Redis","PostgreSQL"],
    live: "#",
    metric: "Sub-200ms loads",
    accent: "#3DBFBC",
  },
  {
    title: "hilaptop.com",
    type: "Tech E-Commerce",
    year: "2022",
    context: "Web Developer · Zencommerce India",
    desc: "Laptop e-commerce on Spree CMS. Custom filters, spec comparison, and a performance audit that cut page load by 45%.",
    /* Laptop / tech product image */
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80&auto=format&fit=crop",
    tags: ["Spree CMS","Ruby","Redis","Custom CSS"],
    live: "https://hilaptop.com",
    metric: "45% faster loads",
    accent: "#C9A84C",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".pc").forEach((el, i) => {
          const elem = el as HTMLElement;
          setTimeout(() => {
            elem.style.transition = "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)";
            elem.style.opacity = "1";
            elem.style.transform = "translateY(0)";
          }, i * 110);
        });
      });
    }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="sec" style={{ background: "var(--night)" }}>
      <div className="wrap">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="label-chip mb-4">Selected Work</div>
            <h2 className="heading" style={{ fontSize: "clamp(2.2rem,4vw,3rem)" }}>
              Real Projects.<br/>
              <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Measurable Results.</em>
            </h2>
            <span className="divider"/>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
            Every project was built during employment — real production code, real users, real deadlines.
          </p>
        </div>

        {/* Featured 2 — large */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {PROJECTS.slice(0, 2).map(p => (
            <div key={p.title} className="pc card-dark overflow-hidden group" style={{ opacity: 0, transform: "translateY(22px)" }}>
              {/* Image */}
              <div className="relative img-wrap overflow-hidden" style={{ height: 230 }}>
                <Image src={p.img} alt={p.title} fill className="object-cover"
                       style={{ opacity: 0.65, transition: "opacity 0.5s" }}/>
                <div className="absolute inset-0 group-hover:opacity-90 transition-opacity"
                     style={{ background: "linear-gradient(to top, var(--card) 0%, transparent 55%)" }}/>
                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm"
                        style={{ background: "rgba(0,0,0,0.6)", color: p.accent, border: `1px solid ${p.accent}44`, backdropFilter: "blur(4px)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em" }}>
                    {p.type}
                  </span>
                </div>
                {/* Year */}
                <div className="absolute top-4 right-4">
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{p.year}</span>
                </div>
                {/* Metric */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-sm"
                     style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 700, color: p.accent }}>
                    {p.metric}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Context badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--teal-bright)" }}/>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "var(--teal-bright)", letterSpacing: "0.06em" }}>
                    {p.context}
                  </span>
                </div>
                <h3 className="heading mb-3 group-hover:opacity-80 transition-opacity" style={{ fontSize: 20 }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(t => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                {p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                     style={{ color: "var(--gold)", letterSpacing: "0.08em", fontFamily: "'Inter',sans-serif" }}>
                    <FiExternalLink size={13}/> View Live Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Remaining 4 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.slice(2).map(p => (
            <div key={p.title} className="pc card-dark overflow-hidden group" style={{ opacity: 0, transform: "translateY(22px)" }}>
              <div className="relative img-wrap overflow-hidden" style={{ height: 150 }}>
                <Image src={p.img} alt={p.title} fill className="object-cover"
                       style={{ opacity: 0.55 }}/>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--card) 0%, transparent 55%)" }}/>
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm"
                        style={{ background: "rgba(0,0,0,0.65)", color: p.accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em" }}>
                    {p.type}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 700, color: p.accent }}>
                    {p.metric}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--teal-bright)" }}/>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "var(--teal-bright)" }}>
                    {p.context.split("·")[0].trim()}
                  </span>
                </div>
                <h3 className="heading mb-2" style={{ fontSize: 15 }}>{p.title}</h3>
                <p className="text-xs leading-relaxed mb-3 line-clamp-3" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                {p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-xs font-semibold"
                     style={{ color: "var(--gold)", fontFamily: "'Inter',sans-serif" }}>
                    <FiExternalLink size={11}/> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-ghost inline-flex items-center gap-2">
            Start Your Project <FiArrowRight size={14}/>
          </a>
        </div>
      </div>
    </section>
  );
}
