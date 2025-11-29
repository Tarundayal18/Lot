"use client";
import React from "react";
import Image from "next/image";

export default function AnimatedIconsSection() {
  // Using 16 images instead of emoji icons
  const icons = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/animations/${i + 1}.png`,
  }));

  const stats = [
    { number: "9", suffix: "+", label: "years of experience" },
    { number: "60", suffix: "+", label: "brands launched" },
    { number: "1000", suffix: "+", label: "projects delivered" },
    { number: "98", suffix: "%", label: "On Time Guarantee" },
  ];

  return (
    <section
      className="relative px-4 py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #C0F2B8 0%, #C1F2F5 100%)",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(180deg, #C0F2B8 0%, #C1F2F5 100%)
        `,
        backgroundSize: "12px 12px, 12px 12px, 100% 100%",
      }}
    >
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="text-5xl font-bold text-[#3b001b] md:text-7xl lg:text-8xl">
             Products Our 
            <br />
            <span className="relative inline-block">
              Brand Sells
            
            </span>
          </h2>
        </div>

        {/* Animated Floating Icons */}
        <div className="mb-16 md:mb-20 lg:mb-24 min-h-44 md:min-h-52 lg:min-h-64 flex items-center overflow-hidden">
          <div
            className="flex gap-8 md:gap-10 lg:gap-12 mt-8 animate-snake-scroll-slow"
            // slower version of the scroll animation
          >
            {[...Array(3)].map((_, repeatIndex) =>
              icons.map((icon, index) => (
                <div
                  key={`${icon.id}-${repeatIndex}`}
                  className={`flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-3xl overflow-hidden bg-white shadow-lg animate-float-${
                    index % 4
                  }`}
                  style={{
                    animationDelay: `${index * 0.25}s`,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={`icon-${icon.id}`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-4xl bg-[#f6c2f4] px-6 py-5 md:px-8 md:py-5 lg:px-12 lg:py-5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#3b001b] md:text-5xl lg:text-6xl">
                  {stat.number}
                  <span className="text-[#ff7081]">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#3b001b] md:mt-3 md:text-base lg:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom slower animation keyframes */}
      <style jsx>{`
        @keyframes snake-scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-snake-scroll-slow {
          animation: snake-scroll-slow 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
