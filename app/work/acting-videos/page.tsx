// app/acting-videos/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import "./acting-videos.css";
import Navbar from "../../components/Navbar";

const actingVideos = [
  {
    title: "Acting Reel",
    type: "Drama",
    duration: "01:35",
    thumbnail:
      "https://img.youtube.com/vi/c480Rsn2iac/maxresdefault.jpg",
    videoId: "c480Rsn2iac",
  },

];

export default function ActingVideosPage() {
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
    <main className="acting-page">
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
      <Navbar />

      {/* HERO */}

      <section className="acting-hero">
        <p className="acting-subtitle">
          ACTING REELS
        </p>

        <h1>
          Raw emotion.
          <span> Honest performances.</span>
        </h1>

        <p className="acting-description">
          A curated collection of acting scenes,
          dramatic moments, cinematic performances,
          and emotionally driven storytelling.
        </p>
      </section>

      {/* GRID */}

      <section className="acting-grid">
        {actingVideos.map((video, index) => (
          <div
            key={index}
            className="acting-card"
            onClick={() =>
              setActiveVideo(video.videoId)
            }
          >
            <div className="acting-image-wrapper">
              <img
                src={video.thumbnail}
                alt={video.title}
              />

              <div className="acting-overlay" />

              <div className="acting-play">
                ▶
              </div>
            </div>

            <div className="acting-info">
              <div className="acting-meta">
                <span>{video.type}</span>
                <span>•</span>
                <span>{video.duration}</span>
              </div>

              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}

      {activeVideo && (
        <div
          className="acting-modal"
          onClick={() =>
            setActiveVideo(null)
          }
        >
          <div
            className="acting-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="acting-close"
              onClick={() =>
                setActiveVideo(null)
              }
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Acting Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}