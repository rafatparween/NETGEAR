// import React from 'react';

// const SupportSection = () => {
//   return (
//     <div className="w-full bg-[DEDEDE] py-10">
//       {/* Contact Number and Note */}
//     <div className="">
//       {/* Contact Number and Note */}
//       <div className="text-center">
//         <div className="inline-block bg-[#0C2042] text-white text-3xl font-extrabold tracking-wide py-3 px-8 rounded-full">
//           CALL US +1(888) 510-8897
//         </div>
//         <p className="mt-3 text-sm text-gray-600">
//           Note: There is No Charge For Setup & Support
//         </p>
//         <h3 className="mt-6 text-2xl font-bold text-gray-800">
//           24/7 CUSTOMER SUPPORT AND SERVICE
//         </h3>
//       </div>
//       </div>

//       {/* Support Features */}
//       <div className="flex justify-center gap-8 mt-10 px-4 bg-white">
//         {/* Card 1 */}
//         <div className="border border-gray-300 rounded-lg p-6 text-center w-52 shadow-sm">
//           <div className="w-14 h-14 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//             [Headset Icon]
//           </div>
//           <p className="mt-4 text-base font-semibold text-gray-800">
//             24/7 Customer Service
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="border border-gray-300 rounded-lg p-6 text-center w-52 shadow-sm">
//           <div className="w-14 h-14 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//             [Phone Icon]
//           </div>
//           <p className="mt-4 text-base font-semibold text-gray-800">
//             Call Toll Free Number for Support NETGEAR
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="border border-gray-300 rounded-lg p-6 text-center w-52 shadow-sm">
//           <div className="w-14 h-14 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//             [Lightbulb Icon]
//           </div>
//           <p className="mt-4 text-base font-semibold text-gray-800">
//             Low prices guaranteed
//           </p>
//         </div>

//         {/* Card 4 */}
//         <div className="border border-gray-300 rounded-lg p-6 text-center w-52 shadow-sm">
//           <div className="w-14 h-14 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//             [Clock Icon]
//           </div>
//           <p className="mt-4 text-base font-semibold text-gray-800">
//             24/7 Netgear Support
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportSection;


// app/components/CallSupportSection.jsx or pages/index.jsx
export default function SupportSection() {
  return (
    <div className="bg-[#D9D9D9] w-full flex flex-col items-center py-10">
      {/* Call Button */}
      <div className="bg-[#0C1D3C] text-white text-2xl md:text-3xl font-semibold px-10 py-4 rounded-full mb-4 text-center">
        Call Us +1(888) 510-8897
      </div>

      {/* Note */}
      <p className="text-center text-black font-semibold underline mb-2">
        Note: There Is No Charge For Setup & Support
      </p>

      {/* 24/7 Support Text */}
      <p className="text-center text-black text-2xl font-bold">
        24/7 Customer Support And Service
      </p>
    </div>
  );
}
