"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import Image from "next/image";
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional().refine(v => !v || /^[\+]?[\d\s\-\(\)]{7,15}$/.test(v), "Enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20, "Please describe your project (min 20 characters)"),
});
type FormData = z.infer<typeof schema>;

const businessTypes = [
  "Restaurant / Food & Beverage", "E-Commerce / Retail", "EdTech / Online Learning",
  "Healthcare / Clinic", "Real Estate", "Job Board / Recruitment",
  "Photography / Creative", "SaaS / Tech Startup", "Corporate / Business",
  "Marketing Agency", "Other",
];
const serviceOptions = [
  "Custom Next.js / React Site", "WordPress / WooCommerce", "E-Commerce Store",
  "SEO Landing Page", "Web App / SaaS MVP", "Performance Optimization",
  "API Integration", "UI/UX + Development", "Website Redesign", "Monthly Retainer",
];
const budgets = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+", "Not sure yet"];
const timelines = ["ASAP (< 1 week)", "2–4 weeks", "1–2 months", "3+ months", "Flexible"];

const inputBase = "w-full px-4 py-3 text-sm outline-none transition-all duration-200 rounded-sm font-mono";
const inputStyle = (err?: {message?: string}) =>
  `${inputBase} ${err
    ? "border border-red-500/50 bg-red-500/5 text-red-300 placeholder-red-900"
    : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--gold)] focus:bg-[var(--card)]"
  }`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  });
  const selected = watch("services") || [];

  const toggle = (svc: string) => {
    setValue("services", selected.includes(svc) ? selected.filter(s => s !== svc) : [...selected, svc], { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, services: data.services.join(", ") }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed");
      setSubmitted(true);
      toast.success("Message sent successfully.");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="sec" style={{ background: "var(--night)" }}>
      <div className="wrap">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="label-tag mb-4">Get In Touch</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
            Let&apos;s Build Something{" "}
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Remarkable</em>
          </h2>
          <div className="divider mx-auto" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)", width: "80px" }}/>
          <p style={{ color: "var(--text-secondary)" }}>
            Fill the form — I respond personally within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info */}
            <div className="card-dark p-7">
              <h3 className="section-title text-xl mb-6" style={{ fontWeight: 600 }}>Contact Details</h3>
              <div className="space-y-4">
                {[
                  { icon: FiMail, label: "Email", val: "creativesby.sarfraj@gmail.com", href: "mailto:creativesby.sarfraj@gmail.com" },
                  { icon: FaWhatsapp, label: "WhatsApp", val: "+91 70398 05416", href: "https://wa.me/917039805416" },
                  { icon: FiLinkedin, label: "LinkedIn", val: "creativesby-sarfraj", href: "https://www.linkedin.com/in/creativesby-sarfraj/" },
                ].map(c => {
                  const Icon = c.icon as React.ElementType;
                  return (
                    <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                       rel="noopener noreferrer"
                       className="flex items-center gap-3.5 group p-3 rounded-sm transition-all duration-200"
                       style={{ border: "1px solid transparent" }}
                       onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                       onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
                      <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                           style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <Icon size={15} style={{ color: "var(--gold)" }}/>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-mono" style={{ color: "var(--text-muted)" }}>{c.label}</p>
                        <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{c.val}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="flex gap-2 mt-5 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                {[
                  { href: "https://www.linkedin.com/in/creativesby-sarfraj/", icon: FiLinkedin },
                  { href: "https://github.com", icon: FiGithub },
                  { href: "https://wa.me/917039805416", icon: FaWhatsapp },
                ].map((s, i) => {
                  const Icon = s.icon as React.ElementType;
                  return (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                       className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200"
                       style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                       onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                       onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                      <Icon size={15}/>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Image with guarantee */}
            <div className="relative rounded-sm overflow-hidden" style={{ height: "200px" }}>
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75&auto=format&fit=crop"
                alt="Professional workspace"
                fill className="object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ background: "linear-gradient(to top, rgba(8,12,16,0.95), rgba(8,12,16,0.4))" }}>
                <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--gold)" }}>My Promise</p>
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Free consultation. No commitment required.</p>
                <div className="flex flex-wrap gap-1.5">
                  {["✓ Free quote", "✓ 24h reply", "✓ 50% upfront"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-sm" style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold-light)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-dark p-14 flex flex-col items-center justify-center text-center" style={{ minHeight: "500px" }}>
                <div className="w-16 h-16 hex-clip flex items-center justify-center mb-6"
                     style={{ background: "linear-gradient(135deg, var(--teal), var(--gold))" }}>
                  <FiCheckCircle size={28} style={{ color: "#080C10" }}/>
                </div>
                <h3 className="section-title text-2xl mb-3" style={{ fontWeight: 600 }}>Message Received</h3>
                <p className="text-sm leading-relaxed max-w-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out. I&apos;ve received your project details and will respond with a personalized proposal within 24 hours.
                </p>
                <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>A confirmation email has been sent to your inbox.</p>
                <button className="btn-outline mt-8 text-xs" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-dark p-8 space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>
                      Full Name <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <div className="relative">
                      <FiUser size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}/>
                      <input {...register("name")} placeholder="John Smith" className={`${inputStyle(errors.name)} pl-9`}/>
                    </div>
                    {errors.name && <p className="text-[11px] mt-1.5" style={{ color: "#f87171" }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>
                      Email <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <div className="relative">
                      <FiMail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}/>
                      <input {...register("email")} type="email" placeholder="hello@company.com" className={`${inputStyle(errors.email)} pl-9`}/>
                    </div>
                    {errors.email && <p className="text-[11px] mt-1.5" style={{ color: "#f87171" }}>{errors.email.message}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>
                    Phone / WhatsApp <span style={{ color: "var(--text-muted)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span>
                  </label>
                  <div className="relative">
                    <FiPhone size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}/>
                    <input {...register("phone")} placeholder="+91 70398 05416" className={`${inputStyle(errors.phone)} pl-9`}/>
                  </div>
                  {errors.phone && <p className="text-[11px] mt-1.5" style={{ color: "#f87171" }}>{errors.phone.message}</p>}
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>
                    Business Type <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <select {...register("businessType")} className={inputStyle(errors.businessType)}
                          style={{ background: "var(--surface)", color: errors.businessType ? undefined : "var(--text-primary)" }}>
                    <option value="" style={{ background: "var(--card)" }}>Select your business type…</option>
                    {businessTypes.map(b => <option key={b} value={b} style={{ background: "var(--card)" }}>{b}</option>)}
                  </select>
                  {errors.businessType && <p className="text-[11px] mt-1.5" style={{ color: "#f87171" }}>{errors.businessType.message}</p>}
                </div>

                {/* Services */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2.5" style={{ color: "var(--text-muted)" }}>
                    Services Needed <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map(svc => {
                      const on = selected.includes(svc);
                      return (
                        <button key={svc} type="button" onClick={() => toggle(svc)}
                                className="text-left text-[11px] font-mono px-3 py-2.5 rounded-sm transition-all duration-200 leading-tight"
                                style={{
                                  border: `1px solid ${on ? "var(--gold)" : "var(--border)"}`,
                                  background: on ? "rgba(201,168,76,0.08)" : "var(--surface)",
                                  color: on ? "var(--gold)" : "var(--text-muted)",
                                }}>
                          {on ? "✓ " : ""}{svc}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && <p className="text-[11px] mt-1.5" style={{ color: "#f87171" }}>{errors.services.message}</p>}
                </div>

                {/* Budget + Timeline */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>Budget</label>
                    <select {...register("budget")} className={inputStyle()} style={{ background: "var(--surface)", color: "var(--text-primary)" }}>
                      <option value="" style={{ background: "var(--card)" }}>Select budget…</option>
                      {budgets.map(b => <option key={b} value={b} style={{ background: "var(--card)" }}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>Timeline</label>
                    <select {...register("timeline")} className={inputStyle()} style={{ background: "var(--surface)", color: "var(--text-primary)" }}>
                      <option value="" style={{ background: "var(--card)" }}>Select timeline…</option>
                      {timelines.map(t => <option key={t} value={t} style={{ background: "var(--card)" }}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.12em] mb-2" style={{ color: "var(--text-muted)" }}>
                    Project Details <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <div className="relative">
                    <FiMessageSquare size={13} className="absolute left-3.5 top-3.5" style={{ color: "var(--text-muted)" }}/>
                    <textarea {...register("message")} rows={4} placeholder="Describe your project — goals, features, references, timeline…"
                              className={`${inputStyle(errors.message)} pl-9 resize-none`}/>
                  </div>
                  {errors.message && <p className="text-[11px] mt-1.5" style={{ color: "#f87171" }}>{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={loading}
                        className="btn-gold w-full justify-center py-4 text-xs disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <><svg className="animate-spin w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending…</>
                  ) : (
                    <><FiSend size={14}/> Send Inquiry</>
                  )}
                </button>
                <p className="text-center text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
                  No spam. No commitment. Personal reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
