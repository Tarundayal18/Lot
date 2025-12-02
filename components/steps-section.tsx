

// "use client"

// import Image from "next/image"
// import { useState } from "react"

// const stepsData = [
//   {
//     id: 1,
//     title: "Inquire & Connect",
//     description:
//       "Start by filling out our simple inquiry form. Our team will reach out to understand your aspirations and introduce you to the Little Other Things vision.",
//     imageSrc: "/Container.png",
//   },
//   {
//     id: 2,
//     title: "Location & Model Selection",
//     description:
//       "With our guidance, identify the ideal store location and choose the franchise model that best fits your goals and the local market potential.",
//     imageSrc: "/Container2.png",
//   },
//   {
//     id: 3,
//     title: "Setup & Training",
//     description:
//       "Receive comprehensive training on product knowledge, operations, and our mobile-based management software. We'll also provide design assistance to create that signature look.",
//     imageSrc: "/Container3.png",
//   },
//   {
//     id: 4,
//     title: "Launch & Success",
//     description:
//       "Stock your store with our expertly curated inventory. With centralized marketing and continuous product selection support, you're ready to open your doors and begin your profitable journey.",
//     imageSrc: "/Container4.png",
//   },
// ]

// export default function StepsSection() {
//   const [activeStep, setActiveStep] = useState(1)
//   const currentStep = stepsData.find((step) => step.id === activeStep)

//   return (
//     <section
//       className="w-full py-16 px-4 md:py-24 lg:py-28 min-h-screen flex relative overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #f5f3f0 0%, #faf8f6 50%, #f0ebe6 100%)",
//       }}
//     >
//       <div className="absolute inset-0 opacity-30 pointer-events-none">
//         <div
//           className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20"
//           style={{
//             background: "radial-gradient(circle, rgba(45, 90, 77, 0.4) 0%, transparent 70%)",
//             animation: "float 20s ease-in-out infinite",
//           }}
//         />
//         <div
//           className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-15"
//           style={{
//             background: "radial-gradient(circle, rgba(197, 154, 109, 0.3) 0%, transparent 70%)",
//             animation: "float 25s ease-in-out infinite reverse",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <div className="mb-16 md:mb-20 lg:mb-24 relative">
//           <p className="text-xs md:text-sm font-semibold text-[#c59a6d] tracking-widest uppercase mb-4 opacity-80">
//             Our Process
//           </p>
//           <h2 className="text-5xl md:text-7xl lg:text-8xl text-center font-oswald text-[#1a1a1a] font-bold leading-tight text-balance">
//             Our not-so
//             <br />
//             secret sauce
//           </h2>
//         </div>

//         <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/40">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
//             {/* Left content */}
//             <div className="order-2 md:order-1">
//               <div className="flex gap-3 mb-8 flex-wrap">
//                 {stepsData.map((step) => (
//                   <button
//                     key={step.id}
//                     onClick={() => setActiveStep(step.id)}
//                     className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-110 ${
//                       activeStep === step.id
//                         ? "bg-gradient-to-br from-[#2d5a4d] to-[#1f3f38] text-white shadow-lg"
//                         : "bg-[#f0ebe6] text-[#1a1a1a] border-2 border-[#c59a6d] hover:bg-[#fef6e8]"
//                     }`}
//                   >
//                     {step.id}
//                   </button>
//                 ))}
//               </div>

//               <h3 className="font-bold font-oswald text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-4 leading-tight animate-fade-in">
//                 {currentStep?.title}
//               </h3>
//               <p className="text-[#666] text-base md:text-lg leading-relaxed opacity-90 animate-fade-in">
//                 {currentStep?.description}
//               </p>
//             </div>

//             {/* Right illustration */}
//             <div className="order-1 md:order-2 relative h-64 md:h-80 lg:h-96">
//               <div
//                 key={`img-${activeStep}`}
//                 className="absolute inset-0 flex items-center justify-center animate-image-slide-in"
//               >
//                 <div className="relative w-full h-full flex items-center justify-center">
//                   <Image
//                     src={currentStep?.imageSrc || "/placeholder.svg"}
//                     alt={currentStep?.title || "Placeholder"}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes imageSlideIn {
//           0% {
//             opacity: 0;
//             transform: translateX(100px) scale(0.8) rotate(5deg);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0) scale(1) rotate(0deg);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-30px);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in-up 0.5s ease-out;
//         }

//         .animate-image-slide-in {
//           animation: imageSlideIn 0.7s ease-out;
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import { useState } from "react"

const stepsData = [
  {
    id: 1,
    title: "Inquire & Connect",
    description:
      "Start by filling out our simple inquiry form. Our team will reach out to understand your aspirations and introduce you to the Little Other Things vision.",
    imageSrc: "/oursecret/Container.png",
  },
  {
    id: 2,
    title: "Location & Model Selection",
    description:
      "With our guidance, identify the ideal store location and choose the franchise model that best fits your goals and the local market potential.",
    imageSrc: "/oursecret/Container2.png",
  },
  {
    id: 3,
    title: "Setup & Training",
    description:
      "Receive comprehensive training on product knowledge, operations, and our mobile-based management software. We'll also provide design assistance to create that signature look.",
    imageSrc: "/oursecret/Container3.png",
  },
  {
    id: 4,
    title: "Launch & Success",
    description:
      "Stock your store with our expertly curated inventory. With centralized marketing and continuous product selection support, you're ready to open your doors and begin your profitable journey.",
    imageSrc: "/oursecret/Container4.png",
  },
]

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = stepsData.find((step) => step.id === activeStep)

  return (
    <section
      className="w-full py-16 px-4 md:py-24 lg:py-28 min-h-screen flex relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f3e8ff 0%, #fef3c7 50%, #ede9fe 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)",
            animation: "float 25s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16 md:mb-20 lg:mb-24 relative">
          {/* <p className="text-xs md:text-sm font-semibold text-purple-600 tracking-widest uppercase mb-4 opacity-80">
            Our Process
          </p> */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-center font-oswald text-purple-900 font-bold leading-tight text-balance">
            Our not-so
            <br />
            secret sauce
          </h2>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border-2 border-purple-200/60 hover:border-yellow-300/50 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex gap-3 mb-8 flex-wrap">
                {stepsData.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${
                      activeStep === step.id
                        ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-300"
                        : "bg-yellow-100 text-purple-900 border-2 border-yellow-400 hover:bg-yellow-200 animate-bounce-gentle"
                    }`}
                  >
                    {step.id}
                  </button>
                ))}
              </div>

              <h3 className="font-bold font-oswald text-2xl md:text-3xl lg:text-4xl text-purple-900 mb-4 leading-tight animate-fade-in">
                {currentStep?.title}
              </h3>
              <p className="text-purple-700 text-base md:text-lg leading-relaxed opacity-90 animate-fade-in">
                {currentStep?.description}
              </p>
            </div>

            <div className="order-1 md:order-2 relative h-64 md:h-80 lg:h-96">
              <div
                key={`img-${activeStep}`}
                className="absolute inset-0 flex items-center justify-center animate-image-slide-in"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={currentStep?.imageSrc || "/placeholder.svg"}
                    alt={currentStep?.title || "Placeholder"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes imageSlideIn {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.8) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 0.5s ease-out;
        }

        .animate-image-slide-in {
          animation: imageSlideIn 0.7s ease-out;
        }
      `}</style>
    </section>
  )
}
