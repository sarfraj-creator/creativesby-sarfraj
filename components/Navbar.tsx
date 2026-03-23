"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

/* CBS logo — matches the actual uploaded logo:
   - Hexagon outer + inner border (teal→gold gradient)
   - C arc on left (teal)
   - S curve through center (gold)
   - Vertical bar (gold) with top+bottom square dots */
const CBSLogo = () => (
  <a href="#" className="flex items-center gap-3 select-none group" aria-label="Creativesby Sarfraj">
    <svg width="40" height="46" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nav-hex" x1="0" y1="0" x2="100" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A5F5E"/>
          <stop offset="100%" stopColor="#C9A84C"/>
        </linearGradient>
        <linearGradient id="nav-gold" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A84C"/>
          <stop offset="50%" stopColor="#F5E09A"/>
          <stop offset="100%" stopColor="#C9A84C"/>
        </linearGradient>
      </defs>
      {/* Outer hex */}
      <polygon points="50,3 95,27.5 95,87.5 50,112 5,87.5 5,27.5"
        fill="#080C10" stroke="url(#nav-hex)" strokeWidth="3"/>
      {/* Inner hex (subtle fill) */}
      <polygon points="50,13 85,32.5 85,82.5 50,102 15,82.5 15,32.5"
        fill="#0D1117" stroke="url(#nav-hex)" strokeWidth="1.2" strokeOpacity="0.5"/>
      {/* C arc — teal, large radius left side */}
      <path d="M47 43 A17 17 0 1 0 47 72" stroke="#1A5F5E" strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* S curve — gold, center */}
      <path d="M51 43 C63 43 68 50 57 57.5 C46 65 51 72 63 72"
        stroke="url(#nav-gold)" strokeWidth="6.5" strokeLinecap="round" fill="none"/>
      {/* Vertical bar — gold */}
      <line x1="51" y1="35" x2="51" y2="80" stroke="url(#nav-gold)" strokeWidth="5.5" strokeLinecap="round"/>
      {/* Top square dot — gold */}
      <rect x="48" y="27" width="6" height="6" rx="1" fill="#C9A84C"/>
      {/* Bottom square dot — gold */}
      <rect x="48" y="82" width="6" height="6" rx="1" fill="#C9A84C"/>
    </svg>

    <div className="flex flex-col leading-none">
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 700,
        fontSize: 17,
        color: "#F2EDE5",
        letterSpacing: "0.03em",
        lineHeight: 1,
      }}>
        Creativesby
      </span>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 8,
        color: "#C9A84C",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        marginTop: 4,
      }}>
        Sarfraj
      </span>
    </div>
  </a>
);

const LINKS = [
  { href: "#about",    label: "About"    },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work"     },
  { href: "#process",  label: "Process"  },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${scrolled ? "py-3" : "py-4"}`}
      style={{
        background: scrolled ? "rgba(8,12,16,0.97)" : "rgba(8,12,16,0.4)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(6px)",
        borderBottom: scrolled ? "1px solid rgba(30,43,56,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="wrap flex items-center justify-between">
        <CBSLogo />

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <a
          href="https://wa.me/917039805416"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold hidden md:inline-flex text-[11px] py-2.5 px-5"
        >
          Hire Me →
        </a>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#F2EDE5" }}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22}/> : <FiMenu size={22}/>}
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
          <div className="wrap py-5 flex flex-col gap-5">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/917039805416" className="btn-gold self-start">Hire Me →</a>
          </div>
        </div>
      )}
    </header>
  );
}
