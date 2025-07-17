import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";
import { FeaturesDropdown } from "../../components/features-dropdown";
import { CareDropdown } from "../../components/care-dropdown";
import { ProductsDropdown } from "../../components/products-dropdown";
import { ManageDropdown } from "../../components/manage-dropdown";

export default function SensoryGamesRappPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
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

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              SENSORY GAMES & PLAYSTORE APPS
            </h1>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">
                  ReMe App Play Store Portal (RAPP)
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    ReMe's all about delivering highly engaging activities and
                    therapy and in as fun a way as possible. But whilst also
                    capturing the data that's needed to be able to improve the
                    experience by personalising it. And uniquely, by using the
                    data to record who's present, participation and outcomes,
                    enabling better care planning and reporting. Here's some of
                    our products that can assist you achieve better care and
                    have more fun.
                  </p>
                  <p>
                    Of course, you want the best apps downloaded from Google
                    Play Store, onto your table or tablet. But how do you know
                    which ones work the best? For Play Store is full of
                    duplicates and many that have adverts, capture data and even
                    cost money. Every Touch table comes pre-loaded with RAPP
                    ready to go as it activities based 'operating system'. RAPP
                    converts an entertainment based table into a creative,
                    outcomes based and solutions providing powerhouse.
                  </p>
                </div>

                {/* Two small button-sized images */}
                <div className="flex gap-4 my-8 justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center">
                    <Image
                      src="/images/games-and-apps-icon.png"
                      alt="RAPP Feature 1"
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center">
                    <Image
                      src="/images/reporting-icon.png"
                      alt="RAPP Feature 2"
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Large iPad-sized image display */}
                <div className="my-12">
                  <Image
                    src="/images/activity-grid-2.jpg"
                    alt="RAPP Interface Display"
                    width={800}
                    height={600}
                    className="rounded-xl w-full max-w-2xl mx-auto object-cover"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Pre-selected Games, Quizzes, Sensory Activities
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    RAPP has that covered with a pre-selected library of best
                    fits for the care sector, ready for download.
                  </p>
                  <p>
                    ReMe's library of games, quizzes, cognitive stimulation
                    therapy, music and films are ideally presented on the Touch
                    Table. The activities are all touch sensitive, so they're
                    especially engaging, stimulating and rewarding.
                  </p>
                </div>

                {/* Image below the text */}
                <div className="my-8">
                  <Image
                    src="/images/activity-grid-1.jpg"
                    alt="Pre-selected Activities"
                    width={600}
                    height={300}
                    className="rounded-xl w-full max-w-xl mx-auto object-cover"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Access to Google Content sites
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  RAPP gives you easy access to apps such as iPlayer, Google
                  Earth and… well in fact to any app that is in the Play Store.
                  You just need to activate them once and then access them from
                  within RAPP
                </p>

                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Daily Readymade Activities
                </h2>
                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    Playstore apps and games are great. But sometimes you may
                    want to watch activities that relate specifically to today's
                    events, such as World Shoe Day, the Boat Race, the Olympics,
                    International Tree Hugging Day (yup it exists and its
                    growing). RemindMecare's Readymade Activity Library has 00's
                    of activities, from This Day in History and World Days to
                    classic films and comedies. And we add new one's every day.
                  </p>
                  <p>
                    Or just tell us what you want, and we'll make it. Perhaps
                    you could make some for us, and we'll reward you every time
                    it's watched (if you're happy to share it with all our users
                    worldwide). RemindMecare's creator tool makes this easy.
                  </p>
                  <p>
                    And the family can make activities for their loved one's
                    too, using the same tool remotely, and then upload their
                    created activity into the person cared for's My Story, ready
                    for presentation. Walks with the dogs, the holiday, the
                    school play, that great goal, all can be captured and turned
                    into great media content and be held in the My Story
                    library.
                  </p>
                  <p className="text-white font-semibold text-xl">
                    The possibilities are endless. The results will be treasured
                    forever.
                  </p>
                </div>
              </section>

              {/* Integrations section with image on left */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src="/images/integrations-icon.png"
                      alt="RAPP Integrations"
                      width={180}
                      height={180}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                      Integrations
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                      RAPP can be used on any touchscreen Android based
                      platform. Therefore, RAPP is particularly well suited for
                      use on large scale sensory touch screen tables.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed mt-4">
                      Whether use to stimulate sensory engagement with those
                      with cognitive conditions or simply to explore the world
                      with Google Earth or contact family remotely using Rooms,
                      RAPP makes using games easy and well managed.
                    </p>
                  </div>
                </div>
              </section>

              {/* Other Uses section with image on left */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src="/images/portability-icon.png"
                      alt="Other Uses"
                      width={180}
                      height={180}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                      Other Uses
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Unlike many tables, RAPP does not lock you down from using
                      the platform in your own creative manner. So you can
                      easily access Netflix, the BBC iPlayer, Google Earth or
                      any other apps, such as management software.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Capture section with image on left */}
              <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src="/images/reporting-icon.png"
                      alt="Data Capture"
                      width={180}
                      height={180}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                      Data Capture
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                      RAPP captures usage data in background and adds it to
                      RemindMecare's reports, based on user, carer, duration,
                      likeability, etc. The regulators love this, as do
                      families, as it makes sensory engagement not just fun, but
                      also outcomes based and totally person-centred.
                    </p>
                  </div>
                </div>
              </section>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                >
                  Learn More About RAPP
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
