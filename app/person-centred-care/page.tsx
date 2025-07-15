import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "../../components/gradient-background";

export default function PersonCentredCarePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/reme-logo.png"
              alt="ReMe Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-white font-semibold text-lg">
              RemindMecare
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white/90 hover:text-white transition-colors"
            >
              Overview
            </Link>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Contact
            </Button>
          </div>
        </nav>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              PERSON-CENTRED CARE
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  My Story – Personal Content Library
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  RemindMecare (aka ReMe) builds a profile of the person by
                  hosting content uploaded by the family and capturing knowledge
                  and content discovered during digital activities. The library
                  houses an ever growing knowledge base, usable for
                  entertainment, engagement and therapy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Family Content
                  </h3>
                  <p className="text-white/70 text-sm">
                    Upload and organize personal photos, videos, and memories
                    shared by family members.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Digital Activities
                  </h3>
                  <p className="text-white/70 text-sm">
                    Capture insights and preferences discovered through
                    interactive digital experiences.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Therapeutic Use
                  </h3>
                  <p className="text-white/70 text-sm">
                    Leverage the knowledge base for entertainment, engagement,
                    and therapeutic interventions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                >
                  Learn More
                </Button>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
