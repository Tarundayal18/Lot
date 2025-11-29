// "use client";

// import { useState } from "react";

// export default function InvestmentCalculator() {
// const [userInputs, setUserInputs] = useState({
// city: "",
// size: "",
// rent: "",
// });

// const [popupData, setPopupData] = useState({
// name: "",
// email: "",
// phone: "",
// agree: false,
// });

// const [showModal, setShowModal] = useState(false);
// const [showResult, setShowResult] = useState(false);
// const [isCalculating, setIsCalculating] = useState(false);

// const handleUserChange = (e) => {
// setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
// };

// const handlePopupChange = (e) => {
// const { name, value, type, checked } = e.target;
// setPopupData({
// ...popupData,
// [name]: type === "checkbox" ? checked : value,
// });
// };

// const handleInitialSubmit = () => {
// if (!userInputs.city || !userInputs.size || !userInputs.rent) {
// alert("Please fill all fields!");
// return;
// }
// setShowModal(true);
// };

// const handleFinalSubmit = () => {
// if (!popupData.name || !popupData.email || !popupData.phone || !popupData.agree) {
// alert("Please complete popup details and agree to terms!");
// return;
// }

// setShowModal(false);
// setIsCalculating(true);

// setTimeout(() => {
//   setIsCalculating(false);
//   setShowResult(true);
// }, 1500);

// };

// // ------------------ CALCULATIONS ------------------

// const rent = Number(userInputs.rent);

// // Revenue Multiplier
// const revenueMultiplier = 8;

// // Expected Revenue
// const expectedRevenue = rent * revenueMultiplier;

// // Initial Inventory MRP = 3x revenue
// const initialInventoryMRP = expectedRevenue * 3;

// // Gross Margin
// const grossMargin = 0.45;

// // Inventory Cost
// const inventoryCost = initialInventoryMRP * (1 - grossMargin);

// // Staff Logic
// const size = userInputs.size;
// let staffCount = 1;
// if (size === "250-500") staffCount = 2;
// if (size === "500+") staffCount = 3;

// const staffCost = staffCount * 15000;

// // OPEX
// const utilities = 8000;
// const totalOpex = staffCost + rent + utilities;

// // CAPEX
// const interiors = rent * 4;
// const branding = rent * 4;
// const misc = 50000;
// const rentalDeposit = rent * 3;

// const totalCapex = interiors + branding + misc + rentalDeposit;

// const capexPlusInventory = totalCapex + inventoryCost;

// // Profit calculations
// const grossProfit = expectedRevenue * grossMargin;
// const netProfit = grossProfit - totalOpex;

// // ROI (CAPEX + Inventory)
// const roiMonths = Math.round(capexPlusInventory / netProfit);

// return ( <div className="max-w-3xl mx-auto p-6">

//   {/* ------------------ INPUT SECTION ------------------ */}
//   <section className="bg-white p-6 shadow rounded-xl mb-8">
//     <h2 className="text-xl font-bold mb-4">Investment Calculator</h2>

//     <input
//       type="text"
//       name="city"
//       placeholder="City"
//       className="border p-3 w-full rounded mb-4"
//       onChange={handleUserChange}
//     />

//     <select
//       name="size"
//       className="border p-3 w-full rounded mb-4"
//       onChange={handleUserChange}
//     >
//       <option value="">Select Shop Size</option>
//       <option value="100">100 sqft</option>
//       <option value="150-250">150-250 sqft</option>
//       <option value="250-500">250-500 sqft</option>
//       <option value="500+">Above 500 sqft</option>
//     </select>

//     <input
//       type="number"
//       name="rent"
//       placeholder="Monthly Rent"
//       className="border p-3 w-full rounded mb-4"
//       onChange={handleUserChange}
//     />

//     <button
//       onClick={handleInitialSubmit}
//       className="w-full bg-black text-white p-3 rounded"
//     >
//       Calculate Investment Plan
//     </button>
//   </section>

//   {/* ------------------ POPUP MODAL ------------------ */}
//   {showModal && (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-xl w-96">
//         <h2 className="text-lg font-bold mb-4">Enter Your Details</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           className="border p-2 w-full rounded mb-3"
//           onChange={handlePopupChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email ID"
//           className="border p-2 w-full rounded mb-3"
//           onChange={handlePopupChange}
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           className="border p-2 w-full rounded mb-3"
//           onChange={handlePopupChange}
//         />

//         <label className="flex items-center gap-2 text-sm mb-4">
//           <input
//             type="checkbox"
//             name="agree"
//             onChange={handlePopupChange}
//           />
//           You agree to be contacted for discussion.
//         </label>

//         <button
//           onClick={handleFinalSubmit}
//           className="w-full bg-black text-white p-3 rounded"
//         >
//           Submit & View Calculation
//         </button>
//       </div>
//     </div>
//   )}

//   {/* ------------------ CALCULATING SCREEN ------------------ */}
//   {isCalculating && (
//     <div className="text-center text-lg font-semibold py-10">
//       🔄 Calculating your investment plan...
//     </div>
//   )}

//   {/* ------------------ RESULTS SECTION ------------------ */}
//   {showResult && (
//     <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
//       <h2 className="text-xl font-bold mb-6">Investment Calculation Results</h2>

//       <p><strong>City:</strong> {userInputs.city}</p>
//       <p><strong>Rent:</strong> ₹{rent}</p>
//       <p><strong>Expected Revenue:</strong> ₹{expectedRevenue}</p>
//       <p><strong>Initial Inventory (MRP):</strong> ₹{initialInventoryMRP}</p>
//       <p><strong>Initial Inventory (Cost):</strong> ₹{inventoryCost}</p>
//       <p><strong>Total CAPEX:</strong> ₹{totalCapex}</p>
//       <p><strong>CAPEX + Inventory:</strong> ₹{capexPlusInventory}</p>
//       <p><strong>Total OPEX:</strong> ₹{totalOpex}</p>
//       <p><strong>Net Profit / Month:</strong> ₹{netProfit}</p>
//       <p><strong>ROI (Payback Time):</strong> {roiMonths} Months</p>
//     </section>
//   )}

// </div>

// );
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

  // const handleUserChange = (e) => {
  //   setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
  // }
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
}


  // const handlePopupChange = (e) => {
  //   const { name, value, type, checked } = e.target
  //   setPopupData({
  //     ...popupData,
  //     [name]: type === "checkbox" ? checked : value,
  //   })
  // }

  const handlePopupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <section className="w-full px-4 py-16 md:py-24 lg:py-28 bg-gradient-to-b from-[#f0ebe6] via-[#faf8f6] to-[#f5f3f0] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 77, 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-[#c59a6d] tracking-widest uppercase mb-4 opacity-80">
            Financial Planning
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-4">Investment Calculator</h2>
          <p className="text-base md:text-lg text-[#666] opacity-80">
            Calculate your investment plan for a Little Other Things franchise
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/40 mb-8 animate-fade-in-up">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#1a1a1a] mb-3">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                className="w-full border-2 border-[#e8e6e1] p-3 rounded-lg focus:border-[#c59a6d] focus:outline-none transition-colors"
                onChange={handleUserChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1a1a1a] mb-3">Shop Size</label>
              <div className="relative">
                <select
                  name="size"
                  className="w-full border-2 border-[#e8e6e1] p-3 rounded-lg focus:border-[#c59a6d] focus:outline-none transition-colors appearance-none bg-white"
                  onChange={handleUserChange}
                >
                  <option value="">Select shop size</option>
                  <option value="100">100 sqft</option>
                  <option value="150-250">150-250 sqft</option>
                  <option value="250-500">250-500 sqft</option>
                  <option value="500+">Above 500 sqft</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c59a6d] pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1a1a1a] mb-3">Monthly Rent (₹)</label>
              <input
                type="number"
                name="rent"
                placeholder="Enter monthly rent"
                className="w-full border-2 border-[#e8e6e1] p-3 rounded-lg focus:border-[#c59a6d] focus:outline-none transition-colors"
                onChange={handleUserChange}
              />
            </div>

            <button
              onClick={handleInitialSubmit}
              className="w-full bg-gradient-to-r from-[#2d5a4d] to-[#1f3f38] text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-8"
            >
              Calculate Investment Plan
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 animate-fade-in-up">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl border border-white/40 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Enter Your Details</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full border-2 border-[#e8e6e1] p-3 rounded-lg focus:border-[#c59a6d] focus:outline-none"
                  onChange={handlePopupChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-full border-2 border-[#e8e6e1] p-3 rounded-lg focus:border-[#c59a6d] focus:outline-none"
                  onChange={handlePopupChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border-2 border-[#e8e6e1] p-3 rounded-lg focus:border-[#c59a6d] focus:outline-none"
                  onChange={handlePopupChange}
                />

                <label className="flex items-center gap-3 text-sm text-[#666]">
                  <input
                    type="checkbox"
                    name="agree"
                    className="w-4 h-4 rounded cursor-pointer"
                    onChange={handlePopupChange}
                  />
                  I agree to be contacted for discussion
                </label>

                <button
                  onClick={handleFinalSubmit}
                  className="w-full bg-gradient-to-r from-[#2d5a4d] to-[#1f3f38] text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-4"
                >
                  Submit & View Calculation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Calculating screen */}
        {isCalculating && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="inline-block">
              <div className="w-12 h-12 rounded-full border-4 border-[#e8e6e1] border-t-[#2d5a4d] animate-spin mb-4" />
              <p className="text-lg font-semibold text-[#1a1a1a]">Calculating your investment plan...</p>
            </div>
          </div>
        )}

        {/* Results */}
        {showResult && (
          <div className="space-y-4 animate-fade-in-up">
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/40">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1a1a1a]">Investment Calculation Results</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-[#f0ebe6] to-[#fef6e8] rounded-lg">
                  <p className="text-sm text-[#666] mb-1">City</p>
                  <p className="text-lg font-bold text-[#1a1a1a]">{userInputs.city}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#f0ebe6] to-[#fef6e8] rounded-lg">
                  <p className="text-sm text-[#666] mb-1">Monthly Rent</p>
                  <p className="text-lg font-bold text-[#1a1a1a]">₹{rent.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#c59a6d]/20 to-[#c59a6d]/10 rounded-lg border border-[#c59a6d]/30">
                  <p className="text-sm text-[#666] mb-1">Expected Revenue</p>
                  <p className="text-lg font-bold text-[#c59a6d]">₹{expectedRevenue.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#2d5a4d]/20 to-[#2d5a4d]/10 rounded-lg border border-[#2d5a4d]/30">
                  <p className="text-sm text-[#666] mb-1">Net Profit/Month</p>
                  <p className="text-lg font-bold text-[#2d5a4d]">₹{netProfit.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#f0ebe6] to-[#fef6e8] rounded-lg">
                  <p className="text-sm text-[#666] mb-1">CAPEX + Inventory</p>
                  <p className="text-lg font-bold text-[#1a1a1a]">₹{capexPlusInventory.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#2d5a4d]/20 to-[#2d5a4d]/10 rounded-lg border border-[#2d5a4d]/30">
                  <p className="text-sm text-[#666] mb-1">ROI (Payback Time)</p>
                  <p className="text-lg font-bold text-[#2d5a4d]">{roiMonths} Months</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setShowResult(false)
                setUserInputs({ city: "", size: "", rent: "" })
              }}
              className="w-full bg-gradient-to-r from-[#2d5a4d] to-[#1f3f38] text-white p-3 rounded-lg font-semibold hover:shadow-lg transition-all"
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
