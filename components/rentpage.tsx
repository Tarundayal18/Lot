

// "use client"
// import { useState } from "react"
// import type React from "react"

// import { ChevronDown } from "lucide-react"

// export default function InvestmentCalculator() {
//   const [userInputs, setUserInputs] = useState({
//     city: "",
//     size: "",
//     rent: "",
//   })

//   const [popupData, setPopupData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     agree: false,
//   })

//   const [showModal, setShowModal] = useState(false)
//   const [showResult, setShowResult] = useState(false)
//   const [isCalculating, setIsCalculating] = useState(false)

//   const handleUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
//   }

//   const handlePopupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setPopupData({
//       ...popupData,
//       [name]: type === "checkbox" ? checked : value,
//     })
//   }

//   const handleInitialSubmit = () => {
//     if (!userInputs.city || !userInputs.size || !userInputs.rent) {
//       alert("Please fill all fields!")
//       return
//     }
//     setShowModal(true)
//   }

//   const handleFinalSubmit = () => {
//     if (!popupData.name || !popupData.email || !popupData.phone || !popupData.agree) {
//       alert("Please complete all details and agree to terms!")
//       return
//     }
//     setShowModal(false)
//     setIsCalculating(true)
//     setTimeout(() => {
//       setIsCalculating(false)
//       setShowResult(true)
//     }, 1500)
//   }

//   const rent = Number(userInputs.rent)
//   const revenueMultiplier = 8
//   const expectedRevenue = rent * revenueMultiplier
//   const initialInventoryMRP = expectedRevenue * 3
//   const grossMargin = 0.45
//   const inventoryCost = initialInventoryMRP * (1 - grossMargin)
//   const size = userInputs.size
//   let staffCount = 1
//   if (size === "250-500") staffCount = 2
//   if (size === "500+") staffCount = 3
//   const staffCost = staffCount * 15000
//   const utilities = 8000
//   const totalOpex = staffCost + rent + utilities
//   const interiors = rent * 4
//   const branding = rent * 4
//   const misc = 50000
//   const rentalDeposit = rent * 3
//   const totalCapex = interiors + branding + misc + rentalDeposit
//   const capexPlusInventory = totalCapex + inventoryCost
//   const grossProfit = expectedRevenue * grossMargin
//   const netProfit = grossProfit - totalOpex
//   const roiMonths = Math.round(capexPlusInventory / netProfit)

//   return (
//     <section className="w-full px-4 py-16 md:py-24 lg:py-28 bg-gradient-to-b from-purple-100 via-purple-50 to-yellow-50 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div
//           className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
//           style={{
//             background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="max-w-3xl mx-auto relative z-10">
//         <div className="text-center mb-12 md:mb-16">
//           <p className="text-xs md:text-sm font-semibold text-purple-600 tracking-widest uppercase mb-4 opacity-80">
//             Financial Planning
//           </p>
//           <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-900 mb-4">Investment Calculator</h2>
//           <p className="text-base md:text-lg text-gray-600 opacity-80">
//             Calculate your investment plan for a Little Other Things franchise
//           </p>
//         </div>

//         <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border-2 border-purple-300 mb-8 animate-fade-in-up">
//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-purple-900 mb-3">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="Enter your city"
//                 className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//                 onChange={handleUserChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-purple-900 mb-3">Shop Size</label>
//               <div className="relative">
//                 <select
//                   name="size"
//                   className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none transition-colors appearance-none bg-purple-50"
//                   onChange={handleUserChange}
//                 >
//                   <option value="">Select shop size</option>
//                   <option value="100">100 sqft</option>
//                   <option value="150-250">150-250 sqft</option>
//                   <option value="250-500">250-500 sqft</option>
//                   <option value="500+">Above 500 sqft</option>
//                 </select>
//                 <ChevronDown
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 pointer-events-none"
//                   size={20}
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-purple-900 mb-3">Monthly Rent (₹)</label>
//               <input
//                 type="number"
//                 name="rent"
//                 placeholder="Enter monthly rent"
//                 className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
//                 onChange={handleUserChange}
//               />
//             </div>
//             <button
//               onClick={handleInitialSubmit}
//               className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-8"
//             >
//               Calculate Investment Plan
//             </button>
//           </div>
//         </div>

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 animate-fade-in-up">
//             <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl border-2 border-purple-300">
//               <h2 className="text-2xl font-bold mb-6 text-purple-900">Enter Your Details</h2>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none bg-purple-50"
//                   onChange={handlePopupChange}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email ID"
//                   className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none bg-purple-50"
//                   onChange={handlePopupChange}
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none bg-purple-50"
//                   onChange={handlePopupChange}
//                 />
//                 <label className="flex items-center gap-3 text-sm text-gray-600">
//                   <input
//                     type="checkbox"
//                     name="agree"
//                     className="w-4 h-4 rounded cursor-pointer"
//                     onChange={handlePopupChange}
//                   />
//                   I agree to be contacted for discussion
//                 </label>
//                 <button
//                   onClick={handleFinalSubmit}
//                   className="w-full bg-gradient-to-r from-purple-600 to-yellow-400 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-4"
//                 >
//                   Submit & View Calculation
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {isCalculating && (
//           <div className="text-center py-16 animate-fade-in-up">
//             <div className="inline-block">
//               <div className="w-12 h-12 rounded-full border-4 border-purple-300 border-t-purple-600 animate-spin mb-4" />
//               <p className="text-lg font-semibold text-purple-900">Calculating your investment plan...</p>
//             </div>
//           </div>
//         )}

//         {showResult && (
//           <div className="space-y-4 animate-fade-in-up">
//             <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border-2 border-purple-300">
//               <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-900">Investment Calculation Results</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border border-purple-300">
//                   <p className="text-sm text-gray-600 mb-1">City</p>
//                   <p className="text-lg font-bold text-purple-900">{userInputs.city}</p>
//                 </div>
//                 <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border border-purple-300">
//                   <p className="text-sm text-gray-600 mb-1">Monthly Rent</p>
//                   <p className="text-lg font-bold text-purple-900">₹{rent.toLocaleString()}</p>
//                 </div>
//                 <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg border-2 border-yellow-300">
//                   <p className="text-sm text-gray-600 mb-1">Expected Revenue</p>
//                   <p className="text-lg font-bold text-yellow-600">₹{expectedRevenue.toLocaleString()}</p>
//                 </div>
//                 <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border-2 border-purple-400">
//                   <p className="text-sm text-gray-600 mb-1">Net Profit/Month</p>
//                   <p className="text-lg font-bold text-purple-700">₹{netProfit.toLocaleString()}</p>
//                 </div>
//                 <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border border-purple-300">
//                   <p className="text-sm text-gray-600 mb-1">CAPEX + Inventory</p>
//                   <p className="text-lg font-bold text-purple-900">₹{capexPlusInventory.toLocaleString()}</p>
//                 </div>
//                 <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg border-2 border-yellow-300">
//                   <p className="text-sm text-gray-600 mb-1">ROI (Payback Time)</p>
//                   <p className="text-lg font-bold text-yellow-600">{roiMonths} Months</p>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => {
//                 setShowResult(false)
//                 setUserInputs({ city: "", size: "", rent: "" })
//               }}
//               className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all"
//             >
//               Calculate Again
//             </button>
//           </div>
//         )}
//       </div>

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
//       `}</style>
//     </section>
//   )
// }



"use client"
import { useState } from "react"

import { ChevronDown } from "lucide-react"

export default function InvestmentCalculator() {
  const [userInputs, setUserInputs] = useState({
    city: "",
    size: "",
    rent: "",
  })

  const [popupData, setPopupData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  })

  const [showModal, setShowModal] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleUserChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
  }

  const handlePopupChange = (e) => {
    const { name, value, type, checked } = e.target
    setPopupData({
      ...popupData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleInitialSubmit = () => {
    if (!userInputs.city || !userInputs.size || !userInputs.rent) {
      alert("Please fill all fields!")
      return
    }
    setShowModal(true)
  }

  const handleFinalSubmit = () => {
    if (!popupData.name || !popupData.email || !popupData.phone || !popupData.agree) {
      alert("Please complete all details and agree to terms!")
      return
    }
    setShowModal(false)
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
      setShowResult(true)
    }, 1500)
  }

  const rent = Number(userInputs.rent)
  const revenueMultiplier = 8
  const expectedRevenue = rent * revenueMultiplier
  const initialInventoryMRP = expectedRevenue * 3
  const grossMargin = 0.45
  const inventoryCost = initialInventoryMRP * (1 - grossMargin)
  const size = userInputs.size
  let staffCount = 1
  if (size === "250-500") staffCount = 2
  if (size === "500+") staffCount = 3
  const staffCost = staffCount * 15000
  const utilities = 8000
  const totalOpex = staffCost + rent + utilities
  const interiors = rent * 4
  const branding = rent * 4
  const misc = 50000
  const rentalDeposit = rent * 3
  const totalCapex = interiors + branding + misc + rentalDeposit
  const capexPlusInventory = totalCapex + inventoryCost
  const grossProfit = expectedRevenue * grossMargin
  const netProfit = grossProfit - totalOpex
  const roiMonths = Math.round(capexPlusInventory / netProfit)

  return (
    <section className="w-full px-4 py-16 md:py-24 lg:py-28 bg-gradient-to-b from-purple-100 via-purple-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-purple-600 tracking-widest uppercase mb-4 opacity-80">
            Financial Planning
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-900 mb-4">Investment Calculator</h2>
          <p className="text-base md:text-lg text-gray-600 opacity-80">
            Calculate your investment plan for a Little Other Things franchise
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border-2 border-purple-300 mb-8 animate-fade-in-up">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-3">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
                onChange={handleUserChange}
                value={userInputs.city}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-3">Shop Size</label>
              <div className="relative">
                <select
                  name="size"
                  className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none transition-colors appearance-none bg-purple-50"
                  onChange={handleUserChange}
                  value={userInputs.size}
                >
                  <option value="">Select shop size</option>
                  <option value="100">100 sqft</option>
                  <option value="150-250">150-250 sqft</option>
                  <option value="250-500">250-500 sqft</option>
                  <option value="500+">Above 500 sqft</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 pointer-events-none"
                  size={20}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-3">Monthly Rent (₹)</label>
              <input
                type="number"
                name="rent"
                placeholder="Enter monthly rent"
                className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none transition-colors bg-purple-50"
                onChange={handleUserChange}
                value={userInputs.rent}
              />
            </div>
            <button
              onClick={handleInitialSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-8"
            >
              Calculate Investment Plan
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 animate-fade-in-up">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl border-2 border-purple-300">
              <h2 className="text-2xl font-bold mb-6 text-purple-900">Enter Your Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none bg-purple-50"
                  onChange={handlePopupChange}
                  value={popupData.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none bg-purple-50"
                  onChange={handlePopupChange}
                  value={popupData.email}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border-2 border-purple-300 p-3 rounded-lg focus:border-purple-600 focus:outline-none bg-purple-50"
                  onChange={handlePopupChange}
                  value={popupData.phone}
                />
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="agree"
                    className="w-4 h-4 rounded cursor-pointer"
                    onChange={handlePopupChange}
                    checked={popupData.agree}
                  />
                  I agree to be contacted for discussion
                </label>
                <button
                  onClick={handleFinalSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-yellow-400 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-4"
                >
                  Submit & View Calculation
                </button>
              </div>
            </div>
          </div>
        )}

        {isCalculating && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="inline-block">
              <div className="w-12 h-12 rounded-full border-4 border-purple-300 border-t-purple-600 animate-spin mb-4" />
              <p className="text-lg font-semibold text-purple-900">Calculating your investment plan...</p>
            </div>
          </div>
        )}

        {showResult && (
          <div className="space-y-4 animate-fade-in-up">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border-2 border-purple-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-900">Investment Calculation Results</h2>
              
              {/* Basic Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Shop Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border border-purple-300">
                    <p className="text-sm text-gray-600 mb-1">City</p>
                    <p className="text-lg font-bold text-purple-900">{userInputs.city}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border border-purple-300">
                    <p className="text-sm text-gray-600 mb-1">Shop Size</p>
                    <p className="text-lg font-bold text-purple-900">{userInputs.size} sqft</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg border border-purple-300">
                    <p className="text-sm text-gray-600 mb-1">Monthly Rent</p>
                    <p className="text-lg font-bold text-purple-900">₹{rent.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg border-2 border-yellow-300">
                    <p className="text-sm text-gray-600 mb-1">Expected Revenue/Month</p>
                    <p className="text-lg font-bold text-yellow-700">₹{expectedRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Inventory Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg border border-blue-300">
                    <p className="text-sm text-gray-600 mb-1">Initial Inventory (MRP)</p>
                    <p className="text-lg font-bold text-blue-700">₹{initialInventoryMRP.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg border border-blue-300">
                    <p className="text-sm text-gray-600 mb-1">Initial Inventory (Cost)</p>
                    <p className="text-lg font-bold text-blue-700">₹{inventoryCost.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* CAPEX Breakdown */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Capital Expenditure (CAPEX)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg border border-green-300">
                    <p className="text-sm text-gray-600 mb-1">Interiors & Fixtures</p>
                    <p className="text-lg font-bold text-green-700">₹{interiors.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg border border-green-300">
                    <p className="text-sm text-gray-600 mb-1">Branding & Setup</p>
                    <p className="text-lg font-bold text-green-700">₹{branding.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg border border-green-300">
                    <p className="text-sm text-gray-600 mb-1">Misc (Licensing, Brokerage)</p>
                    <p className="text-lg font-bold text-green-700">₹{misc.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg border border-green-300">
                    <p className="text-sm text-gray-600 mb-1">Rental Deposit</p>
                    <p className="text-lg font-bold text-green-700">₹{rentalDeposit.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-200 to-green-100 rounded-lg border-2 border-green-400 md:col-span-2">
                    <p className="text-sm text-gray-700 mb-1 font-semibold">Total CAPEX</p>
                    <p className="text-xl font-bold text-green-800">₹{totalCapex.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* OPEX Breakdown */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Monthly Operational Expenses (OPEX)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg border border-orange-300">
                    <p className="text-sm text-gray-600 mb-1">Staff Cost ({staffCount} staff)</p>
                    <p className="text-lg font-bold text-orange-700">₹{staffCost.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg border border-orange-300">
                    <p className="text-sm text-gray-600 mb-1">Rent</p>
                    <p className="text-lg font-bold text-orange-700">₹{rent.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg border border-orange-300">
                    <p className="text-sm text-gray-600 mb-1">Other Utilities</p>
                    <p className="text-lg font-bold text-orange-700">₹{utilities.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg border-2 border-orange-400">
                    <p className="text-sm text-gray-700 mb-1 font-semibold">Total OPEX</p>
                    <p className="text-xl font-bold text-orange-800">₹{totalOpex.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Profit & Loss */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Monthly Profit & Loss</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg border border-yellow-300">
                    <p className="text-sm text-gray-600 mb-1">Revenue</p>
                    <p className="text-lg font-bold text-yellow-700">₹{expectedRevenue.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg border border-yellow-300">
                    <p className="text-sm text-gray-600 mb-1">Gross Profit (45% margin)</p>
                    <p className="text-lg font-bold text-yellow-700">₹{grossProfit.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg border border-yellow-300">
                    <p className="text-sm text-gray-600 mb-1">Operational Expenses</p>
                    <p className="text-lg font-bold text-yellow-700">₹{totalOpex.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-lg border-2 border-yellow-400">
                    <p className="text-sm text-gray-700 mb-1 font-semibold">Net Profit/Month</p>
                    <p className="text-xl font-bold text-yellow-800">₹{netProfit.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Final ROI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg border-2 border-purple-400">
                  <p className="text-sm text-gray-700 mb-2 font-semibold">Total Investment (CAPEX + Inventory)</p>
                  <p className="text-2xl font-bold text-purple-900">₹{capexPlusInventory.toLocaleString()}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-300 to-green-200 rounded-lg border-2 border-green-500">
                  <p className="text-sm text-gray-800 mb-2 font-semibold">ROI (Payback Time)</p>
                  <p className="text-2xl font-bold text-green-900">{roiMonths} Months</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setShowResult(false)
                setUserInputs({ city: "", size: "", rent: "" })
                setPopupData({ name: "", email: "", phone: "", agree: false })
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Calculate Again
            </button>
          </div>
        )}
      </div>

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
      `}</style>
    </section>
  )
}