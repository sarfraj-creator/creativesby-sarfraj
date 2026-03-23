import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, businessType, services, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const adminHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:'Segoe UI',sans-serif;background:#080C10;margin:0;padding:20px}
.w{max-width:600px;margin:0 auto;background:#111820;border-radius:8px;overflow:hidden;border:1px solid #1E2A32}
.h{padding:36px 40px;background:linear-gradient(135deg,#1A5F5E,#0E1418);border-bottom:1px solid rgba(201,168,76,0.2)}
.h h1{color:#F0EDE8;margin:0;font-size:20px;font-weight:600;letter-spacing:0.02em}
.h p{color:#8A9BA8;margin:8px 0 0;font-size:13px}
.logo{display:flex;align-items:center;gap:10px;margin-bottom:20px}
.logo-mark{width:36px;height:36px;background:linear-gradient(135deg,#1A5F5E,#C9A84C);border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#080C10;font-size:12px}
.logo-text{color:#C9A84C;font-weight:600;font-size:14px;letter-spacing:0.05em}
.b{padding:32px 40px}
.f{margin-bottom:16px}
.l{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:#4A5968;margin-bottom:6px}
.v{font-size:14px;color:#F0EDE8;padding:12px 16px;background:#0E1418;border-radius:4px;border-left:2px solid #C9A84C}
.msg{background:#0E1418;border:1px solid #1E2A32;border-radius:6px;padding:18px;margin-top:16px}
.msg p{color:#8A9BA8;line-height:1.7;margin:0;font-size:14px}
.ft{padding:20px 40px;text-align:center;border-top:1px solid #1E2A32}
.ft p{color:#4A5968;font-size:12px;margin:0}
.badge{display:inline-block;background:rgba(201,168,76,0.12);color:#C9A84C;border:1px solid rgba(201,168,76,0.3);padding:4px 14px;border-radius:2px;font-size:11px;font-weight:600;margin-top:8px;letter-spacing:0.08em;text-transform:uppercase}
</style></head><body>
<div class="w">
  <div class="h">
    <div class="logo"><div class="logo-mark">CBS</div><div class="logo-text">CREATIVESBY SARFRAJ</div></div>
    <h1>New Project Inquiry</h1>
    <p>Received via portfolio contact form</p>
  </div>
  <div class="b">
    <div class="f"><div class="l">Client Name</div><div class="v">${name}</div></div>
    <div class="f"><div class="l">Email</div><div class="v">${email}</div></div>
    ${phone ? `<div class="f"><div class="l">Phone / WhatsApp</div><div class="v">${phone}</div></div>` : ""}
    ${businessType ? `<div class="f"><div class="l">Business Type</div><div class="v">${businessType}</div></div>` : ""}
    ${services ? `<div class="f"><div class="l">Services Needed</div><div class="v">${services}</div></div>` : ""}
    ${budget ? `<div class="f"><div class="l">Budget Range</div><div class="v">${budget}</div></div>` : ""}
    ${timeline ? `<div class="f"><div class="l">Timeline</div><div class="v">${timeline}</div></div>` : ""}
    <div class="msg"><div class="l" style="margin-bottom:10px">Project Details</div><p>${message.replace(/\n/g, "<br>")}</p></div>
  </div>
  <div class="ft"><p>creativesbysarfraj.com · Reply within 24 hours</p><span class="badge">Action Required</span></div>
</div></body></html>`;

    const clientHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{font-family:'Segoe UI',sans-serif;background:#080C10;margin:0;padding:20px}
.w{max-width:600px;margin:0 auto;background:#111820;border-radius:8px;overflow:hidden;border:1px solid #1E2A32}
.h{padding:48px 40px;text-align:center;background:linear-gradient(135deg,#0E1418 0%,#111820 100%);border-bottom:1px solid rgba(201,168,76,0.15);position:relative}
.hex{width:64px;height:64px;background:linear-gradient(135deg,#1A5F5E,#C9A84C);clip-path:polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-weight:700;color:#080C10;font-size:16px;letter-spacing:0.05em}
.brand{color:#C9A84C;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;margin-bottom:8px}
.h h1{color:#F0EDE8;margin:0;font-size:24px;font-weight:300;letter-spacing:0.02em}
.h h1 strong{font-weight:600}
.h p{color:#8A9BA8;margin:10px 0 0;font-size:14px}
.b{padding:44px 40px}
.gt{font-size:16px;color:#F0EDE8;font-weight:500;margin-bottom:14px}
.tx{color:#8A9BA8;line-height:1.8;font-size:14px;margin-bottom:14px}
.steps{background:#0E1418;border:1px solid rgba(201,168,76,0.15);border-radius:6px;padding:24px;margin:28px 0}
.steps h3{color:#C9A84C;margin:0 0 18px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.15em}
.step{display:flex;align-items:flex-start;margin-bottom:14px}
.num{width:24px;height:24px;background:linear-gradient(135deg,#1A5F5E,#C9A84C);border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#080C10;flex-shrink:0;margin-right:14px;margin-top:1px}
.st{color:#8A9BA8;font-size:13px;line-height:1.5}
.cta{text-align:center;margin:32px 0}
.cta a{display:inline-block;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;text-decoration:none;padding:14px 32px;border-radius:4px;font-weight:600;font-size:14px;letter-spacing:0.05em}
.ft{background:#0E1418;padding:22px 40px;text-align:center;border-top:1px solid #1E2A32}
.ft p{color:#4A5968;font-size:12px;margin:4px 0}
.ft a{color:#C9A84C;text-decoration:none}
</style></head><body>
<div class="w">
  <div class="h">
    <div class="hex">CBS</div>
    <div class="brand">Creativesby Sarfraj</div>
    <h1>Thank you, <strong>${name}</strong></h1>
    <p>Your inquiry has been received successfully</p>
  </div>
  <div class="b">
    <p class="gt">Hi ${name},</p>
    <p class="tx">Thank you for reaching out. Your project details have been carefully noted and I'm genuinely excited about the opportunity to create something remarkable together.</p>
    <p class="tx">I personally review every inquiry — no automated replies, no templates. You'll receive a tailored response with a clear proposal.</p>
    <div class="steps">
      <h3>What happens next</h3>
      <div class="step"><div class="num">1</div><div class="st"><strong style="color:#F0EDE8">Within 2–4 hours:</strong> I review your requirements in depth</div></div>
      <div class="step"><div class="num">2</div><div class="st"><strong style="color:#F0EDE8">Within 24 hours:</strong> You receive a detailed proposal with timeline &amp; pricing</div></div>
      <div class="step"><div class="num">3</div><div class="st"><strong style="color:#F0EDE8">Discovery call:</strong> 30-min strategy session to align on goals &amp; vision</div></div>
    </div>
    <p class="tx">For the fastest response, feel free to WhatsApp me directly — I'm usually active throughout the day.</p>
    <div class="cta"><a href="https://wa.me/917039805416">💬 Chat on WhatsApp</a></div>
  </div>
  <div class="ft">
    <p><strong style="color:#C9A84C">Sarfraj Sayyad</strong> · Full Stack Developer &amp; Digital Strategist</p>
    <p>creativesby.sarfraj@gmail.com · +91 70398 05416</p>
    <p><a href="https://www.linkedin.com/in/creativesby-sarfraj/">LinkedIn →</a></p>
  </div>
</div></body></html>`;

    await transporter.sendMail({
      from: `"Creativesby Sarfraj" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Inquiry: ${name} — ${businessType || "Web Project"}`,
      html: adminHtml,
      replyTo: email,
    });

    await transporter.sendMail({
      from: `"Sarfraj Sayyad" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you, ${name} — I'll be in touch soon`,
      html: clientHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
