// "use client"

// export default function ServiceCardsSection() {
//   const serviceCards = [
//     {
//       title: "What We Actually Do",
//       description:
//         "We run strategic Google Ads campaigns with focused keyword research, ad copywriting, and conversion tracking to maximize performance and minimize wastage.",
//       order: 0,
//     },
//     {
//       title: "Why We're Not Like Everyone Else",
//       description:
//         "Others chase clicks. We chase conversions. Every ad we run is tracked, tested, and tuned for profitability.",
//       order: 1,
//     },
//     {
//       title: "The Real Problem (And Why It Hurts)",
//       description:
//         "Brands burn budgets on irrelevant clicks, poor tracking, and unoptimized campaigns that don't deliver meaningful leads.",
//       order: 2,
//     },
//     {
//       title: "How We Fix It",
//       description:
//         "We constantly refine campaigns using data and insight — not assumptions — to deliver maximum ROI at minimum cost.",
//       order: 3,
//     },
//     {
//       title: "What You Get (The Value)",
//       description:
//         "More visibility, better leads, and stronger returns — Google Ads that finally make financial sense.",
//       order: 4,
//     },
//   ]

//   return (
//     <section className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-background">
//       <div className="mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="mb-16 md:mb-20 text-center animate-fade-in-up">
//           <p className="text-xs md:text-sm font-semibold text-accent-secondary tracking-widest uppercase mb-4 opacity-80">
//             Our Approach
//           </p>
//           <h2 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
//             What Makes Us
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent">
//               Different
//             </span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
//           {serviceCards.map((card, index) => (
//             <div
//               key={index}
//               className="group relative h-full animate-fade-in-up"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//               }}
//             >
//               <div
//                 className={`
//                   relative overflow-hidden rounded-3xl bg-card
//                   p-8 md:p-10 lg:p-12 shadow-lg
//                   border border-border transition-all duration-500 ease-out
//                   hover:shadow-2xl hover:scale-105
//                   hover:-translate-y-1
//                   h-full flex flex-col
//                 `}
//               >
//                 {/* Decorative background element */}
//                 <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl bg-accent" />
//                 <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 rounded-full blur-2xl bg-accent-secondary" />

//                 {/* Card content */}
//                 <div className="relative z-10 flex-1 flex flex-col">
//                   <div className="w-0 h-1 rounded-full mb-6 transition-all duration-500 group-hover:w-12 bg-gradient-to-r from-accent to-accent-secondary" />

//                   {/* Title */}
//                   <h3 className="text-2xl md:text-3xl font-bold font-oswald mb-4 leading-tight transition-colors duration-500 text-foreground group-hover:text-accent">
//                     {card.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-base md:text-lg leading-relaxed text-muted-foreground opacity-85 transition-opacity duration-500 group-hover:opacity-100 font-oswald">
//                     {card.description}
//                   </p>
//                 </div>

//                 <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
//                   <div className="w-2 h-2 rounded-full bg-accent-secondary" />
//                   <div className="flex gap-1">
//                     {[0, 1, 2].map((dot) => (
//                       <div
//                         key={dot}
//                         className="w-1.5 h-1.5 rounded-full transition-all duration-500 bg-accent"
//                         style={{
//                           opacity: 0.4 + dot * 0.2,
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to action section */}
//         <div className="mt-16 md:mt-20 text-center">
//           <p className="text-accent-secondary text-sm md:text-base font-oswald mb-6 opacity-80">
//             Ready to transform your campaigns?
//           </p>
//           <button className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-accent-secondary to-accent text-white font-oswald font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

export default function ServiceCardsSection() {
  const serviceCards = [
    {
      title: "Comprehensive Training Program",
      description:
        "In-depth initial training covering product knowledge, sales techniques, operational procedures, and customer service excellence.",
      order: 0,
    },
    {
      title: "Store Design & Visual Merchandising",
      description:
        " Expert guidance and design concepts for creating an inviting, visually appealing store layout that maximizes impulse purchases, including interior look-and-feel assistance.",
      order: 1,
    },
    {
      title: "End-to-End Mobile-Based Software",
      description:
        "Access to our proprietary, user-friendly mobile software for seamless inventory management, sales tracking, and operational control.",
      order: 2,
    },
    {
      title: "Centralized Marketing & CRM Support",
      description:
        "Benefit from national and local marketing campaigns, digital advertising support, and customer relationship management tools to drive foot traffic and build loyalty.",
      order: 3,
    },
    {
      title: "Continuous Product Selection & Supply",
      description:
        "Our team constantly sources new, trending, and fast-selling products, ensuring your store always has fresh, desirable inventory at competitive prices.",
      order: 4,
    },
    {
      title: "Ongoing Operational Guidance",
      description:
        "Dedicated support team available to assist with daily operations, troubleshooting, and best practices to ensure smooth functioning and profitability.",
      order: 5,
    },
    {
      title: "Performance Monitoring & Coaching",
      description:
        "Regular performance reviews and personalized coaching to help you optimize sales, manage inventory efficiently, and achieve your financial targets.",
      order: 6,
    },
    {
      title: "Brand Asset Library",
      description:
        "Access to professional marketing materials, branding guidelines, and digital assets to maintain a consistent and attractive brand image",
      order: 7,
    },
    
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-purple-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20 text-center animate-fade-in-up">
          {/* <p className="text-xs md:text-sm font-semibold text-purple-600 tracking-widest uppercase mb-4 opacity-80">
            Our Approach
          </p> */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple-900 leading-tight">
            What Makes Us
            <span className="block bg-gradient-to-r from-purple-600 to-yellow-400 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="group relative h-full animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 lg:p-12 shadow-lg border-2 border-purple-300 transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 hover:-translate-y-1 h-full flex flex-col">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl bg-purple-600" />
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 rounded-full blur-2xl bg-yellow-400" />

                {/* Card content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-0 h-1 rounded-full mb-6 transition-all duration-500 group-hover:w-12 bg-gradient-to-r from-purple-600 to-yellow-400" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight transition-colors duration-500 text-purple-900 group-hover:text-purple-600">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-gray-600 opacity-85 transition-opacity duration-500 group-hover:opacity-100">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-200/30 flex items-center justify-between">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="flex gap-1">
                    {[0, 1, 2].map((dot) => (
                      <div
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full transition-all duration-500 bg-purple-600"
                        style={{
                          opacity: 0.4 + dot * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-purple-600 text-sm md:text-base font-bold mb-6 opacity-80">
            Ready to transform your campaigns?
          </p>
          <button className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
            Get Started Today
          </button>
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
