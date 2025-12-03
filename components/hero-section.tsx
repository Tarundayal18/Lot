"use client"
import type React from "react"

export default function HeroSection() {

  const cards = [
    {
      id: 1,
      title: "Zero Franchise Fee",
      text: "No upfront franchise fees mean more capital to invest directly into your store and inventory.",
      image: "/Success/link01.png",
      icon: "💰",
    },
    {
      id: 2,
      title: "High Profit Margins",
      text: "Benefit from an industry-leading 45% margin on our fast-selling, high-demand products.",
      image: "/Success/link02.png",
      icon: "📈",
    },
    {
      id: 3,
      title: "Curated Product Advantage",
      text: "Leverage 4 years of expertise in sourcing trendy, high-quality, and affordable products.",
      image: "/Success/link03.png",
      icon: "⭐",
    },
    {
      id: 4,
      title: "Full-Spectrum Support",
      text: "Comprehensive training and ongoing support from initial setup to daily operations.",
      image: "/Success/link04.png",
      icon: "🤝",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/bg04.png")',
              backgroundSize: "60%",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
                      backgroundAttachment: "fixed",

              backgroundColor: "#7b33e6ff",
              opacity: 60
            }}
          />
          <div
            className="absolute inset-0"
            style={{

            }}
          />
          <div
            className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-8 animate-fade-in-up flex flex-col items-center mt-5">
          <div className="mb-8 md:mb-12 animate-bounce-gentle">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-pink-300 rounded-full blur-2xl opacity-50" />
              <div className="relative w-full h-full rounded-full ">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <img
                    src="/reallogo2.png"
                    alt="Little Other Things Logo"
                    className="w-74 h-74 md:w-100 md:h-100 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-oswald text-5xl md:text-6xl lg:text-8xl font-bold text-[#ffff14] leading-tight mb-0 tracking-tight drop-shadow-lg">
            Unlock High Returns
          </h1>
          <h2 className="font-oswald text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 md:mb-9 tracking-tight drop-shadow-lg">
            with Low Investment
          </h2>
          <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffff14] leading-tight mb-6 md:mb-8 tracking-tight">
            Your Path to Retail Success Starts Here
          </h3>

          <p className="text-base font-semibold md:text-lg text-white mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Partner with Little Other Things and capitalize on the booming demand for curated, adorable lifestyle
            products. Zero franchise fees, high margins, and complete support.
          </p>

         <button
  onClick={() => {
    const section = document.getElementById("rentpage");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yellow-300 to-yellow-200 text-purple-900 rounded-full font-oswald font-bold text-lg md:text-xl hover:from-yellow-200 hover:to-yellow-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 shadow-lg"
>
  Know Your Investment
</button>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-gentle">
          <svg className="w-7 h-7 text-yellow-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> */}
      </section>

      <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-purple-300 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-yellow-300 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
            <p className="text-sm md:text-base font-bold text-purple-600 mb-2 tracking-widest uppercase">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-4">
              Everything You Need for Success
            </h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  {cards.map((card, index) => (
    <div
      key={card.id}
      className="group relative rounded-3xl overflow-hidden h-full min-h-72 cursor-pointer animate-fade-in-up hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-purple-300 hover:border-yellow-300"
      style={{
        backgroundColor: "#7a33e6",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* TOP IMAGE SECTION */}
      <div className="w-full h-32 overflow-hidden flex justify-end items-start pt-6 pr-4">
        <img
          src={card.image || "/placeholder.svg"}
          alt={card.title}
          className="w-25 h-30 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div><br/>

      {/* CONTENT CONTAINER - Bottom aligned */}
      <div className="flex flex-col justify-end h-full p-4 md:p-5">
        <h3 className="font-oswald text-xl md:text-2xl font-bold text-white mb-1 leading-tight group-hover:text-yellow-300 transition-colors duration-300 text-left">
          {card.title}
        </h3>

        <p className="text-white/90 text-sm md:text-sm leading-relaxed font-light mb-2 text-left flex-grow">
          {card.text}
        </p>

        <div className="flex items-center gap-2 text-yellow-300 group-hover:translate-x-2 transition-all duration-300 font-semibold text-left">
          <span>Learn More</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>

      {/* Subtle hover shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent" />
    </div>
  ))}
</div>


        </div>
      </section>

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

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
