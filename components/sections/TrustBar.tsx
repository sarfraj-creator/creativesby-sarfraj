const items = [
  "Next.js", "⬡", "React", "⬡", "TypeScript", "⬡", "Node.js", "⬡",
  "Tailwind CSS", "⬡", "WordPress", "⬡", "WooCommerce", "⬡", "Redis", "⬡",
  "Meilisearch", "⬡", "PostgreSQL", "⬡", "AWS EC2", "⬡", "Vercel", "⬡",
  "Strapi CMS", "⬡", "SEO Expert", "⬡", "shadcn/ui", "⬡",
  "Next.js", "⬡", "React", "⬡", "TypeScript", "⬡", "Node.js", "⬡",
  "Tailwind CSS", "⬡", "WordPress", "⬡", "WooCommerce", "⬡", "Redis", "⬡",
  "Meilisearch", "⬡", "PostgreSQL", "⬡", "AWS EC2", "⬡", "Vercel", "⬡",
  "Strapi CMS", "⬡", "SEO Expert", "⬡", "shadcn/ui", "⬡",
];

export default function TrustBar() {
  return (
    <div className="relative overflow-hidden py-4" style={{
      background: "var(--surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}/>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}/>

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-block mx-4 text-xs font-mono uppercase tracking-wider"
                style={{ color: item === "⬡" ? "var(--teal)" : "var(--text-muted)", letterSpacing: "0.1em" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
