import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";

export default function TermsAndConditionsPage() {
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
              Terms and Conditions
            </h1>

            <div className="space-y-8 text-white/90">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  The Agreement
                </h2>
                <h3 className="text-xl font-medium text-white mb-3">
                  Terms of Service
                </h3>
                <p className="leading-relaxed mb-4">
                  ReMeLife ("we", "us" or "our") offers the use of RemindMeCare
                  services and content ("Content") on our website at
                  remelife.com ("Site") and associated websites including but
                  not limited to remindmecare.com, and from our applications
                  available to download onto PCs, tablets and mobile phones
                  ("Apps") (collectively, the "Services"). Please read the
                  following terms and conditions ("Terms of Use") carefully
                  before using the Services.
                </p>
                <p className="leading-relaxed mb-4">
                  These Terms of Use govern your access to and use of the
                  Services and constitute a binding legal agreement between you
                  and ReMeLife.
                </p>
                <p className="leading-relaxed mb-4">
                  You acknowledge and agree that, by clicking on the "I agree"
                  or "I accept" button, or by accessing or using the Services
                  you are indicating that you have read, understand and agree to
                  be bound by these Terms of Use, whether or not you have
                  registered with the Site. If you do not agree to these Terms
                  of Use you must not register or use the Services.
                </p>
                <p className="leading-relaxed mb-4">
                  These Terms of Use, or any part of them, may be terminated by
                  ReMeLife without notice at any time, for any reason. The
                  provisions relating to Copyrights, Trademark, Disclaimer,
                  Limitation of Liability, Indemnification and Governing Law,
                  shall survive any termination.
                </p>
                <p className="leading-relaxed mb-4">
                  If we modify these Terms of Use, we will post the modification
                  on the Site or provide you with notice of the modification. We
                  will also update the "Last Updated Date" at the top of the
                  home page of the Site. By continuing to access or use the
                  Services after we have posted a modification on the Site or
                  have provided you with notice of a modification, you are
                  indicating that you agree to be bound by the modified Terms of
                  Use. If the modified Terms of Use are not acceptable to you,
                  your only recourse is to cease using the Services.
                </p>
                <p className="leading-relaxed mb-4">
                  Certain access to or use of certain Services may have
                  different terms and conditions posted or may require you to
                  agree with and accept additional terms and conditions. If
                  there is a conflict between these Terms of Use and terms and
                  conditions posted for a specific area of the Services, the
                  latter terms and conditions shall take precedence with respect
                  to your use of or access to that area of the Site, Services or
                  Content.
                </p>
                <p className="leading-relaxed">
                  For details of our cookie policy and the way in which we
                  process your personal information please refer to our Privacy
                  Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Eligibility and Account Registration
                </h2>
                <p className="leading-relaxed mb-4">
                  In order to access certain features of the Services and to
                  post any Content on or through the Services, you must register
                  to create an account ("Account"). You must be at least 18
                  years old and any registration by anyone under 18 is void. By
                  completing the registration process to create an Account, you
                  represent and warrant that you are 18 or older.
                </p>
                <p className="leading-relaxed mb-4">
                  You are responsible for safeguarding your password. You agree
                  not to disclose your password to any third party and to take
                  sole responsibility for any activities or actions under your
                  Account, whether or not you have authorized such activities or
                  actions.
                </p>
                <p className="leading-relaxed mb-4">
                  You will immediately notify us of any unauthorized use of your
                  Account.
                </p>
                <p className="leading-relaxed mb-4">
                  During the registration process, you will be asked to provide
                  certain information and you will establish a username and a
                  password. You agree to provide accurate, current and complete
                  information during the registration process and to update such
                  information to keep it accurate, current and complete.
                </p>
                <p className="leading-relaxed">
                  We reserve the right to suspend or terminate your Account if
                  any information provided during the registration process or
                  thereafter proves to be inaccurate, not current or incomplete.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Accounts and Paid Features
                </h2>
                <p className="leading-relaxed mb-4">
                  We offer a free Account (no fees) and the option to enhance
                  your Account with paid features ("Paid Features"). A
                  description of our Paid Features and subscription plans is
                  available at the Site. You may change your account options at
                  any time.
                </p>
                <p className="leading-relaxed mb-4">
                  When you select to take advantage of the Paid Features, you
                  will be required to provide billing information such as name,
                  billing address, and payment information and select a
                  subscription plan.
                </p>
                <p className="leading-relaxed mb-4">
                  Some of the Paid Features utilise third party service
                  providers. All purchases made through these third party
                  service providers are subject to their respective terms and
                  conditions of use and these Terms of Use do not affect your
                  rights in respect of such purchases. We are not responsible
                  and have no liability whatsoever for goods or services you
                  obtain through our third party service providers or other web
                  sites or web pages and we expressly exclude from these Terms
                  of Use, to the fullest extent permitted by law, all express or
                  implied warranties, terms, conditions and representations in
                  relation to the goods and services obtained from third party
                  service providers. We encourage you to make whatever
                  investigation you feel necessary or appropriate before
                  proceeding with any purchase.
                </p>
                <p className="leading-relaxed mb-4">
                  You agree to pay the applicable fees and any taxes and other
                  fees that may accrue in relation to your use of the Services,
                  if any, and any Paid Features you may elect. All fees are
                  non-refundable and non-transferable except as expressly
                  provided in these Terms of Use.
                </p>
                <p className="leading-relaxed mb-4">
                  In the event we terminate these Terms of Use for your breach,
                  you will remain liable for all amounts due hereunder.
                </p>
                <p className="leading-relaxed">
                  If you access the Services as part of a free trial you agree
                  that all the terms and conditions of these Terms of Use apply
                  to your use during that period except any obligation to pay
                  for access to the Services. You acknowledge that full access
                  to and/or some of the functionality of the Services may be
                  restricted as part of a free trial. We may terminate the free
                  trial at any time without notice. Once the free trial period
                  has ended if you wish to continue to access the Services you
                  will need to subscribe for use of the Services on a paid for
                  basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Intellectual Property
                </h2>
                <p className="leading-relaxed mb-4">
                  The copyright and all other intellectual property rights in
                  the Services is owned by us and our licensors.
                </p>
                <p className="leading-relaxed mb-4">
                  All of our trademarks (including 'RemindMeCare' and
                  'ReMeLife'), service marks, logos, trade names and any other
                  proprietary designations used herein are trademarks or
                  registered trademarks of us. Any other trademarks, service
                  marks, logos, trade names and any other proprietary
                  designations are the trademarks or registered trademarks of
                  their respective parties.
                </p>
                <p className="leading-relaxed">
                  If you become aware of any material included as part of the
                  Services that you believe infringes your or any other person's
                  copyright, please report this by email to team@remelife.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Permitted Use
                </h2>
                <p className="leading-relaxed mb-4">
                  We hereby grants you a personal, limited, revocable and
                  non-transferable licence (without the right to sub-license) to
                  electronically copy and print hard copy portions of the
                  Services solely for your personal and non-commercial use. Any
                  other copying of any part of the Services, including but not
                  limited to the reproduction, distribution, display or
                  transmission of the Content of the Site is strictly
                  prohibited, unless authorised by us.
                </p>
                <p className="leading-relaxed mb-4">
                  You may request additional permissions to that expressed in
                  the licence expressed herein by writing to us at the address
                  indicated on the Site.
                </p>
                <p className="leading-relaxed mb-4">
                  You further agree not to change or delete any proprietary
                  notices from materials downloaded from the Site.
                </p>
                <p className="leading-relaxed mb-4">
                  For the avoidance of doubt, unless otherwise expressed, you
                  must not:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>
                    adapt, edit, change, transform, publish, republish,
                    distribute, redistribute, broadcast, rebroadcast or show or
                    play in public the Services (in any form or media) without
                    the prior written permission of us; or
                  </li>
                  <li>
                    disassemble, decompile, reverse engineer or otherwise modify
                    the Services to the extent that you cannot be prevented from
                    doing so under applicable law.
                  </li>
                </ul>
                <p className="leading-relaxed mb-4">
                  If you become aware of any use of our copyright materials, or
                  any of our other intellectual property rights, that
                  contravenes or may contravene the licence above, please report
                  this by email to team@remelife.com or by post to 32 Admiralty
                  Way, Teddington, TW11 0NL
                </p>
                <p className="leading-relaxed mb-4">
                  Access to certain areas of the Services is restricted. We
                  reserve the right to restrict access to areas of the Services
                  at our sole discretion.
                </p>
                <p className="leading-relaxed">
                  We may disable your user ID and password in our sole
                  discretion without notice or explanation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Unacceptable Use
                </h2>
                <p className="leading-relaxed mb-4">
                  You must not use the Services in any way that causes, or may
                  cause, damage to the Services or impairment of the
                  availability or accessibility of the Services, or in any way
                  which is unlawful, illegal, fraudulent or harmful, or in
                  connection with any unlawful, illegal, fraudulent or harmful
                  purpose or activity.
                </p>
                <p className="leading-relaxed mb-4">
                  You must not use the Services to copy, store, host, transmit,
                  send, use, publish or distribute any material which consists
                  of (or is linked to) any spyware, computer virus, Trojan
                  horse, worm, keystroke logger, rootkit or other malicious
                  computer software.
                </p>
                <p className="leading-relaxed mb-4">
                  You must not conduct any systematic or automated data
                  collection activities (including without limitation scraping,
                  data mining, data extraction and data harvesting) on or in
                  relation to the Services without our prior written consent.
                </p>
                <p className="leading-relaxed">
                  Without prejudice to our other rights under these Terms of
                  Use, if you breach these Terms of Use in any way or if we
                  believe that you are using or have used your Account directly
                  or indirectly in a way not permitted under these Terms of Use,
                  we may take such action as we deem appropriate to deal with
                  the breach, including suspending your access to the Services,
                  suspending or terminating your Account, blocking computers
                  using your IP address from accessing the Services, contacting
                  your internet service provider to request that it blocks your
                  access to the Services and/or bringing court proceedings
                  against you.
                </p>
              </section>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  >
                    Back to Home
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                >
                  Contact Us
                </Button>
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
