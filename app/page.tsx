"use client";
import {Camera, Film, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "./components/ThumbnailCard";
import Navbar from "./components/Navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setHeroLoaded(true);

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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  const featuredWork = [
    { title: "Oreo X Dhoni", category: "ads", year: "2025", tag: "Cover", src:"pa3UKc18A-U" },
    { title: "Dettol", category: "india", year: "2024", tag: "Cover", src:"ZWPhM1hgeYs" },
    { title: "Tata mutual Funds", category: "ADS", year: "2024", tag: "side Role", src: "JPwHPqyQNtU" },
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />

      {/* NAV */}
     <Navbar></Navbar>

      <main>
     {/* HERO */}
<section className={`hero ${heroLoaded ? "hero--loaded" : ""}`}>
  {/* Background Image */}
  <div className="hero__bg">
    <Image
      src="/heronew.JPG"
      alt="Nikhil Verma"
      fill
      priority
      className="hero__bg-image"
    />
  </div>

  {/* Dark Overlay */}
  <div className="hero__overlay" />

  {/* Decorative Orbs */}
  <div className="hero__orb hero__orb--1" aria-hidden="true" />
  <div className="hero__orb hero__orb--2" aria-hidden="true" />
  <div className="hero__orb hero__orb--3" aria-hidden="true" />

  {/* Glitter */}
  <div className="glitter-field" aria-hidden="true">
    {Array.from({ length: 30 }).map((_, i) => (
      <span
        key={i}
        className="glitter"
        style={{
          left: `${(i * 37 + 11) % 100}%`,
          top: `${(i * 53 + 7) % 100}%`,
          animationDelay: `${(i * 0.3) % 4}s`,
          animationDuration: `${2 + (i % 3)}s`,
        }}
      />
    ))}
  </div>

  {/* Content */}
  <div className="hero__content">
    <p className="hero__eyebrow">Model · Actor · Icon</p>

    <h1 className="hero__name">
      <span className="hero__name-first">NIKHIL</span>
      <span className="hero__name-last">VERMA</span>
    </h1>

    <p className="hero__tagline">
      Where discipline <br />
      <em>transforms into performance.</em>
    </p>

    <div className="hero__actions">
      <Link href="/gallery" className="btn btn--gold">
        View Portfolio
      </Link>

      <Link href="/contact" className="btn btn--ghost">
        Get in Touch
      </Link>
    </div>
  </div>

  {/* Scroll Hint */}
  <div className="hero__scroll-hint" aria-hidden="true">
    <span>Scroll</span>
    <div className="scroll-line" />
  </div>
</section>

        {/* ABOUT */}
        <section className="about section">
          <div className="section__label">
            <span className="gold-line" />
            About
          </div>
          <div className="about__grid">
            <div className="about__visual">
              <div className="about__image-wrap">
               <div className="portrait">
  <img src="/about.JPG" alt="Nikhil Verma" />
</div>
                <div className="about__accent-box" aria-hidden="true" />
              </div>
              <div className="about__quote">
                <blockquote>
                  &ldquo;This universe in me and me in this universe.&rdquo;
                </blockquote>
                <cite>— Nikhil Verma</cite>
              </div>
            </div>
            <div className="about__text">
              <h2 className="about__heading">Bio</h2>
              <p>
                Nikhil Verma is an actor with deep roots in theatre and a
                steadily growing presence on screen. Originally trained as a
                civil engineer, Nikhil chose storytelling over structures and
                dedicated over 12 years to honing his craft on stage. He studied
                Method Acting for two years at the Lee Strasberg Theatre & Film
                Institute in New York, and has performed in Off-Broadway
                productions as well as theatre circuits across Ludhiana,
                Chandigarh, and Mumbai.
              </p>
              <p>
                On screen, Nikhil gained recognition for playing Kunal in the
                series Staffroom, streaming on Amazon miniTV and MX Player. He
                also portrayed Sahil in the YouTube series Before We Actually
                Met, which crossed one million views. His screen work further
                includes lead performances in multiple award-winning short films
                released across various platforms, along with appearances in
                television commercials and digital campaigns for several brands.
                Beyond acting, Nikhil enjoys swimming, singing, dancing,
                trekking, and horse riding. He is fluent in English, Hindi,
                Punjabi, and French.
              </p>
              <div className="about__highlights">
                <div className="highlight">
                  <span className="highlight__icon">✦</span>
                  <div>
                    <strong>Based in</strong>
                    <p>Mumbai</p>
                  </div>
                </div>
                <div className="highlight">
                  <span className="highlight__icon">✦</span>
                  <div>
                    <strong>Languages</strong>
                    <p>English · Hindi · Punjabi </p>
                  </div>
                </div>
              </div>
              <Link href="/gallery" className="btn btn--gold about__cta">
                See Full Portfolio →
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="work section section--dark">
          <div className="section__label section__label--light">
            <span className="gold-line" />
            Featured Work
          </div>
          <h2 className="work__heading">
            A legacy of <em>iconic</em> collaborations.
          </h2>
          <div className="work__grid">
            {featuredWork.map((item, i) => (
              <div
                key={item.title}
                className="work-card"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="work-card__img-wrap">
                 <VideoSection src={item.src} onClick={()=>{setOpen(true)}}></VideoSection>
                  {/* <span className="work-card__tag">{item.tag}</span> */}
                </div>
                <div className="work-card__body">
                  <p className="work-card__category">
                    {item.category} · {item.year}
                  </p>
                  <h3 className="work-card__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="work__more">
            <Link href="/work/advertisements" className="btn btn--ghost-light">
              View All Ads →
            </Link>
          </div>
        </section>

        {/* PRESS STRIP */}
        <section className="press section">
          <div className="section__label">
            <span className="gold-line" />
            As Seen In
          </div>
          <div className="press__marquee-wrap">
            <div className="press__marquee">
              {[
                "Amazon miniTV",
                "MX Player",
                "Staffroom",
                "Before We Actually Met",
                "Strings",
                "Dissonance",
                "Kia India",
                "Oreo x MS Dhoni",
                "Tata Mutual Fund",
                "Fi Money",
                "Himalaya Wellness",
                "Amazon miniTV",
                "MX Player",
                "Staffroom",
                "Before We Actually Met",
                "Strings",
                "Dissonance",
                "Kia India",
                "Oreo x MS Dhoni",
                "Tata Mutual Fund",
                "Fi Money",
                "Himalaya Wellness",
                "InStyle",
              ].map((pub, i) => (
                <span key={i} className="press__pub">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {/* <section className="testimonials section">
          <div className="section__label">
            <span className="gold-line" />
            Testimonials
          </div>
          <div className="testimonials__grid">
            {[
              {
                text: "Nikhil brings a rare vulnerability and magnetism. The camera simply adores her.",
                name: "Jean-Luc Moreau",
                role: "Creative Director, Dior",
              },
              {
                text: "Working with Nikhil was transformative. She elevated every scene beyond what was written.",
                name: "Priya Kapoor",
                role: "Director, Cannes 2023",
              },
              {
                text: "Her professionalism and artistry are unparalleled. She is, without doubt, a generational talent.",
                name: "Marcus Webb",
                role: "VP, L'Oréal Global",
              },
            ].map((t) => (
              <div key={t.name} className="testimonial-card">
                <span className="testimonial-card__mark">"</span>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* CONTACT CTA */}
        <section className="cta section section--dark">
          <div className="cta__orb cta__orb--1" aria-hidden="true" />
          <div className="cta__orb cta__orb--2" aria-hidden="true" />
          <div className="cta__inner">
            <p className="cta__eyebrow">Let's Create Together</p>
            <h2 className="cta__heading">
              Ready to make
              <br />
              <em>something unforgettable?</em>
            </h2>
            <p className="cta__sub">
              Available for editorial, campaigns, films & brand partnerships.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--gold">
                Start a Conversation
              </Link>
              <a
                href="mailto:actornikhilverma@gmail.com"
                className="btn btn--ghost-light"
              >
                actornikhilverma@gmail.com
              </a>
            </div>
          </div>
        </section>
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
            © {new Date().getFullYear()} Nikhil Verma. All rights reserved. Designed By <a href="https://ozontrix.com">Ozontrix</a>
          </p>
        </div>
      </footer>
      {/* Popup Modal */}
      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <iframe
              src="https://www.youtube.com/embed/NBxOFEIz-zQ?autoplay=1"
              title="Nikhil Verma"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
