"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const ROLES = ["Web Experiences", "E-Commerce Stores", "EdTech Platforms", "Healthcare Portals", "SaaS Products"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const iv = setInterval(() => {
      setFade(true);
      setTimeout(() => { setIdx(i => (i + 1) % ROLES.length); setFade(false); }, 350);
    }, 2600);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    ref.current?.querySelectorAll(".h-in").forEach((el, i) => {
      const e = el as HTMLElement;
      e.style.opacity = "0"; e.style.transform = "translateY(30px)";
      setTimeout(() => {
        e.style.transition = "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)";
        e.style.opacity = "1"; e.style.transform = "translateY(0)";
      }, 150 + i * 160);
    });
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--night)" }}>
      {/* BG image — dark workspace */}
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=60&auto=format&fit=crop"
          alt="code" fill className="object-cover" style={{ opacity: 0.12 }} priority/>
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 80% 80% at 50% 50%, transparent 10%, rgba(8,12,16,0.92) 75%)" }}/>
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background:"linear-gradient(to top,var(--night),transparent)" }}/>
      </div>

      {/* Rotating hex decoration */}
      <div className="absolute top-24 right-10 opacity-[0.04] animate-spin-slow hidden lg:block">
        <svg width="320" height="368" viewBox="0 0 100 115">
          <polygon points="50,3 95,27.5 95,87.5 50,112 5,87.5 5,27.5" fill="none" stroke="#C9A84C" strokeWidth="1"/>
          <polygon points="50,13 85,32.5 85,82.5 50,102 15,82.5 15,32.5" fill="none" stroke="#1A5F5E" strokeWidth="0.8"/>
        </svg>
      </div>
      <div className="absolute bottom-24 left-8 opacity-[0.04] animate-float hidden lg:block">
        <svg width="180" height="207" viewBox="0 0 100 115">
          <polygon points="50,3 95,27.5 95,87.5 50,112 5,87.5 5,27.5" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="wrap relative z-10 w-full pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="h-in mb-7">
            <span className="label-chip">Full Stack Developer · Mumbai → World</span>
          </div>

          <h1 className="h-in heading mb-5" style={{ fontSize:"clamp(2.8rem,6.5vw,5rem)" }}>
            Crafting Premium<br/>
            <span className="shimmer-gold" style={{ display:"inline-block", minWidth:"10ch", transition:"opacity 0.35s ease", opacity: fade ? 0 : 1 }}>
              {ROLES[idx]}
            </span>
          </h1>

          <p className="h-in mb-10 text-lg leading-relaxed max-w-xl" style={{ color:"var(--text-secondary)" }}>
            I&apos;m Sarfraj — a developer who&apos;s spent 3 years turning ambitious ideas into web products that actually grow businesses. Not just pretty sites. <span style={{ color:"var(--gold-light)" }}>Engines that rank, convert, and scale.</span>
          </p>

          <div className="h-in flex flex-wrap gap-4 mb-14">
            <a href="#contact" className="btn-gold">Start a Project <FiArrowRight size={14}/></a>
            <a href="#projects" className="btn-ghost">See Real Work</a>
          </div>

          {/* Stats */}
          <div className="h-in grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10" style={{ borderTop:"1px solid var(--border)" }}>
            {[
              { n:"20+", l:"Projects shipped" },
              { n:"3+",  l:"Years in prod" },
              { n:"90+", l:"Lighthouse avg" },
              { n:"0",   l:"Missed deadlines" },
            ].map(s => (
              <div key={s.l}>
                <div className="shimmer-gold text-3xl font-bold mb-1" style={{ fontFamily:"'Cormorant Garamond',serif" }}>{s.n}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color:"var(--text-muted)", letterSpacing:"0.1em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 right-8 z-10 flex flex-col items-center gap-2" style={{ opacity:0.35 }}>
        <span className="text-[10px] tracking-[0.22em] uppercase font-mono" style={{ color:"var(--gold)", writingMode:"vertical-rl" }}>Scroll</span>
        <FiArrowDown size={13} style={{ color:"var(--gold)" }}/>
      </div>
    </section>
  );
}
