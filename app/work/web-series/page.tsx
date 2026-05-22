// app/web-series/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import "./web-series.css";
import Navbar from "../../components/Navbar";

const seriesVideos = [
  {
    title: "Staff Room - Kunal (Primary)",
    platform: "Amazon Minitv",
    Staring: "Kunal",
    year: "2023",
    thumbnail:
      "https://img.youtube.com/vi/FvVOkFQrrRk/maxresdefault.jpg",
    videoId: "FvVOkFQrrRk",
  },
    {
    title: "Before We Actually Met - Sahil (Lead)",
    platform: "Youtube",
    Staring: "Kunal",
    year: "2024",
    thumbnail:
      "https://img.youtube.com/vi/V6IQG8xLHsc/maxresdefault.jpg",
    videoId: "V6IQG8xLHsc",
  },

];

export default function WebSeriesPage() {
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
    <main className="series-page">
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

      <section className="series-hero">
        <p className="series-subtitle">
          WEB SERIES
        </p>

        <h1>
          Stories crafted for the
          <span> streaming era.</span>
        </h1>

        <p className="series-description">
          Character-driven performances
          across modern cinematic universes,
          emotional storytelling, and digital-first narratives.
        </p>
      </section>

      {/* GRID */}

      <section className="series-grid">
        {seriesVideos.map((video, index) => (
          <div
            key={index}
            className="series-card"
            onClick={() =>
              setActiveVideo(video.videoId)
            }
          >
            <div className="series-image-wrapper">
              <img
                src={video.thumbnail}
                alt={video.title}
              />

              <div className="series-overlay" />

              <div className="series-play">
                ▶
              </div>
            </div>

            <div className="series-info">
              <div className="series-meta">
                <span>{video.platform}</span>
                <span>•</span>
                <span>{video.year}</span>
              </div>

              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* VIDEO MODAL */}

      {activeVideo && (
        <div
          className="series-modal"
          onClick={() =>
            setActiveVideo(null)
          }
        >
          <div
            className="series-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="series-close"
              onClick={() =>
                setActiveVideo(null)
              }
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Web Series Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}