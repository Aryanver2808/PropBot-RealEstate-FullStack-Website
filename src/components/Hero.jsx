import heroBanner from "../assets/heroBanner.png";
import { BarChart2, Key, Lock, MapPin, Search } from "lucide-react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-center h-[75vh] px-4 mx-2 md:mx-12 rounded-4xl overflow-hidden"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="relative z-10 text-white">
          <h1 className="mt-10 mb-2 text-2xl font-bold sm:text-3xl md:text-5xl">
            Find Your Dream Home in One Click!
          </h1>
          <p className="mb-20 text-base sm:text-lg md:text-xl md:mb-60">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Search Bar + CTA */}
        <div className="absolute z-10 flex flex-col items-center justify-center w-full gap-4 px-4 transform -translate-x-1/2 md:flex-row md:justify-around md:gap-6 bottom-6 md:bottom-15 left-1/2">
          {/* Search Bar */}
          <div className="flex items-center w-full md:w-[490px] bg-white rounded-xl shadow px-4 py-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Location..."
              className="flex-1 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none md:text-base"
            />
            <div className="flex items-center gap-0.5 mr-2 text-gray-400 cursor-pointer">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs">▼</span>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full px-4 py-2 font-semibold text-blue-800 bg-white border-2 border-blue-800 shadow md:w-auto rounded-2xl">
            List Your Property
          </button>
        </div>
      </section>

      {/* Dropdown Section */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 
          w-[95%] md:w-[900px] 
          rounded-4xl 
          h-auto md:h-[75px] 
          bg-white shadow-[0_12px_18px_rgba(0,0,0,0.3)] 
          flex flex-col md:flex-row items-center justify-between 
          px-4 md:px-6 py-4 md:py-0 gap-3 md:gap-0"
        >
          {/* Dropdown 1 */}
          <div className="relative flex items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-full md:w-auto">
            <FaHome className="absolute text-gray-500 left-4" />
            <select className="w-full py-2 pl-10 pr-4 text-sm bg-transparent border-none rounded-full outline-none md:text-base">
              <option>Rent</option>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>

          {/* Dropdown 2 */}
          <div className="relative flex items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-full md:w-auto">
            <FaHome className="absolute text-gray-500 left-4" />
            <select className="w-full py-2 pl-10 pr-4 text-sm bg-transparent border-none rounded-full outline-none md:text-base">
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>

          {/* Dropdown 3 */}
          <div className="relative flex items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-full md:w-auto">
            <FaMapMarkerAlt className="absolute text-gray-500 left-4" />
            <select className="w-full py-2 pl-10 pr-4 text-sm bg-transparent border-none rounded-full outline-none md:text-base">
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Thailand</option>
            </select>
          </div>

          {/* Button */}
          <button className="flex items-center justify-center w-full px-8 py-3 text-sm font-semibold text-white transition bg-blue-900 rounded-full md:w-auto hover:bg-blue-800 md:text-base">
            Find Property
          </button>
        </div>
      </div>
    </div>
  );
}
