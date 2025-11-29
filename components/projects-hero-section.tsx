export default function ProjectsHeroSection() {
  return (
    <div className="relative bg-[#f9d8d6] pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-oswald text-5xl sm:text-6xl lg:text-8xl font-bold text-[#2b0012] mb-4">Our Projects</h1>
        <p className="font-oswald text-xl sm:text-1xl text-[#2b0012]">Check out some of our favorite work.</p>
      </div>

      {/* Wavy divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 sm:h-20 text-yellow-50"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" />
      </svg>
    </div>
  )
}
