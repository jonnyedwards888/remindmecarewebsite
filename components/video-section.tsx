import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight dm-sans-heading">
            RemindMecare (aka ReMe) is the leading{" "}
            <span className="bg-gradient-to-r from-orange-200 to-purple-200 bg-clip-text text-transparent">
              Activities app
            </span>{" "}
            for Outstanding Care
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Frame */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              <video
                className="w-full aspect-video rounded-2xl"
                controls
                poster="/Remindmecare-video-thumbnail.png"
                preload="metadata"
              >
                <source
                  src="/Remindmecare-explanation-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                For your care businesses, carers, and your family. Supporting
                elders, dementia, MCI and LD's.
              </p>

              <p>
                Providing easy access to hundreds of digital activities, support
                and therapy.
              </p>

              <p>
                Time saving, care enhancing and business tools for activity
                professionals, carers and managers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold text-lg mb-2 dm-sans-heading">
                See how RemindMecare can generate revenue and savings of more
                than £15k pa for each care facility.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-purple-500 text-white hover:from-orange-500 hover:to-purple-600 px-8 py-3 text-lg font-semibold shadow-lg"
              >
                Click here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
