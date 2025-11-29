// 'use client'

// import { Suspense } from "react";
// import AnimatedIconsSection from "@/components/animated-icons-section";
// import ContactSection from "@/components/contact-section";
// import FaqSection from "@/components/faq-section";
// import FooterSection from "@/components/footer-section";
// import Navbar from "@/components/navbar";
// import ServicesSection from "@/components/services-section";
// import StepsSection from "@/components/steps-section";
// import Tesiminiols from "@/components/testiminiols";
// import { servicePageData } from "@/data/servicepageData";
// import { useSearchParams } from "next/navigation";
// import { useState  } from "react";
// import { useRouter } from "next/navigation";


// // STATIC SERVICE DATA (DEMO)
// const staticService = {
//   id: 1,
//   mainheading: "Unlock High Returns with Low Investment:",
//   mainheading2: "Your Path to a Thriving Retail Business Starts Here!",

//   subheading: " Partner with Little Other Things and capitalize on the booming demand for curated, adorable, and affordable lifestyle products. Zero franchise fees, high margins, and complete support.",
//   MainImage: "/services/demo-banner.jpg",

//   serviceCards: [
//     { description: "We create laser-focused, profitable Google Ads campaigns." },
//     { description: "We optimise for conversions, not just clicks or impressions." },
//     { description: "Brands waste budgets due to poor tracking & wrong keywords." },
//     { description: "We fix this with deep analytics, creative strategy & testing." },
//     { description: "You get higher ROI, more qualified leads, and predictable growth." }
//   ]
// };

//   const cards = [
//     {
//       id: 1,
//       title: "Zero Franchise Fee ",
//       text: "No upfront franchise fees mean more capital to invest directly into your store and inventory. We believe in your success and want to remove traditional barriers to entry, making it easier to start your entrepreneurial journey with Little Other Things.",
//       image: "/Link02.png",
//     },
//     {
//       id: 2,
//       title: "High Profit Margins",
//       text: "(45%) Benefit from an industry-leading 45% margin on our fast-selling, high-demand products. Our proven trading expertise ensures you stock what customers love, maximizing your profitability from day one.",

//       image: "/Link (1).png",
//     },
//     {
//       id: 3,
//       title: "Curated Product Advantage",
//       text: "Leverage our 4 years of expertise in sourcing trendy, high-quality, and affordable products directly from China. We know what sells, where it sells, and how to price it competitively, ensuring your store is always filled with irresistible cute products that drive impulse purchases.",

//       image: "/Link (6).png",
//     },
//     {
//       id: 4,
//       title: "Full-Spectrum",
//       text: "Support From initial setup to daily operations, we provide comprehensive training and ongoing support. Our experienced team will handhold you through every step, ensuring your store achieves profitability and sustained success.",

//       image: "/Link.png",
//     },
//   ];



// function MainServiceContent() {

//   const searchParams = useSearchParams();
//   const id = Number(searchParams.get("id")); // default 1 agar id na mile

//   const router = useRouter();
//    const handleCardClick = (id: number) => {
//     router.push(`/services/mainServices?id=${id}`);
//   };

// const service = staticService;

//   const [isModalOpen, setIsModalOpen] = useState(false)

//    // NEW ⭐ Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });


// const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // NEW ⭐ Web3Forms Submit Handler
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const data = {
//       access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
//       ...formData,
//     };

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();

//     if (result.success) {
//       alert("Message sent successfully!");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//       setIsModalOpen(false);
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   };


//   if (!service) {
//     return <p className="text-center text-xl py-10">Service not found</p>;
//   }

 

//   return (
//     <>
    
//       <main className="font-sans bg-white">
//         <Navbar />


//         {/* Hero Section with CTA */}
//         <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#f3f4f6] min-h-screen flex items-center">
//           <div className="max-w-6xl mx-auto text-center">
//             <div className="flex justify-center items-center gap-3 mb-8">

              
//             </div>
//             {/* Founder Avatars */}
//            <h1
//   style={{ letterSpacing: "-1px" }}
//   className="text-4xl font-oswald md:text-5xl lg:text-6xl font-bold text-[#3b001b] mb-3 leading-none"
// >
//   {service.mainheading}
// </h1>

            
//             <h1 className="text-2xl font-oswald md:text-3xl lg:text-5xl text-[#3b001b] mb-6 leading-tight">
//               {/* Google Ads that spend smart, not just spend more. */}
//               {service.mainheading2}

//             </h1>

//             <br />


//             {/* Subheading */}
//             <p className="text-lg font-oswald md:text-md text-[#3b001b] mb-10">
//               {/* We plan, create, and optimize search ad campaigns that drive real ROI. */}
//               {service.subheading}

//             </p>

//             {/* CTA Button */}
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-gray-900 font-oswald text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-gray-800 transition-colors text-base md:text-lg"
//               style={{
//                 backgroundColor: "#FFE680",
//                 color: "#3B001B",
//                 fontFamily: "Oswald",
//                 border: "3px solid #3B001B",
//                 boxShadow: "0 4px 0 #3B001B",
//               }}>
//               Know Your Investment 
//             </button>
//           </div>
//         </section>


// <section className="bg-stone-50 py-14 px-4 sm:px-8 lg:px-12">
//         <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               onClick={() => handleCardClick(card.id)}
//               className="relative w-full rounded-[2rem] overflow-hidden duration-300"
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-90 sm:h-96 lg:h-[24rem] object-cover"
//               />

//               <div className="absolute top-8 left-8 right-8 text-white">
//                 {/* Title: small increase */}
//                 <h2 className="
//     font-oswald font-bold
//     text-[2.2rem]
//     sm:text-[2.6rem]
//     lg:text-[2.8rem]
//     xl:text-[3.0rem]
//     leading-tight
//   "
//                 >{card.title}</h2>

//                 {/* Description: small increase */}
//                 <p className="
//     mt-3 font-oswald
//     text-[1rem]
//     sm:text-[1.1rem]
//     lg:text-[1.3rem]
//     xl:text-[1.5rem]
//     2xl:text-[1.6rem]
//     max-w-[90%]
//     leading-snug
//     mt-4
//   ">{card.text}</p>
//               </div>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleCardClick(card.id);
//                 }}
//                 className="absolute bottom-8 right-8 bg-white text-black rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition-transform"
//               >
//                 {/* Arrow: slight increase */}
//                 <span className="text-[1.4rem]">→</span>
//               </button>
//             </div>

//           ))}
//         </div>
//       </section>
//       </main>
//     </>
//   )
// }

// export default function HeroSection() {
//   return (
//     <Suspense fallback={<div className="text-center py-10 text-lg">Loading...</div>}>
//       <MainServiceContent />
//     </Suspense>
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

  const cards = [
    {
      id: 1,
      title: "Zero Franchise Fee",
      text: "No upfront franchise fees mean more capital to invest directly into your store and inventory.",
      image: "/Link02.png",
    },
    {
      id: 2,
      title: "High Profit Margins",
      text: "Benefit from an industry-leading 45% margin on our fast-selling, high-demand products.",
      image: "/Link (1).png",
    },
    {
      id: 3,
      title: "Curated Product Advantage",
      text: "Leverage 4 years of expertise in sourcing trendy, high-quality, and affordable products.",
      image: "/Link (6).png",
    },
    {
      id: 4,
      title: "Full-Spectrum Support",
      text: "Comprehensive training and ongoing support from initial setup to daily operations.",
      image: "/Link.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #fafaf8 0%, #f0ede8 50%, #e8e4dd 100%)",
            backgroundImage: `
              linear-gradient(135deg, #fafaf8 0%, #f0ede8 50%, #e8e4dd 100%),
              radial-gradient(circle at 20% 50%, rgba(45, 90, 77, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(197, 154, 109, 0.08) 0%, transparent 50%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-8 animate-fade-in-up">
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-8xl font-bold text-[#1a1a1a] leading-tight mb-6 tracking-tight">
            Unlock High Returns
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a4d] via-[#c59a6d] to-[#2d5a4d]">
              with Low Investment
            </span>
            <span className="block text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl">
              Your Path to Retail Success Starts Here
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#6b6b6b] mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            Partner with Little Other Things and capitalize on the booming demand for curated, adorable lifestyle
            products. Zero franchise fees, high margins, and complete support.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 md:px-10 py-3 md:py-4 bg-[#2d5a4d] text-white rounded-full font-oswald font-bold text-lg hover:bg-[#1a3a2a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Know Your Investment
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-[#2d5a4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#fafaf8] via-[#f5f3f0] to-[#f0ede8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="group relative rounded-2xl overflow-hidden h-80 md:h-96 lg:h-[28rem] cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div></div>
                  <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-white text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                      {card.text}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-[#c59a6d] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-lg font-bold">Learn More</span>
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-fade-in-up">
            <h2 className="font-oswald text-3xl font-bold text-[#1a1a1a] mb-2">Know Your Investment</h2>
            <p className="text-[#6b6b6b] mb-8 text-sm">Fill in your details to explore your investment potential</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d9d6d0] focus:border-[#2d5a4d] focus:outline-none transition-colors bg-[#f5f3f0]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d9d6d0] focus:border-[#2d5a4d] focus:outline-none transition-colors bg-[#f5f3f0]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#d9d6d0] focus:border-[#2d5a4d] focus:outline-none transition-colors bg-[#f5f3f0]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[#d9d6d0] focus:border-[#2d5a4d] focus:outline-none transition-colors bg-[#f5f3f0]"
              />

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 rounded-full border-2 border-[#d9d6d0] text-[#1a1a1a] font-oswald font-bold hover:border-[#2d5a4d] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 rounded-full bg-[#2d5a4d] text-white font-oswald font-bold hover:bg-[#1a3a2a] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
