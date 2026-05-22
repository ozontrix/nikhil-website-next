// app/work/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import {Camera, Film, Mail, Phone } from "lucide-react";
import "./work.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaImdb, FaInstagram } from "react-icons/fa";

const videos = [
  {
    title: "Acting Reel",
    category: "Showreel",
    thumbnail:
      "https://img.youtube.com/vi/c480Rsn2iac/maxresdefault.jpg",
    videoId: "c480Rsn2iac",
  },
  {
    title: "Kia India",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/qc6-C3_478E/maxresdefault.jpg",
    videoId: "qc6-C3_478E",
  },
  {
    title: "Oreo x Dhoni",
    category: "Campaign",
    thumbnail:
      "https://img.youtube.com/vi/pa3UKc18A-U/maxresdefault.jpg",
    videoId: "pa3UKc18A-U",
  },
  {
    title: "Strings",
    category: "Short Film",
    thumbnail:
      "https://img.youtube.com/vi/5Cx_r7su1Ec/maxresdefault.jpg",
    videoId: "5Cx_r7su1Ec",
  },
  {
    title: "Dettol",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/ZWPhM1hgeYs/maxresdefault.jpg",
    videoId: "ZWPhM1hgeYs",
  },
  {
    title: "Hamlet",
    category: "Monologue",
    thumbnail:
      "https://img.youtube.com/vi/A-aC8ALImM0/maxresdefault.jpg",
    videoId: "A-aC8ALImM0",
  },
    {
    title: "Dissonance",
    category: "Short Film",
    thumbnail:
      "https://img.youtube.com/vi/sCK-1Mn8QYU/maxresdefault.jpg",
    videoId: "sCK-1Mn8QYU",
  },
  //   {
  //   title: "Oreo X Dhoni 2022",
  //   category: "Commercial",
  //   thumbnail:
  //     "https://img.youtube.com/vi/0tvfNnUHFYA/maxresdefault.jpg",
  //   videoId: "0tvfNnUHFYA",
  // },
    {
    title: "Himalaya ad",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/Dh14AplSrF4/maxresdefault.jpg",
    videoId: "Dh14AplSrF4",
  },
    {
    title: "Tata mutual funds",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/JPwHPqyQNtU/maxresdefault.jpg",
    videoId: "JPwHPqyQNtU",
  },
    {
    title: "Tata SIP",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/SbHru0ADztQ/maxresdefault.jpg",
    videoId: "SbHru0ADztQ",
  },
  //   {
  //   title: "Sundrop popz",
  //   category: "Commercial",
  //   thumbnail:
  //     "https://img.youtube.com/vi/a8SlpdJ6Sn4/maxresdefault.jpg",
  //   videoId: "a8SlpdJ6Sn4",
  // },
    {
    title: "Himalaya toothpaste ad",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/n2ZFYaB5fgs/maxresdefault.jpg",
    videoId: "n2ZFYaB5fgs",
  },
    {
    title: "NCDEX",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/YLC-w8gXHpY/maxresdefault.jpg",
    videoId: "YLC-w8gXHpY",
  },
    {
    title: "Extra-marks",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/izQc_ORJJRA/maxresdefault.jpg",
    videoId: "izQc_ORJJRA",
  },
    {
    title: "Highlander",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/15sNYfkcNS8/maxresdefault.jpg",
    videoId: "15sNYfkcNS8",
  },
  //   {
  //   title: "Crysta IVF",
  //   category: "Commercial",
  //   thumbnail:
  //     "https://img.youtube.com/vi/sHWwHsfmJqM/maxresdefault.jpg",
  //   videoId: "sHWwHsfmJqM",
  // },
    {
    title: "Spaces mattress",
    category: "Commercial",
    thumbnail:
      "https://img.youtube.com/vi/C0KX1BeETqw/maxresdefault.jpg",
    videoId: "C0KX1BeETqw",
  },
  {
    title: "Adam from ‘The shape of things’",
    category: "Monologue",
    thumbnail:
      "https://img.youtube.com/vi/siqFJY6f2hA/maxresdefault.jpg",
    videoId: "siqFJY6f2hA",
  },
    {
    title: "Shylock from ‘Merchant of Venice’",
    category: "Monologue",
    thumbnail:
      "https://img.youtube.com/vi/ONdOcckFUW8/maxresdefault.jpg",
    videoId: "ONdOcckFUW8",
  },
    {
    title: "Biff from ‘The death of a salesman’",
    category: "Monologue",
    thumbnail:
      "https://img.youtube.com/vi/01xlMj7-8AA/maxresdefault.jpg",
    videoId: "01xlMj7-8AA",
  },
  
];

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

export default function WorkPage() {
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

        useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  return (
    <>
    <main className="work-page">
        {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />

      {/* NAV */}
           <Navbar></Navbar>
      {/* HERO */}

      <section className="work-hero">
        <p className="hero-subtitle">
          SELECTED WORK
        </p>

        <h1>
          A legacy of <span>performances</span>,
          campaigns, and stories.
        </h1>

        <p className="hero-description">
          From theatre-rooted performances to
          cinematic commercials and emotionally
          driven storytelling.
        </p>
      </section>

      {/* GRID */}

      <section className="video-grid">
        {videos.map((video, index) => (
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