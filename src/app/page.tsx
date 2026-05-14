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
    { title: "Hair Styling", desc: "Cuts, coloring, smoothening, keratin & more", icon: "💇‍♀️" },
    { title: "Skin Care", desc: "Facials, cleanup, bleach & glow treatments", icon: "✨" },
    { title: "Bridal Makeup", desc: "Look stunning on your most special day", icon: "👰" },
    { title: "Mehendi", desc: "Beautiful bridal & party mehendi designs", icon: "🌿" },
    { title: "Nail Art", desc: "Creative nail designs & extensions", icon: "💅" },
    { title: "Waxing & Threading", desc: "Smooth & clean skin care always", icon: "🌸" },
  ];

  const testimonials = [
    { name: "Priya Sharma", text: "Absolutely loved my bridal makeup! The team made me look like a queen.", stars: 5 },
    { name: "Ananya Patel", text: "Best facial I've ever had. My skin glowed for weeks after!", stars: 5 },
    { name: "Ritu Mehta", text: "The nail art was so creative and long-lasting. Will definitely come back!", stars: 5 },
  ];

  return (
    <main style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#fdf6f0", color: "#3d2c2c" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .nav-link {
          text-decoration: none;
          color: #fff8f5;
          font-family: 'Lato', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.3s;
          font-weight: 400;
        }
        .nav-link:hover { color: #f4b8c1; }

        .nav-link-scrolled {
          text-decoration: none;
          color: #3d2c2c;
          font-family: 'Lato', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.3s;
          font-weight: 400;
        }
        .nav-link-scrolled:hover { color: #c97d8a; }

        .btn-rose {
          background: #c97d8a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 0.9rem 2.2rem;
          font-size: 0.82rem;
          font-family: 'Lato', sans-serif;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          font-weight: 700;
        }
        .btn-rose:hover { background: #b56673; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(201,125,138,0.35); }

        .btn-outline-rose {
          background: transparent;
          color: #fff8f5;
          border: 1.5px solid rgba(255,248,245,0.6);
          border-radius: 50px;
          padding: 0.9rem 2.2rem;
          font-size: 0.82rem;
          font-family: 'Lato', sans-serif;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          font-weight: 400;
        }
        .btn-outline-rose:hover { background: rgba(255,248,245,0.15); border-color: #fff8f5; }

        .service-card {
          background: #fff;
          border: 1px solid #f5dde0;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s;
        }
        .service-card:hover {
          border-color: #c97d8a;
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(201,125,138,0.12);
        }

        .input-field {
          width: 100%;
          border: 1px solid #e8c5c9;
          border-radius: 10px;
          padding: 1rem 1.2rem;
          font-size: 0.95rem;
          font-family: 'Lato', sans-serif;
          background: #fff;
          color: #3d2c2c;
          outline: none;
          transition: border-color 0.3s;
        }
        .input-field::placeholder { color: #c4a4a8; }
        .input-field:focus { border-color: #c97d8a; box-shadow: 0 0 0 3px rgba(201,125,138,0.1); }

        .testimonial-card {
          background: #fff;
          border: 1px solid #f5dde0;
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s;
        }
        .testimonial-card:hover { border-color: #c97d8a; box-shadow: 0 10px 30px rgba(201,125,138,0.1); }

        .divider { width: 60px; height: 2px; background: linear-gradient(90deg, #f4b8c1, #c97d8a); margin: 1.5rem auto; border-radius: 2px; }

        .footer-link {
          color: rgba(255,248,245,0.5);
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .footer-link:hover { color: #f4b8c1; }

        .about-feature {
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 2rem 1rem;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s;
        }
        .about-feature:hover { border-color: rgba(255,255,255,0.5); }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeInUp 1s ease forwards; }
        .fade-in-2 { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
        .fade-in-3 { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(253,246,240,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #f5dde0" : "none",
        transition: "all 0.4s ease",
        padding: "1.2rem 3rem",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "linear-gradient(135deg, #f4b8c1, #c97d8a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 700, fontSize: "0.9rem",
            fontFamily: "'Lato', sans-serif", letterSpacing: "0.05em"
          }}>TJ</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: scrolled ? "#3d2c2c" : "#fff8f5", letterSpacing: "0.03em" }}>Touch Of Joy</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: scrolled ? "#c97d8a" : "rgba(255,248,245,0.75)", fontFamily: "'Lato', sans-serif", textTransform: "uppercase" }}>Beauty Parlour</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className={scrolled ? "nav-link-scrolled" : "nav-link"}>{item}</a>
          ))}
          <a href="#contact" className="btn-rose" style={{ padding: "0.6rem 1.5rem", fontSize: "0.78rem" }}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(to right, rgba(61,30,35,0.82) 40%, rgba(80,30,40,0.45) 100%), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=80') center/cover no-repeat`,
        display: "flex", alignItems: "center",
        padding: "8rem 3rem 4rem",
      }}>
        <div style={{ maxWidth: 680 }}>
          <p className="fade-in" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#f4b8c1", marginBottom: "1.5rem" }}>
            ✦ Premium Beauty Parlour ✦
          </p>
          <h1 className="fade-in" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.5rem", color: "#fff8f5" }}>
            Where Beauty<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#f4b8c1" }}>Meets Elegance</span>
          </h1>
          <p className="fade-in-2" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,248,245,0.75)", marginBottom: "2.5rem", maxWidth: 460, fontWeight: 300 }}>
            Experience the finest beauty treatments in a warm, welcoming setting. Look good, feel great — every single day.
          </p>
          <div className="fade-in-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-rose">🌸 Book Appointment</a>
            <a href="#services" className="btn-outline-rose">Explore Services</a>
          </div>
          <div className="fade-in-3" style={{ display: "flex", gap: "3rem", marginTop: "5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(244,184,193,0.3)" }}>
            {[["5000+", "Happy Clients"], ["8+", "Years Experience"], ["15+", "Expert Stylists"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#f4b8c1" }}>{num}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,248,245,0.5)", marginTop: "0.25rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "7rem 3rem", background: "#fdf6f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c97d8a", marginBottom: "1rem" }}>What We Offer</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#3d2c2c" }}>Our <em style={{ color: "#c97d8a" }}>Services</em></h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#3d2c2c", marginBottom: "0.5rem" }}>{s.title}</h3>
                <div style={{ width: 30, height: 1.5, background: "linear-gradient(90deg,#f4b8c1,#c97d8a)", margin: "0.75rem auto", borderRadius: 2 }} />
                <p style={{ color: "#9a7a7d", fontFamily: "'Lato', sans-serif", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "7rem 3rem",
        background: `linear-gradient(to bottom, rgba(180,80,100,0.88), rgba(120,40,60,0.93)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&auto=format&fit=crop&q=80') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#f4b8c1", marginBottom: "1rem" }}>Our Story</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff8f5", marginBottom: "1rem" }}>Why Choose <em>Touch Of Joy?</em></h2>
          <div style={{ width: 60, height: 2, background: "rgba(255,248,245,0.5)", margin: "1.5rem auto" }} />
          <p style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(255,248,245,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300, maxWidth: 650, margin: "0 auto 4rem" }}>
            At Touch Of Joy, we believe every woman deserves to feel beautiful. With over 8 years of experience and a team of passionate beauty experts, we deliver premium services using the finest products.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
            {[["🌟", "Premium Products"], ["💆‍♀️", "Expert Therapists"], ["🕐", "Flexible Hours"], ["💕", "Personalized Care"]].map(([icon, label]) => (
              <div key={label} className="about-feature">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#f4b8c1" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "7rem 3rem", background: "#fef9f5" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c97d8a", marginBottom: "1rem" }}>Client Love</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#3d2c2c" }}>What They <em style={{ color: "#c97d8a" }}>Say</em></h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div style={{ color: "#e8a0aa", fontSize: "1rem", marginBottom: "1.2rem", letterSpacing: "0.2em" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontStyle: "italic", color: "#7a5a5d", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem", fontWeight: 300 }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ width: 30, height: 1.5, background: "linear-gradient(90deg,#f4b8c1,#c97d8a)", marginBottom: "1rem", borderRadius: 2 }} />
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, color: "#c97d8a", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "7rem 3rem", background: "#fdf6f0" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c97d8a", marginBottom: "1rem" }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#3d2c2c" }}>Book Your <em style={{ color: "#c97d8a" }}>Appointment</em></h2>
            <div className="divider" />
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#9a7a7d", lineHeight: 1.8, fontWeight: 300, fontSize: "0.9rem" }}>We would love to hear from you. Send us a message and we will get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="input-field" />
            <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="input-field" />
            <textarea rows={5} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="input-field" style={{ resize: "vertical" }} />
            <button type="submit" className="btn-rose" style={{ width: "100%", fontSize: "0.9rem", padding: "1rem" }}>Send Message 💌</button>
            {status && <p style={{ textAlign: "center", color: "#c97d8a", fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", marginTop: "0.5rem" }}>{status}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "linear-gradient(135deg, #6b2737, #9b4458)", borderTop: "1px solid rgba(244,184,193,0.2)", color: "white", padding: "3rem", textAlign: "center" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff8f5", letterSpacing: "0.05em" }}>Touch Of Joy</div>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#f4b8c1", marginTop: "0.3rem" }}>Beauty Parlour</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="footer-link">{item}</a>
          ))}
        </div>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", color: "rgba(255,248,245,0.35)" }}>© 2025 Touch Of Joy. All rights reserved. Made with 💕</p>
      </footer>
    </main>
  );
}
