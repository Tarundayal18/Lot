// "use client"

// import { useState } from "react"
// import { ChevronDown, ChevronUp } from "lucide-react"

// interface FaqItem {
//   id: number
//   question: string
//   answer: string
// }

// const faqItems: FaqItem[] = [
//   {
//     id: 1,
//     question: "What is the initial investment required for a Little Other Things franchise?",
//     answer:
//       "We do not charge any upfront franchise fees. Your primary investment will be in the initial inventory (approximately 3-4 times your projected monthly sales), store setup, interior customization, and branding elements. We encourage you to optimize these costs, and we provide design assistance to help.",
//   },
//   {
//     id: 2,
//     question: "What kind of margins can I expect?",
//     answer:
//       " Franchisees enjoy a highly competitive 45% profit margin on all products. Our proven sourcing and sales strategies are designed to maximize your profitability.",
//   },
//   {
//     id: 3,
//     question: "How much space do I need for a Little Other Things store? ",
//     answer:
//       "Our ideal store size for a full retail experience is between 250-300 sqft. For high-footfall mall or transit areas, our Express Kiosk model can operate effectively in 100-150 sqft. We can also accommodate larger stores up to 600 sqft.",
//   },
//   {
//     id: 4,
//     question: "Do you provide training and support? ",
//     answer:
//       "Yes, absolutely. We offer 100% comprehensive training covering all aspects of store operations, product management, and sales. You'll also receive ongoing support, including store design help, mobile software access, centralized marketing, and continuous product selection. We are committed to handholding you until your store is profitable.",
//   },
//   {
//     id: 5,
//     question: " How do you help with product selection and inventory? ",
//     answer:
//       "Our team, with over 4 years of trading experience, handles all product sourcing directly from China. We continuously analyze market trends and sales data to ensure your store is stocked with the most desirable, fast-selling, and affordable cute products, minimizing your inventory risk and maximizing impulse purchases.",
//   },
//   {
//     id: 6,
//     question: "Can I sell Little Other Things products online? ",
//     answer:
//       "While our core strength and differentiator is the physical impulse buy experience, we are actively building a separate model for e-commerce business. Please inquire about our online opportunities if you are interested in a blended approach or an exclusive online venture.",
//   },
// ]

// export default function FaqSection() {
//   const [expandedId, setExpandedId] = useState<number | null>(0)

//   const toggleExpand = (id: number) => {
//     setExpandedId(expandedId === id ? null : id)
//   }

//   return (
//     <section className="w-full px-4 py-12 md:py-20" style={{ backgroundColor: "#F09FA8" }}>
//       <div className="max-w-8xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h1 className="text-8xl md:text-10xl font-bold mb-4" style={{ color: "#3B001B", fontFamily: "Oswald" }}>
//             You ask,
//             <br />
//             we answer.
//           </h1>
//           {/* <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: "#FFFACD" }}>
//             <span className="text-sm md:text-base font-bold" style={{ color: "#3B001B", fontFamily: "Oswald" }}>
//               FAQs
//             </span>
//           </div> */}
//         </div>

//         {/* FAQ Items */}
//         <div className="space-y-4 md:space-y-3">
//           {faqItems.map((item) => (
//             <div key={item.id} className="flex flex-col">
//               {/* Question Button */}
//               <button
//                 onClick={() => toggleExpand(item.id)}
//                 className="w-full px-6 md:px-8 py-2 md:py-2 rounded-2xl flex items-center justify-between hover:opacity-90 transition-opacity"
//                 style={{ backgroundColor: "#FFFACD" }}
//               >
//                 <h3
//                   className="text-lg md:text-xl font-bold text-left flex-1"
//                   style={{ color: "#3B001B", fontFamily: "Oswald" }}
//                 >
//                   {item.question}
//                 </h3>
//                 <div
//                   className="flex-shrink-0 ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
//                   style={{ backgroundColor: "#A8D8D8" }}
//                 >
//                   {expandedId === item.id ? (
//                     <ChevronUp size={24} style={{ color: "#3B001B" }} />
//                   ) : (
//                     <ChevronDown size={24} style={{ color: "#3B001B" }} />
//                   )}
//                 </div>
//               </button>

//               {/* Answer - appears below as separate box */}
//               {expandedId === item.id && (
//                 <div className="mt-4 md:mt-5 ml-4 md:ml-8 mr-4 md:mr-0 animate-in fade-in duration-300">
//                   <div
//                     className="rounded-3xl font-oswald p-5 md:p-6 text-sm md:text-base leading-relaxed"
//                     style={{ backgroundColor: "#A8D8D8", color: "#3B001B" }}
//                   >
//                     {item.answer}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What is the initial investment required for a Little Other Things franchise?",
    answer:
      "We do not charge any upfront franchise fees. Your primary investment will be in the initial inventory (approximately 3-4 times your projected monthly sales), store setup, interior customization, and branding elements. We encourage you to optimize these costs, and we provide design assistance to help.",
  },
  {
    id: 2,
    question: "What kind of margins can I expect?",
    answer:
      "Franchisees enjoy a highly competitive 45% profit margin on all products. Our proven sourcing and sales strategies are designed to maximize your profitability.",
  },
  {
    id: 3,
    question: "How much space do I need for a Little Other Things store?",
    answer:
      "Our ideal store size for a full retail experience is between 250-300 sqft. For high-footfall mall or transit areas, our Express Kiosk model can operate effectively in 100-150 sqft. We can also accommodate larger stores up to 600 sqft.",
  },
  {
    id: 4,
    question: "Do you provide training and support?",
    answer:
      "Yes, absolutely. We offer 100% comprehensive training covering all aspects of store operations, product management, and sales. You'll also receive ongoing support, including store design help, mobile software access, centralized marketing, and continuous product selection.",
  },
  {
    id: 5,
    question: "How do you help with product selection and inventory?",
    answer:
      "Our team, with over 4 years of trading experience, handles all product sourcing directly. We continuously analyze market trends and sales data to ensure your store is stocked with the most desirable, fast-selling products, minimizing your inventory risk.",
  },
  {
    id: 6,
    question: "Can I sell Little Other Things products online?",
    answer:
      "While our core strength is the physical impulse buy experience, we are actively building a separate model for e-commerce business. Please inquire about our online opportunities if interested.",
  },
]

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full px-4 py-16 md:py-24 lg:py-28 bg-gradient-to-b from-[#f5f3f0] to-[#faf8f6] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(45, 90, 77, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(197, 154, 109, 0.1) 0%, transparent 40%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <p className="text-xs md:text-sm font-semibold text-[#c59a6d] tracking-widest uppercase mb-4 opacity-80">
            Frequently Asked
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-tight text-balance">
            You ask,
            <br />
            we answer
          </h2>
        </div>

        <div className="space-y-4 md:space-y-3">
          {faqItems.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl flex items-center justify-between hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-[#c59a6d]/20 group"
                style={{ backgroundColor: "#fef6e8" }}
              >
                <h3
                  className="text-lg md:text-xl font-bold text-left flex-1 group-hover:text-[#c59a6d] transition-colors duration-300"
                  style={{ color: "#3B001B", fontFamily: "Oswald" }}
                >
                  {item.question}
                </h3>
                <div
                  className="flex-shrink-0 ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#2d5a4d" }}
                >
                  {expandedId === item.id ? (
                    <ChevronUp size={24} style={{ color: "#fef6e8" }} />
                  ) : (
                    <ChevronDown size={24} style={{ color: "#fef6e8" }} />
                  )}
                </div>
              </button>

              {expandedId === item.id && (
                <div className="mt-3 md:mt-4 ml-4 md:ml-8 mr-4 md:mr-0 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div
                    className="rounded-2xl font-oswald p-6 md:p-7 text-sm md:text-base leading-relaxed border border-[#2d5a4d]/20 backdrop-blur-sm"
                    style={{ backgroundColor: "#f0ebe6", color: "#3B001B" }}
                  >
                    {item.answer}
                  </div>
                </div>
              )}
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
