"use client"

import { Play } from "lucide-react"

interface VideoTestimonial {
  id: number
  name: string
  title: string
  image: string
  bgColor: string
  borderColor: string
}

interface VideoTestimonialsProps {
  testimonials: VideoTestimonial[]
}

export default function VideoTestimonials({ testimonials }: VideoTestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  place-items-center w-full">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex flex-col items-center w-full max-w-[520px]"
        >
          {/* Video Card with Play Button */}
          <div
            className={`relative mb-2 overflow-hidden rounded-2xl border-8 ${testimonial.borderColor} bg-gray-200 w-[90%] sm:w-[85%] md:w-[100%] aspect-[16/9]`}
          >
            <img
              src={testimonial.image || "/macbook1.jpg"}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all hover:bg-black/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-110">
                <Play className="h-5 w-5 fill-gray-900 text-gray-900" />
              </div>
            </div>
          </div>

          {/* Name and Title Section */}
          <div
            className={`w-[90%] sm:w-[85%] md:w-[100%] rounded-full ${testimonial.bgColor} px-4 py-1 text-center`}
          >
            <h3 className="font-oswald text-sm font-bold text-[#3b001b] md:text-base">
              {testimonial.name}
            </h3>
            <p className="font-oswald text-[9px] uppercase tracking-wide text-[#3b001b] md:text-xs">
              {testimonial.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
