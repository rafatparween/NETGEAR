import Image from "next/image";

export default function NetgearSupport() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/slidepic.jpg"
        alt="Netgear Support"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Text Box Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center pl-10">
        <div className="bg-white bg-opacity-80 p-10 max-w-xl shadow-lg">
          <h1 className="text-5xl font-light leading-snug text-gray-900">
            NETGEAR Premium <br /> Support Services

          </h1>
          <div className="mt-4 mb-6 h-px bg-gray-700 w-full"></div>
          <p className="text-lg text-gray-900">
            Put your mind at ease with comprehensive support plans for both your home and office.
          </p>
        </div>
      </div>
    </div>
  );
}


