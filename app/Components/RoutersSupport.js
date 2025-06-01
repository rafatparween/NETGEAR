export default function RoutersSupport() {
  return (
    <div className="bg-[#0C1D3C] text-white py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Routers & Extenders</h2>
      <div className="bg-white py-10 px-4 md:px-10 flex flex-col md:flex-row gap-6 justify-center items-center">
        
        {/* Card 1 */}
        <div className="w-[300px] h-[260px] border border-gray-300 rounded-lg p-5 flex flex-col items-center text-center shadow-sm">
          <img src="/support5.png" alt="Expert Help" className="w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold text-black mb-2">Get Expert Help</h3>
          <p className="text-gray-500 mb-4 text-sm">
            for netgear support you already own, as soon as today
          </p>
          <button className="bg-[#0C1D3C] text-white rounded-full px-6 py-2 font-medium text-sm">
            Get Help
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-[300px] h-[260px] border border-gray-300 rounded-lg p-5 flex flex-col items-center text-center shadow-sm">
          <img src="/support6.png" alt="Smart Device" className="w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold text-black mb-2">Buy a Smart Device</h3>
          <p className="text-gray-500 mb-4 text-sm">
            call toll free number for support and service
          </p>
          <button className="bg-[#0C1D3C] text-white rounded-full px-6 py-2 font-medium text-sm">
            Get Help
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-[300px] h-[260px] border border-gray-300 rounded-lg p-5 flex flex-col items-center text-center shadow-sm">
          <img src="/support7.jpg" alt="Smart Security Home" className="w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold text-black mb-2">Join Smart Security Home</h3>
          <p className="text-gray-500 mb-4 text-sm leading-snug">
            Nighthawk Router R7000P, Pro XR500, Orbi Setup<br />
            RBK50, AC750 & AC1200
          </p>
          <button className="bg-[#0C1D3C] text-white rounded-full px-6 py-2 font-medium text-sm">
            Get Help
          </button>
        </div>

      </div>
    </div>
  );
}
