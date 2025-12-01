// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Lightbulb, TrendingUp, Headphones, MapPin } from "lucide-react"

// export default function FirstTimeEntrepreneursSection() {
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

//   const points = [
//     {
//       icon: Lightbulb,
//       title: "Want to start a business but need guidance",
//       description: "We provide complete training and support",
//     },
//     {
//       icon: TrendingUp,
//       title: "Don't know how to source the right products",
//       description: "We handle all sourcing and curation",
//     },
//     {
//       icon: Headphones,
//       title: "Prefer a low-investment, high-support model",
//       description: "Zero fees with premium support",
//     },
//     {
//       icon: MapPin,
//       title: "Live in a small or emerging city",
//       description: "Perfect opportunity in your location",
//     },
//   ]

//   return (
//     <section ref={sectionRef} className="bg-secondary py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-60" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl opacity-60" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div
//           className={`mb-16 md:mb-24 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
//         >
//           <h2 className="font-oswald text-5xl md:text-7xl font-bold text-foreground mb-6">
//             Built for First-Time
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary mt-3">
//               Entrepreneurs
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
//             A franchise designed for people who want to start a small business but don't have retail experience,
//             sourcing expertise, or big-brand budgets.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
//           {points.map((point, index) => {
//             const Icon = point.icon
//             return (
//               <div
//                 key={index}
//                 className={`group relative rounded-3xl p-8 md:p-10 bg-card border border-border hover:border-accent transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
//                   isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ animationDelay: isVisible ? `${index * 0.1}s` : "0s" }}
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-8 bg-gradient-to-br from-accent via-accent-secondary to-transparent rounded-3xl transition-opacity duration-500" />

//                 <div className="relative z-10">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/25 transition-all duration-500 mb-6 group-hover:scale-110">
//                     <Icon className="w-8 h-8 text-accent group-hover:text-accent-secondary transition-colors duration-300" />
//                   </div>

//                   <h3 className="font-oswald text-xl md:text-2xl font-bold text-foreground mb-3">{point.title}</h3>
//                   <p className="text-muted-foreground font-light">{point.description}</p>

//                   <div className="h-1 w-8 bg-gradient-to-r from-accent to-accent-secondary mt-6 group-hover:w-16 transition-all duration-500 rounded-full" />
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         <div
//           className={`text-center bg-accent/10 rounded-3xl p-8 md:p-12 border border-accent/30 backdrop-blur-sm transition-all duration-700 ${
//             isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
//           }`}
//           style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
//         >
//           <p className="text-2xl md:text-4xl font-oswald font-bold text-foreground">
//             You bring the dream.
//             <span className="block text-accent mt-3 bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
//               We bring the products, training, and complete support.
//             </span>
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, TrendingUp, Headphones, MapPin } from "lucide-react"

export default function FirstTimeEntrepreneursSection() {
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

  const points = [
    {
      icon: Lightbulb,
      title: "Want to start a business but need guidance",
      description: "We provide complete training and support",
    },
    {
      icon: TrendingUp,
      title: "Don't know how to source the right products",
      description: "We handle all sourcing and curation",
    },
    {
      icon: Headphones,
      title: "Prefer a low-investment, high-support model",
      description: "Zero fees with premium support",
    },
    {
      icon: MapPin,
      title: "Live in a small or emerging city",
      description: "Perfect opportunity in your location",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100 py-20 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl opacity-70 animate-float-slow" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl opacity-70 animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-16 md:mb-24 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-oswald text-5xl md:text-7xl font-bold text-purple-900 mb-6">
            Built for First-Time
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 mt-3">
              Entrepreneurs
            </span>
          </h2>
          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto font-light">
            A franchise designed for people who want to start a small business but don't have retail experience,
            sourcing expertise, or big-brand budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 md:p-10 bg-white border-2 border-purple-200 hover:border-yellow-400 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : "0s" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-gradient-to-br from-purple-300 via-yellow-300 to-transparent rounded-3xl transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 group-hover:bg-yellow-100 transition-all duration-500 mb-6 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-purple-600 group-hover:text-yellow-600 transition-colors duration-300" />
                  </div>

                  <h3 className="font-oswald text-xl md:text-2xl font-bold text-purple-900 mb-3">{point.title}</h3>
                  <p className="text-purple-700 font-light">{point.description}</p>

                  <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-yellow-400 mt-6 group-hover:w-16 transition-all duration-500 rounded-full" />
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`text-center bg-gradient-to-r from-purple-100 to-yellow-100 rounded-3xl p-8 md:p-12 border-2 border-purple-300 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
        >
          <p className="text-2xl md:text-4xl font-oswald font-bold text-purple-900">
            You bring the dream.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 mt-3">
              We bring the products, training, and complete support.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
