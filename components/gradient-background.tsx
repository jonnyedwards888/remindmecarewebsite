"use client";

import { useEffect, useState } from "react";

export function GradientBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic gradient background that changes on scroll */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(${
            45 + scrollY * 0.02
          }deg, #1a0536 0%, rgb(83, 0, 39) 48%, #1a0536 100%)`,
        }}
      ></div>

      {/* Additional dynamic gradient overlay with scroll-based positioning */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `linear-gradient(${
            135 + scrollY * 0.01
          }deg, rgba(26, 5, 54, 0.3) 0%, rgba(83, 0, 39, 0.4) 30%, rgba(147, 51, 234, 0.2) 60%, rgba(26, 5, 54, 0.3) 100%)`,
        }}
      ></div>

      {/* Animated gradient orbs with scroll-based movement */}
      <div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/15 to-purple-700/20 rounded-full blur-3xl animate-pulse transition-all duration-1000"
        style={{
          transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px)`,
          opacity: 0.8 + scrollY * 0.0002,
        }}
      ></div>
      <div
        className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-purple-600/12 to-red-700/18 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000"
        style={{
          transform: `translate(${scrollY * -0.04}px, ${scrollY * 0.06}px)`,
          opacity: 0.7 + scrollY * 0.0001,
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-700/8 via-purple-600/12 to-red-600/15 rounded-full blur-3xl animate-pulse delay-500 transition-all duration-1000"
        style={{
          transform: `translate(-50%, -50%) translate(${scrollY * 0.02}px, ${
            scrollY * 0.04
          }px)`,
          opacity: 0.6 + scrollY * 0.0003,
        }}
      ></div>

      {/* Additional floating gradient elements for more dynamic movement */}
      <div
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-red-600/12 rounded-full blur-2xl animate-pulse delay-300 transition-all duration-1000"
        style={{
          transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.05}px)`,
          opacity: 0.5 + scrollY * 0.0002,
        }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-600/8 to-purple-700/10 rounded-full blur-2xl animate-pulse delay-700 transition-all duration-1000"
        style={{
          transform: `translate(${scrollY * 0.04}px, ${scrollY * -0.02}px)`,
          opacity: 0.4 + scrollY * 0.0001,
        }}
      ></div>
    </>
  );
}
