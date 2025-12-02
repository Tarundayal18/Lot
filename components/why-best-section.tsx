"use client"
import Image from "next/image"

const reasons = [
  {
    title: "High Footfall Areas",
    description:
      "Prioritize locations with consistent pedestrian traffic, such as popular market streets, bustling shopping complexes, and vibrant commercial hubs.",
    accentColor: "#7c3aed",
    image: "/whybest/img01.png",
  },
  {
    title: "Visibility & Accessibility",
    description:
      "Opt for easily visible storefronts or kiosk positions with good accessibility, close to public transport or ample parking.",
    accentColor: "#a855f7",
    image: "/whybest/img02.png",
  },
  {
    title: "Complementary Environment",
    description:
      "Look for areas surrounded by businesses that attract a similar demographic (e.g., cafes, fashion boutiques, entertainment venues).",
    accentColor: "#ffc107",
    image: "/whybest/img03.png",
  },
  {
    title: "Optimal Size",
    description:
      "While we are flexible, our ideal store footprint for a full experience is 250-300 sqft, with Kiosks ranging from 100-150 sqft.",
    accentColor: "#7c3aed",
    image: "/whybest/img04.png",
  },
  {
    title: "Lease Terms",
    description:
      "Carefully evaluate rental agreements, ensuring the monthly rent aligns with our recommended sales-to-rent ratio.",
    accentColor: "#a855f7",
    image: "/whybest/img05.png",
  },
]

export default function WhyBestSection() {
  return (
    <section className="bg-purple-100 py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(147, 51, 234, 0.1) 35px, rgba(147, 51, 234, 0.1) 70px)",
        }}
      />
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="relative mb-16 md:mb-24 text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-bold text-purple-900 leading-tight">
            Why We Are
            <span className="block mt-3 bg-gradient-to-r from-purple-600 to-yellow-400 bg-clip-text text-transparent">
              The Best
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-auto md:h-80 transition-all duration-500 overflow-hidden animate-fade-in-up hover:shadow-xl hover:-translate-y-2 bg-white border-2 border-purple-300"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor} 0%, transparent 100%)`,
                  }}
                />
                <div className="relative w-full">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-500 rounded-xl overflow-hidden">
  <Image
    src={item.image || "/placeholder.svg"}
    alt={item.title}
    fill
    className="object-contain"
  />
</div>

                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:opacity-80"
                    style={{ color: item.accentColor }}
                  >
                    {item.title}
                  </h3>
                  <div
                    className="h-0.5 w-10 mx-auto mb-4 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <p className="font-light text-sm md:text-base leading-relaxed text-gray-600">{item.description}</p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, ${item.accentColor}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.slice(2, 5).map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-auto md:h-80 transition-all duration-500 overflow-hidden animate-fade-in-up hover:shadow-xl hover:-translate-y-2 bg-white border-2 border-purple-300"
                style={{
                  animationDelay: `${(i + 2) * 0.1}s`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor} 0%, transparent 100%)`,
                  }}
                />
                <div className="relative w-full">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-500 rounded-xl overflow-hidden">
  <Image
    src={item.image || "/placeholder.svg"}
    alt={item.title}
    fill
    className="object-contain"
  />
</div>

                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:opacity-80"
                    style={{ color: item.accentColor }}
                  >
                    {item.title}
                  </h3>
                  <div
                    className="h-0.5 w-10 mx-auto mb-4 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <p className="font-light text-sm md:text-base leading-relaxed text-gray-600">{item.description}</p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, ${item.accentColor}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
