"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  const services = [
    { title: "Hair Styling", desc: "Cuts, coloring, smoothening & keratin", icon: "💇‍♀️" },
    { title: "Skin Care", desc: "Facials, cleanup & glow treatments", icon: "✨" },
    { title: "Bridal Makeup", desc: "Look stunning on your special day", icon: "👰" },
    { title: "Mehendi", desc: "Bridal & party mehendi designs", icon: "🌿" },
    { title: "Nail Art", desc: "Creative designs & extensions", icon: "💅" },
    { title: "Waxing & Threading", desc: "Smooth & clean skin care", icon: "🌸" },
  ];

  const testimonials = [
    { name: "Priya Sharma", text: "Absolutely loved my bridal makeup! The team made me look like a queen.", stars: 5 },
    { name: "Ananya Patel", text: "Best facial I've ever had. My skin glowed for weeks after!", stars: 5 },
    { name: "Ritu Mehta", text: "The nail art was so creative and long-lasting. Will definitely come back!", stars: 5 },
  ];

  return (
    <main style={{ fontFamily: "'DM Serif Display', Georgia, serif", background: "#fef8f5", color: "#2d1f1f" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .nav-link {
          text-decoration: none;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          transition: opacity 0.3s;
          font-weight: 400;
        }
        .nav-link:hover { opacity: 0.65; }
        .nav-link-scrolled {
          text-decoration: none;
          color: #2d1f1f;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          transition: color 0.3s;
        }
        .nav-link-scrolled:hover { color: #c4687a; }

        .btn-main {
          background: #c4687a;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.85rem 2rem;
          font-size: 0.82rem;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          font-weight: 500;
        }
        .btn-main:hover { background: #ad5469; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(196,104,122,0.3); }

        .btn-ghost {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 6px;
          padding: 0.85rem 2rem;
          font-size: 0.82rem;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.12); border-color: #fff; }

        .service-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s;
          box-shadow: 0 2px 12px rgba(196,104,122,0.06);
        }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(196,104,122,0.14); }

        .service-top {
          background: linear-gradient(135deg, #fde8ec, #fdf0f5);
          padding: 2rem;
          text-align: left;
        }

        .input-field {
          width: 100%;
          border: 1.5px solid #edd5d9;
          border-radius: 8px;
          padding: 0.9rem 1.1rem;
          font-size: 0.92rem;
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          color: #2d1f1f;
          outline: none;
          transition: all 0.3s;
        }
        .input-field::placeholder { color: #c4a4a8; }
        .input-field:focus { border-color: #c4687a; box-shadow: 0 0 0 3px rgba(196,104,122,0.08); }

        .testimonial-card {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 12px rgba(196,104,122,0.06);
          transition: all 0.3s;
          position: relative;
        }
        .testimonial-card:hover { box-shadow: 0 12px 35px rgba(196,104,122,0.12); transform: translateY(-4px); }

        .quote-mark {
          font-size: 5rem;
          line-height: 1;
          color: #fde8ec;
          font-family: Georgia, serif;
          position: absolute;
          top: 0.5rem;
          left: 1.2rem;
        }

        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        .anim-left { animation: fadeInLeft 1s ease forwards; }
        .anim-right { animation: fadeInRight 1s ease 0.3s forwards; opacity: 0; }
        .anim-up { animation: fadeInUp 0.8s ease forwards; }
        .anim-up-2 { animation: fadeInUp 0.8s ease 0.2s forwards; opacity: 0; }
        .anim-up-3 { animation: fadeInUp 0.8s ease 0.4s forwards; opacity: 0; }

        .tag-pill {
          display: inline-block;
          background: rgba(253,232,236,0.25);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #ffe0e5;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(5px);
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(254,248,245,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #f5dde0" : "none",
        transition: "all 0.4s ease",
        padding: "1rem 4rem",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        {/* Logo — centered style */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#c4687a" }} />
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", color: scrolled ? "#2d1f1f" : "#fff", letterSpacing: "0.02em" }}>Touch Of Joy</span>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#c4687a" }} />
        </div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className={scrolled ? "nav-link-scrolled" : "nav-link"}>{item}</a>
          ))}
          <a href="#contact" className="btn-main" style={{ padding: "0.55rem 1.3rem", fontSize: "0.78rem", borderRadius: "50px" }}>Book Now</a>
        </div>
      </nav>

      {/* HERO — split layout, text on bottom left, image full bleed */}
      <section style={{
        minHeight: "100vh",
        background: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=80') center/cover no-repeat`,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 0 5rem 0",
        position: "relative",
      }}>
        {/* Dark overlay — heavier at bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,10,15,0.92) 0%, rgba(30,10,15,0.4) 50%, rgba(30,10,15,0.1) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 4rem", maxWidth: 820 }}>
          <div className="tag-pill anim-up">✦ Est. 2017 — Ahmedabad's Finest Beauty Studio</div>

          <h1 className="anim-up" style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 400, lineHeight: 1.05, color: "#fff", marginBottom: "1.2rem", letterSpacing: "-0.01em" }}>
            Feel Like<br />
            <em style={{ color: "#f9c0cb", fontStyle: "italic" }}>Yourself,</em><br />
            Only Better.
          </h1>

          <p className="anim-up-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2rem", maxWidth: 420, fontWeight: 300 }}>
            Premium beauty services tailored just for you — in a space where you can truly unwind and bloom.
          </p>

          <div className="anim-up-3" style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-main">Book a Session</a>
            <a href="#services" className="btn-ghost">See All Services</a>
          </div>

          {/* Horizontal stats bar */}
          <div className="anim-up-3" style={{ display: "flex", gap: "0", marginTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "2rem" }}>
            {[["5K+", "Happy Clients"], ["8 Yrs", "Of Experience"], ["15+", "Beauty Experts"], ["4.9 ★", "Google Rating"]].map(([num, label], i) => (
              <div key={label} style={{ flex: 1, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none", paddingRight: "2rem", paddingLeft: i > 0 ? "2rem" : 0 }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 400, color: "#f9c0cb", fontFamily: "'DM Serif Display', serif" }}>{num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "0.2rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — card grid with left-aligned text inside cards */}
      <section id="services" style={{ padding: "7rem 4rem", background: "#fef8f5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Section header — left aligned this time */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c4687a", marginBottom: "0.5rem" }}>— What We Do</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "#2d1f1f" }}>
                Our <em style={{ fontStyle: "italic", color: "#c4687a" }}>Specialties</em>
              </h2>
            </div>
            <a href="#contact" className="btn-main" style={{ borderRadius: "50px" }}>Book Any Service</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.2rem" }}>
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-top">
                  <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 400, color: "#2d1f1f", fontFamily: "'DM Serif Display', serif" }}>{s.title}</h3>
                </div>
                <div style={{ padding: "1.2rem 2rem" }}>
                  <p style={{ color: "#9a7070", fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — horizontal two-column layout */}
      <section id="about" style={{ padding: "7rem 4rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left — image */}
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80"
              alt="Salon"
              style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: "16px" }}
            />
            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: "2rem", right: "-2rem", background: "#c4687a", borderRadius: "12px", padding: "1.2rem 1.5rem", textAlign: "center", boxShadow: "0 10px 30px rgba(196,104,122,0.3)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 400, color: "#fff", fontFamily: "'DM Serif Display', serif" }}>8+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Years of<br />Excellence</div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c4687a", marginBottom: "0.75rem" }}>— Our Story</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#2d1f1f", lineHeight: 1.25, marginBottom: "1.5rem" }}>
              A Space Where<br /><em style={{ color: "#c4687a" }}>You Come First</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7a5a5a", lineHeight: 1.9, fontWeight: 300, fontSize: "0.95rem", marginBottom: "2rem" }}>
              At Touch Of Joy, we believe every woman deserves to feel her most beautiful self. Our expert team brings years of passion and skill to deliver results that make you glow — inside and out.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {[["🌟 Premium Products", "Only the finest brands"], ["💆‍♀️ Expert Team", "Trained & certified"], ["🕐 Flexible Timings", "Open 7 days a week"], ["💕 Personal Touch", "Tailored to you"]].map(([title, sub]) => (
                <div key={title} style={{ background: "#fef0f2", borderRadius: "10px", padding: "1rem" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2d1f1f", marginBottom: "0.25rem" }}>{title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#9a7070", fontWeight: 300 }}>{sub}</div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-main" style={{ borderRadius: "50px" }}>Get In Touch</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "7rem 4rem", background: "#fef8f5" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c4687a", marginBottom: "0.5rem" }}>— Voices</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "#2d1f1f" }}>Stories From Our <em style={{ color: "#c4687a" }}>Clients</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="quote-mark">&ldquo;</div>
                <div style={{ color: "#e8a0aa", fontSize: "0.9rem", marginBottom: "1rem", letterSpacing: "0.15em", marginTop: "2rem" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", color: "#4a3030", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "1.05rem" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #fde8ec, #c4687a)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>{t.name[0]}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#c4687a", fontSize: "0.85rem" }}>{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — two column: info left, form right */}
      <section id="contact" style={{ padding: "7rem 4rem", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }}>
          {/* Left info */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c4687a", marginBottom: "0.75rem" }}>— Contact</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#2d1f1f", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Let's Make<br /><em style={{ color: "#c4687a" }}>You Shine</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7a5a5a", lineHeight: 1.9, fontWeight: 300, fontSize: "0.92rem", marginBottom: "2.5rem" }}>
              Ready for a transformation? Reach out and our team will be happy to book your perfect appointment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[["📍", "Location", "Ahmedabad, Gujarat"], ["🕐", "Hours", "Mon–Sat: 10am – 8pm"], ["📞", "Phone", "+91 98765 43210"]].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "10px", background: "#fde8ec", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c4687a" }}>{label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#2d1f1f", fontWeight: 400 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: "#fef8f5", borderRadius: "16px", padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 400, color: "#2d1f1f", marginBottom: "0.5rem" }}>Send a Message</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#9a7070", fontSize: "0.85rem", marginBottom: "1.5rem", fontWeight: 300 }}>We'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="input-field" />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="input-field" />
              <textarea rows={4} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="input-field" style={{ resize: "none" }} />
              <button type="submit" className="btn-main" style={{ width: "100%", fontSize: "0.88rem", padding: "1rem", borderRadius: "8px" }}>Send Message 💌</button>
              {status && <p style={{ textAlign: "center", color: "#c4687a", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>{status}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2d1f1f", color: "white", padding: "3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: "#fff" }}>Touch Of Joy</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c4687a", marginTop: "0.3rem" }}>Beauty Parlour · Est. 2017</div>
        </div>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", transition: "color 0.3s" }}>{item}</a>
          ))}
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>© 2025 Touch Of Joy. Made with 💕</p>
      </footer>
    </main>
  );
}
