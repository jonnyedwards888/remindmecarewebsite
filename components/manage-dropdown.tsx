"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ManageDropdown() {
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
    }, 200); // 200ms delay before closing
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
    }, 200); // 200ms delay before closing
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
      <Button
        variant="outline"
        className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
      >
        Manage
      </Button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-2 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button
            onClick={() =>
              window.open("https://reme.care/users/login", "_blank")
            }
            className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors"
          >
            Login to ReMe
          </button>
          <a
            href="https://remelife.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
          >
            RemeLife
          </a>
        </div>
      )}
    </div>
  );
}
