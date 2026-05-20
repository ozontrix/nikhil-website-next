"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Film, Mail, Phone } from "lucide-react";
import "./advertisements.css";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const advertisements = [
    {
    title: "Oreo x Dhoni",
    category: "Brand Campaign",
    thumbnail:
      "https://img.youtube.com/vi/pa3UKc18A-U/maxresdefault.jpg",
    videoId: "pa3UKc18A-U",
    },
    {
    title: "Dettol",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/ZWPhM1hgeYs/maxresdefault.jpg",
    videoId: "ZWPhM1hgeYs",
   },
    {
    title: "Kia India",
    category: "Automobile Campaign",
    thumbnail:
      "https://img.youtube.com/vi/qc6-C3_478E/maxresdefault.jpg",
    videoId: "qc6-C3_478E",
  },
    {
    title: "Tata Mutual Funds",
    category: "Finance Campaign",
    thumbnail:
      "https://img.youtube.com/vi/JPwHPqyQNtU/maxresdefault.jpg",
    videoId: "JPwHPqyQNtU",
  },
  {
    title: "Tata SIP",
    category: "Financial Commercial",
    thumbnail:
      "https://img.youtube.com/vi/SbHru0ADztQ/maxresdefault.jpg",
    videoId: "SbHru0ADztQ",
  },
  {
    title: "Himalaya Ad",
    category: "Wellness Commercial",
    thumbnail:
      "https://img.youtube.com/vi/Dh14AplSrF4/maxresdefault.jpg",
    videoId: "Dh14AplSrF4",
  },

  {
    title: "Himalaya Toothpaste",
    category: "Product Commercial",
    thumbnail:
      "https://img.youtube.com/vi/n2ZFYaB5fgs/maxresdefault.jpg",
    videoId: "n2ZFYaB5fgs",
  },
  {
    title: "NCDEX",
    category: "Corporate Campaign",
    thumbnail:
      "https://img.youtube.com/vi/YLC-w8gXHpY/maxresdefault.jpg",
    videoId: "YLC-w8gXHpY",
  },
  {
    title: "Extra-marks",
    category: "Education Campaign",
    thumbnail:
      "https://img.youtube.com/vi/izQc_ORJJRA/maxresdefault.jpg",
    videoId: "izQc_ORJJRA",
  },
  {
    title: "Highlander",
    category: "Fashion Commercial",
    thumbnail:
      "https://img.youtube.com/vi/15sNYfkcNS8/maxresdefault.jpg",
    videoId: "15sNYfkcNS8",
  },
  {
    title: "Spaces Mattress",
    category: "Lifestyle Commercial",
    thumbnail:
      "https://img.youtube.com/vi/C0KX1BeETqw/maxresdefault.jpg",
    videoId: "C0KX1BeETqw",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Work", href: "/work" },
  { label: "Advertisements", href: "/advertisements" },
  { label: "Contact", href: "/contact" },
];

export default function AdvertisementsPage() {
  const [activeVideo, setActiveVideo] =
    useState<string | null>(null);

  const cursorRef =
    useRef<HTMLDivElement>(null);

  const cursorDotRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (
      e: MouseEvent
    ) => {
      if (
        cursorRef.current &&
        cursorDotRef.current
      ) {
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;

        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <>
      <main className="ads-page">
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
        <section className="ads-hero">
          <p className="hero-subtitle">
            FEATURED ADVERTISEMENTS
          </p>

          <h1>
            Premium brands.
            <br />
            <span>Memorable campaigns.</span>
          </h1>

          <p className="hero-description">
            A collection of cinematic
            commercials and branded
            storytelling campaigns featuring
            emotionally grounded
            performances.
          </p>
        </section>

        {/* GRID */}
        <section className="video-grid">
          {advertisements.map(
            (video, index) => (
              <div
                key={index}
                className="video-card"
                onClick={() =>
                  setActiveVideo(
                    video.videoId
                  )
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
            )
          )}
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
            <span className="logo-first">
              NIKHIL
            </span>

            <span className="logo-last">
              VERMA
            </span>
          </div>

          <div className="footer__links">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="footer__link"
              >
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
            © {new Date().getFullYear()} Nikhil
            Verma. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}