
"use client"

import { TrendingUp, Zap, Award, Users } from "lucide-react"

const comparisonData = [
  {
    id: "lot",
    name: "LOT",
    features: [
      { name: "Franchisee Fees", value: "Zero" },
      { name: "Profit Margin", value: "45%" },
      { name: "Inventory Movement", value: "Fast" },
      { name: "Dead Stock", value: "Near Zero" },
      { name: "Operational Support", value: "100%" },
      { name: "Store Design Help", value: "100%" },
      { name: "Marketing", value: "Central" },
      { name: "POS", value: "Mobile Based" },
    ],
  },
  {
    id: "others",
    name: "Others",
    features: [
      { name: "Franchisee Fees", value: "High" },
      { name: "Profit Margin", value: "Low" },
      { name: "Inventory Movement", value: "Slow" },
      { name: "Dead Stock", value: "High" },
      { name: "Operational Support", value: "Limited" },
      { name: "Store Design Help", value: "Limited" },
      { name: "Marketing", value: "Self" },
      { name: "POS", value: "System Based" },
    ],
  },
]

export default function ComparisonSection() {
  const features = comparisonData[0].features.map((f) => f.name)

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-100 via-yellow-50 to-purple-100">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with Title and Logo Carousel */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className=" text-5xl md:text-7xl font-bold text-purple-900 font-bold  text-gray-900 mb-4 text-balance leading-tight">
              How Are We Better?
            </h1>
            <p className="text-1xl md:text-2xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">
              Compare us with other franchise brands. See why we're the smarter choice for entrepreneurs.
            </p>
          </div>

          {/* Logo Section with Animation */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 py-8 px-4 bg-white bg-opacity-60 rounded-2xl backdrop-blur-sm border border-white border-opacity-40 shadow-lg">
            {[
              { icon: Award, label: "Industry Leader" },
              { icon: TrendingUp, label: "45% Profit" },
              { icon: Zap, label: "Fast Moving" },
              { icon: Users, label: "Full Support" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 animate-bounce-slow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #ffef7e, #7b33e6)' }}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <img src="/reallogo01.jpg" alt="LOT Logo" className="w-16 h-16 object-contain animate-bounce" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {/* Feature Column */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden linear-gradient(to right, #ffef7e, #7b33e6)">
            <div className="px-8 py-6 bg-gradient-to-r from-yellow-100 via-purple-100 to-yellow-100 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Features</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`px-8 py-4 font-semibold text-gray-900 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Columns */}
          {comparisonData.map((column, colIdx) => (
            <div
              key={column.id}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(colIdx + 1) * 100}ms` }}
            >
              <div className="px-8 py-6 text-white" style={{ background: column.id === 'lot' ? '#7b33e6' : '#7b33e6' }}>
                <h3 className="text-2xl font-bold text-center">{column.name}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {column.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`px-8 py-4 text-center font-semibold text-gray-900 ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {feature.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Comparison Table */}
        <div className="lg:hidden overflow-x-auto rounded-xl shadow-lg border-2 border-gray-200">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-purple-100 via-yellow-50 to-purple-100">
                <th className="px-4 py-4 text-left font-bold text-gray-900">Features</th>
                {comparisonData.map((column) => (
                  <th key={column.id} className="px-4 py-4 text-center font-bold text-gray-900">
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-gray-200 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-purple-50 transition-colors`}
                >
                  <td className="px-4 py-4 text-gray-900 font-semibold text-xs">{feature}</td>
                  {comparisonData.map((column) => {
                    const columnFeature = column.features.find((f) => f.name === feature)
                    return (
                      <td key={column.id} className="px-4 py-4 text-center font-semibold text-gray-800">
                        {columnFeature?.value}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}