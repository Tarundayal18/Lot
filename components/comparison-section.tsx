
// "use client"

// import { useEffect, useRef, useState } from "react"

// export default function ComparisonSection() {
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

//   const comparisons = [
//     { title: "Franchise Fees", us: "Zero franchise fees", other: "High upfront fees" },
//     { title: "Profit Margin", us: "45% profit margin", other: "Lower retail margins" },
//     { title: "Inventory", us: "Curated fast-moving stock", other: "Slow-moving inventory" },
//     { title: "Dead Stock Risk", us: "No dead stock risk", other: "High dead stock risk" },
//     { title: "Operational Support", us: "Full operational support", other: "Limited training support" },
//     { title: "Store Design", us: "Free store design help", other: "Design cost on owner" },
//     { title: "Marketing", us: "Centralized marketing", other: "Self-managed marketing" },
//     { title: "Systems", us: "Mobile-based operations", other: "Manual/complex systems" },
//     { title: "Product Range", us: "Impulse-buy product range", other: "Generic product mix" },
//     { title: "Store Appeal", us: "Strong retail experience", other: "Weak in-store appeal" },
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-purple-50 via-yellow-50 to-purple-50 py-20 md:py-32 px-4 md:px-8 relative overflow-hidden"
//     >
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)" }}
//       />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div
//           className={`mb-16 md:mb-24 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
//         >
//           <h2 className="font-oswald text-5xl md:text-7xl font-bold text-purple-900 mb-6">How Are We Better?</h2>
//           <p className="text-lg md:text-xl text-purple-700 max-w-2xl mx-auto">
//             Compare us with other franchise brands. See why we're the smarter choice for entrepreneurs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-4">
//           {comparisons.map((item, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${
//                 isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
//               }`}
//               style={{ animationDelay: isVisible ? `${index * 0.05}s` : "0s" }}
//             >
//               <div className="bg-purple-100 rounded-2xl p-6 md:p-8 flex items-center justify-center border-2 border-purple-300 hover:border-yellow-400 transition-all duration-300 group">
//                 <h3 className="font-oswald font-bold text-purple-900 text-center text-base md:text-lg group-hover:text-purple-700 transition-colors">
//                   {item.title}
//                 </h3>
//               </div>

//               <div className="relative rounded-2xl p-6 md:p-8 border-2 border-yellow-400 bg-yellow-100 flex items-center justify-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-yellow-400 to-purple-300 transition-opacity" />
//                 <p className="font-semibold text-purple-900 text-center text-base md:text-lg relative z-10">
//                   {item.us}
//                 </p>
//                 <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-500 rounded-full group-hover:w-4 group-hover:h-4 transition-all animate-pulse" />
//               </div>

//               <div className="rounded-2xl p-6 md:p-8 bg-purple-50 border-2 border-purple-200 flex items-center justify-center group hover:bg-purple-100 transition-all">
//                 <p className="text-purple-600 text-center text-base md:text-lg line-through opacity-60 group-hover:opacity-50">
//                   {item.other}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div
//           className={`mt-16 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
//           style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
//         >
//           <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:ring-4 hover:ring-yellow-300/50">
//             Start Your Journey Today
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function ComparisonSection() {
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

  const comparisons = [
    { title: "Franchise Fees", us: "Zero franchise fees", other: "High upfront fees" },
    { title: "Profit Margin", us: "45% profit margin", other: "Lower retail margins" },
    { title: "Inventory", us: "Curated fast-moving stock", other: "Slow-moving inventory" },
    { title: "Dead Stock Risk", us: "No dead stock risk", other: "High dead stock risk" },
    { title: "Operational Support", us: "Full operational support", other: "Limited training support" },
    { title: "Store Design", us: "Free store design help", other: "Design cost on owner" },
    { title: "Marketing", us: "Centralized marketing", other: "Self-managed marketing" },
    { title: "Systems", us: "Mobile-based operations", other: "Manual/complex systems" },
    { title: "Product Range", us: "Impulse-buy product range", other: "Generic product mix" },
    { title: "Store Appeal", us: "Strong retail experience", other: "Weak in-store appeal" },
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100 py-20 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)" }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Heading */}
        <div
          className={` text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-oswald text-5xl md:text-7xl font-bold text-purple-900 mb-6">How Are We Better?</h2>
          <p className="text-lg md:text-xl text-purple-700 max-w-2xl mx-auto">
            Compare us with other franchise brands. See why we're the smarter choice for entrepreneurs.
          </p>
        </div>

        {/* ⭐ HEADER ROW WITH LOGO & OTHERS ⭐ */}
       

        {/* Comparisons Table */}
        <div className="grid grid-cols-1 gap-4">

             <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
          <div></div>

          <div className="flex justify-center">
            <Image
              src="/reallogo3.png"
              alt="Logo"
              width={140}
              height={70}
              className="object-contain"
            />
          </div>

          <div className="flex justify-center">
            <h3 className="font-oswald font-bold text-purple-900 text-lg">Others</h3>
          </div>
        </div>
            
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.05}s` : "0s" }}
            >
              {/* Column 1 */}
              <div className="bg-purple-100 rounded-2xl p-4 md:p-6 flex items-center justify-center border-2 border-purple-300 hover:border-yellow-400 transition-all duration-300 group">
                <h3 className="font-oswald font-bold text-purple-900 text-center text-base md:text-lg group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Column 2 */}
              <div className="relative rounded-2xl p-4 md:p-6 border-2 border-yellow-400 bg-yellow-100 flex items-center justify-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-yellow-400 to-purple-300 transition-opacity" />
                <p className="font-semibold text-purple-900 text-center text-base md:text-lg relative z-10">
                  {item.us}
                </p>
                <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-500 rounded-full group-hover:w-4 group-hover:h-4 transition-all animate-pulse" />
              </div>

              {/* Column 3 */}
              <div className="rounded-2xl p-4 md:p-6 bg-purple-50 border-2 border-purple-200 flex items-center justify-center group hover:bg-purple-100 transition-all">
                <p className="text-purple-600 text-center text-base md:text-lg opacity-60 group-hover:opacity-50">
                  {item.other}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div
          className={`mt-16 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:ring-4 hover:ring-yellow-300/50">
            Start Your Journey Today
          </button>
        </div> */}

      </div>
    </section>
  )
}
