"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  { num:"01", title:"Discovery Call (30 min, free)", desc:"I ask about your users, your goals, and what failure looks like. Not just what you want to build — but why. This call alone saves weeks of rework.", detail:"Business goals · Target audience · Competitor audit · Tech recommendation" },
  { num:"02", title:"Proposal & Architecture", desc:"Within 24 hours you get a written proposal with tech stack rationale, timeline broken into milestones, and a fixed or milestone-based price. No surprises.", detail:"Written proposal · Milestone breakdown · Fixed pricing · Tech blueprint" },
  { num:"03", title:"Build with Weekly Updates", desc:"You see working code every Friday. Not just screenshots — a live preview link. You can comment, change direction, or add features. I write clean, documented code you can hand to any developer later.", detail:"Weekly demos · Live preview · Slack/WhatsApp updates · Clean codebase" },
  { num:"04", title:"Launch & 30-Day Support", desc:"I handle deployment, SEO setup, Google Analytics, and performance checks. Then I stay available for 30 days post-launch — bugs fixed within 24h, no extra charge.", detail:"Vercel / VPS deploy · SEO audit · Analytics setup · 30-day free support" },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".rv").forEach((el, i) => {
          const elem = el as HTMLElement;
          setTimeout(() => { elem.style.transition = "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)"; elem.classList.add("in"); }, i * 120);
        });
      });
    }, { threshold: 0.07 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="sec" style={{ background:"var(--surface)" }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="rv reveal order-2 lg:order-1">
            <div className="img-wrap rounded-sm overflow-hidden" style={{ height:460 }}>
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                alt="Team working" fill className="object-cover" style={{ opacity:0.7 }}/>
              <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(26,95,94,0.6),rgba(8,12,16,0.85))" }}/>
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <p className="text-xs font-mono uppercase tracking-[0.18em] mb-3" style={{ color:"var(--gold)" }}>My Commitment</p>
                <h3 className="heading text-2xl mb-5" style={{ color:"var(--text-primary) !important" }}>
                  On-time delivery.<br/>Zero surprises.<br/>Code you own.
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["✓ Weekly demos","✓ 50% upfront only","✓ Free revisions","✓ 30-day support","✓ You own the code"].map(t => (
                    <span key={t} className="text-[10px] px-3 py-1.5 rounded-sm font-medium"
                      style={{ background:"rgba(201,168,76,0.12)", color:"var(--gold-light)", border:"1px solid rgba(201,168,76,0.2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="order-1 lg:order-2">
            <div className="rv reveal mb-10">
              <span className="label-chip">How I Work</span>
              <h2 className="heading mt-4" style={{ fontSize:"clamp(2rem,3.5vw,2.8rem)" }}>
                A Process Built to<br/><em style={{ color:"var(--gold-light)", fontStyle:"italic" }}>Build Trust</em>
              </h2>
              <span className="gold-rule"/>
              <p className="text-sm leading-relaxed" style={{ color:"var(--text-secondary)" }}>
                I&apos;ve worked on teams where communication was an afterthought. Every process here exists because I&apos;ve seen what happens without it.
              </p>
            </div>

            <div className="space-y-0">
              {steps.map((s, i) => (
                <div key={s.num} className="rv reveal relative flex gap-6 py-7"
                     style={{ borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-sm text-xs font-mono font-bold"
                       style={{ background:"rgba(201,168,76,0.08)", border:"1px solid rgba(201,168,76,0.25)", color:"var(--gold)" }}>
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, color:"var(--text-primary)", fontWeight:600 }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-2" style={{ color:"var(--text-secondary)" }}>{s.desc}</p>
                    <p className="text-[11px] font-mono" style={{ color:"var(--text-muted)" }}>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
