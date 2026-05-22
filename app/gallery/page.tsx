// app/gallery/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import {Camera, Film, Mail, Phone } from "lucide-react";
import "./gallery.css";
import Link from "next/link";
import Navbar from "../components/Navbar";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

const galleryImages = [
  {
    src: "/gallery/6.JPG",
    title: "",
    location: "",
  },
  {
    src: "/gallery/1.JPG",
    title: "",
    location: "",
  },
  {
    src: "/gallery/2.JPG",
    title: "",
    location: "",
  },
  {
    src: "/gallery/3.JPG",
    title: "",
    location: "",
  },
  {
    src: "/gallery/4.JPG",
    title: "",
    location: "",
  },
  {
    src: "/gallery/5.JPG",
    title: "",
    location: "",
  },
  {
    src: "/gallery/7.JPG",
    title: "",
    location: "",
  },
    {
    src: "/gallery/8.JPG",
    title: "",
    location: "",
  },
    {
    src: "/gallery/9.JPG",
    title: "",
    location: "",
  },
    {
    src: "/gallery/10.JPG",
    title: "",
    location: "",
  },
];

export default function GalleryPage() {
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
  return (
    <>
    <main className="gallery-page">
              {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />

      {/* NAV */}
           <Navbar></Navbar>
      {/* HERO */}

      <section className="gallery-hero">
        <p className="gallery-subtitle">
          GALLERY
        </p>

        <h1>
          Portraits shaped by
          <span> stillness</span>,
          theatre, and cinema.
        </h1>

        <p className="gallery-description">
          A curated collection of frames,
          editorial portraits, rehearsal
          moments, and cinematic studies.
        </p>
      </section>

      {/* MASONRY GRID */}

      <section className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`gallery-card ${
              index % 3 === 0
                ? "large"
                : ""
            }`}
          >
            <div className="gallery-image-wrapper">
              <img
                src={image.src}
                alt={image.title}
              />

              <div className="gallery-overlay">
                <div className="gallery-info">
                  <p>{image.location}</p>
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
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
            © {new Date().getFullYear()} Nikhil Verma. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}