"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeaturesDropdown } from "./components/features-dropdown";
import { CareDropdown } from "./components/care-dropdown";
import { ActivitiesSection } from "./components/activities-section";
import Image from "next/image";
import { Footer } from "./components/footer";
import { VideoSection } from "./components/video-section";
import { ProductsDropdown } from "./components/products-dropdown";
import { ManageDropdown } from "./components/manage-dropdown";
import { useEffect, useState } from "react";

export default function Component() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center">
            <Image
              src="/images/reme-logo.png"
              alt="ReMe Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-white font-semibold text-lg dm-sans-heading">
              RemindMecare
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors"
            >
              Overview
            </a>
            <FeaturesDropdown />
            <CareDropdown />
            <ProductsDropdown />
            <Link
              href="/resources"
              className="text-white/90 hover:text-white transition-colors"
            >
              Resource
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

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-6 lg:px-12 text-center lg:text-left">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight dm-sans-heading">
              Person-Centred Care,{" "}
              <span className="bg-gradient-to-r from-orange-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>

            {/* Subheading with questions */}
            <div className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Care Providers
              </h2>
              <div className="space-y-4 text-left">
                <p>
                  Q. Are you spending excessive time creating activities instead
                  of engaging more with those you care for?
                </p>
                <p>Q. Is your person-centred care fully Outstanding?</p>
                <p>
                  Q. Are you optimising cost savings, reporting and revenue?
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-orange-500/30 rounded-3xl blur-3xl"></div>
              <Image
                src="/Remindmecare-main-image.png"
                alt="RemindMecare Care Interaction"
                width={600}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm"
                priority
              />
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">
          <div className="group relative bg-gradient-to-br from-white/10 via-white/8 to-white/6 backdrop-blur-sm rounded-xl p-8 border border-gradient-to-r from-lavender-300/20 to-purple-400/30 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(168,85,247,0.12)] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/12 hover:via-white/10 hover:to-white/8 transition-all duration-300 overflow-hidden cursor-pointer">
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Background texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-purple-300/2 opacity-60"></div>

            <div className="relative z-10">
              <div className="flex flex-col items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 drop-shadow-[0_0_6px_rgba(168,85,247,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300"
                  >
                    <defs>
                      <linearGradient
                        id="orangePurple"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#e879f9" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                      <linearGradient
                        id="orangePurpleAccent"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#fb923c" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="url(#orangePurple)"
                      strokeWidth="2"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="url(#orangePurpleAccent)"
                      strokeWidth="1.5"
                      d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-white/95 transition-colors duration-300 leading-tight text-center dm-sans-heading">
                  Personalized Care
                </h3>
              </div>
              <p className="text-white/75 group-hover:text-white/85 transition-colors duration-300 leading-relaxed text-sm text-center">
                Tailored solutions that adapt to individual needs and
                preferences
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 via-white/8 to-white/6 backdrop-blur-sm rounded-xl p-8 border border-gradient-to-r from-purple-300/20 to-cyan-400/30 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/12 hover:via-white/10 hover:to-white/8 transition-all duration-300 overflow-hidden cursor-pointer">
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Background texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-cyan-300/2 opacity-60"></div>

            <div className="relative z-10">
              <div className="flex flex-col items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 drop-shadow-[0_0_6px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all duration-300"
                  >
                    <defs>
                      <linearGradient
                        id="purpleBlue"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient
                        id="purpleBlueAccent"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="url(#purpleBlue)"
                      strokeWidth="1.5"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="url(#purpleBlueAccent)"
                      strokeWidth="1"
                      d="M9 12.75 11.25 15 15 9.75"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-white/95 transition-colors duration-300 leading-tight text-center dm-sans-heading">
                  Simplified Process
                </h3>
              </div>
              <p className="text-white/75 group-hover:text-white/85 transition-colors duration-300 leading-relaxed text-sm text-center">
                Streamlined workflows that reduce complexity and save time
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 via-white/8 to-white/6 backdrop-blur-sm rounded-xl p-8 border border-gradient-to-r from-emerald-300/20 to-teal-400/30 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(16,185,129,0.12)] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/12 hover:via-white/10 hover:to-white/8 transition-all duration-300 overflow-hidden cursor-pointer">
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Background texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-emerald-300/2 opacity-60"></div>

            <div className="relative z-10">
              <div className="flex flex-col items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 drop-shadow-[0_0_6px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] transition-all duration-300"
                  >
                    <defs>
                      <linearGradient
                        id="greenTeal"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#0d9488" />
                      </linearGradient>
                      <linearGradient
                        id="greenTealAccent"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#2dd4bf" />
                      </linearGradient>
                    </defs>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="url(#greenTeal)"
                      strokeWidth="1.5"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="url(#greenTealAccent)"
                      strokeWidth="1"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-white/95 transition-colors duration-300 leading-tight text-center dm-sans-heading">
                  Enhanced Outcomes
                </h3>
              </div>
              <p className="text-white/75 group-hover:text-white/85 transition-colors duration-300 leading-relaxed text-sm text-center">
                Proven results that improve quality of life and care delivery
              </p>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <ActivitiesSection />

        {/* Video Section */}
        <VideoSection />

        {/* Partners Scroller Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center dm-sans-heading">
              People we've worked with:
            </h2>
            {/* Error message state */}
            <PartnersScrollerWithErrorHandling />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function PartnersScrollerWithErrorHandling() {
  const partners = [
    "SHARP.jpg",
    "ageuk.jpg",
    "IDEA-London.jpg",
    "Worcester-University.jpg",
    "Dr-Mortons.jpg",
    "kingston-hospital.jpg",
    "orcha.jpg",
    "equideum.jpg",
    "emis-health.jpg",
    "Kings-College.jpg",
    "AA-demention.jpg",
    "dementia-pathfinders.jpg",
    "Parkinsons.jpg",
    "ico.jpg",
    "bluebird-care.jpg",
  ];
  const [imgError, setImgError] = useState(false);

  if (!partners.length) {
    return (
      <div className="text-center text-red-400 font-semibold mt-4">
        No partners found.
      </div>
    );
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg"
        style={{ minHeight: 100 }}
      >
        <div
          className="partner-scroller flex items-center gap-12 py-6 animate-partner-scroll hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {[...partners, ...partners].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-20 w-40 md:w-48"
            >
              <Image
                src={`/partners/${img}`}
                alt={img
                  .replace(/[-.]/g, " ")
                  .replace(/jpg|png|jpeg/gi, "")
                  .trim()}
                width={160}
                height={80}
                className="object-contain h-20 w-full hover:grayscale transition duration-300 bg-white/10 rounded-lg shadow"
                onError={() => setImgError(true)}
              />
            </div>
          ))}
        </div>
      </div>
      {imgError && (
        <div className="text-center text-red-400 font-semibold mt-4">
          One or more partner images failed to load. Check the /public/partners
          folder and image names.
        </div>
      )}
    </>
  );
}
