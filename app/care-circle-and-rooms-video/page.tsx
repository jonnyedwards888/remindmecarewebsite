import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";

export default function CareCircleAndRoomsVideoPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              THE CARE CIRCLE
            </h1>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  The Care Circle
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    ReMe places the person with dementia central to the shared
                    life of a group of people who care and are involved in the
                    care process. ReMe offers a simple way to inform and engage
                    relevant people about the care of the central individual.
                  </p>
                  <p>
                    The system provides an easy means to both share and request
                    information as new discoveries are made. It keeps the task
                    of updates manageable and rewarding for care staff and
                    family alike.
                  </p>
                  <p>
                    Access to a person's Profile is granted only through
                    invitation. The person, formal carers and/or the family
                    always maintain control, with the right to remove individual
                    carer access.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Connecting Those That Care
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  The system is designed specifically to support the following:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Need for Inclusion
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      To feel part of a group is essential. If not met a person
                      is likely to decline and retreat until life is lived
                      almost entirely within a bubble of isolation.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Need for Attachment
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      Without the reassurance of social bonds it's difficult for
                      any person to function well. Life is overshadowed by new
                      uncertainties and anxieties.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Need for Comfort
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      The failing of abilities or the ending of long established
                      habits make the need for comfort especially great. The
                      security that comes from being close and engaged with
                      another is increasingly important.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Holding
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      The provision of a safe psychological space, where areas
                      of vulnerability can be exposed without fear.
                    </p>
                  </div>
                </div>

                <p className="text-white/70 text-sm italic">
                  Extracts from Tom Kitwood: Dementia Reconsidered: The Person
                  Comes First
                </p>
              </section>

              {/* Care Circle Image 1 */}
              <div className="my-12">
                <Image
                  src="/images/care-circle-testimonial.png"
                  alt="Care Circle Testimonial"
                  width={800}
                  height={200}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Sharing Content to Improve Care
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    Carers can choose people from within the trusted group to
                    engage with. Notes can be added and shared by all users to
                    highlight discoveries and important information that the
                    intervention has helped identify.
                  </p>
                  <p>
                    If the person cared for moves either temporarily or
                    permanently to a new care environment, access to ReMe
                    knowledge is easily made available to that facility. ReMe is
                    a portable care system that stays with the person being
                    cared for.
                  </p>
                </div>
              </section>

              {/* Care Circle Image 2 with Text */}
              <div className="grid lg:grid-cols-2 gap-12 items-start my-12">
                <div>
                  <Image
                    src="/images/care-circle-rooms.png"
                    alt="ReMe Rooms Video Chat"
                    width={400}
                    height={500}
                    className="rounded-xl w-full object-cover"
                  />
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Rooms
                    </h2>
                    <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                      <p>
                        Using RemindMecare's ROOMS video chat tool makes family
                        communications easy.
                      </p>
                      <p>Its schedulable, tracked and captured in reports.</p>
                      <p>
                        Planning communication with family and friends becomes
                        simple.
                      </p>
                      <p>
                        And unlike most other video systems we know of, ROOMS
                        does not capture data and sell it for commercial
                        exploitation, so is fully GDPR compliant and free.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Calendar
                    </h2>
                    <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                      <p>The calendar in ReMe is multi-functional.</p>
                      <p>
                        Whether used by the primary carer and family to schedule
                        activities and/or by a care home to plan their activity
                        schedule, the result is a means to plan and a mechanism
                        to engage for all those involved in the care process.
                      </p>
                    </div>
                  </div>
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
