import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";

export default function WorldDaysPage() {
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
              World Days
            </h1>

            <div className="space-y-8">
              <div>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Celebrate special days and occasions throughout the year with
                  our comprehensive World Days feature. From international
                  awareness days to cultural celebrations, discover meaningful
                  activities that connect with personal memories and
                  experiences.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Daily Celebrations
                    </h3>
                    <p className="text-white/70 text-sm">
                      Access a calendar of daily celebrations and special
                      occasions to create engaging activities.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Cultural Events
                    </h3>
                    <p className="text-white/70 text-sm">
                      Explore cultural celebrations and traditions from around
                      the world.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Memory Triggers
                    </h3>
                    <p className="text-white/70 text-sm">
                      Use special days as conversation starters and memory
                      triggers for reminiscence therapy.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Activity Planning
                    </h3>
                    <p className="text-white/70 text-sm">
                      Plan activities around meaningful dates and celebrations
                      throughout the year.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                >
                  Explore World Days
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
