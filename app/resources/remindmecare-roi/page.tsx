import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../../components/footer";
import { GradientBackground } from "../../../components/gradient-background";

export default function RemindMecareROIPage() {
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
              href="/resources"
              className="text-white/90 hover:text-white transition-colors"
            >
              Resources
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
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/resources"
                className="text-orange-200 hover:text-white transition-colors"
              >
                Resources
              </Link>
              <span className="text-white/60 mx-2">→</span>
              <span className="text-white/80">
                Unlocking ROI with RemindMecare
              </span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Unlocking ROI with RemindMecare: Enhancing Person-Centred Care
            </h1>

            <div className="prose prose-invert max-w-none">
              <div className="text-white/90 text-lg leading-relaxed space-y-6">
                <div className="bg-gradient-to-r from-orange-400/10 to-purple-500/10 rounded-xl p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    SUMMARY
                  </h2>
                  <p>
                    Investing in RemindMecare (ReMe) is not just about improving
                    care quality, it's about achieving significant financial
                    returns. Here's how ReMe delivers ROI across various areas
                    of the process of delivering person-centred care.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">📋</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        1. Activity Coordination
                      </h3>
                    </div>
                    <p className="text-white/90">
                      ReMe offers a vast library of ready-made activities and
                      tools for creating personalized sessions. This reduces the
                      time and effort required to plan and execute engaging
                      activities, leading to better client engagement and
                      satisfaction.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">👨‍👩‍👧‍👦</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        2. Family Engagement
                      </h3>
                    </div>
                    <p className="text-white/90">
                      Families can remotely contribute to the care process
                      through ReMe, enhancing their involvement and
                      satisfaction. This feature not only improves the care
                      experience but also strengthens the relationship between
                      the care facility and the families. This can reduce the
                      time required to be spent on engaging with families as
                      they can, through ReMe see the level and nature of the
                      activities undertaken by their loved one.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">⏰</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        3. Staff Time Savings
                      </h3>
                    </div>
                    <p className="text-white/90">
                      ReMe's automated tools streamline daily tasks, reducing
                      the time staff spend on administrative duties. This allows
                      caregivers to focus more on direct patient care, enhancing
                      overall efficiency and job satisfaction.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">📊</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        4. Enhanced Reporting
                      </h3>
                    </div>
                    <p className="text-white/90">
                      With ReMe, reporting becomes effortless. The system
                      automatically generates comprehensive reports, saving
                      hours of manual work. This not only ensures compliance but
                      also provides valuable insights for continuous
                      improvement. For example, Carers can have greater
                      knowledge of the person at their finger tips when
                      providing bedside engagement, through printable life story
                      content.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        5. Client Acquisition
                      </h3>
                    </div>
                    <p className="text-white/90">
                      ReMe's innovative approach to person-centred care makes
                      your facility more attractive to potential clients. By
                      showcasing your commitment to advanced care solutions, you
                      can boost client acquisition and retention rates.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">📈</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        6. Data-Driven Decisions
                      </h3>
                    </div>
                    <p className="text-white/90">
                      ReMe's data collection and analysis capabilities provide
                      actionable insights, helping management make informed
                      decisions that optimize operations and reduce costs.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                      <span className="text-white text-xl">🏥</span>
                    </div>
                    <h3 className="text-white font-semibold text-xl">
                      7. Enabling Hospital Stepdown
                    </h3>
                  </div>
                  <p className="text-white/90">
                    Through ReMe's connectivity with hospitals, improved
                    stepdown can take place and this can increase gaining new
                    clients.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-400/10 to-purple-500/10 rounded-xl p-8 border border-white/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Ready to Calculate Your ROI?
                  </h2>
                  <p className="text-white/90 mb-6">
                    By integrating ReMe into your care facility, you not only
                    enhance the quality of care but also achieve substantial
                    financial benefits. Discover the ROI of investing in
                    RemindMecare today!
                  </p>
                  <p className="text-white/90 mb-6">
                    Download the ROI report, produced for an industry leading
                    care group, and the ROI calculator. Just click on the images
                    below.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/10 rounded-xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 transition-all">
                      <div className="aspect-video bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=150&width=200&text=ROI+Report"
                          alt="ROI Report"
                          width={200}
                          height={150}
                          className="rounded-lg"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        ROI Report
                      </h3>
                      <p className="text-white/80 text-sm">
                        Comprehensive analysis produced for an industry leading
                        care group
                      </p>
                      <Button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white hover:from-orange-500 hover:to-purple-600">
                        Download Report
                      </Button>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 transition-all">
                      <div className="aspect-video bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=150&width=200&text=ROI+Calculator"
                          alt="ROI Calculator"
                          width={200}
                          height={150}
                          className="rounded-lg"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        ROI Calculator
                      </h3>
                      <p className="text-white/80 text-sm">
                        Interactive tool to calculate your potential return on
                        investment
                      </p>
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
                        Use Calculator
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-400/10 to-purple-500/10 rounded-xl p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Key ROI Benefits Summary
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-200 mb-2">
                        40%
                      </div>
                      <p className="text-white/80 text-sm">
                        Reduction in administrative time
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-200 mb-2">
                        30%
                      </div>
                      <p className="text-white/80 text-sm">
                        Increase in family satisfaction
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-200 mb-2">
                        25%
                      </div>
                      <p className="text-white/80 text-sm">
                        Improvement in client acquisition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/20">
              <Link href="/resources">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                >
                  ← Back to Resources
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              >
                Contact for Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
