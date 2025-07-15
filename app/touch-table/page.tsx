import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";

export default function TouchTablePage() {
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
              The Sensory Touch Table
            </h1>

            <p className="text-xl text-white/90 text-center mb-12 leading-relaxed">
              ReMe's all about delivering highly engaging activities and therapy
              and in as fun a way as possible. But whilst also capturing the
              data that's needed to be able to improve the experience by
              personalising it. And uniquely, by using the data to record who's
              present, participation and outcomes, enabling better care planning
              and reporting. Here's some of our products that can assist you
              achieve better care and have more fun.
            </p>

            <div className="space-y-16">
              {/* Overview Section */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Overview
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                      The sensory Touch Table is a high quality fully
                      integrated/ portable/ adjustable interactive table which
                      is easy to use in the same way as a smart phone or iPad.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed mt-4">
                      The table combines fun activities for everyone, in an easy
                      and accessible way.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-8 border border-white/20 aspect-video flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Touch+Table+Overview"
                      alt="Touch Table Overview"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Designed for Care Section */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-white/10 rounded-xl p-8 border border-white/20 aspect-video flex items-center justify-center lg:order-1">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Care+Environment+Design"
                      alt="Designed for Care"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="lg:order-2">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Designed for Care
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                      The range of 30" to 40" Interactive Activity Touch Tables
                      are uniquely designed for the care environment, creating a
                      positive atmosphere for residents and carers and
                      'Inspiring Interaction' between users, as well as for one
                      to one sessions and by those with the capacity to self
                      entertain.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Recording Section */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Data Recording
                    </h2>
                    <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                      <p>
                        The built in ReMe software and games stimulate memory
                        recall, improve communication and provide entertainment
                        and aim to improve the wellbeing and mental health of
                        elderly people and people with dementia.
                      </p>
                      <p>
                        Uniquely the sensory Touch Tables collect the outcomes
                        data that is so vital in the care process to ensure the
                        optimisation of the activities wellbeing benefits for
                        the person. It captures interactions with users, records
                        those present, monitors outcomes and can undertake
                        wellbeing reports.
                      </p>
                      <p>
                        All data is available for family, care home, operations
                        directors and regulatory reporting.
                      </p>
                      <p>
                        The sensory Touch Table can be used to access the
                        internet for general use, for staff training purposes as
                        well as for entertainment and therapy.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-8 border border-white/20 aspect-video flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Data+Recording+Dashboard"
                      alt="Data Recording"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Specification Section */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-white/10 rounded-xl p-8 border border-white/20 aspect-video flex items-center justify-center lg:order-1">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Technical+Specifications"
                      alt="Specifications"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="lg:order-2">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Specification
                    </h2>
                    <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                      <p>
                        There are a variety of models, that are designed to suit
                        different needs and price brackets.
                      </p>
                      <p>
                        With an inbuilt Chrome 10 player housed in an Android
                        unit, the tables offer full internet capability and
                        access to Playstore apps.
                      </p>
                      <p>
                        The tables all come with RemindMecare and the ReMe App
                        Playstore Portal in built and ready for use. These act
                        as the 'activity operating system' for the tables and
                        convert the android tablets into powerful person-centred
                        care and business tools.
                      </p>
                      <p>
                        The sensory touch table can be used to access the
                        internet for general use, for staff training purposes as
                        well as for entertainment and therapy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features Highlight */}
              <section className="bg-gradient-to-r from-orange-400/10 to-purple-500/10 rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Easy to Use
                    </h3>
                    <p className="text-white/80 text-sm">
                      Intuitive interface like smartphone or iPad
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Data Capture
                    </h3>
                    <p className="text-white/80 text-sm">
                      Records participation and outcomes automatically
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">🎮</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Full Functionality
                    </h3>
                    <p className="text-white/80 text-sm">
                      Internet access, apps, and ReMe built-in
                    </p>
                  </div>
                </div>
              </section>

              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                  >
                    Request Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                  >
                    Schedule Demo
                  </Button>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  Contact us to learn more about our Touch Table range and find
                  the perfect model for your needs
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
