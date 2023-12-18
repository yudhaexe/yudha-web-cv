"use client";
import background_home from "@/components/assets/HomeBackground.jpg";
import React from "react";

export function Backdrop() {
  return (
    <div
      className="absolute inset-0 h-full bg-cover bg-no-repeat bg-center -z-10"
      style={{
        backgroundImage: `url('${background_home.src}')`,
        opacity: 0.2,
      }}
    />
  );
}
