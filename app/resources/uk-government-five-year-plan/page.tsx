import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "../../../components/footer"

export default function UKGovernmentPlanPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* More purple-focused gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-purple-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 via-purple-400/40 to-purple-600/60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image src="/images/reme-logo.png" alt="ReMe Logo" width={40} height={40} className="mr-3" />
            <span className="text-white font-semibold text-lg">RemindMecare</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/resources" className="text-white/90 hover:text-white transition-colors">
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
              <Link href="/resources" className="text-orange-200 hover:text-white transition-colors">
                Resources
              </Link>
              <span className="text-white/60 mx-2">→</span>
              <span className="text-white/80">UK Government Five-Year Plan</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              A New Era for Social Care: The UK Government's Ambitious Five-Year Plan
            </h1>

            <div className="prose prose-invert max-w-none">
              <div className="text-white/90 text-lg leading-relaxed space-y-6">
                <p>
                  The UK government has recently announced a ground breaking initiative to address the long-standing
                  challenges in the social care sector, including person-centred care and dementia care. This move,
                  which includes the establishment of an independent commission, signals a renewed commitment to
                  reforming adult social care and care homes. Chaired by Baroness Louise Casey, the commission is tasked
                  with creating a roadmap for a sustainable, equitable, and efficient care system. While the initiative
                  has been met with cautious optimism, questions remain about whether it can deliver meaningful change
                  in a sector that has faced decades of underfunding and systemic issues.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Vision for Social Care Reform</h2>
                <p>
                  At the heart of this initiative is the ambition to create a "national care service" modelled on the
                  principles of the NHS. The government aims to establish national standards for care delivery, ensuring
                  consistency and equity across England. The commission's work will be conducted in two phases:
                </p>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Mid-Term Report (2026):</h3>
                  <p className="text-white/90">
                    This report will focus on addressing immediate challenges in social care, such as workforce
                    shortages, funding gaps, and integration with healthcare services, with a particular emphasis on
                    person-centred care and dementia care.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20 my-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Final Report (2028):</h3>
                  <p className="text-white/90">
                    The final phase will provide long-term recommendations for transforming social care into a
                    sustainable system capable of meeting the needs of an aging population.
                  </p>
                </div>

                <p>
                  The commission's scope includes evaluating funding mechanisms, workforce development, digital
                  integration, and innovative care models. By addressing these areas, the government hopes to lay the
                  foundation for a robust and future-proof social care system.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Challenges Facing Social Care</h2>
                <p>
                  The announcement comes at a critical time for the social care sector, which has been under immense
                  pressure due to rising demand and chronic underfunding. Here are some of the key challenges that the
                  commission aims to tackle:
                </p>

                <div className="space-y-6 mt-6">
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Workforce Crisis:</h3>
                    <p className="text-white/90">
                      The social care sector is grappling with severe staff shortages, exacerbated by low pay and
                      limited career progression opportunities. The government plans to introduce a Fair Pay Agreement
                      to ensure competitive wages and retain skilled professionals. Expanded training programs and
                      career pathways are also on the agenda to professionalize the workforce.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Funding Gaps:</h3>
                    <p className="text-white/90">
                      Local authorities have struggled to meet rising care demands due to budget constraints. The
                      commission will explore sustainable funding models to ensure long-term financial stability for the
                      sector.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Integration with Healthcare:</h3>
                    <p className="text-white/90">
                      The lack of coordination between health and social care services often leads to inefficiencies,
                      such as delayed hospital discharges. Shared digital platforms and reforms to the Better Care Fund
                      aim to improve integration and streamline service delivery.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Quality of Care:</h3>
                    <p className="text-white/90">
                      Disparities in care quality across regions remain a significant concern. National standards will
                      be introduced to ensure that all individuals receive high-quality care, including person-centred
                      care and dementia care, regardless of where they live.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Immediate Reforms: A Step Forward</h2>
                <p>
                  While the commission's final recommendations are years away, several immediate reforms have been
                  announced:
                </p>

                <ul className="list-disc list-inside space-y-2 text-white/90 ml-4">
                  <li>
                    <strong>Increased Funding:</strong> Additional resources will be allocated to programs like the
                    Disabled Facilities Grant, enabling more individuals to live independently at home.
                  </li>
                  <li>
                    <strong>Digital Transformation:</strong> Investments in shared digital platforms aim to improve data
                    sharing between health and social care providers.
                  </li>
                  <li>
                    <strong>Workforce Development:</strong> Training initiatives and pay reforms are expected to address
                    recruitment and retention challenges in the short term.
                  </li>
                </ul>

                <p>
                  These measures are designed to provide some relief to a sector that has been stretched thin by years
                  of neglect and the additional pressures brought on by the COVID-19 pandemic.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Concerns About Delays</h2>
                <p>
                  Despite its ambitious goals, the commission's timeline has raised concerns among stakeholders. With
                  the final report not due until 2028, many worry that urgent issues may remain unaddressed for too
                  long. Critics argue that bold action is needed now—not years down the line—to prevent further
                  deterioration of services.
                </p>

                <p>
                  Additionally, while immediate reforms are welcome, they may not go far enough to address systemic
                  problems. For example, funding increases may fall short of what is required to meet current demand,
                  let alone future needs.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">A Hopeful Yet Cautious Outlook</h2>
                <p>
                  The establishment of this independent commission represents a significant step toward addressing one
                  of society's most pressing challenges. By involving experts like Baroness Casey and focusing on both
                  immediate and long-term solutions, the government is signalling its intent to prioritize social care
                  reform, including person-centred care and dementia care.
                </p>

                <p>
                  However, success will depend on sustained political will, adequate funding, and meaningful engagement
                  with stakeholders—including care providers, local authorities, and service users. As we await further
                  developments, it is clear that this initiative has the potential to transform social care—but only if
                  it delivers on its promises.
                </p>

                <p>
                  For now, those working in or relying on social care must navigate an uncertain landscape while hoping
                  that this ambitious plan marks the beginning of real change.
                </p>
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
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Share Article
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
