"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function FeaturesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringDropdown) {
        setIsOpen(false);
      }
    }, 150); // 150ms delay before closing
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white/90 hover:text-white transition-colors flex items-center gap-1">
        Features
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-2 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <Link
            href="/person-centred-care"
            className="block px-4 py-3 text-white hover:bg-white/10 transition-colors rounded mx-2"
          >
            Person-Centred Care
          </Link>
          <Link
            href="/activity-library"
            className="block px-4 py-3 text-white hover:bg-white/10 transition-colors rounded mx-2"
          >
            Activities
          </Link>
          <Link
            href="/care-circle-and-rooms-video"
            className="block px-4 py-3 text-white hover:bg-white/10 transition-colors rounded mx-2"
          >
            Care Circle & Rooms Video
          </Link>
          <Link
            href="/sensory-games-rapp"
            className="block px-4 py-3 text-white hover:bg-white/10 transition-colors rounded mx-2"
          >
            Sensory Games (RAPP)
          </Link>
          <Link
            href="/business-tools-roi"
            className="block px-4 py-3 text-white hover:bg-white/10 transition-colors rounded mx-2"
          >
            Business Tools (ROI)
          </Link>
        </div>
      )}
    </div>
  );
}
