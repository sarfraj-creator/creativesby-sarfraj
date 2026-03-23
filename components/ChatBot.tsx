"use client";
import { useState, useRef, useEffect } from "react";
import { FiX, FiSend, FiMessageCircle } from "react-icons/fi";

type Msg = { from: "bot" | "user"; text: string };

const QRS = ["💰 Pricing?","⏱ Timeline?","🛠 Tech stack?","🌍 International?","📞 Book a call","🌐 Domain & hosting?"];

function reply(input: string): string {
  const m = input.toLowerCase();
  if (m.includes("pric") || m.includes("cost") || m.includes("💰"))
    return "Quick pricing guide:\n\n• WordPress site: ₹25K–₹60K ($400–$800)\n• Next.js custom: ₹60K–₹1.5L ($1K–$2.5K)\n• Full stack app: $3K–$8K+\n• Monthly retainer: ₹8K–₹20K/mo\n\nFill the contact form for a free estimate!";
  if (m.includes("time") || m.includes("⏱") || m.includes("long"))
    return "Typical timelines:\n\n• Landing page: 3–5 days\n• WordPress site: 1–2 weeks\n• Next.js website: 2–4 weeks\n• Full stack app: 4–8 weeks\n\nNeed it faster? Rush delivery available.";
  if (m.includes("tech") || m.includes("stack") || m.includes("🛠"))
    return "Production stack:\n\n⚡ Next.js, React, TypeScript, Tailwind\n🔧 Node.js, PostgreSQL, Strapi\n🚀 Redis, Meilisearch, SSR/SSG\n🛒 WordPress, WooCommerce\n\nI pick what fits your project, not what's trendy.";
  if (m.includes("international") || m.includes("🌍") || m.includes("usa") || m.includes("uk"))
    return "Yes! Clients in USA, UK, Canada, Australia & UAE.\n\n✓ Async-first\n✓ Timezone-flexible calls\n✓ PayPal, Wise, bank transfer";
  if (m.includes("call") || m.includes("book") || m.includes("📞"))
    return "Happy to connect!\n\n📱 wa.me/917039805416\n📧 creativesby.sarfraj@gmail.com\n\nFirst call is always free. Tell me your timezone.";
  if (m.includes("domain") || m.includes("hosting") || m.includes("🌐") || m.includes("dns") || m.includes("ssl"))
    return "Yes, full domain & hosting services:\n\n✓ Domain registration & transfer\n✓ DNS setup & SSL certificates\n✓ Hosting migration\n✓ Server management\n✓ Annual renewal reminders\n\nUsually done within 24 hours.";
  if (m.includes("seo"))
    return "SEO built into everything:\n\n✓ 90+ Lighthouse in production\n✓ SSR/SSG for Google indexing\n✓ Schema markup & Core Web Vitals\n✓ Search Console setup\n\nWant a free audit of your current site?";
  if (m.includes("wordpress") || m.includes("woocommerce"))
    return "WP & WooCommerce expert:\n\n✓ Custom themes (no page builders)\n✓ WooCommerce + payment gateway\n✓ Plugin development\n✓ Speed optimization\n\nTypically 1–2 weeks delivery.";
  if (m.includes("hi") || m.includes("hello") || m.includes("hey"))
    return "Hey! 👋 Welcome to Creativesby Sarfraj.\n\nAsk me about pricing, timelines, tech, or services — or tap a quick button below.";
  return "For the most accurate answer:\n\n📱 +91 70398 05416 (WhatsApp)\n📧 creativesby.sarfraj@gmail.com\n\nSarfraj replies personally within 24h.";
}

export default function ChatBot() {
  const [open,   setOpen]   = useState(false);
  const [msgs,   setMsgs]   = useState<Msg[]>([{
    from: "bot",
    text: "Hi! 👋 I'm here to answer questions about Sarfraj's services, pricing, and timelines. What would you like to know?"
  }]);
  const [input,  setInput]  = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (text?: string) => {
    const msg = (text ?? input).trim(); if (!msg) return;
    setInput(""); setMsgs(p => [...p, { from: "user", text: msg }]); setTyping(true);
    setTimeout(() => { setTyping(false); setMsgs(p => [...p, { from: "bot", text: reply(msg) }]); }, 600 + Math.random() * 400);
  };

  return (
    <>
      {/* Round toggle button — BOTTOM RIGHT */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 50,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg, #1A5F5E, #C9A84C)",
          boxShadow: "0 4px 20px rgba(201,168,76,0.35), 0 0 0 3px rgba(201,168,76,0.12)",
          border: "none", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform .2s, box-shadow .2s",
          cursor: "pointer",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
      >
        {open
          ? <FiX size={21} color="#080C10"/>
          : <FiMessageCircle size={21} color="#080C10"/>
        }
        {/* Gold dot indicator when closed */}
        {!open && (
          <span style={{
            position: "absolute", top: 0, right: 0,
            width: 12, height: 12, borderRadius: "50%",
            background: "#25D366", border: "2px solid #080C10",
          }}/>
        )}
      </button>

      {/* Chat window — above button, bottom-right */}
      {open && (
        <div
          style={{
            position: "fixed", bottom: 92, right: 24, zIndex: 50,
            width: "clamp(300px,90vw,350px)", maxHeight: 480,
            display: "flex", flexDirection: "column",
            background: "#111923",
            border: "1px solid #1E2B38",
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,168,76,0.08)",
            animation: "chatPop .3s cubic-bezier(.16,1,.3,1) forwards",
            overflow: "hidden",
          }}
        >
          <style>{`@keyframes chatPop{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>

          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "14px 18px", flexShrink: 0,
            background: "linear-gradient(135deg,#1A5F5E,#0f3d3c)",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
              background: "rgba(201,168,76,0.2)", border: "1.5px solid rgba(201,168,76,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 800, color: "#F5E09A",
              fontFamily: "Georgia,serif",
            }}>CBS</div>
            <div>
              <p style={{ color: "#F2EDE5", fontSize: 14, fontWeight: 600, fontFamily: "'Inter',sans-serif", lineHeight: 1.2 }}>
                Creativesby Sarfraj
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }}/>
                <span style={{ color: "#86efac", fontSize: 10, fontFamily: "'JetBrains Mono',monospace" }}>Online · replies fast</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ marginLeft: "auto", color: "rgba(255,255,255,0.6)", background: "none", border: "none" }}>
              <FiX size={17}/>
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10, background: "#0D1117" }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "88%", padding: "10px 14px",
                  fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-line",
                  borderRadius: m.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  ...(m.from === "user"
                    ? { background: "linear-gradient(135deg,#1A5F5E,#2A8C8A)", color: "#F2EDE5" }
                    : { background: "#111923", color: "#B0BEC8", border: "1px solid #1E2B38" }),
                  fontFamily: "'Inter',sans-serif",
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: "#111923", border: "1px solid #1E2B38", borderRadius: "16px 16px 16px 4px", padding: "12px 16px", display: "flex", gap: 5 }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A84C", display: "block", animation: `chatBounce .9s ease ${i*.15}s infinite` }}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef}/>
          </div>

          {/* Quick replies */}
          {msgs.length <= 2 && (
            <div style={{ padding: "10px 12px 8px", display: "flex", flexWrap: "wrap", gap: 6, flexShrink: 0, background: "#111923", borderTop: "1px solid #1E2B38" }}>
              {QRS.map(q => (
                <button key={q} onClick={() => send(q)} style={{
                  fontSize: 10, fontFamily: "'JetBrains Mono',monospace",
                  padding: "5px 10px", borderRadius: 20, border: "1px solid rgba(201,168,76,0.25)",
                  background: "rgba(201,168,76,0.06)", color: "#C9A84C", cursor: "pointer",
                  transition: "all .15s",
                }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "10px 12px", display: "flex", gap: 8, flexShrink: 0, background: "#111923", borderTop: "1px solid #1E2B38" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type a message…"
              style={{
                flex: 1, padding: "10px 14px", fontSize: 13,
                background: "#0D1117", border: "1px solid #1E2B38",
                borderRadius: 10, color: "#F2EDE5", fontFamily: "'Inter',sans-serif",
                outline: "none",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)")}
              onBlur={e  => (e.currentTarget.style.borderColor = "#1E2B38")}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim()}
              style={{
                width: 40, height: 40, borderRadius: "50%", flexShrink: 0, border: "none",
                background: "linear-gradient(135deg,#1A5F5E,#C9A84C)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: input.trim() ? 1 : 0.35, cursor: "pointer", transition: "opacity .2s",
              }}
            >
              <FiSend size={14} color="#080C10"/>
            </button>
          </div>
        </div>
      )}
      <style>{`@keyframes chatBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
    </>
  );
}
