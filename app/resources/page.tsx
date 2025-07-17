import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient-background";

export default function ResourcesPage() {
  const newsItems = [
    {
      id: 1,
      title:
        "A New Era for Social Care: The UK Government's Ambitious Five-Year Plan",
      excerpt:
        "The UK government has recently announced a ground breaking initiative to address the long-standing challenges in the...",
      slug: "uk-government-five-year-plan",
      image: "/placeholder.svg?height=200&width=300&text=Government+Plan",
    },
    {
      id: 2,
      title:
        "Maximising Care Home Success: Strategies for Excellence and Growth",
      excerpt:
        "Care homes today operate at the confluence of profound demographic, economic, and societal changes, creating a dynamic yet demanding environment. Navigating these...",
      slug: "care-home-success-strategies",
      image: "/placeholder.svg?height=200&width=300&text=Care+Home+Success",
    },
    {
      id: 3,
      title: "The Coming Tech in Person-Centred Care",
      excerpt:
        "We will be presenting articles on person centred care on a regular basis. Written by members of our experienced team and by clients and experts in their fields, it will address the current...",
      slug: "tech-person-centred-care",
      image: "/placeholder.svg?height=200&width=300&text=Tech+in+Care",
    },
    {
      id: 4,
      title: "Unlocking ROI with RemindMecare: Enhancing Person-Centred Care",
      excerpt:
        "Investing in RemindMecare (ReMe) is not just about improving care quality, it's about achieving significant financial returns. Here's how ReMe delivers ROI across various areas of...",
      slug: "remindmecare-roi",
      image: "/placeholder.svg?height=200&width=300&text=ReMe+ROI",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        {/* Removed local nav, now using global Navbar */}

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Resources
            </h1>

            <p className="text-xl text-white/90 text-center mb-12 leading-relaxed">
              Stay informed with the latest insights, research, and developments
              in person-centered care
            </p>

            {/* News Items Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white/10 rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
                >
                  <div className="aspect-video bg-white/20 flex items-center justify-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-white font-semibold text-xl mb-3 leading-tight">
                      {item.title}
                    </h2>

                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <Link
                      href={`/resources/${item.slug}`}
                      className="inline-flex items-center text-orange-200 hover:text-white transition-colors font-medium"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-r from-orange-400/10 to-purple-500/10 rounded-xl p-8 border border-white/20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for the latest insights in
                person-centered care and technology innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <Button className="bg-gradient-to-r from-orange-400 to-purple-500 text-white hover:from-orange-500 hover:to-purple-600 px-6">
                  Subscribe
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
