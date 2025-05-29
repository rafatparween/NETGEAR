// import Head from 'next/head';

// export default function Contact() {
//   return (
//     <>
//       <Head>
//         <title>Contact Us | NETGEAR</title>
//       </Head>

//       <div className="max-w-[1600px] mx-auto px-6 py-12">
//         {/* Breadcrumb */}
//         <nav className="text-sm text-gray-500 mb-8">
//           <span className="text-[#212529] font-medium">About Us</span> / Contact Us
//         </nav>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Sidebar */}
//           <aside className="w-full lg:w-1/4 space-y-4">
//             {[
//               'Leadership Team',
//               'Investor Relations',
//               'Advisory Board',
//               'Press Releases',
//               'Careers',
//               'Corporate Responsibility',
//               'Product Security',
//               'Products End of Service',
//               'Regulatory/Export Compliance'
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="border border-gray-200 rounded px-4 py-3 hover:bg-gray-50 cursor-pointer"
//               >
//                 {item}
//               </div>
//             ))}
//           </aside>

//           {/* Main Content */}
//           <main className="flex-1 space-y-16">
//             {/* Contact Section */}
//             <section className="flex items-start gap-6">
//               <img src="/icons/support-icon.png" alt="Support" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl text-[#212529] font-semibold mb-2">Looking for Customer Support?</h2>
//                 <p className="text-[#212529]">
//                  We're here and ready to help you get the most out of your NETGEAR product
//                 </p>
//                 <a href="#" className="tex
//                 t-[#000000] underline mt-2 inline-block">
//                  Contact Support »
                 
//                 </a>
//               </div>
//             </section>

//             {/* Returns Section */}
//             <section className="flex items-start gap-6">
//               <img src="/icons/return-icon.png" alt="Returns" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">Returns</h2>
//                 <p className="text-gray-700">
//                   Start a return for your purchase from NETGEAR.com at our Online Return Center.
//                 </p>
//                 <a href="#" className="text-blue-600 underline mt-2 inline-block">
//                  Online Return Center »
//                 </a>
//               </div>
//             </section>

//             {/* Support Status Section */}
//              <section className="flex items-start gap-6">
//               <img src="/icons/support-icon.png" alt="Support" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">Check your support status</h2>
//                 <p className="text-gray-700">
//                  If you submitted a support issue or question, login to your MyNETGEAR account to check the status
//                 </p>
//                 <a href="#" className="text-blue-600 underline mt-2 inline-block">
//                  Sign in »
//                 </a>
//               </div>
//             </section>

//               <section className="flex items-start gap-6">
//               <img src="/icons/support-icon.png" alt="Support" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">Register your product. Rely on us.</h2>
//                 <p className="text-gray-700">
//                   When you register your new NETGEAR product, you can rely on us to provide support and keep you updated
//                 </p>
//                 <a href="#" className="text-blue-600 underline mt-2 inline-block">
//                   Register »
//                 </a>
//               </div>
//             </section>
//               <section className="flex items-start gap-6">
//               <img src="/icons/support-icon.png" alt="Support" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">MyNETGEAR: A personal portal for your NETGEAR Stuff</h2>
//                 <p className="text-gray-700">
//                   Everything NETGEAR. And everything you. MyNETGEAR is your central spot for support, warranties, registration, and news
//                 </p>
//                 <a href="#" className="text-blue-600 underline mt-2 inline-block">
//                  Learn More »
//                 </a>
//               </div>
//             </section>
//               <section className="flex items-start gap-6">
//               <img src="/icons/support-icon.png" alt="Support" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">NETGEAR ProSupport for Home</h2>
//                 <p className="text-gray-700">
//                   Extended Warranty and Support from NETGEAR certified experts
//                 </p>
//                 <a href="#" className="text-blue-600 underline mt-2 inline-block">
//                  Learn More »
//                 </a>
//               </div>
//             </section>
//               <section className="flex items-start gap-6">
//               <img src="/icons/support-icon.png" alt="Support" className="w-16 h-16" />
//               <div>
//                 <h2 className="text-2xl font-semibold mb-2">NETGEAR ProSupport for Business</h2>
//                 <p className="text-gray-700">
//                   Comprehensive support plans for maximum network uptime and business peace of mind
//                 </p>
//                 <a href="#" className="text-blue-600 underline mt-2 inline-block">
//                  Learn More »

                 
//                 </a>
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }


import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4 mt-[35px] mb-[50px]">
      <div className="flex flex-col md:flex-row max-w-4xl w-full gap-0">
        {/* NETGEAR ProSupport for Home */}
        <div className="flex-1 p-0  ">
          <div className="relative h-[506px] w-[380px] flex justify-center items-center">
            <Image
              src="/contact1.jpg"
              alt="NETGEAR ProSupport for Home"
              width={380}
              height={506}
              className="rounded-l-lg"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mt-4 text-gray-800">NETGEALIVETECH ProSupport for Home</h2>
            <p className="text-gray-600 mt-2">
              Extend your standard warranty and support coverage and get access to experts most knowledgeable about your product. Stay covered and stay assured with NETGEAR ProSupport from home.
            </p>
            <button className="mt-4 bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* NETGEAR ProSupport for Business */}
        <div className="flex-1 p-0">
          <div className="relative h-[506px] w-[380px] flex justify-center items-center">
            <Image
              src="/contact2.jpg"
              alt="NETGEAR ProSupport for Business"
              width={380}
              height={506}
              className="rounded-r-lg"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mt-4 text-gray-800">NETGEALIVETECH ProSupport for Business</h2>
            <p className="text-gray-600 mt-2">
              NETGEAR ProSupport for Business maximizes your business's success by extending and enhancing the standard warranty coverage included with your product purchase.
            </p>
            <button className="mt-4 bg-purple-600 text-white rounded-full px-6 py-2 hover:bg-purple-500 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}