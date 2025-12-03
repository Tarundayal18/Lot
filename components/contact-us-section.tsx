// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Mail, Phone, MapPin, Send } from "lucide-react"

// export default function ContactUsSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     message: "",
//   })
//   const [submitted, setSubmitted] = useState(false)
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

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => setSubmitted(false), 3000)
//     setFormData({ name: "", email: "", phone: "", city: "", message: "" })
//   }

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+1 (555) 123-4567",
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       value: "hello@franchise.com",
//     },
//     {
//       icon: MapPin,
//       title: "Address",
//       value: "Multiple cities across India",
//     },
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #fafaf8 0%, #f0ede8 50%, #fafaf8 100%)",
//       }}
//     >
//       <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl -z-10" />
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//           linear-gradient(90deg, transparent 0%, transparent 48%, rgba(45, 90, 77, 0.03) 49%, rgba(45, 90, 77, 0.03) 51%, transparent 52%, transparent 100%),
//           linear-gradient(0deg, transparent 0%, transparent 48%, rgba(197, 154, 109, 0.03) 49%, rgba(197, 154, 109, 0.03) 51%, transparent 52%, transparent 100%)
//         `,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div
//           className={`mb-16 md:mb-24 text-center transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto mb-6" />
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             Ready to start your entrepreneurial journey? We'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//           <div
//             className={`transition-all duration-1000 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
//             }`}
//           >
//             <h3 className="font-oswald text-3xl md:text-4xl font-bold text-foreground mb-8">Contact Information</h3>

//             <div className="space-y-6 mb-12">
//               {contactInfo.map((info, index) => {
//                 const Icon = info.icon
//                 return (
//                   <div
//                     key={index}
//                     className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-white border border-border transition-all duration-500 hover:border-accent hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
//                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                     }`}
//                     style={{
//                       transitionDelay: isVisible ? `${0.3 + index * 0.1}s` : "0s",
//                     }}
//                   >
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

//                     <div className="flex items-start gap-4">
//                       <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent-secondary/10 group-hover:from-accent/20 group-hover:to-accent-secondary/20 flex items-center justify-center transition-all duration-300">
//                         <Icon className="w-6 h-6 text-accent" />
//                       </div>
//                       <div>
//                         <h4 className="font-oswald font-bold text-foreground mb-1 text-lg">{info.title}</h4>
//                         <p className="text-muted-foreground text-sm md:text-base">{info.value}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>

//             <div className="relative rounded-2xl p-8 overflow-hidden border border-border group hover:border-accent-secondary transition-all duration-300">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/5 to-accent/5 group-hover:from-accent-secondary/10 group-hover:to-accent/10 transition-all duration-300" />
//               <div className="relative z-10">
//                 <p className="text-foreground font-oswald font-bold mb-4 text-lg">Follow Us</p>
//                 <div className="flex flex-wrap gap-3">
//                   {["Instagram", "Facebook", "LinkedIn"].map((social, idx) => (
//                     <button
//                       key={social}
//                       className={`px-4 py-2 rounded-lg bg-accent/15 hover:bg-accent hover:text-white text-accent font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
//                         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                       }`}
//                       style={{
//                         transitionDelay: isVisible ? `${0.6 + idx * 0.1}s` : "0s",
//                       }}
//                     >
//                       {social}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className={`transition-all duration-1000 ${
//               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
//             }`}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-border group hover:border-accent transition-all duration-300"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-accent-secondary/5 group-hover:from-accent/8 group-hover:via-white group-hover:to-accent-secondary/8 transition-all duration-300" />
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-accent to-accent-secondary blur-2xl transition-all duration-300" />

//               <div className="relative z-10 space-y-6">
//                 {/* Name */}
//                 <div className="group/input">
//                   <label className="block font-oswald font-bold text-foreground mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="group/input">
//                   <label className="block font-oswald font-bold text-foreground mb-2">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="group/input">
//                   <label className="block font-oswald font-bold text-foreground mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
//                     placeholder="+1 (555) 000-0000"
//                   />
//                 </div>

//                 {/* City */}
//                 <div className="group/input">
//                   <label className="block font-oswald font-bold text-foreground mb-2">Your City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
//                     placeholder="City name"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div className="group/input">
//                   <label className="block font-oswald font-bold text-foreground mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none placeholder:text-muted-foreground"
//                     placeholder="Tell us about your interest..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground py-4 rounded-xl font-oswald font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
//                 >
//                   <span>{submitted ? "✓ Message Sent!" : "Send Message"}</span>
//                   {!submitted && <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", city: "", message: "" })
  }

  const contactInfo = [
    { icon: Phone, title: "Phone", value: "+91 70213 00299" },
    { icon: Mail, title: "Email", value: "hello@franchise.com" },
    { icon: MapPin, title: "Address", value: "Panvel, Navi Mumbai." },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100"
   
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl -z-10 animate-float-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, transparent 48%, rgba(168, 85, 247, 0.1) 49%, rgba(168, 85, 247, 0.1) 51%, transparent 52%, transparent 100%), linear-gradient(0deg, transparent 0%, transparent 48%, rgba(251, 191, 36, 0.1) 49%, rgba(251, 191, 36, 0.1) 51%, transparent 52%, transparent 100%)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-16 md:mb-24 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-purple-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-purple-700 max-w-2xl mx-auto">
            Ready to start your entrepreneurial journey? We love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h3 className="font-oswald text-3xl md:text-4xl font-bold text-purple-900 mb-8">Contact Information</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-white border-2 border-purple-300 transition-all duration-500 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${0.3 + index * 0.1}s` : "0s",
                    }}
                  >
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-yellow-100 group-hover:from-purple-200 group-hover:to-yellow-200 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-oswald font-bold text-purple-900 mb-1 text-lg">{info.title}</h4>
                        <p className="text-purple-700 text-sm md:text-base">{info.value}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative rounded-2xl p-8 overflow-hidden border-2 border-purple-300 group hover:border-yellow-400 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-yellow-100/50 group-hover:from-purple-100 group-hover:to-yellow-100 transition-all duration-300" />
              <div className="relative z-10">
                <p className="text-purple-900 font-oswald font-bold mb-4 text-lg">Follow Us</p>
                <div className="flex flex-wrap gap-3">
  {[
    {
      name: "Instagram",
      link: "https://www.instagram.com/littleotherthings_og?igsh=em1weDN3cTdidGpj",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/share/17u2vhUmQH/",
    },
  ].map((social, idx) => (
    <a
      key={social.name}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-lg bg-purple-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-yellow-500 text-purple-600 hover:text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-purple-300 hover:border-transparent ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: isVisible ? `${0.6 + idx * 0.1}s` : "0s",
      }}
    >
      {social.name}
    </a>
  ))}
</div>

              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl p-8 md:p-12 overflow-hidden border-2 border-purple-300 group hover:border-yellow-400 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-yellow-50 group-hover:from-purple-100 group-hover:via-white group-hover:to-yellow-100 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-purple-600 to-yellow-400 blur-2xl transition-all duration-300" />

              <div className="relative z-10 space-y-6">
                <div className="group/input">
                  <label className="block font-oswald font-bold text-purple-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 placeholder:text-purple-500 text-purple-900"
                    placeholder="Your name"
                  />
                </div>

                <div className="group/input">
                  <label className="block font-oswald font-bold text-purple-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 placeholder:text-purple-500 text-purple-900"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="group/input">
                  <label className="block font-oswald font-bold text-purple-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 placeholder:text-purple-500 text-purple-900"
                    placeholder="Number"
                  />
                </div>

                <div className="group/input">
                  <label className="block font-oswald font-bold text-purple-900 mb-2">Your City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 placeholder:text-purple-500 text-purple-900"
                    placeholder="City name"
                  />
                </div>

                <div className="group/input">
                  <label className="block font-oswald font-bold text-purple-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none placeholder:text-purple-500 text-purple-900"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-xl font-oswald font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group/btn border-2 border-purple-600 hover:border-yellow-400"
                >
                  <span>{submitted ? "✓ Message Sent!" : "Send Message"}</span>
                  {!submitted && <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
