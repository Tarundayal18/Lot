





// "use client"

// import type React from "react"
// import { useState } from "react"

// export default function HeroSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const data = {
//       access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
//       ...formData,
//     }

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     })

//     const result = await res.json()
//     if (result.success) {
//       alert("Message sent successfully!")
//       setFormData({ name: "", email: "", phone: "", message: "" })
//       setIsModalOpen(false)
//     } else {
//       alert("Something went wrong. Please try again.")
//     }
//   }

//   const handleScrollToCalculator = () => {
//     const calculatorSection = document.getElementById("investment-calculator")
//     if (calculatorSection) {
//       calculatorSection.scrollIntoView({ behavior: "smooth" })
//     } else {
//       setIsModalOpen(true)
//     }
//   }

//   const cards = [
//     {
//       id: 1,
//       title: "Zero Franchise Fee",
//       text: "No upfront franchise fees mean more capital to invest directly into your store and inventory.",
//       image: "/Link02.png",
//       icon: "💰",
//     },
//     {
//       id: 2,
//       title: "High Profit Margins",
//       text: "Benefit from an industry-leading 45% margin on our fast-selling, high-demand products.",
//       image: "/Link (1).png",
//       icon: "📈",
//     },
//     {
//       id: 3,
//       title: "Curated Product Advantage",
//       text: "Leverage 4 years of expertise in sourcing trendy, high-quality, and affordable products.",
//       image: "/Link (6).png",
//       icon: "⭐",
//     },
//     {
//       id: 4,
//       title: "Full-Spectrum Support",
//       text: "Comprehensive training and ongoing support from initial setup to daily operations.",
//       image: "/Link.png",
//       icon: "🤝",
//     },
//   ]

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500" />
//           <div
//             className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
//             style={{ animationDelay: "0s" }}
//           />
//           <div
//             className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
//             style={{ animationDelay: "2s" }}
//           />
//           <div
//             className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"
//             style={{ animationDelay: "4s" }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-8 animate-fade-in-up flex flex-col items-center">
//           <div className="mb-8 md:mb-12 animate-bounce-gentle">
//             <div className="relative w-32 h-32 md:w-40 md:h-40">
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-pink-300 rounded-full blur-2xl opacity-50" />
//               <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-purple-800 p-3 shadow-2xl">
//                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                   <img
//                     src="/reallogo.png"
//                     alt="Little Other Things Logo"
//                     className="w-24 h-24 md:w-32 md:h-32 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h1 className="font-oswald text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-3 md:mb-4 tracking-tight drop-shadow-lg">
//             Unlock High Returns
//           </h1>
//           <h2 className="font-oswald text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent leading-tight mb-3 md:mb-4 tracking-tight drop-shadow-lg">
//             with Low Investment
//           </h2>
//           <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 leading-tight mb-6 md:mb-8 tracking-tight">
//             Your Path to Retail Success Starts Here
//           </h3>

//           <p className="text-base md:text-lg text-white/90 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
//             Partner with Little Other Things and capitalize on the booming demand for curated, adorable lifestyle
//             products. Zero franchise fees, high margins, and complete support.
//           </p>

//           <button
//             onClick={handleScrollToCalculator}
//             className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yellow-300 to-yellow-200 text-purple-900 rounded-full font-oswald font-bold text-lg md:text-xl hover:from-yellow-200 hover:to-yellow-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 shadow-lg"
//           >
//             Know Your Investment
//           </button>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-gentle">
//           <svg className="w-7 h-7 text-yellow-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </section>

//       <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-purple-50 via-white to-yellow-50 relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 opacity-5 pointer-events-none">
//           <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-purple-300 blur-3xl" />
//           <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-yellow-300 blur-3xl" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
//             <p className="text-sm md:text-base font-bold text-purple-600 mb-2 tracking-widest uppercase">
//               Why Choose Us
//             </p>
//             <h2 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-4">
//               Everything You Need for Success
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {cards.map((card, index) => (
//               <div
//                 key={card.id}
//                 className="group relative rounded-3xl overflow-hidden h-full min-h-96 cursor-pointer animate-fade-in-up hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white border-2 border-purple-200 hover:border-yellow-400"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Card image background */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <img
//                     src={card.image || "/placeholder.svg"}
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
//                   />
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-800/70 to-purple-600/30 opacity-75 group-hover:opacity-85 transition-opacity duration-300" />

//                 {/* Content container */}
//                 <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
//                   <div className="text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-300">
//                     {card.icon}
//                   </div>

//                   {/* Bottom content */}
//                   <div className="transform group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-300 transition-colors duration-300">
//                       {card.title}
//                     </h3>
//                     <p className="text-white/95 text-sm md:text-base leading-relaxed opacity-95 group-hover:opacity-100 transition-opacity font-light mb-4">
//                       {card.text}
//                     </p>

//                     <div className="flex items-center gap-3 text-yellow-300 group-hover:translate-x-3 transition-all duration-300 font-semibold">
//                       <span>Learn More</span>
//                       <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-pulse" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-up">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-fade-in-up">
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-3 h-3 rounded-full bg-purple-600" />
//               <h2 className="font-oswald text-3xl font-bold text-purple-900">Know Your Investment</h2>
//             </div>
//             <p className="text-gray-600 mb-8 text-sm">Fill in your details to explore your investment potential</p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={3}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//               />

//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="flex-1 px-4 py-3 rounded-full border-2 border-purple-300 text-purple-900 font-oswald font-bold hover:bg-purple-100 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-oswald font-bold hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
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
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//         @keyframes bounce-gentle {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//         .animate-bounce-gentle {
//           animation: bounce-gentle 2s ease-in-out infinite;
//         }
//         @keyframes float-slow {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(1deg);
//           }
//         }
//         .animate-float-slow {
//           animation: float-slow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   )
// }






// "use client"

// import type React from "react"
// import { useState } from "react"

// export default function HeroSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     const data = {
//       access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
//       ...formData,
//     }

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     })

//     const result = await res.json()
//     if (result.success) {
//       alert("Message sent successfully!")
//       setFormData({ name: "", email: "", phone: "", message: "" })
//       setIsModalOpen(false)
//     } else {
//       alert("Something went wrong. Please try again.")
//     }
//   }

//   const handleScrollToCalculator = () => {
//     const calculatorSection = document.getElementById("investment-calculator")
//     if (calculatorSection) {
//       calculatorSection.scrollIntoView({ behavior: "smooth" })
//     } else {
//       setIsModalOpen(true)
//     }
//   }

//   const cards = [
//     {
//       id: 1,
//       title: "Zero Franchise Fee",
//       text: "No upfront franchise fees mean more capital to invest directly into your store and inventory.",
//       image: "/Link02.png",
//       icon: "💰",
//     },
//     {
//       id: 2,
//       title: "High Profit Margins",
//       text: "Benefit from an industry-leading 45% margin on our fast-selling, high-demand products.",
//       image: "/Link (1).png",
//       icon: "📈",
//     },
//     {
//       id: 3,
//       title: "Curated Product Advantage",
//       text: "Leverage 4 years of expertise in sourcing trendy, high-quality, and affordable products.",
//       image: "/Link (6).png",
//       icon: "⭐",
//     },
//     {
//       id: 4,
//       title: "Full-Spectrum Support",
//       text: "Comprehensive training and ongoing support from initial setup to daily operations.",
//       image: "/Link.png",
//       icon: "🤝",
//     },
//   ]

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
//         <div className="absolute inset-0 z-0">
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: 'url("/bg1.png")',
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           {/* Dark overlay for text readability */}
//           <div className="absolute inset-0  from-black/30 via-black/20 to-black/30" />
//           <div
//             className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"
//             style={{ animationDelay: "0s" }}
//           />
//           <div
//             className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"
//             style={{ animationDelay: "2s" }}
//           />
//           <div
//             className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"
//             style={{ animationDelay: "4s" }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-8 animate-fade-in-up flex flex-col items-center">
//           <div className="mb-8 md:mb-12 animate-bounce-gentle">
//             <div className="relative w-32 h-32 md:w-40 md:h-40">
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-pink-300 rounded-full blur-2xl opacity-50" />
//               <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-purple-800 p-3 shadow-2xl">
//                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                   <img
//                     src="/placeholder-logo.svg"
//                     alt="Little Other Things Logo"
//                     className="w-24 h-24 md:w-32 md:h-32 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h1 className="font-oswald text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-3 md:mb-4 tracking-tight drop-shadow-lg">
//             Unlock High Returns
//           </h1>
//           <h2 className="font-oswald text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent leading-tight mb-3 md:mb-4 tracking-tight drop-shadow-lg">
//             with Low Investment
//           </h2>
//           <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 leading-tight mb-6 md:mb-8 tracking-tight">
//             Your Path to Retail Success Starts Here
//           </h3>

//           <p className="text-base md:text-lg text-white/90 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
//             Partner with Little Other Things and capitalize on the booming demand for curated, adorable lifestyle
//             products. Zero franchise fees, high margins, and complete support.
//           </p>

//           <button
//             onClick={handleScrollToCalculator}
//             className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yellow-300 to-yellow-200 text-purple-900 rounded-full font-oswald font-bold text-lg md:text-xl hover:from-yellow-200 hover:to-yellow-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 shadow-lg"
//           >
//             Know Your Investment
//           </button>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-gentle">
//           <svg className="w-7 h-7 text-yellow-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </section>

//       <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-purple-50 via-white to-yellow-50 relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 opacity-5 pointer-events-none">
//           <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-purple-300 blur-3xl" />
//           <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-yellow-300 blur-3xl" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
//             <p className="text-sm md:text-base font-bold text-purple-600 mb-2 tracking-widest uppercase">
//               Why Choose Us
//             </p>
//             <h2 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-4">
//               Everything You Need for Success
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {cards.map((card, index) => (
//               <div
//                 key={card.id}
//                 className="group relative rounded-3xl overflow-hidden h-full min-h-96 cursor-pointer animate-fade-in-up hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white border-2 border-purple-200 hover:border-yellow-400"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Card image background */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <img
//                     src={card.image || "/placeholder.svg"}
//                     alt={card.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
//                   />
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-800/70 to-purple-600/30 opacity-75 group-hover:opacity-85 transition-opacity duration-300" />

//                 {/* Content container */}
//                 <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
//                   <div className="text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-300">
//                     {card.icon}
//                   </div>

//                   {/* Bottom content */}
//                   <div className="transform group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-300 transition-colors duration-300">
//                       {card.title}
//                     </h3>
//                     <p className="text-white/95 text-sm md:text-base leading-relaxed opacity-95 group-hover:opacity-100 transition-opacity font-light mb-4">
//                       {card.text}
//                     </p>

//                     <div className="flex items-center gap-3 text-yellow-300 group-hover:translate-x-3 transition-all duration-300 font-semibold">
//                       <span>Learn More</span>
//                       <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-pulse" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-up">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-fade-in-up">
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-3 h-3 rounded-full bg-purple-600" />
//               <h2 className="font-oswald text-3xl font-bold text-purple-900">Know Your Investment</h2>
//             </div>
//             <p className="text-gray-600 mb-8 text-sm">Fill in your details to explore your investment potential</p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={3}
//                 className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//               />

//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="flex-1 px-4 py-3 rounded-full border-2 border-purple-300 text-purple-900 font-oswald font-bold hover:bg-purple-100 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-oswald font-bold hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
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
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//         @keyframes bounce-gentle {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//         .animate-bounce-gentle {
//           animation: bounce-gentle 2s ease-in-out infinite;
//         }
//         @keyframes float-slow {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(1deg);
//           }
//         }
//         .animate-float-slow {
//           animation: float-slow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   )
// }


"use client"
import type React from "react"
import { useState } from "react"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
      ...formData,
    }
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await res.json()
    if (result.success) {
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsModalOpen(false)
    } else {
      alert("Something went wrong. Please try again.")
    }
  }

  const handleScrollToCalculator = () => {
    const calculatorSection = document.getElementById("investment-calculator")
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" })
    } else {
      setIsModalOpen(true)
    }
  }

  const cards = [
    {
      id: 1,
      title: "Zero Franchise Fee",
      text: "No upfront franchise fees mean more capital to invest directly into your store and inventory.",
      image: "/Success/link1.png",
      icon: "💰",
    },
    {
      id: 2,
      title: "High Profit Margins",
      text: "Benefit from an industry-leading 45% margin on our fast-selling, high-demand products.",
      image: "/Success/link2.png",
      icon: "📈",
    },
    {
      id: 3,
      title: "Curated Product Advantage",
      text: "Leverage 4 years of expertise in sourcing trendy, high-quality, and affordable products.",
      image: "/Success/link3.png",
      icon: "⭐",
    },
    {
      id: 4,
      title: "Full-Spectrum Support",
      text: "Comprehensive training and ongoing support from initial setup to daily operations.",
      image: "/Success/link4.png",
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
              backgroundImage: 'url("/bg4.png")',
              backgroundSize: "60%",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
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
                    className="w-54 h-54 md:w-72 md:h-72 object-cover"
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

          <p className="text-base md:text-lg text-white mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Partner with Little Other Things and capitalize on the booming demand for curated, adorable lifestyle
            products. Zero franchise fees, high margins, and complete support.
          </p>

          <button
            onClick={handleScrollToCalculator}
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

      <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-purple-50 via-white to-yellow-50 relative overflow-hidden">
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
                className="group relative rounded-3xl overflow-hidden h-full min-h-96 cursor-pointer animate-fade-in-up hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-purple-300 hover:border-yellow-300"
                style={{
                  backgroundColor: "#7a33e6",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* TOP IMAGE SECTION */}
                <div className="w-full h-40 overflow-hidden flex justify-center items-center pt-6">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* CONTENT CONTAINER - Bottom section */}
                <div className="flex flex-col justify-end h-full p-6 md:p-7">
                  <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-300 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-white/90 text-sm md:text-base leading-relaxed font-light mb-4 flex-grow">
                    {card.text}
                  </p>

                  <div className="flex items-center gap-3 text-yellow-300 group-hover:translate-x-3 transition-all duration-300 font-semibold">
                    <span>Learn More</span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Subtle hover shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-600" />
              <h2 className="font-oswald text-3xl font-bold text-purple-900">Know Your Investment</h2>
            </div>
            <p className="text-gray-600 mb-8 text-sm">Fill in your details to explore your investment potential</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
              />

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 rounded-full border-2 border-purple-300 text-purple-900 font-oswald font-bold hover:bg-purple-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-oswald font-bold hover:from-purple-700 hover:to-purple-800 transition-all hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
