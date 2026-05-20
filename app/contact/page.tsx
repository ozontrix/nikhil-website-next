// app/contact/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import {Camera, Film, Mail, Phone } from "lucide-react";
import "./contact.css";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

export default function ContactPage() {
     const [activeVideo, setActiveVideo] = useState<string | null>(null);
          const [scrolled, setScrolled] = useState(false);
            const cursorRef = useRef<HTMLDivElement>(null);
            const cursorDotRef = useRef<HTMLDivElement>(null);
              const [menuOpen, setMenuOpen] = useState(false);
        
              useEffect(() => {
              
                  const handleScroll = () => setScrolled(window.scrollY > 60);
                  window.addEventListener("scroll", handleScroll);
              
                  const moveCursor = (e: MouseEvent) => {
                    if (cursorRef.current && cursorDotRef.current) {
                      cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
                      cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
                    }
                  };
                  window.addEventListener("mousemove", moveCursor);
              
                  return () => {
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("mousemove", moveCursor);
                  };
                }, []);
  const [open, setOpen] = useState(false);

   const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setSuccess(
          "Message sent successfully."
        );

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(
          data.message ||
            "Something went wrong."
        );
      }
    } catch (err) {
      setError(
        "Failed to send message."
      );
    }

    setLoading(false);
  };

  return (
    <>
    <main className="contact-page">
                  {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />

      {/* NAV */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <span className="logo-first">NIKHIL</span>
            <span className="logo-last">VERMA</span>
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="navbar__link">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="navbar__cta">
                Book Now
              </Link>
            </li>
          </ul>

          <button
            className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mobile-menu__cta"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </nav>
      {/* HERO */}

      <section className="contact-hero">
        <p className="contact-subtitle">
          CONTACT
        </p>

        <h1>
          Let’s create something
          <span> unforgettable.</span>
        </h1>

        <p className="contact-description">
          For films, campaigns,
          collaborations, theatre,
          and creative partnerships.
        </p>
      </section>

      <section className="contact-wrapper">
        {/* LEFT */}

        <div className="contact-info">
          <div className="info-block">
            <p>Location</p>
            <h3>Mumbai, India</h3>
          </div>

          <div className="info-block">
            <p>Phone</p>

            <a href="tel:+918283810109">
              +91 82838 10109
            </a>
          </div>

          <div className="info-block">
            <p>Email</p>

            <a href="mailto:actornikhilverma@gmail.com">
              actornikhilverma@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="contact-form-card">
          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="input-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              {loading
                ? "Sending..."
                : "Send Inquiry"}
            </button>

            {success && (
              <p className="success-message">
                {success}
              </p>
            )}

            {error && (
              <p className="error-message">
                {error}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* POPUP MODAL */}

      {open && (
        <div
          className="contact-modal"
          onClick={() => setOpen(false)}
        >
          <div
            className="contact-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <p className="modal-subtitle">
              CONTACT FORM
            </p>

            <h2>
              Let’s bring the story
              to life.
            </h2>

            <form className="modal-form">
              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
              />

              <button type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
      
    </main>
    {/* FOOTER */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__logo">
            <span className="logo-first">NIKHIL</span>
            <span className="logo-last">VERMA</span>
          </div>
          <div className="footer__links">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="footer__link">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer__socials">
            <a
              href="https://instagram.com/nikhilverma19"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Instagram"
            >
              <Camera size={18} />
            </a>

            <a
              href="https://m.imdb.com/name/nm12756017/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="IMDb"
            >
              <Film size={18} />
            </a>

            <a
              href="mailto:actornikhilverma@gmail.com"
              className="footer__social"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href="tel:+91828310109"
              className="footer__social"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Nikhil Verma. All rights reserved.
          </p>
        </div>
      </footer>
      </>
  );
}