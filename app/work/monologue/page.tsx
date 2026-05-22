"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Film, Mail, Phone } from "lucide-react";
import "./monologues.css";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { FaImdb, FaInstagram } from "react-icons/fa";

const monologues = [
  {
    title: "Hamlet",
    category: "Shakespeare Monologue",
    thumbnail:
      "https://img.youtube.com/vi/A-aC8ALImM0/maxresdefault.jpg",
    videoId: "A-aC8ALImM0",
  },
  {
    title: "Adam from ‘The Shape of Things’",
    category: "Theatre Monologue",
    thumbnail:
      "https://img.youtube.com/vi/siqFJY6f2hA/maxresdefault.jpg",
    videoId: "siqFJY6f2hA",
  },
  {
    title: "Shylock from ‘Merchant of Venice’",
    category: "Classical Monologue",
    thumbnail:
      "https://img.youtube.com/vi/ONdOcckFUW8/maxresdefault.jpg",
    videoId: "ONdOcckFUW8",
  },
  {
    title: "Biff from ‘Death of a Salesman’",
    category: "Drama Monologue",
    thumbnail:
      "https://img.youtube.com/vi/01xlMj7-8AA/maxresdefault.jpg",
    videoId: "01xlMj7-8AA",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Work", href: "/work" },
  { label: "Monologues", href: "/monologues" },
  { label: "Contact", href: "/contact" },
];

export default function MonologuePage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <main className="monologues-page">
        {/* CURSOR */}
        <div
          ref={cursorRef}
          className="cursor-ring"
          aria-hidden="true"
        />
        <div
          ref={cursorDotRef}
          className="cursor-dot"
          aria-hidden="true"
        />

        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <section className="monologues-hero">
          <p className="hero-subtitle">
            PERFORMANCE MONOLOGUES
          </p>

          <h1>
            Raw emotion.
            <br />
            <span>Pure performance.</span>
          </h1>

          <p className="hero-description">
            A curated collection of theatre-rooted
            monologues exploring vulnerability,
            intensity, conflict, and human emotion.
          </p>
        </section>

        {/* GRID */}
        <section className="video-grid">
          {monologues.map((video, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() =>
                setActiveVideo(video.videoId)
              }
            >
              <div className="video-image-wrapper">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                />

                <div className="video-overlay" />

                <div className="play-button">
                  ▶
                </div>
              </div>

              <div className="video-info">
                <p>{video.category}</p>
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* MODAL */}
        {activeVideo && (
          <div
            className="video-modal"
            onClick={() =>
              setActiveVideo(null)
            }
          >
            <div
              className="video-modal-content"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <button
                className="close-btn"
                onClick={() =>
                  setActiveVideo(null)
                }
              >
                ✕
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
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
              <FaInstagram size={18} />
            </a>

            <a
              href="https://m.imdb.com/name/nm12756017/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="IMDb"
            >
              <FaImdb size={18} />
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
            Designed By <a href="https://ozontrix.com">Ozontrix</a>
          </p>
        </div>
      </footer>
    </>
  );
}