import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    name: "Activity Library",
    icon: "/images/activity-library-icon.png",
    description: "Comprehensive collection of engaging activities",
    type: "image",
  },
  {
    name: "World Days",
    icon: "/images/world-days-icon.png",
    description: "Celebrate special days and occasions",
    type: "image",
  },
  {
    name: "Games & Apps",
    icon: "/images/games-and-apps-icon.png",
    description: "Interactive games and applications",
    type: "image",
  },
  {
    name: "My Story",
    icon: "/images/my-story-icon.png",
    description: "Personal content and memories",
    type: "image",
  },
  {
    name: "Video Room",
    icon: "/images/video-room-icon.png",
    description: "Virtual communication and chat",
    type: "image",
  },
  {
    name: "Portability",
    icon: "/images/portability-icon.png",
    description: "Access anywhere, anytime",
    type: "image",
  },
  {
    name: "Integrations",
    icon: "/images/integrations-icon.png",
    description: "Connect with existing systems",
    type: "image",
  },
  {
    name: "Reporting",
    icon: "/images/reporting-icon.png",
    description: "Comprehensive analytics and insights",
    type: "image",
  },
];

export function ActivitiesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 dm-sans-heading">
            Our Activities
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive suite of person-centered activities
            designed to engage, entertain, and enhance quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-white font-semibold text-lg mb-3 text-center leading-tight dm-sans-heading">
                {activity.name}
              </h3>
              <Link
                href={`/${activity.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/&/g, "and")}`}
                className="group relative bg-gradient-to-br from-white/10 via-white/8 to-white/6 backdrop-blur-sm rounded-xl border border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(255,255,255,0.12)] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/12 hover:via-white/10 hover:to-white/8 transition-all duration-300 overflow-hidden cursor-pointer w-full aspect-square p-3"
                scroll={false}
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Background texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/2 opacity-60"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src={activity.icon as string}
                    alt={activity.name}
                    width={180}
                    height={180}
                    className="w-full h-full object-cover rounded-2xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <p className="text-white/70 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300 mt-3 text-center">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
