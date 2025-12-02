

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
    <section className="w-full bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100  px-4 py-16 md:py-24 lg:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <p className="text-xs md:text-sm font-semibold text-purple-600 tracking-widest uppercase mb-4 opacity-80">
            Frequently Asked
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-purple-900 leading-tight text-balance">
            You ask, we answer
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
                className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl flex items-center justify-between hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm border-2 border-purple-300 hover:border-yellow-400 group bg-gradient-to-r from-purple-50 to-yellow-50"
              >
                <h3 className="text-lg md:text-xl font-bold text-left flex-1 group-hover:text-purple-700 transition-colors duration-300 text-purple-900 font-oswald">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-purple-600 to-purple-700">
                  {expandedId === item.id ? (
                    <ChevronUp size={24} className="text-white" />
                  ) : (
                    <ChevronDown size={24} className="text-white" />
                  )}
                </div>
              </button>

              {expandedId === item.id && (
                <div className="mt-3 md:mt-4 ml-4 md:ml-8 mr-4 md:mr-0 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="rounded-2xl font-oswald p-6 md:p-7 text-sm md:text-base leading-relaxed border-2 border-purple-200 backdrop-blur-sm bg-gradient-to-r from-purple-50 to-yellow-50 text-purple-900">
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
