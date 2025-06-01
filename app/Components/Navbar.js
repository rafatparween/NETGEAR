// // components/Navbar.js
// import Image from 'next/image'
// import { FaSearch, FaUser } from 'react-icons/fa'
// import { FiHelpCircle } from 'react-icons/fi'
// import { BsCart } from 'react-icons/bs'

// export default function Navbar() {
//   return (
//     <div className="bg-[#f2f1f2] border-b border-gray-300 w-full">
//       <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-black">NETGEAR</div>

//         {/* Center Navigation */}
//         <div className="flex space-x-12">
//           <div className="text-xs text-black text-center leading-4 font-semibold">
//             <div>HOME</div>
//             <div>SOLUTIONS</div>
//           </div>
//           <div className="text-xs text-black text-center leading-4 font-semibold">
//             <div>BUSINESS</div>
//             <div>SOLUTIONS</div>
//           </div>
//           <div className="text-xs text-black text-center leading-4 font-semibold">
//             <div>AV</div>
//             <div>SOLUTIONS</div>
//           </div>
//           <div className="text-xs text-black text-center leading-4 font-semibold pt-1">
//             <div>SUPPORT</div>
//           </div>
//           <div className="text-xs text-black text-center leading-4 font-semibold">
//             <div>SHOP</div>
//             <div>OFFERS</div>
//           </div>
//         </div>

//         {/* Right-side Icons */}
//         <div className="flex items-center space-x-6">
//           {/* Flag */}
//           <Image
//             src="/us-flag.png"
//             alt="USA"
//             width={24}
//             height={16}
//             className="object-cover"
//           />
//           {/* Search Icon */}
//           <FaSearch className="text-gray-800 text-lg" />
//           {/* Help Icon */}
//           <FiHelpCircle className="text-gray-800 text-xl" />
//           {/* User Icon */}
//           <FaUser className="text-gray-800 text-lg" />
//           {/* Cart Icon */}
//           <BsCart className="text-gray-400 text-xl" />
//         </div>
//       </div>
//     </div>
//   )
// }



// import Image from 'next/image';
// import { FaSearch, FaUser } from 'react-icons/fa';
// import { FiHelpCircle } from 'react-icons/fi';
// import { BsCart } from 'react-icons/bs';

// export default function Navbar() {
//   return (
//     <div className="bg-[#F1F0F0] border-t border-gray-300 w-full">
//       <div className="max-w-[1600px] mx-auto px-6 h-[110px] flex items-center justify-between">
//         {/* Left - Logo */}
//         <div className="text-[21px] font-extrabold tracking-wider text-[#000000]">NETGEAR</div>

//         {/* Center Navigation Links */}
//         <div className="flex space-x-12">
//           <div className="text-xs font-medium text-[#2B262B] leading-tight text-center">
//             <div>HOME</div>
//             <div>SOLUTIONS</div>
//           </div>
//           <div className="text-xs font-medium text-[#2B262B] leading-tight text-center">
//             <div>BUSINESS</div>
//             <div>SOLUTIONS</div>
//           </div>
//           <div className="text-xs font-medium text-[#2B262B] leading-tight text-center">
//             <div>AV</div>
//             <div>SOLUTIONS</div>
//           </div>
//           <div className="text-xs font-medium text-[#2B262B] leading-tight text-center pt-[6px]">
//             <div>SUPPORT</div>
//           </div>
//           <div className="text-xs font-medium text-[#2B262B] leading-tight text-center">
//             <div>SHOP</div>
//             <div>OFFERS</div>
//           </div>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-6">
//           <Image
//             src="/us-flag.png"
//             alt="US Flag"
//             width={24}
//             height={16}
//             className="object-cover"
//           />
//           <FaSearch className="text-[#2B262B] text-lg" />
//           <FiHelpCircle className="text-[#2B262B] text-xl" />
//           <FaUser className="text-[#1b171b] text-lg" />
//           <BsCart className="text-[#212529] text-xl" />
//         </div>
//       </div>
//     </div>
//   );
// }

import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="bg-[#F1F0F0] border-t border-gray-300 w-full">
     <div className="max-w-[1600px] mx-auto px-6 h-[110px] flex items-center justify-between">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className="hover:text-gray-600">NETGEALIVETECH</a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-600">HOME SOLUTIONS</a>
            <a href="/service" className="hover:text-gray-600">SERVICES</a>
            <a href="#" className="hover:text-gray-600">AV SOLUTIONS</a>
            <a href="#" className="hover:text-gray-600">SUPPORT</a>
            <a href="#" className="hover:text-gray-600">SHOP OFFERS</a>
          </nav>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4 ml-auto">
  {/* Flag */}
  <div className="flex items-center space-x-1">
    <img src="flag1.png" alt="Flag" className="w-[40x] h-[35px]"/>
  
  </div>

  {/* Search */}
  <a href="#" className="flex items-center space-x-1 hover:text-gray-600">
    <img src="/search.png" alt="Search" className="w-5 h-5" />
 
  </a>

  {/* Help */}
  <a href="#" className="flex items-center space-x-1 hover:text-gray-600">
    <img src="/question.png" alt="Help" className="w-5 h-5" />
   
  </a>

  {/* User */}
  <a href="#" className="flex items-center space-x-1 hover:text-gray-600">
    <img src="/admin.png" alt="User" className="w-5 h-5" />
   
  </a>

  {/* Cart */}
  <a href="#" className="flex items-center space-x-1 hover:text-gray-600">
    <img src="/trolley.png" alt="Cart" className="w-5 h-5" />
  </a>
</div>

      </div>
    </div>
  );
}