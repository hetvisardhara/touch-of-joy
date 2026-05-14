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
    <main style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#0d0d0d", color: "#f5f0eb" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .nav-link { text-decoration: none; color: #f5f0eb; font-family: 'Montserrat', sans-serif; font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; transition: color 0.3s; font-weight: 400; }
        .nav-link:hover { color: #c9a96e; }
        .btn-gold { background: #c9a96e; color: #0d0d0d; border: none; border-radius: 50px; padding: 0.9rem 2.2rem; font-size: 0.85rem; font-family: 'Montserrat', sans-serif; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block; font-weight: 600; }
        .btn-gold:hover { background: #b8935a; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(201,169,110,0.35); }
        .btn-outline-gold { background: transparent; color: #f5f0eb; border: 1.5px solid #c9a96e; border-radius: 50px; padding: 0.9rem 2.2rem; font-size: 0.85rem; font-family: 'Montserrat', sans-serif; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: all 0.3s; text-decoration: none; display: inline-block; font-weight: 400; }
        .btn-outline-gold:hover { background: #c9a96e; color: #0d0d0d; }
        .service-card { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 4px; padding: 2.5rem 2rem; text-align: center; transition: all 0.3s; }
        .service-card:hover { border-color: #c9a96e; transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); }
        .input-field { width: 100%; border: 1px solid #2a2a2a; border-radius: 4px; padding: 1rem 1.2rem; font-size: 0.95rem; font-family: 'Montserrat', sans-serif; background: #1a1a1a; color: #f5f0eb; outline: none; transition: border-color 0.3s; }
        .input-field::placeholder { color: #555; }
        .input-field:focus { border-color: #c9a96e; }
        .testimonial-card { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 4px; padding: 2.5rem; transition: border-color 0.3s; }
        .testimonial-card:hover { border-color: #c9a96e; }
        .divider { width: 60px; height: 1px; background: #c9a96e; margin: 1.5rem auto; }
        .footer-link { color: rgba(245,240,235,0.4); text-decoration: none; font-family: 'Montserrat', sans-serif; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; transition: color 0.3s; }
        .footer-link:hover { color: #c9a96e; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeInUp 1s ease forwards; }
        .fade-in-2 { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
        .fade-in-3 { animation: fadeInUp 1s ease 0.6s forwards; opacity: 0; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
        transition: "all 0.4s ease",
        padding: "1.2rem 3rem",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid #c9a96e", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a96e", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>TJ</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: "1.1rem", color: "#f5f0eb", letterSpacing: "0.05em" }}>Touch Of Joy</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#c9a96e", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase" }}>Beauty Parlour</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
          <a href="#contact" className="btn-gold" style={{ padding: "0.6rem 1.5rem", fontSize: "0.78rem" }}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(to right, rgba(13,13,13,0.93) 45%, rgba(13,13,13,0.5) 100%), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=80') center/cover no-repeat`,
        display: "flex", alignItems: "center",
        padding: "8rem 3rem 4rem",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ maxWidth: 680 }}>
          <p className="fade-in" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1.5rem" }}>
            Premium Beauty Parlour
          </p>
          <h1 className="fade-in" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.5rem", color: "#f5f0eb" }}>
            Where Beauty<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#c9a96e" }}>Meets Elegance</span>
          </h1>
          <p className="fade-in-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,235,0.7)", marginBottom: "2.5rem", maxWidth: 480, fontWeight: 300 }}>
            Experience the finest beauty treatments in a luxurious setting. Look good, feel great — every single day.
          </p>
          <div className="fade-in-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-gold">Book Appointment</a>
            <a href="#services" className="btn-outline-gold">Explore Services</a>
          </div>
          <div className="fade-in-3" style={{ display: "flex", gap: "3rem", marginTop: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #2a2a2a" }}>
            {[["5000+", "Happy Clients"], ["8+", "Years Experience"], ["15+", "Expert Stylists"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#c9a96e" }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,235,0.5)", marginTop: "0.25rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "7rem 3rem", background: "#111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1rem" }}>What We Offer</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#f5f0eb" }}>Our <em>Services</em></h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#f5f0eb", marginBottom: "0.75rem" }}>{s.title}</h3>
                <div style={{ width: 30, height: 1, background: "#c9a96e", margin: "0.75rem auto" }} />
                <p style={{ color: "rgba(245,240,235,0.55)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "7rem 3rem",
        background: `linear-gradient(to bottom, rgba(13,13,13,0.88), rgba(13,13,13,0.95)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&auto=format&fit=crop&q=80') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1rem" }}>Our Story</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#f5f0eb", marginBottom: "1rem" }}>Why Choose <em>Touch Of Joy?</em></h2>
          <div className="divider" />
          <p style={{ fontSize: "1.05rem", lineHeight: 2, color: "rgba(245,240,235,0.7)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, maxWidth: 650, margin: "0 auto 4rem" }}>
            At Touch Of Joy, we believe every woman deserves to feel beautiful. With over 8 years of experience and a team of passionate beauty experts, we deliver premium services using the finest products.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
            {[["🌟", "Premium Products"], ["💆‍♀️", "Expert Therapists"], ["🕐", "Flexible Hours"], ["💕", "Personalized Care"]].map(([icon, label]) => (
              <div key={label} style={{ border: "1px solid #2a2a2a", borderRadius: "4px", padding: "2rem 1rem", background: "rgba(26,26,26,0.6)", backdropFilter: "blur(10px)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a96e" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "7rem 3rem", background: "#111" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1rem" }}>Client Love</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#f5f0eb" }}>What They <em>Say</em></h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div style={{ color: "#c9a96e", fontSize: "1rem", marginBottom: "1.2rem", letterSpacing: "0.2em" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontStyle: "italic", color: "rgba(245,240,235,0.7)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem", fontWeight: 300 }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ width: 30, height: 1, background: "#c9a96e", marginBottom: "1rem" }} />
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#c9a96e", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "7rem 3rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "1rem" }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#f5f0eb" }}>Book Your <em>Appointment</em></h2>
            <div className="divider" />
            <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(245,240,235,0.5)", lineHeight: 1.8, fontWeight: 300, fontSize: "0.9rem" }}>We would love to hear from you. Send us a message and we will get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="input-field" />
            <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="input-field" />
            <textarea rows={5} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="input-field" style={{ resize: "vertical" }} />
            <button type="submit" className="btn-gold" style={{ width: "100%", fontSize: "0.9rem", padding: "1rem" }}>Send Message</button>
            {status && <p style={{ textAlign: "center", color: "#c9a96e", fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", marginTop: "0.5rem" }}>{status}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080808", borderTop: "1px solid #1a1a1a", color: "white", padding: "3rem", textAlign: "center" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: 600, color: "#f5f0eb", letterSpacing: "0.05em" }}>Touch Of Joy</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginTop: "0.3rem" }}>Beauty Parlour</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="footer-link">{item}</a>
          ))}
        </div>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.78rem", color: "rgba(245,240,235,0.25)" }}>© 2025 Touch Of Joy. All rights reserved.</p>
      </footer>
    </main>
  );
}
