"use client"

import { useState } from "react"
import Link from "next/link"

export function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-white/90 hover:text-white transition-colors">Products</button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 py-2 z-50">
          <Link href="/touch-table" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
            Touch Table
          </Link>
          <Link href="/support-tech" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
            Support Tech
          </Link>
        </div>
      )}
    </div>
  )
}
