"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    { title: "Hair Styling", desc: "Cuts, coloring, smoothening, keratin & more", icon: "💇‍♀️", color: "#f9a8d4" },
    { title: "Skin Care", desc: "Facials, cleanup, bleach & glow treatments", icon: "✨", color: "#fbcfe8" },
    { title: "Bridal Makeup", desc: "Look stunning on your most special day", icon: "👰", color: "#f9a8d4" },
    { title: "Mehendi", desc: "Beautiful bridal & party mehendi designs", icon: "🌿", color: "#fbcfe8" },
    { title: "Nail Art", desc: "Creative nail designs & extensions", icon: "💅", color: "#f9a8d4" },
    { title: "Waxing & Threading", desc: "Smooth & clean skin care always", icon: "🌸", color: "#fbcfe8" },
  ];

  const testimonials = [
    { name: "Priya Sharma", text: "Absolutely loved my bridal makeup! The team made me look like a queen.", stars: 5 },
    { name: "Ananya Patel", text: "Best facial I've ever had. My skin glowed for weeks after!", stars: 5 },
    { name: "Ritu Mehta", text: "The nail art was so creative and long-lasting. Will definitely come back!", stars: 5 },
  ];

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#fff5f7", color: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .nav-link { text-decoration: none; color: white; font-family: 'Jost', sans-serif; font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; transition: opacity 0.2s; }
        .nav-link:hover { opacity: 0.7; }
        .nav-link-dark { text-decoration: none; color: #1a1a1a; font-family: 'Jost', sans-serif; font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; transition: opacity 0.2s; }
        .nav-link-dark:hover { opacity: 0.6; }
        .service-card { background: white; border-radius: 20px; padding: 2.5rem 2rem; text-align: center; box-shadow: 0 4px 30px rgba(236,72,153,0.08); transition: transform 0.3s, box-shadow 0.3s; cursor: default; }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px rgba(236,72,153,0.15); }
        .input-field { width: 100%; border: 1.5px solid #fbb6ce; border-radius: 12px; padding: 1rem 1.2rem; font-size: 1rem; font-family: 'Jost', sans-serif; background: white; outline: none; transition: border-color 0.3s; }
        .input-field:focus { border-color: #ec4899; }
        .btn-primary { background: linear-gradient(135deg, #ec4899, #be185d); color: white; border: none; border-radius: 50px; padding: 1rem 2.5rem; font-size: 1rem; font-family: 'Jost', sans-serif; letter-spacing: 0.1em; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(236,72,153,0.4); }
        .btn-outline { background: transparent; color: white; border: 2px solid white; border-radius: 50px; padding: 1rem 2.5rem; font-size: 1rem; font-family: 'Jost', sans-serif; letter-spacing: 0.1em; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block; }
        .btn-outline:hover { background: white; color: #be185d; }
        .stat-item { text-align: center; }
        .testimonial-card { background: white; border-radius: 20px; padding: 2rem; box-shadow: 0 4px 20px rgba(236,72,153,0.08); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeInUp 0.8s ease forwards; }
        .fade-in-delay { animation: fadeInUp 0.8s ease 0.2s forwards; opacity: 0; }
        .fade-in-delay-2 { animation: fadeInUp 0.8s ease 0.4s forwards; opacity: 0; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,245,247,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(236,72,153,0.1)" : "none",
        transition: "all 0.4s ease",
        padding: "1rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "linear-gradient(135deg, #ec4899, #be185d)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 700, fontSize: "1.1rem"
          }}>TJ</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: scrolled ? "#be185d" : "white", lineHeight: 1 }}>Touch Of Joy</div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: scrolled ? "#9d174d" : "rgba(255,255,255,0.8)", fontFamily: "'Jost', sans-serif", textTransform: "uppercase" }}>Beauty Parlour</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className={scrolled ? "nav-link-dark" : "nav-link"}>{item}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.85rem", textDecoration: "none", color: "white", borderRadius: "50px", background: "linear-gradient(135deg, #ec4899, #be185d)" }}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #831843 0%, #be185d 40%, #ec4899 70%, #f9a8d4 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "8rem 2rem 4rem", position: "relative", overflow: "hidden"
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "10%", width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 750, position: "relative", zIndex: 1 }}>
          <div className="fade-in" style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "50px", padding: "0.5rem 1.5rem", marginBottom: "1.5rem", fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "white" }}>
            ✨ Premium Beauty Experience ✨
          </div>
          <h1 className="fade-in" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "1.5rem", fontStyle: "italic" }}>
            Touch<br /><span style={{ fontWeight: 700, fontStyle: "normal" }}>Of Joy</span>
          </h1>
          <p className="fade-in-delay" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", marginBottom: "2.5rem", fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>
            Enhancing Beauty With Elegance & Care.<br />Where every visit leaves you glowing.
          </p>
          <div className="fade-in-delay-2" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary" style={{ textDecoration: "none", color: "white", background: "white", color: "#be185d", padding: "1rem 2.5rem" }}>✨ Book Appointment</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "4rem", padding: "2rem", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: "20px" }}>
            {[["5000+", "Happy Clients"], ["8+", "Years Experience"], ["15+", "Expert Stylists"], ["4.9★", "Google Rating"]].map(([num, label]) => (
              <div key={label} className="stat-item">
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "white" }}>{num}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", fontFamily: "'Jost', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "6rem 2rem", background: "#fff5f7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#ec4899", marginBottom: "1rem" }}>What We Offer</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#831843", fontStyle: "italic" }}>Our <span style={{ fontWeight: 700, fontStyle: "normal" }}>Services</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#9d174d", marginBottom: "0.75rem" }}>{service.title}</h3>
                <p style={{ color: "#6b7280", fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem 2rem", background: "linear-gradient(135deg, #831843, #be185d)", color: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>Our Story</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, marginBottom: "2rem", fontStyle: "italic" }}>Why Choose <span style={{ fontWeight: 700, fontStyle: "normal" }}>Touch Of Joy?</span></h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.85)", fontFamily: "'Jost', sans-serif", fontWeight: 300, maxWidth: 700, margin: "0 auto 3rem" }}>
            At Touch Of Joy, we believe every woman deserves to feel beautiful. With over 8 years of experience and a team of passionate beauty experts, we deliver premium services using the finest products. From bridal makeovers to everyday glow — we're here for every occasion.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {[["🌟", "Premium Products"], ["💆‍♀️", "Expert Therapists"], ["🕐", "Flexible Hours"], ["💕", "Personalized Care"]].map(([icon, label]) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", backdropFilter: "blur(10px)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "6rem 2rem", background: "#fff5f7" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#ec4899", marginBottom: "1rem" }}>Happy Clients</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#831843", fontStyle: "italic" }}>What They <span style={{ fontWeight: 700, fontStyle: "normal" }}>Say</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div style={{ color: "#ec4899", fontSize: "1.2rem", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontStyle: "italic", color: "#4b5563", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "1.05rem" }}>"{t.text}"</p>
                <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, color: "#9d174d", fontSize: "0.9rem" }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "6rem 2rem", background: "white" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#ec4899", marginBottom: "1rem" }}>Get In Touch</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#831843", fontStyle: "italic" }}>Book Your <span style={{ fontWeight: 700, fontStyle: "normal" }}>Appointment</span></h2>
            <p style={{ fontFamily: "'Jost', sans-serif", color: "#6b7280", marginTop: "1rem", lineHeight: 1.7 }}>We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="input-field" />
            <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="input-field" />
            <textarea rows={5} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="input-field" style={{ resize: "vertical" }} />
            <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: "1rem" }}>Send Message 💌</button>
            {status && <p style={{ textAlign: "center", color: "#be185d", fontFamily: "'Jost', sans-serif", fontSize: "1rem" }}>{status}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "linear-gradient(135deg, #831843, #9d174d)", color: "white", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Touch Of Joy</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Beauty Parlour</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {["Services", "About", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em" }}>{item}</a>
          ))}
        </div>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>© 2025 Touch Of Joy. All rights reserved. Made with 💕</p>
      </footer>
    </main>
  );
}
