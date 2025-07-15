import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";

export default function CareSolutionsPage() {
  const careSettings = [
    {
      name: "Care Homes",
      icon: "🏠",
      description: "Residential care facilities",
    },
    {
      name: "Assisted Living",
      icon: "🏘️",
      description: "Independent living with support",
    },
    { name: "Live In Care", icon: "🏡", description: "24/7 care in the home" },
    {
      name: "Day Care Centres",
      icon: "☀️",
      description: "Daily activity and support",
    },
    {
      name: "Memory Clinics",
      icon: "🧠",
      description: "Specialized cognitive care",
    },
    { name: "Dom Care", icon: "🚪", description: "Domiciliary care services" },
    { name: "Hospital Care", icon: "🏥", description: "Acute and ward care" },
    {
      name: "Cognitive Conditions",
      icon: "💭",
      description: "Dementia and MCI support",
    },
  ];

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
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              CARE SOLUTIONS
            </h1>

            <p className="text-xl text-white/90 text-center mb-12 leading-relaxed">
              ReMe adapts to every care environment, delivering person-centered
              solutions across all settings
            </p>

            {/* Care Settings Grid */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Where ReMe Works
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {careSettings.map((setting, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{setting.icon}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {setting.name}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {setting.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Universal Care Enhancement
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    With its unique ability to generate content that matches the
                    person, RemindMeCare (aka ReMe) significantly improves care
                    across all environments. ReMe makes it possible to know the
                    person to a degree not previously achievable, whether in
                    residential care, at home, or in clinical settings.
                  </p>
                  <p>
                    ReMe serves individuals in numerous care settings while
                    supporting the needs of care bodies, local authorities,
                    charities and care organisations. From reducing isolation
                    through improved community engagement to enabling access to
                    opt-in user data, ReMe brings positive change to
                    person-centred care delivery.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Core Features & Benefits
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">🧠</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        Reminiscence Therapy
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Bespoke reminiscence therapy improves carer engagement and
                      can reduce medication needs through discovery of calming
                      strategies. Works for 1:1 sessions, group activities, and
                      themed sessions.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">🎮</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        Cognitive Therapy
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      RAPP app provides cognitive games that reveal ability,
                      enhance recall, and engage both person and carer. Activity
                      delivery is evidenced for family reassurance and
                      regulatory validation.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">📊</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        Electronic Life Records
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      GDPR-compliant data capture of preferences, moods,
                      wellbeing, and Life Story. Owned by person/family,
                      accessible on opt-in basis to care providers.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">👨‍👩‍👧‍👦</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        Family Engagement
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Remote participation in care process, automated reporting,
                      and simplified communication. Cross-generational
                      engagement becomes easier and more meaningful.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">📱</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        Portability
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Content travels with the person across care settings.
                      Hospital transfers, respite care, or permanent moves -
                      carers always have access to essential personal
                      information.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                        <span className="text-white text-xl">💼</span>
                      </div>
                      <h3 className="text-white font-semibold text-xl">
                        Business Benefits
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Client acquisition advantage, automated reporting, reduced
                      paperwork, improved staff satisfaction, and regulatory
                      compliance support across all care environments.
                    </p>
                  </div>
                </div>
              </section>

              {/* Implementation Benefits */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Implementation Benefits
                </h2>
                <div className="bg-gradient-to-r from-orange-400/10 to-purple-500/10 rounded-xl p-8 border border-white/20">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📈</div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Improved Outcomes
                      </h3>
                      <p className="text-white/80 text-sm">
                        Enhanced engagement, reduced medication needs, better
                        quality of life
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Operational Efficiency
                      </h3>
                      <p className="text-white/80 text-sm">
                        Reduced paperwork, automated reporting, streamlined
                        processes
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Competitive Advantage
                      </h3>
                      <p className="text-white/80 text-sm">
                        Client acquisition, family satisfaction, regulatory
                        compliance
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Flexible Pricing for Every Setting
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    All you need is broadband, a PC, tablets, mobile phones and
                    a smart TV.
                  </p>
                  <p>
                    Whether you're a large care group, new build, or established
                    facility, we'll tailor a package to suit your needs. For
                    qualifying charities, we'll even provide ReMe for free.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-r from-orange-400/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-xl mb-3">
                      ReMe Free
                    </h3>
                    <p className="text-white/80 mb-4">
                      Download immediately and use forever with core features
                    </p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Basic reminiscence activities</li>
                      <li>• Personal content storage</li>
                      <li>• Family photo sharing</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-xl mb-3">
                      ReMe Premium
                    </h3>
                    <p className="text-white/80 mb-4">
                      Upgrade anytime to access business tools and advanced
                      features
                    </p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Advanced reporting & analytics</li>
                      <li>• Multi-user care circle access</li>
                      <li>• RAPP cognitive games</li>
                      <li>• Integration capabilities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                  >
                    Get Started Today
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                  >
                    Schedule a Demo
                  </Button>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  Contact us to discuss how ReMe can be tailored to your
                  specific care environment
                </p>
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
