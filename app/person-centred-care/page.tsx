import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "../../components/gradient-background";
import { Navbar } from "@/components/navbar";

export default function PersonCentredCarePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex justify-center mb-8">
              <Image
                src="/My-story.jpeg"
                alt="My Story"
                width={400}
                height={220}
                className="rounded-xl shadow-lg object-cover max-h-56 w-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              PERSON-CENTRED CARE
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4 text-center">
                  My Story – Personal Content Library
                </h2>
                <p className="text-white/90 text-lg leading-relaxed text-center">
                  RemindMecare (aka ReMe) builds a profile of the person by
                  hosting content uploaded by the family and capturing knowledge
                  and content discovered during digital activities. The library
                  houses an ever growing knowledge base, usable for
                  entertainment, engagement and therapy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold text-lg mb-2 text-center">
                    Family Content
                  </h3>
                  <p className="text-white/70 text-sm text-center">
                    Upload and organize personal photos, videos, and memories
                    shared by family members.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold text-lg mb-2 text-center">
                    Digital Activities
                  </h3>
                  <p className="text-white/70 text-sm text-center">
                    Capture insights and preferences discovered through
                    interactive digital experiences.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h3 className="text-white font-semibold text-lg mb-2 text-center">
                    Therapeutic Use
                  </h3>
                  <p className="text-white/70 text-sm text-center">
                    Leverage the knowledge base for entertainment, engagement,
                    and therapeutic interventions.
                  </p>
                </div>
              </div>

              {/* Move image here and make it wider */}
              <div className="flex justify-center my-10">
                <Image
                  src="/My-story.jpeg"
                  alt="My Story"
                  width={600}
                  height={330}
                  className="rounded-xl shadow-lg object-cover w-full max-w-2xl"
                  priority
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
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

        {/* Session Player Activity Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
            The Session Player activity is designed specifically to support the
            following:
          </h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-green-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-white">COLLABORATION</span>{" "}
                <span className="text-white/90">
                  — two or more people “working together”. Ensuring the person
                  with dementia is not cast into a passive role.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-green-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-white">PLAY</span>{" "}
                <span className="text-white/90">
                  — an exercise in spontaneity and self-expression. Validation
                  acknowledges the reality of a person’s emotions, feelings and
                  experience. The intended outcome is for the person to feel
                  more alive, more connected and more ‘real’.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-green-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-white">CELEBRATION</span>{" "}
                <span className="text-white/90">
                  — when the division between caregiver and cared-for comes
                  close to vanishing completely, with both being taken into a
                  similar mood, absorbed in a joyful moment.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-green-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-white">FACILITATION</span>{" "}
                <span className="text-white/90">
                  — enables doing what not normally able to do, assisting
                  interaction and at a speed slow enough to allow meaning to
                  develop.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-green-400 text-2xl">✔️</span>
              <div>
                <span className="font-bold text-white">CREATION</span>{" "}
                <span className="text-white/90">
                  — the spontaneous response by the person with dementia from
                  his or her stock of ability and social skill. This creative
                  act is acknowledged and responded to without taking over
                  control.
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
