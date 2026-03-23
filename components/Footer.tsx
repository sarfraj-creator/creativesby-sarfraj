import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CBSLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="36" height="36" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fHexG" x1="0" y1="0" x2="100" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A5F5E"/>
          <stop offset="100%" stopColor="#C9A84C"/>
        </linearGradient>
        <linearGradient id="fTextG" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A84C"/>
          <stop offset="100%" stopColor="#F0D98C"/>
        </linearGradient>
      </defs>
      <polygon points="50,4 96,29 96,86 50,111 4,86 4,29" fill="none" stroke="url(#fHexG)" strokeWidth="3"/>
      <polygon points="50,14 86,34 86,81 50,101 14,81 14,34" fill="#0E1418" stroke="url(#fHexG)" strokeWidth="1.5" strokeOpacity="0.4"/>
      <text x="50" y="72" fontFamily="Georgia,serif" fontWeight="700" fontSize="34" fill="url(#fTextG)" textAnchor="middle" letterSpacing="-1">CBS</text>
    </svg>
    <div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "16px", letterSpacing: "0.04em", color: "#F0EDE8" }}>Creativesby</div>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase" }}>Sarfraj</div>
    </div>
  </div>
);

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#tech", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const svcs = [
  "Next.js Development","WordPress / WooCommerce","E-Commerce Stores",
  "SEO Landing Pages","SaaS MVPs","Performance Audits",
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ft-link{color:#4A5968;transition:color 0.2s;}
        .ft-link:hover{color:#C9A84C;}
        .ft-icon{color:#4A5968;border:1px solid #1E2A32;transition:color 0.2s,border-color 0.2s;}
        .ft-icon:hover{color:#C9A84C;border-color:rgba(201,168,76,0.4);}
      `}</style>
      <footer style={{background:"var(--surface)",borderTop:"1px solid var(--border)"}}>
        <div className="wrap pt-16 pb-8">
          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div className="md:col-span-1">
              <CBSLogo />
              <p className="text-sm leading-relaxed mt-5 max-w-[220px]" style={{color:"var(--text-muted)"}}>
                Premium web development studio. Building fast, ranked, and converting digital experiences.
              </p>
              <div className="flex items-center gap-2 mt-5 p-3 rounded-sm" style={{background:"var(--card)",border:"1px solid var(--border)"}}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{background:"#4ade80"}}/>
                <span className="text-[11px] font-mono" style={{color:"#4ade80"}}>Available for projects</span>
              </div>
              <div className="flex gap-2.5 mt-4">
                {[
                  {href:"https://www.linkedin.com/in/creativesby-sarfraj/",Icon:FiLinkedin},
                  {href:"https://github.com",Icon:FiGithub},
                  {href:"https://wa.me/917039805416",Icon:FaWhatsapp},
                  {href:"mailto:creativesby.sarfraj@gmail.com",Icon:FiMail},
                ].map((s,i)=>(
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                     className="ft-icon w-9 h-9 rounded-sm flex items-center justify-center"
                     style={{background:"var(--card)"}}>
                    <s.Icon size={14}/>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-5" style={{color:"var(--gold)"}}>Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map(l=>(
                  <li key={l.href}><a href={l.href} className="ft-link text-sm">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-5" style={{color:"var(--gold)"}}>Services</h4>
              <ul className="space-y-3">
                {svcs.map(s=>(
                  <li key={s}><a href="#services" className="ft-link text-sm">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] mb-5" style={{color:"var(--gold)"}}>Contact</h4>
              <div className="space-y-3">
                <a href="mailto:creativesby.sarfraj@gmail.com" className="ft-link flex items-start gap-2.5 text-sm">
                  <FiMail size={13} className="mt-0.5 flex-shrink-0"/>
                  <span>creativesby.sarfraj@gmail.com</span>
                </a>
                <a href="https://wa.me/917039805416" target="_blank" rel="noopener noreferrer" className="ft-link flex items-center gap-2.5 text-sm">
                  <FaWhatsapp size={13} className="flex-shrink-0"/>
                  <span>+91 70398 05416</span>
                </a>
                <a href="https://www.linkedin.com/in/creativesby-sarfraj/" target="_blank" rel="noopener noreferrer" className="ft-link flex items-center gap-2.5 text-sm">
                  <FiLinkedin size={13} className="flex-shrink-0"/>
                  <span>creativesby-sarfraj</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{borderTop:"1px solid var(--border)"}}>
            <p className="text-xs font-mono" style={{color:"var(--text-muted)"}}>
              © {new Date().getFullYear()} Creativesby Sarfraj. All rights reserved.
            </p>
            {/* <p className="text-xs font-mono" style={{color:"var(--text-muted)"}}>
              Built with Next.js 14 · Deployed on Vercel
            </p> */}
          </div>
        </div>
      </footer>
    </>
  );
}
