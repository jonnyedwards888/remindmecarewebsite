"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ManageDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
        Manage
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-2 z-50">
          <button
            onClick={() => window.open("https://reme.care/users/login", "_blank")}
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
  )
}
