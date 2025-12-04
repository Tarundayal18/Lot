// import Image from "next/image"

// export default function FeaturesSection() {
//   const features = [
//     {
//       title: "The Pop Corner",
//       description: "High-traffic kiosks (100-150 sqft) for impulse buys. Maximize sales in minimal space.",
//       bgColor: "bg-[#d4f4dd]",
//       image: "/img01.png",
//     },
//     {
//       title: "The Cozy Nook",
//       description: "Dedicated shops (200-250 sqft) for immersive browsing. Ideal for upmarket streets.",
//       bgColor: "bg-[#f5d4e8]",
//       image: "/img02.png",
//     },
//     {
//       title: "The Wonder Den",
//       description: "Expansive stores (500+ sqft) for full product range. Destination retail with experiences.",
//       bgColor: "bg-[#fef6c8]",
//       image: "/img03.png",
//     },
//   ]

//   return (
//     <section className="w-full bg-[#fef6e8] py-16 px-4 md:py-24">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
//           {features.map((feature, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               {/* Illustration Container */}
//               <div
//                 className="mb-6 flex h-70 w-70 items-center justify-center rounded-full p-8"
//               >
//                 <div className="relative h-full w-full">
//                   <Image
//                     src={feature.image || "/placeholder.svg"}
//                     alt={feature.title}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>

//               </div>

//               {/* Title */}
//               <h3 className="mb-4 font-oswald text-3xl font-bold leading-tight text-[#3d1a1f] md:text-4xl">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="max-w-sm w-65 text-base font-oswald leading-relaxed text-[#3d1a1f]">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"
import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    {
      title: "The Pop Corner",
      description: "High-traffic kiosks (100-150 sqft) for impulse buys. Maximize sales in minimal space.",
      image: "/ourstore/img1.png",
    },
    {
      title: "The Cozy Nook",
      description: "Dedicated shops (200-250 sqft) for immersive browsing. Ideal for upmarket streets.",
      image: "/ourstore/img2.png",
    },
    {
      title: "The Wonder Den",
      description: "Expansive stores (500+ sqft) for full product range. Destination retail with experiences.",
      image: "/ourstore/img3.png",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100 py-20 px-4 md:py-32">
      <div className="mx-auto max-w-7xl relative overflow-hidden">
        <div className="mb-16 md:mb-24 text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-bold text-purple-900 leading-tight">
            Our Store
            {/* <span className="block bg-gradient-to-r from-purple-600 to-yellow-400 bg-clip-text text-transparent">
              Formats
            </span> */}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light mt-6">
            Choose the format that fits your retail vision
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up border-2 border-purple-200"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-purple-100 to-yellow-100 group-hover:from-purple-200 group-hover:to-yellow-200 transition-all duration-500">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <div className="h-0.5 w-10 bg-gradient-to-r from-purple-600 to-yellow-400 mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm md:text-base leading-relaxed text-gray-600 font-light">{feature.description}</p>
              </div>
            </div>
          ))}
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
