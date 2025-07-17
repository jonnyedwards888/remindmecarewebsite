import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";
import { FeaturesDropdown } from "../../components/features-dropdown";
import { CareDropdown } from "../../components/care-dropdown";
import { ProductsDropdown } from "../../components/products-dropdown";
import { ManageDropdown } from "../../components/manage-dropdown";

export default function ActivityLibraryPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

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
              ACTIVITIES
            </h1>

            <div className="space-y-12">
              <div>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  ReMe creates activities suited to each care environment. For
                  families, it offers the means to create a repository of media
                  content that can be easily stored and accessed whenever
                  required and which becomes vital in the care process. Whilst
                  for care businesses, there are Activity creation tools for
                  activity coordinators and for carers, a means to build 1:1
                  therapy sessions. Here's a brief overview.
                </p>

                {/* First Activity Image */}
                <div className="mb-12">
                  <Image
                    src="/images/activity-grid-1.jpg"
                    alt="Activity Examples"
                    width={800}
                    height={300}
                    className="rounded-xl w-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Entertainment & Bespoke Therapy
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  ReMe's strength is that it fulfils many purposes and quickly
                  becomes an integral part of the weeks activities. Whether for
                  1:1 therapy sessions held by a live-in carer, a dom carer, or
                  for group entertainment in a day care centre or care home; or
                  for establishing care strategies or for care assessment; or
                  for a weekly sing along or family visit, ReMe soon becomes
                  indispensable.
                </p>

                <p className="text-white font-semibold text-xl mb-6">
                  ReMe provides the following activities;
                </p>

                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      One to One Image Therapy
                    </h3>
                    <p>
                      Using images and videos to explore past or present
                      experiences can assist in establishing content recall and
                      provides a familiar activity that reassures and engages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Music Reminiscence
                    </h3>
                    <p>
                      Through building a playlist of musical favourites, a carer
                      has easy access to music that engages and this can be used
                      for either entertainment or therapy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Family Photos and Videos
                    </h3>
                    <p>
                      Personal content is easily uploaded remotely by family and
                      can be presented in reminiscence sessions as and when
                      appropriate. Integrated with the calendar, key events can
                      be recalled to personalise the relationship between the
                      carer and their client.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Group Video Entertainment
                    </h3>
                    <p>
                      As well as bespoke activities, ReMe can be used as a
                      resource for pure entertainment. Subjects, such as travel
                      or sport, can be explored using ReMe and the results
                      stored for use again and again.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      Group Music Entertainment
                    </h3>
                    <p>
                      Playlists from the Profiles of a group of persons present
                      can be amalgamated to play music that really engages. Or
                      generic themed music sessions can be easily created,
                      stored and run using ReMe, for example a 'Film Music', or
                      'Big Band Session' can be played to entertain the group.
                      So whether visiting a day care centre or living in a care
                      home, an entertainment session can be created that matches
                      the interests of the person cared for, one that has a far
                      greater ability to engage through being bespoke to the
                      persons Life Story.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      1:1 Calming Strategies
                    </h3>
                    <p>
                      Through the use of familiar content that the person is
                      known to respond to, whether image or music based, ReMe
                      provides a resource when needed to reassure and calm. As
                      new knowledge is gained regarding what works, this is
                      recorded for easy access and use in subsequent
                      reminiscence sessions and generally in the care process.
                      ReMe discovers nuggets of knowledge that can be vital to
                      the care process.
                    </p>
                  </div>
                </div>

                {/* Second Activity Image */}
                <div className="my-12">
                  <Image
                    src="/images/activity-grid-2.jpg"
                    alt="ReMe Activities Interface"
                    width={800}
                    height={400}
                    className="rounded-xl w-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Knowledge & Data
                </h2>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Information at your fingertips
                </h3>

                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    Whether cared for at home or in a formal care facility,
                    reports on the care process, well-being, family engagement
                    and activities undertaken, are vital for everyone.
                  </p>

                  <p>
                    Whether a family wanting to maintain remote engagement and
                    be reassured regarding quality of care, or a domiciliary
                    care or live-in business requiring to ensure that person
                    centred care is truly being provided; whether a care home
                    needing to collate care data for presentation to the CQC to
                    report on the delivery of person centred care and dignity
                    and respect, or a day care centre reporting to its charity
                    trustees or local authority, all can benefit from the power
                    of ReMe's automated reporting capability.
                  </p>

                  <p>
                    How does this work? We've wrapped business tools around the
                    Life Story memory system that's at the heart of ReMe. These
                    offer each care environment a set of functionality that
                    match their respective needs.
                  </p>

                  <p>
                    For whilst all carers need to know the person and all seek
                    to deliver the best person centred care possible, however a
                    primary home carer has different needs from a dom carer and
                    a memory clinic has different requirements from the care
                    home and acute ward.
                  </p>

                  <p className="font-semibold text-white">
                    Reports are available on any of the functionality that ReMe
                    provides. These include:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>My Story</li>
                    <li>Health assessment</li>
                    <li>Health and well-being reporting</li>
                    <li>Family engagement and satisfaction reporting</li>
                    <li>Activity recording</li>
                    <li>Daily management Reporting</li>
                  </ul>
                </div>

                {/* Third Activity Image - Testimonial */}
                <div className="my-12">
                  <Image
                    src="/images/activity-testimonial.png"
                    alt="Customer Testimonial"
                    width={800}
                    height={200}
                    className="rounded-xl w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                >
                  Get Started
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
