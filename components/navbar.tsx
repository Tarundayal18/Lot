"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: "/", label: "Home" },
  ]

  // const handleNavigate = (path) => {
  //   setIsOpen(false)
  //   router.push(path)
  // }

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
      `}</style>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 w-full z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/mainlogo.png"
                alt="Studio Logo"
                width={120}
                height={40}
                className="object-contain mt-5"
              />
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-200 mt-6 hover:bg-[#c0ecbf] transition px-6 py-2 rounded-2xl font-oswald font-bold text-[#3D1A1F] text-2xl"
            >
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm animate-fade-in"></div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="max-w-8xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Image
                  src="/mainlogo.png"
                  alt="Studio Logo"
                  width={120}
                  height={40}
                  className="object-contain mt-5"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-green-200 mt-6 hover:bg-[#c0ecbf] transition px-6 py-2 rounded-2xl font-oswald font-bold text-[#2b0012] text-2xl"
                >
                  CLOSE
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex items-center justify-center px-4 py-8">
              <div className="w-full max-w-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {navLinks.map((item) => (
                    <div
                      key={item.href}
                      // onClick={() => handleNavigate(item.href)}
                      className="bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-200 rounded-full py-6 px-10 text-center font-oswald text-3xl italic text-gray-900 shadow-lg cursor-pointer"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
