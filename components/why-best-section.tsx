// "use client"

// import { Zap, Palette, Layers, Heart, Globe, CheckCircle } from "lucide-react"
// import Image from "next/image"

// const reasons = [
//     {
//         title: "High Footfall Areas",
//         description: "Prioritize locations with consistent pedestrian traffic, such as popular market streets, bustling shopping complexes, and vibrant commercial hubs.",
//         bgColor: "#FAFABF",
//         image: "/img01.png",
//     },
//     {
//         title: "Visibility & Accessibility",
//         description: "Opt for easily visible storefronts or kiosk positions with good accessibility, close to public transport or ample parking.",
//         bgColor: "#C0ECBF",
//         image: "/img02.png",
//     },
//     {
//         title: "Complementary Environment",
//         description: "Look for areas surrounded by businesses that attract a similar demographic (e.g., cafes, fashion boutiques, entertainment venues).",
//         bgColor: "#FAE0BE",
//         image: "/img03.png",
//     },
//     {
//         title: "Optimal Size",
//         description: "While we are flexible, our ideal store footprint for a full experience is 250-300 sqft, with Kiosks ranging from 100-150 sqft.",
//         bgColor: "#FEFAE7",
//         image: "/img01.png",
//     },
//     {
//         title: "Lease Terms",
//         description: "Carefully evaluate rental agreements, ensuring the monthly rent aligns with our recommended sales-to-rent ratio.",
//         bgColor: "#F6C2F4",
//         image: "/img02.png",
//     },
// ]

// export default function WhyBestSection() {
//     return (
//         <section className="bg-[#3e1827] py-16 md:py-24 px-4 md:px-8">
//             <div className="max-w-8xl mx-auto">
//                 {/* Heading */}
//                 <div className="relative mb-16 md:mb-20 text-center">
//                     <h2 className="font-oswald text-6xl md:text-8xl font-semibold text-[#fef9e6] leading-tight inline-block">
//                         Why we are
//                         <br />
//                         the best
//                     </h2>
//                 </div>

//                 {/* Card grid */}
//                 <div className="space-y-6">
//                     {/* Row 1 */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
//                         {reasons.slice(0, 2).map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
//                                 style={{ backgroundColor: item.bgColor, color: "#3B001B" }}
//                             >
//                                 {/* <img
//                                     src={item.image}
//                                     alt={item.title}
//                                     className="w-20 h-20 md:w-44 md:h-34 mb-6 object-contain"
//                                 /> */}
//                                 <div className="relative w-20 h-20 md:w-44 md:h-34 mb-6">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="object-contain"
//                                     />
//                                 </div>

//                                 <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
//                                 <p className="font-oswald text-sm md:text-base leading-relaxed">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Row 2 */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
//                         {reasons.slice(2, 5).map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
//                                 style={{ backgroundColor: item.bgColor, color: "#3B001B" }}
//                             >
//                                 <div className="relative w-20 h-20 md:w-44 md:h-34 mb-6">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="object-contain"
//                                     />
//                                 </div>

//                                 <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
//                                 <p className="font-oswald text-sm md:text-base leading-relaxed">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Row 3 */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
//                         {reasons.slice(5, 7).map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-64 md:h-80 transition-transform hover:scale-105"
//                                 style={{ backgroundColor: item.bgColor, color: "#3B001B" }}
//                             >
//                                 <div className="relative w-20 h-20 md:w-44 md:h-34 mb-6">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="object-contain"
//                                     />
//                                 </div>

//                                 <h3 className="font-oswald text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
//                                 <p className="font-oswald text-sm md:text-base leading-relaxed">{item.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }



"use client"
import Image from "next/image"

const reasons = [
  {
    title: "High Footfall Areas",
    description:
      "Prioritize locations with consistent pedestrian traffic, such as popular market streets, bustling shopping complexes, and vibrant commercial hubs.",
    accentColor: "#2d5a4d",
    image: "/img01.png",
  },
  {
    title: "Visibility & Accessibility",
    description:
      "Opt for easily visible storefronts or kiosk positions with good accessibility, close to public transport or ample parking.",
    accentColor: "#4a9d8a",
    image: "/img02.png",
  },
  {
    title: "Complementary Environment",
    description:
      "Look for areas surrounded by businesses that attract a similar demographic (e.g., cafes, fashion boutiques, entertainment venues).",
    accentColor: "#c59a6d",
    image: "/img03.png",
  },
  {
    title: "Optimal Size",
    description:
      "While we are flexible, our ideal store footprint for a full experience is 250-300 sqft, with Kiosks ranging from 100-150 sqft.",
    accentColor: "#2d5a4d",
    image: "/img01.png",
  },
  {
    title: "Lease Terms",
    description:
      "Carefully evaluate rental agreements, ensuring the monthly rent aligns with our recommended sales-to-rent ratio.",
    accentColor: "#4a9d8a",
    image: "/img02.png",
  },
]

export default function WhyBestSection() {
  return (
    <section className="bg-[#fafaf8] py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(45, 90, 77, 0.1) 35px, rgba(45, 90, 77, 0.1) 70px)",
        }}
      />

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="relative mb-16 md:mb-24 text-center animate-fade-in-up">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-tight">
            Why We Are
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a4d] to-[#c59a6d]">
              The Best
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Row 1 - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-auto md:h-80 transition-all duration-500 overflow-hidden animate-fade-in-up hover:shadow-xl hover:-translate-y-2 bg-white border border-[#e5e2dd]"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor} 0%, transparent 100%)`,
                  }}
                />

                <div className="relative">
                  {/* Image */}
                  <div className="relative w-20 h-20 md:w-40 md:h-40 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-oswald text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:opacity-80"
                    style={{ color: item.accentColor }}
                  >
                    {item.title}
                  </h3>

                  {/* Accent line */}
                  <div
                    className="h-0.5 w-10 mx-auto mb-4 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  {/* Description */}
                  <p className="font-light text-sm md:text-base leading-relaxed text-[#6b6b6b]">{item.description}</p>
                </div>

                {/* Bottom accent border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, ${item.accentColor}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.slice(2, 5).map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center h-auto md:h-80 transition-all duration-500 overflow-hidden animate-fade-in-up hover:shadow-xl hover:-translate-y-2 bg-white border border-[#e5e2dd]"
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

                <div className="relative">
                  <div className="relative w-20 h-20 md:w-40 md:h-40 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
                  </div>

                  <h3
                    className="font-oswald text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:opacity-80"
                    style={{ color: item.accentColor }}
                  >
                    {item.title}
                  </h3>

                  <div
                    className="h-0.5 w-10 mx-auto mb-4 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <p className="font-light text-sm md:text-base leading-relaxed text-[#6b6b6b]">{item.description}</p>
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
    </section>
  )
}
