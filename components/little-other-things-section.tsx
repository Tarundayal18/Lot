// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function LittleOtherThingsSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const benefits = [
//     "Real-time inventory management",
//     "24/7 customer support",
//     "Monthly product updates",
//     "Digital marketing toolkit",
//     "Community of franchisees",
//     "Annual refresher training",
//     "Exclusive supplier network",
//     "Flexible location options",
//   ]

//   return (
//     <section ref={sectionRef} className="bg-background py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/3 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div
//           className={`mb-16 md:mb-24 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
//         >
//           <h2 className="font-oswald text-5xl md:text-7xl font-bold text-foreground">
//             Little Other Things
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary mt-3 text-4xl md:text-6xl">
//               That Matter
//             </span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className={`group relative rounded-2xl p-6 md:p-8 bg-card border border-border hover:border-accent-secondary transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
//                 isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
//               }`}
//               style={{ animationDelay: isVisible ? `${index * 0.08}s` : "0s" }}
//             >
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-8 bg-gradient-to-br from-accent-secondary via-accent to-transparent rounded-2xl transition-opacity duration-500" />

//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 group-hover:bg-accent-secondary/25 transition-all duration-500 mb-4 group-hover:scale-125">
//                 <span className="font-oswald font-bold text-accent group-hover:text-accent-secondary transition-colors">
//                   {index + 1}
//                 </span>
//               </div>

//               <p className="font-oswald font-semibold text-foreground text-lg md:text-base leading-relaxed group-hover:text-accent transition-colors duration-300 relative z-10">
//                 {benefit}
//               </p>

//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"

export default function LittleOtherThingsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    "Real-time inventory management",
    "24/7 customer support",
    "Monthly product updates",
    "Digital marketing toolkit",
    "Community of franchisees",
    "Annual refresher training",
    "Exclusive supplier network",
    "Flexible location options",
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100 px-4 md:px-8 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/15 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-16 md:mb-24 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className=" text-5xl md:text-7xl font-bold text-purple-900">
            Little Other Things
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 mt-3 text-4xl md:text-6xl">
              That Matter
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 md:p-8 bg-white border-2 border-purple-200 hover:border-yellow-400 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.08}s` : "0s" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-gradient-to-br from-purple-300 via-yellow-300 to-transparent rounded-2xl transition-opacity duration-500" />

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 group-hover:bg-yellow-100 transition-all duration-500 mb-4 group-hover:scale-125 group-hover:rotate-12">
                <span className="font-oswald font-bold text-purple-600 group-hover:text-yellow-600 transition-colors">
                  {index + 1}
                </span>
              </div>

              <p className="font-oswald font-semibold text-purple-900 text-lg md:text-base leading-relaxed group-hover:text-purple-700 transition-colors duration-300 relative z-10">
                {benefit}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
