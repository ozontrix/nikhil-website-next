"use client";

import { useState } from "react";

interface VideoSectionProps {
  onClick?: () => void;
  src: string;
}

export default function VideoSection({
  onClick,
  src
}: VideoSectionProps) {

  let string : string = src.toString()
  let link : string = "https://img.youtube.com/vi/"+src+"/maxresdefault.jpg";
console.log("hello: "+ link.toString())
  return (
    <>
      {/* Thumbnail Card */}
      <div className="video-thumbnail" onClick={onClick}>
        <img
          src={link}
          alt="Video Thumbnail"
        />

        <div className="play-button">
          ▶
        </div>
      </div>

      
    </>
  );
}