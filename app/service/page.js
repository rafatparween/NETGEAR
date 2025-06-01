// pages/services.js
import Head from 'next/head';

export default function NetgearServices() {
  return (
    <>
      <Head>
        <title>NETGEAR Premium Services | Elevate Your Network</title>
        <meta name="description" content="Discover NETGEAR's premium services for faster speeds, enhanced security, and 24/7 expert support." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Elevate Your <span className="text-yellow-400">Network</span> Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Premium services for faster speeds, ironclad security, and 24/7 expert support.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
            Explore Services
          </button>
        </div>
      </section>

      {/* Why Choose NETGEAR */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose <span className="text-blue-600">NETGEAR</span> Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Blazing-Fast Performance",
                desc: "Optimized for gaming, streaming, and smart homes"
              },
              {
                icon: "🛡️",
                title: "Advanced Security",
                desc: "Protect your network from threats with auto-updates"
              },
              {
                icon: "👨‍💻",
                title: "24/7 Expert Support",
                desc: "Get instant help from NETGEAR professionals"
              },
              {
                icon: "🔄",
                title: "Seamless Updates",
                desc: "Always have the latest firmware for peak performance"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-blue-600">Premium</span> Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">NETGEAR ProSupport</h3>
                  <p className="text-blue-600 font-medium">Perfect for businesses & power users!</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 pl-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Priority Technical Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Hardware Replacement
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated Account Manager (Enterprise)
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all">
                Learn More
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">NETGEAR Armor™</h3>
                  <p className="text-purple-600 font-medium">Powered by Bitdefender</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 pl-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  AI-Driven Cybersecurity
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-Time Threat Protection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Parental Controls & VPN Security
                </li>
              </ul>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all">
                Get Protected
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100 hover:border-green-300 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Smart Parental Controls</h3>
                  <p className="text-green-600 font-medium">Keep your family safe online</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 pl-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Filter Content by Category
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Set Time Limits for Devices
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Monitor Online Activity
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all">
                Set Up Controls
              </button>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100 hover:border-yellow-300 transition-all">
              <div className="flex items-start mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Extended Warranty</h3>
                  <p className="text-yellow-600 font-medium">Peace of mind protection</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 pl-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Accidental Damage Coverage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  No-Cost Replacements
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Hassle-Free Claims
                </li>
              </ul>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-all">
                Add Protection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Exclusive <span className="text-yellow-300">Deals</span> for You!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "30% OFF",
                desc: "on NETGEAR Armor (First Year)",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Free Setup",
                desc: "with ProSupport Annual Plan",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Bundle & Save",
                desc: "Combine services for maximum value!",
                color: "from-green-500 to-teal-500"
              }
            ].map((deal, index) => (
              <div key={index} className={`bg-gradient-to-r ${deal.color} p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all`}>
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p>{deal.desc}</p>
              </div>
            ))}
          </div>
          
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">
            Claim Your Discount Now
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Upgrade Your Network?</h2>
          <p className="text-xl mb-8 text-gray-600">Our experts are available 24/7 to help you choose the perfect services.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Chat with an Expert
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Call: 1-888-NETGEAR
            </button>
          </div>
        </div>
      </section>
    </>
  );
}