"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    text: "Sarfraj didn't just ship code. He questioned our initial approach, suggested a better architecture, and delivered something that handled 10× more traffic than we planned for. Organic traffic tripled in 3 months after launch.",
    role: "CEO", industry: "EdTech", location: "Mumbai, India", rating: 5, result: "3× organic traffic",
  },
  {
    text: "I've worked with plenty of developers. Sarfraj is the first one who asked about our hiring funnel before touching the keyboard. The portal he built handles real-time search at scale — under load, it's faster than our old static pages.",
    role: "Operations Head", industry: "Healthcare", location: "Navi Mumbai", rating: 5, result: "60% faster search",
  },
  {
    text: "Hired him for a Next.js landing page — he delivered in 5 days, hit 94 on Lighthouse, and caught an SEO issue our agency missed. Communication was clear and professional across time zones. Will hire again.",
    role: "Marketing Director", industry: "SaaS", location: "San Francisco, USA", rating: 5, result: "International client",
  },
  {
    text: "Four projects over two years. Same quality every time, no excuses. He understands e-commerce logic the way a product manager would — not just a developer who copies designs. Our WooCommerce store saw a 40% speed improvement after his audit.",
    role: "Founder", industry: "Digital Commerce", location: "Navi Mumbai", rating: 5, result: "4 projects, 0 issues",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".tc").forEach((el, i) => {
          const elem = el as HTMLElement;
          setTimeout(() => {
            elem.style.transition = "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)";
            elem.style.opacity = "1"; elem.style.transform = "translateY(0)";
          }, i * 130);
        });
      });
    }, { threshold: 0.07 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="sec" style={{ background:"var(--surface)" }}>
      <div className="wrap">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="label-chip">What Clients Say</span>
          <h2 className="heading mt-4" style={{ fontSize:"clamp(2.2rem,4vw,3rem)" }}>
            Honest Words from<br/><em style={{ color:"var(--gold-light)", fontStyle:"italic" }}>Real Clients</em>
          </h2>
          <div className="gold-rule mx-auto" style={{ background:"linear-gradient(90deg,transparent,var(--gold),transparent)", width:80 }}/>
          <p className="text-sm" style={{ color:"var(--text-secondary)" }}>
            No company logos, no stock photos. Just what people actually said — and the results that followed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {reviews.map((r, i) => (
            <div key={i} className="tc card-dark p-8 flex flex-col gap-5 group"
                 style={{ opacity:0, transform:"translateY(22px)" }}>
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({length: r.rating}).map((_,j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#C9A84C">
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.408.59 3.407L7 8.84l-3.09 1.61.59-3.407L2 4.635l3.455-.545L7 1z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="leading-relaxed flex-1"
                 style={{ color:"var(--text-secondary)", fontFamily:"'Cormorant Garamond',serif", fontSize:16, lineHeight:1.75 }}>
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-5 gap-4"
                   style={{ borderTop:"1px solid var(--border)" }}>
                <div className="flex items-center gap-3">
                  {/* Anonymous initial block */}
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center text-xs font-bold flex-shrink-0"
                       style={{ background:"rgba(201,168,76,0.1)", color:"var(--gold)", border:"1px solid rgba(201,168,76,0.2)" }}>
                    {r.role[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color:"var(--text-primary)" }}>{r.role}</p>
                    <p className="text-[11px]" style={{ color:"var(--text-muted)" }}>{r.location}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm"
                        style={{ background:"var(--night)", color:"var(--text-muted)", border:"1px solid var(--border)" }}>
                    {r.industry}
                  </span>
                  <span className="text-[10px] font-bold font-mono" style={{ color:"var(--gold)" }}>{r.result}</span>
                </div>
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm self-start"
                   style={{ background:"rgba(61,191,188,0.07)", border:"1px solid rgba(61,191,188,0.18)" }}>
                <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
                  <path d="M5.5 8L7 9.5L10.5 6" stroke="#3DBFBC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="6.5" stroke="#3DBFBC" strokeWidth="1.2"/>
                </svg>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider" style={{ color:"var(--teal-bright)" }}>
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { v:"20+", l:"Projects Done", s:"Across India & globally" },
            { v:"100%", l:"On-time Rate",  s:"Every project, always" },
            { v:"4.9★", l:"Avg Rating",    s:"From real clients" },
            { v:"24h",  l:"Response Time", s:"Guaranteed always" },
          ].map(m => (
            <div key={m.l} className="p-5 rounded-sm text-center" style={{ background:"var(--card)", border:"1px solid var(--border)" }}>
              <div className="shimmer-gold text-2xl font-bold mb-1" style={{ fontFamily:"'Cormorant Garamond',serif" }}>{m.v}</div>
              <div className="text-xs font-semibold mb-1" style={{ color:"var(--text-primary)" }}>{m.l}</div>
              <div className="text-[11px]" style={{ color:"var(--text-muted)" }}>{m.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
