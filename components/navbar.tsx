"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeaturesDropdown } from "@/components/features-dropdown";
import { CareDropdown } from "@/components/care-dropdown";
import { ProductsDropdown } from "@/components/products-dropdown";
import { ManageDropdown } from "@/components/manage-dropdown";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8">
      <Link href="/" className="flex items-center cursor-pointer group">
        <Image
          src="/images/reme-logo.png"
          alt="ReMe Logo"
          width={40}
          height={40}
          className="mr-3 group-hover:opacity-90 transition-opacity"
        />
        <span className="text-white font-semibold text-lg dm-sans-heading group-hover:underline">
          RemindMecare
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="text-white/90 hover:text-white transition-colors"
        >
          Overview
        </Link>
        <FeaturesDropdown />
        <CareDropdown />
        <ProductsDropdown />
        <Link
          href="/resources"
          className="text-white/90 hover:text-white transition-colors"
        >
          Resources
        </Link>
        <a
          href="#"
          className="text-white/90 hover:text-white transition-colors"
        >
          Buy
        </a>
        <ManageDropdown />
      </div>
    </nav>
  );
}
