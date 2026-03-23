"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const WA  = "917039805416";
const MSG = encodeURIComponent("Hi Sarfraj! I found your portfolio and I'd love to discuss a web project. Can we connect?");

export default function WhatsAppFloat() {
  const [show,    setShow]    = useState(false);
  const [popup,   setPopup]   = useState(false);
  const [dismiss, setDismiss] = useState(false);

  useEffect(() => { const t = setTimeout(() => setShow(true), 2000); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (!show || dismiss) return;
    const t = setTimeout(() => setPopup(true), 5500);
    return () => clearTimeout(t);
  }, [show, dismiss]);

  if (!show) return null;

  return (
    <>
      {/* Popup — above button, bottom-left */}
      {popup && (
        <div
          style={{
            position: "fixed",
            bottom: 96,
            left: 24,
            zIndex: 60,
            width: 280,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,211,102,0.15)",
            animation: "waPop .4s cubic-bezier(.16,1,.3,1) forwards",
          }}
        >
          <style>{`@keyframes waPop{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>

          {/* WA header */}
          <div style={{ background: "#075E54", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg,#1A5F5E,#C9A84C)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 800, color: "#080C10",
            }}>
              CBS
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'Inter',sans-serif", lineHeight: 1.2 }}>Sarfraj Sayyad</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}/>
                <span style={{ color: "#86efac", fontSize: 11, fontFamily: "'JetBrains Mono',monospace" }}>Online now</span>
              </div>
            </div>
            <button
              onClick={() => { setPopup(false); setDismiss(true); }}
              style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", lineHeight: 1 }}
            >
              <FiX size={16}/>
            </button>
          </div>

          {/* Bubble */}
          <div style={{ background: "#ECE5DD", padding: 16 }}>
            <div style={{ background: "#fff", borderRadius: "0 12px 12px 12px", padding: "12px 16px", boxShadow: "0 1px 4px rgba(0,0,0,.12)", maxWidth: "90%" }}>
              <p style={{ color: "#111827", fontSize: 13, lineHeight: 1.6, fontFamily: "'Inter',sans-serif" }}>
                👋 Hey! Looking to build something online?
              </p>
              <p style={{ color: "#111827", fontSize: 13, lineHeight: 1.6, fontFamily: "'Inter',sans-serif", marginTop: 6 }}>
                First conversation is free — no commitment needed.
              </p>
              <p style={{ color: "#9ca3af", fontSize: 10, textAlign: "right", marginTop: 6, fontFamily: "'JetBrains Mono',monospace" }}>
                Now ✓✓
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#111923", padding: 12, borderTop: "1px solid #1E2B38" }}>
            <a
              href={`https://wa.me/${WA}?text=${MSG}`}
              target="_blank" rel="noopener noreferrer"
              onClick={() => { setPopup(false); setDismiss(true); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#25D366", color: "#fff", padding: "11px 0",
                borderRadius: 10, fontWeight: 700, fontSize: 13,
                fontFamily: "'Inter',sans-serif", textDecoration: "none",
              }}
            >
              <FaWhatsapp size={18}/> Start Conversation
            </a>
          </div>
        </div>
      )}

      {/* Round floating button — BOTTOM LEFT */}
      <a
        href={`https://wa.me/${WA}?text=${MSG}`}
        target="_blank" rel="noopener noreferrer"
        onClick={() => { setPopup(false); setDismiss(true); }}
        aria-label="Chat on WhatsApp"
        className="group"
        style={{ position: "fixed", bottom: 24, left: 24, zIndex: 50 }}
      >
        {/* Pulse ring */}
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "rgba(37,211,102,0.3)",
          animation: "waPing 2s cubic-bezier(0,0,.2,1) infinite",
        }}/>
        {/* Button */}
        <div style={{
          position: "relative", width: 56, height: 56, borderRadius: "50%",
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 0 0 3px rgba(37,211,102,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform .2s, box-shadow .2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          <FaWhatsapp size={26} color="#fff"/>
        </div>
        {/* Tooltip */}
        <span style={{
          position: "absolute", bottom: 4, left: 64,
          background: "#111923", color: "#C9A84C",
          fontSize: 11, fontFamily: "'JetBrains Mono',monospace",
          padding: "6px 12px", borderRadius: 6, whiteSpace: "nowrap",
          border: "1px solid #1E2B38", boxShadow: "0 4px 12px rgba(0,0,0,.4)",
          opacity: 0, transition: "opacity .2s", pointerEvents: "none",
        }}
        ref={el => { if (el) { el.parentElement?.addEventListener("mouseenter", () => { el.style.opacity = "1"; }); el.parentElement?.addEventListener("mouseleave", () => { el.style.opacity = "0"; }); } }}
        >
          Chat on WhatsApp
        </span>
      </a>
      <style>{`@keyframes waPing{75%,100%{transform:scale(1.65);opacity:0}}`}</style>
    </>
  );
}
