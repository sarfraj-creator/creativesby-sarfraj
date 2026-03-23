"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const wins = [
  { n:"90+",  l:"Lighthouse Score",    d:"Achieved for onlyeducation.in — India's largest college portal" },
  { n:"45%",  l:"Bundle Size Cut",     d:"SSR/SSG + code splitting on an EdTech platform with 40K users" },
  { n:"25K+", l:"Pages Generated",     d:"Python scraper on AWS EC2 → SEO-indexed college pages in 3 days" },
  { n:"60%",  l:"Search Speed Gain",   d:"Redis + Meilisearch on a live healthcare staffing portal" },
];

const facts = [
  "I started coding in 2021 by building a WordPress site for a local business — they tripled their leads in 2 months. That hooked me.",
  "I've never outsourced a single pixel. Every line of code you see in my work is mine.",
  "I read every brief twice before replying. Most developers quote before they understand.",
  "I work with international clients across USA, UK, Canada, and Australia — async is my native language.",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".rv").forEach((el, i) => {
          const elem = el as HTMLElement;
          setTimeout(() => { elem.style.transition = "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)"; elem.classList.add("in"); }, i * 90);
        });
      });
    }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="sec" style={{ background:"var(--night)" }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Photo */}
          <div className="rv reveal relative">
            <div className="img-wrap rounded-sm overflow-hidden" style={{ height:480 }}>
              <Image src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80&auto=format&fit=crop"
                alt="Sarfraj at work" fill className="object-cover" style={{ opacity:0.85 }}/>
              <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(8,12,16,0.9) 0%, rgba(8,12,16,0.1) 55%)" }}/>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="label-chip mb-3 inline-block">Navi Mumbai → Worldwide</span>
                <p className="heading text-xl" style={{ color:"var(--text-primary) !important" }}>Sarfraj Sayyad</p>
                <p className="text-sm mt-1" style={{ color:"var(--text-muted)" }}>Full Stack Developer · 3+ yrs</p>
              </div>
            </div>
            {/* Accent line */}
            <div className="absolute -right-5 top-16 bottom-16 w-px hidden lg:block" style={{ background:"linear-gradient(to bottom, transparent, var(--gold), transparent)" }}/>
            {/* Floating chip */}
            <div className="absolute -bottom-5 -right-3 p-5 rounded-sm" style={{ background:"var(--card)", border:"1px solid rgba(201,168,76,0.2)" }}>
              <div className="shimmer-gold text-3xl font-bold" style={{ fontFamily:"'Cormorant Garamond',serif" }}>20+</div>
              <div className="text-xs mt-1 uppercase tracking-wider" style={{ color:"var(--text-muted)" }}>Projects live</div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="rv reveal mb-8">
              <span className="label-chip">About</span>
              <h2 className="heading mt-4 mb-1" style={{ fontSize:"clamp(2rem,3.5vw,2.8rem)" }}>
                The Developer Who Thinks<br/>Like a <em style={{ color:"var(--gold-light)", fontStyle:"italic" }}>Business Owner</em>
              </h2>
              <span className="gold-rule"/>
            </div>

            <p className="rv reveal mb-4 leading-relaxed" style={{ color:"var(--text-secondary)" }}>
              Most developers wait for a brief. I ask questions. What&apos;s your conversion goal? Who&apos;s your target customer? What does success look like in 6 months? Only then do I open my editor.
            </p>
            <p className="rv reveal mb-8 leading-relaxed" style={{ color:"var(--text-secondary)" }}>
              In 3+ years I&apos;ve shipped EdTech platforms with 25,000 SEO-indexed pages, healthcare staffing portals with real-time search, and WooCommerce stores that doubled conversion rates. Every project taught me something new — and none of those lessons came from a tutorial.
            </p>

            <div className="rv reveal space-y-3 mb-8">
              {facts.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FiCheck size={14} className="flex-shrink-0 mt-0.5" style={{ color:"var(--teal-bright)" }}/>
                  <p className="text-sm leading-relaxed" style={{ color:"var(--text-secondary)" }}>{f}</p>
                </div>
              ))}
            </div>

            <div className="rv reveal">
              <a href="#contact" className="btn-gold">Let&apos;s Work Together <FiArrowRight size={14}/></a>
            </div>
          </div>
        </div>

        {/* Win metrics */}
        <div className="rv reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wins.map(w => (
            <div key={w.l} className="card-dark p-6">
              <div className="shimmer-gold text-3xl font-bold mb-2" style={{ fontFamily:"'Cormorant Garamond',serif" }}>{w.n}</div>
              <div className="text-sm font-semibold mb-1.5" style={{ color:"var(--text-primary)" }}>{w.l}</div>
              <div className="text-xs leading-relaxed" style={{ color:"var(--text-muted)" }}>{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
