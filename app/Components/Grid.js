// app/components/SupportGrid.jsx or pages/index.jsx

export default function Grid() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {/* Card 1 */}
      <div className="w-[260px] h-[200px] border border-[#0C1D3C] rounded-md flex flex-col items-center justify-center text-center px-4">
        <img
          src="/support1.png"
          alt="Customer Service"
          className="w-16 h-16 object-contain mb-3"
        />
        <p className="text-black font-[600] text-lg leading-snug">
          24/7 Customer Service
        </p>
      </div>

      {/* Card 2 */}
      <div className="w-[260px] h-[200px] border border-[#0C1D3C] rounded-md flex flex-col items-center justify-center text-center px-4">
        <img
          src="/support2.png"
          alt="Toll Free"
          className="w-16 h-16 object-contain mb-3"
        />
        <p className="text-black font-[600] text-lg leading-snug">
          Call Toll Free Number <br />
          for Support Netgear
        </p>
      </div>

      {/* Card 3 */}
      <div className="w-[260px] h-[200px] border border-[#0C1D3C] rounded-md flex flex-col items-center justify-center text-center px-4">
        <img
          src="/support3.png"
          alt="Low Price"
          className="w-16 h-16 object-contain mb-3"
        />
        <p className="text-black font-[600] text-lg leading-snug">
          Low prices <br />
          guaranteed
        </p>
      </div>

      {/* Card 4 */}
      <div className="w-[260px] h-[200px] border border-[#0C1D3C] rounded-md flex flex-col items-center justify-center text-center px-4">
        <img
          src="/support4.png"
          alt="Netgear Support"
          className="w-16 h-16 object-contain mb-3"
        />
        <p className="text-black font-[600] text-lg leading-snug">
          24/7 Netgear <br />
          support
        </p>
      </div>
    </div>
  );
}
