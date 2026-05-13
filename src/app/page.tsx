"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

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

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-pink-50 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-bold text-pink-700 mb-4">Welcome to Touch Of Joy</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-xl">
          Where beauty meets elegance. Look good, feel great — every single day.
        </p>
        <a href="#contact" className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-700">
          Book Now
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 bg-white text-center">
        <h3 className="text-3xl font-bold text-pink-700 mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Hair Styling", desc: "Cuts, coloring, smoothening & more", icon: "💇‍♀️" },
            { title: "Skin Care", desc: "Facials, cleanup, bleach & glow treatments", icon: "✨" },
            { title: "Bridal Makeup", desc: "Look stunning on your special day", icon: "👰" },
            { title: "Mehendi", desc: "Beautiful bridal & party mehendi designs", icon: "🌿" },
            { title: "Nail Art", desc: "Creative nail designs & extensions", icon: "💅" },
            { title: "Waxing & Threading", desc: "Smooth & clean skin care", icon: "🌸" },
          ].map((service) => (
            <div key={service.title} className="bg-pink-50 rounded-2xl p-6 shadow hover:shadow-md">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h4 className="text-xl font-semibold text-pink-700">{service.title}</h4>
              <p className="text-gray-500 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-pink-50 text-center">
        <h3 className="text-3xl font-bold text-pink-700 mb-10">Contact Us</h3>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border border-pink-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="border border-pink-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="border border-pink-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button type="submit" className="bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 font-semibold">
            Send Message
          </button>
          {status && <p className="text-pink-700 font-medium">{status}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-6">
        <p>© 2025 Touch Of Joy. All rights reserved.</p>
      </footer>
    </main>
  );
}