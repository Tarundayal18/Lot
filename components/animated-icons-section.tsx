


// "use client"
// import Image from "next/image"

// export default function AnimatedIconsSection() {
//   // Using 16 images instead of emoji icons
//   const icons = Array.from({ length: 9 }, (_, i) => ({
//     id: i + 1,
//     src: `/animations/1/${i + 1}.png`,
//   }))

//   const stats = [
//     { number: "9", suffix: "+", label: "years of experience" },
//     { number: "60", suffix: "+", label: "brands launched" },
//     { number: "1000", suffix: "+", label: "projects delivered" },
//     { number: "98", suffix: "%", label: "On Time Guarantee" },
//   ]

//   return (
//     <section
//       className="relative px-4 py-16 md:py-20 lg:py-24 overflow-hidden"
//       style={{
//         background: "linear-gradient(180deg, #7D3FC0 0%, #6B2FA8 100%)",
//         backgroundImage: `
//           linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px),
//           linear-gradient(180deg, #7D3FC0 0%, #6B2FA8 100%)
//         `,
//         backgroundSize: "12px 12px, 12px 12px, 100% 100%",
//       }}
//     >
//       {/* Floating orbs - top right */}
//       <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-float-slow"></div>

//       {/* Floating orbs - bottom left */}
//       <div className="absolute bottom-20 left-5 w-40 h-40 bg-yellow-300 rounded-full opacity-15 blur-3xl animate-float-slower"></div>

//       {/* Decorative accent circles */}
//       <div className="absolute top-1/3 left-10 w-20 h-20 border-2 border-yellow-300 rounded-full opacity-30"></div>
//       <div className="absolute bottom-1/4 right-16 w-16 h-16 border-2 border-yellow-300 rounded-full opacity-20"></div>

//       <div className="mx-auto max-w-8xl relative z-10">
//         {/* Header */}
//         <div className="mb-12 text-center md:mb-16 lg:mb-20">
//           <h2
//             className="text-5xl font-bold md:text-7xl lg:text-8xl text-yellow-300 drop-shadow-lg animate-pulse-glow"
//             style={{
//               textShadow:
//                 "0 0 20px rgba(255, 255, 0, 0.6), 0 0 40px rgba(125, 63, 192, 0.4), 2px 2px 4px rgba(0,0,0,0.3)",
//               letterSpacing: "0.02em",
//             }}
//           >
//             Products Our
//             <br />
//             <span className="relative inline-block">Brand Sells</span>
//           </h2>
//         </div>

//         <div className="mb-16 md:mb-20 lg:mb-24 min-h-44 md:min-h-52 lg:min-h-64 flex items-center overflow-hidden">
//           <div className="flex gap-8 md:gap-10 lg:gap-12 mt-8 animate-snake-scroll-slow">
//             {[...Array(3)].map((_, repeatIndex) =>
//               icons.map((icon, index) => (
//                 <div
//                   key={`${icon.id}-${repeatIndex}`}
//                   className={`flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-3xl overflow-hidden bg-white shadow-lg animate-float-${
//                     index % 4
//                   } hover:shadow-2xl hover:scale-110 transition-all duration-300`}
//                   style={{
//                     animationDelay: `${index * 0.25}s`,
//                     boxShadow: "0 10px 40px rgba(255, 255, 0, 0.2)",
//                   }}
//                 >
//                   <Image
//                     src={icon.src || "/placeholder.svg"}
//                     alt={`icon-${icon.id}`}
//                     width={120}
//                     height={120}
//                     className="object-contain"
//                   />
//                 </div>
//               )),
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Custom slower animation keyframes */}
//       <style jsx>{`
//         @keyframes snake-scroll-slow {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }
//         .animate-snake-scroll-slow {
//           animation: snake-scroll-slow 45s linear infinite;
//         }
//       `}</style>
//     </section>
//   )
// }



"use client"
import Image from "next/image"

export default function AnimatedIconsSection() {
  // Using 16 images instead of emoji icons
  const icons = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/animations/1/${i + 1}.png`,
  }))

  const stats = [
    { number: "9", suffix: "+", label: "years of experience" },
    { number: "60", suffix: "+", label: "brands launched" },
    { number: "1000", suffix: "+", label: "projects delivered" },
    { number: "98", suffix: "%", label: "On Time Guarantee" },
  ]

  return (
    <section
      className="relative px-4 py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url("/mbg1.png")`,
        backgroundColor: "#ffff14",
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "rgba(122, 51, 230, 0.15)",
        }}
      />

      {/* Floating orbs - top right */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-float-slow z-5"></div>

      {/* Floating orbs - bottom left */}
      <div className="absolute bottom-20 left-5 w-40 h-40 bg-yellow-300 rounded-full opacity-15 blur-3xl animate-float-slower z-5"></div>

      {/* Decorative accent circles */}
      <div className="absolute top-1/3 left-10 w-20 h-20 border-2 border-yellow-300 rounded-full opacity-30 z-5"></div>
      <div className="absolute bottom-1/4 right-16 w-16 h-16 border-2 border-yellow-300 rounded-full opacity-20 z-5"></div>

      <div className="mx-auto max-w-8xl relative z-10">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2
            className="text-5xl font-bold md:text-7xl lg:text-8xl text-[#7a33e6] drop-shadow-lg animate-pulse-glow"
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 0, 0.6), 0 0 40px rgba(125, 63, 192, 0.4), 2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            Products Our
            <br />
            <span className="relative inline-block">Brand Sells</span>
          </h2>
        </div>

        <div className="mb-16 md:mb-20 lg:mb-24 min-h-44 md:min-h-52 lg:min-h-64 flex items-center overflow-hidden">
          <div className="flex gap-8 md:gap-10 lg:gap-12 mt-8 animate-snake-scroll-slow">
            {[...Array(3)].map((_, repeatIndex) =>
              icons.map((icon, index) => (
                <div
                  key={`${icon.id}-${repeatIndex}`}
                  className={`flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-3xl overflow-hidden bg-white shadow-lg animate-float-${
                    index % 4
                  } hover:shadow-2xl hover:scale-110 transition-all duration-300`}
                  style={{
                    animationDelay: `${index * 0.25}s`,
                    boxShadow: "0 10px 40px rgba(255, 255, 0, 0.2)",
                  }}
                >
                  <Image
                    src={icon.src || "/placeholder.svg"}
                    alt={`icon-${icon.id}`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </div>

      {/* Custom slower animation keyframes */}
      <style jsx>{`
        @keyframes snake-scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-snake-scroll-slow {
          animation: snake-scroll-slow 45s linear infinite;
        }
      `}</style>
    </section>
  )
}
