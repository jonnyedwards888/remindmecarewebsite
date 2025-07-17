import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";
import { FeaturesDropdown } from "../../components/features-dropdown";
import { CareDropdown } from "../../components/care-dropdown";
import { ProductsDropdown } from "../../components/products-dropdown";
import { ManageDropdown } from "../../components/manage-dropdown";

export default function TouchTablePage() {
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
                      src="/touchtable/Touch-tableimg1.png"
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
                      src="/touchtable/Touchtableimg2.png"
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
                      src="/touchtable/Touchtableimg3.png"
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
                      src="/touchtable/Touchtableimg4.png"
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
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      {/* Heroicons Device Phone */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-white drop-shadow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6.75v-1.5A2.25 2.25 0 0 0 13.5 3h-3A2.25 2.25 0 0 0 8.25 5.25v1.5m7.5 0v10.5m0-10.5H8.25m7.5 0a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 15.75 21h-7.5A2.25 2.25 0 0 1 6 19.5V8.25A2.25 2.25 0 0 1 8.25 6.75m0 0V5.25A2.25 2.25 0 0 1 10.5 3h3a2.25 2.25 0 0 1 2.25 2.25v1.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Easy to Use
                    </h3>
                    <p className="text-white/80 text-sm">
                      Intuitive interface like smartphone or iPad
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      {/* Heroicons Stats (provided) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-white drop-shadow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Data Capture
                    </h3>
                    <p className="text-white/80 text-sm">
                      Records participation and outcomes automatically
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      {/* Heroicons Game Controller (outline) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-white drop-shadow"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9.75h.008v.008h-.008V9.75zm-7.5 0h.008v.008H8.25V9.75zm1.5 3.75h3m-1.5-1.5v3m7.5-2.25a6.75 6.75 0 1 0-13.5 0c0 1.306.835 2.417 2.25 3.172V18a2.25 2.25 0 0 0 2.25 2.25h4.5A2.25 2.25 0 0 0 16.5 18v-1.328c1.415-.755 2.25-1.866 2.25-3.172z"
                        />
                      </svg>
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
