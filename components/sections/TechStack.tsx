"use client";
import { useEffect, useRef } from "react";

const GROUPS = [
  {
    label: "Frontend",
    color: "var(--teal-bright)",
    bg: "rgba(61,191,188,0.08)",
    border: "rgba(61,191,188,0.2)",
    techs: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript",       level: 88 },
      { name: "Tailwind CSS",     level: 95 },
      { name: "SCSS / CSS3",      level: 85 },
    ],
  },
  {
    label: "Backend & APIs",
    color: "var(--gold)",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
    techs: [
      { name: "Node.js / API Routes", level: 85 },
      { name: "PostgreSQL",           level: 75 },
      { name: "REST APIs / OAuth",    level: 90 },
      { name: "Strapi CMS",           level: 85 },
    ],
  },
  {
    label: "Performance & SEO",
    color: "var(--teal-bright)",
    bg: "rgba(61,191,188,0.08)",
    border: "rgba(61,191,188,0.2)",
    techs: [
      { name: "SEO / Lighthouse",  level: 93 },
      { name: "Redis Caching",     level: 87 },
      { name: "Meilisearch",       level: 83 },
      { name: "SSR / SSG / ISR",   level: 92 },
    ],
  },
  {
    label: "CMS & DevOps",
    color: "var(--gold)",
    bg: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.2)",
    techs: [
      { name: "WordPress / WooCommerce", level: 90 },
      { name: "Vercel / VPS Deploy",     level: 88 },
      { name: "AWS EC2",                 level: 70 },
      { name: "Git / GitHub",            level: 93 },
    ],
  },
];

const ALL_TECH = [
  "Next.js","React","TypeScript","Tailwind CSS","shadcn/ui",
  "Node.js","PostgreSQL","Strapi","Redis","Meilisearch",
  "WordPress","WooCommerce","Python","AWS EC2","Vercel",
  "SCSS","Git","REST API","SSR","SSG","SEO","OAuth","JWT",
  "Zod","react-hook-form","Nodemailer",
];

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".bar-fill").forEach(el => {
            const elem = el as HTMLElement;
            const w = elem.dataset.w || "0";
            setTimeout(() => {
              elem.style.transition = "width 1.1s cubic-bezier(.4,0,.2,1)";
              elem.style.width = w + "%";
            }, 200);
          });
          e.target.querySelectorAll(".rv").forEach((el, i) => {
            const elem = el as HTMLElement;
            setTimeout(() => {
              elem.style.transition = "opacity 0.75s cubic-bezier(.16,1,.3,1), transform 0.75s cubic-bezier(.16,1,.3,1)";
              elem.classList.add("in");
            }, i * 90);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tech" ref={ref} className="sec" style={{ background: "var(--night)" }}>
      <div className="wrap">

        {/* Header */}
        <div className="rv reveal max-w-xl mb-16">
          <div className="label-chip mb-4">Expertise</div>
          <h2 className="heading mb-3" style={{ fontSize: "clamp(2.2rem,4vw,3rem)" }}>
            Tech{" "}
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Stack</em>
          </h2>
          <span className="divider"/>
          <p style={{ color: "var(--text-secondary)" }}>
            The tools I use daily to build fast, scalable, and maintainable web applications.
          </p>
        </div>

        {/* Skill bars in highlighted cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {GROUPS.map(g => (
            <div key={g.label} className="rv reveal card-dark p-7">
              {/* Group header with colored accent */}
              <div className="flex items-center gap-3 mb-6 pb-4"
                   style={{ borderBottom: `1px solid ${g.border}` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                     style={{ background: g.bg, border: `1px solid ${g.border}` }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: g.color }}/>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: g.color,
                }}>
                  {g.label}
                </span>
              </div>

              {/* Bars */}
              <div className="space-y-5">
                {g.techs.map(t => (
                  <div key={t.name}>
                    <div className="flex justify-between mb-2">
                      <span style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {t.name}
                      </span>
                      <span style={{
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: g.color,
                        fontWeight: 500,
                      }}>
                        {t.level}%
                      </span>
                    </div>
                    {/* Track */}
                    <div className="rounded-full overflow-hidden" style={{ height: 3, background: "var(--border)" }}>
                      <div
                        className="bar-fill h-full rounded-full"
                        style={{ width: "0%", background: `linear-gradient(90deg, ${g.color}, ${g.color}66)` }}
                        data-w={t.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology tags — highlighted */}
        <div className="rv reveal rounded-lg p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="text-center mb-6" style={{
            fontSize: 10,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}>
            All Technologies & Tools
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {ALL_TECH.map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
