"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function ProductsDropdown() {
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
    }, 250); // 250ms delay before closing
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
    }, 250); // 250ms delay before closing
  };

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
      <button
        className="text-white/90 hover:text-white transition-colors"
        style={{ cursor: "pointer" }}
      >
        Products
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-48 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-2 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <Link
            href="/touch-table"
            className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
          >
            Touch Table
          </Link>
          <Link
            href="/support-tech"
            className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
          >
            Support Tech
          </Link>
        </div>
      )}
    </div>
  );
}
