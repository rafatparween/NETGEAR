// import Image from 'next/image';
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Main Footer Content */}
//         <div className="flex flex-col md:flex-row justify-between">
//           {/* Left Section: Links */}
//           <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
//             {/* My NETGEAR */}
//             <div>
//               <h3 className="text-white font-bold mb-4 border-b border-gray-600 pb-2">MY NETGEAR</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">Track Orders</a></li>
//                 <li><a href="#" className="hover:text-white">Returns</a></li>
//                 <li><a href="#" className="hover:text-white">Register Product</a></li>
//                 <li><a href="#" className="hover:text-white">My Support</a></li>
//                 <li><a href="#" className="hover:text-white">ID.me Discount</a></li>
//               </ul>
//             </div>

//             {/* Customer Care */}
//             <div>
//               <h3 className="text-white font-bold mb-4 border-b border-gray-600 pb-2">CUSTOMER CARE</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">Shipping and Returns</a></li>
//                 <li><a href="#" className="hover:text-white">Shopping FAQs</a></li>
//                 <li><a href="#" className="hover:text-white">Warranty Info</a></li>
//                 <li><a href="#" className="hover:text-white">Certified Refurbished</a></li>
//                 <li><a href="#" className="hover:text-white">Where To Buy</a></li>
//                 <li><a href="#" className="hover:text-white">Products End of Service</a></li>
//                 <li><a href="#" className="hover:text-white">Download Center</a></li>
//                 <li><a href="#" className="hover:text-white">Community</a></li>
//                 <li><a href="#" className="hover:text-white">Support</a></li>
//                 <li><a href="#" className="hover:text-white">Contact Us</a></li>
//               </ul>
//             </div>

//             {/* Company */}
//             <div>
//               <h3 className="text-white font-bold mb-4 border-b border-gray-600 pb-2">COMPANY</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white">About Us</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Corporate Responsibility</a></li>
//                 <li><a href="#" className="hover:text-white">Security & Trust</a></li>
//                 <li><a href="#" className="hover:text-white">Product Security</a></li>
//                 <li><a href="#" className="hover:text-white">Report Vulnerability</a></li>
//                 <li><a href="#" className="hover:text-white">Investor Relations</a></li>
//                 <li><a href="#" className="hover:text-white">Press Room</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Reseller Policy</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Section: Logo and Email Signup */}
//           <div className="flex flex-col items-center md:items-end">
//             {/* Logo */}
//             <div className="mb-6">
//               <h1 className="text-white text-2xl font-bold">NETGEAR</h1>
//             </div>

//             {/* Email Signup */}
//             <div className="w-full md:w-64">
//               <p className="text-gray-400 mb-2">Email Updates:</p>
//               <div className="flex items-center border-b border-gray-600 space-x-3"> {/* Added space-x-3 for gap */}
//                 <input
//                   type="email"
//                   placeholder="E-mail Address"
//                   className="bg-transparent text-white placeholder-gray-500 outline-none flex-1 py-2"
//                 />
//                 <button className="text-white border border-white rounded-full px-4 py-1 whitespace-nowrap hover:bg-white hover:text-gray-900 transition">
//                   SIGN UP
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Legal and Social Icons */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-600 pt-4">
//           {/* Legal Links */}
//           <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
//             <span className="text-gray-400">© 1996-2025 NETGEAR®</span>
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Ad & Cookie Policy</a>
//             <a href="#" className="hover:text-white text-blue-400">My Privacy Choices</a>
//             <a href="#" className="hover:text-white">Terms & Conditions</a>
//             <a href="#" className="hover:text-white">Accessibility</a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4">
//             <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
//             <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
//             <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
//             <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaHeadset } from 'react-icons/fa';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 relative overflow-hidden">
      {/* Decorative tech elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Main Grid - Compact yet spacious */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - My NETGEAR */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-5 pb-2 border-b border-gray-700 flex items-center">
              <FaHeadset className="mr-2 text-blue-400" />
              MY NETGEALIVETECH
            </h3>
            <ul className="space-y-3">
              {['Track Orders', 'Returns', 'Register Product', 'My Support', 'ID.me Discount'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white flex items-center transition-all duration-200">
                    <FiArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Customer Care */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-5 pb-2 border-b border-gray-700 flex items-center">
              <FiPhone className="mr-2 text-green-400" />
              CUSTOMER CARE
            </h3>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Shopping FAQs', 'Warranty Info', 'Certified Refurbished', 'Where To Buy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white flex items-center transition-all duration-200">
                    <FiArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-5 pb-2 border-b border-gray-700 flex items-center">
              <svg className="mr-2 w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              COMPANY
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Investor Relations', 'Press Room', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white flex items-center transition-all duration-200">
                    <FiArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-5 pb-2 border-b border-gray-700 flex items-center">
              <svg className="mr-2 w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {['Download Center', 'Community', 'Contact Support', 'Product Security', 'Report Vulnerability'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white flex items-center transition-all duration-200">
                    <FiArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100" />
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Newsletter & Social (Full Height) */}
          <div className="md:col-span-1 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-white text-lg font-bold mb-4 flex items-center">
                  <FiMail className="mr-2 text-purple-400" />
                  NEWSLETTER
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest tech updates and exclusive offers straight to your inbox.
                </p>
                <div className="relative mb-6">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-gray-700/50 text-white placeholder-gray-400 rounded-lg px-4 py-3 pr-32 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-600"
                  />
                  <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md px-3 py-1.5 text-xs font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">FOLLOW US</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: <FaFacebookF size={14} />, color: 'hover:bg-blue-600' },
                    { icon: <FaTwitter size={14} />, color: 'hover:bg-blue-400' },
                    { icon: <FaInstagram size={14} />, color: 'hover:bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500' },
                    { icon: <FaYoutube size={14} />, color: 'hover:bg-red-600' },
                    { icon: <FaLinkedinIn size={14} />, color: 'hover:bg-blue-700' }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className={`text-gray-300 bg-gray-700/50 w-8 h-8 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:text-white`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact and Clean */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              {/* <Image 
                src="/"
                alt="NETGEALIVETECH" 
                width={32} 
                height={32}
                className="mr-3"
              /> */}
              <span className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Netgealivetech®. All Rights Reserved.
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {['Privacy', 'Terms', 'Cookies', 'Accessibility', 'Legal'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-500 hover:text-white text-xs font-medium uppercase tracking-wide transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}