import heroBanner from "../assets/heroBanner2.png";
import { BarChart2, Key, Lock, Search } from "lucide-react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import blurImg from "../assets/blur.png"; 

export default function FeaturedProperties() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-center py-20 h-[75vh] px-4 mx-4 md:mx-12 rounded-4xl overflow-hidden"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Heading */}
        <div className="absolute z-10 flex flex-col items-start justify-center w-full px-4 text-white md:transform md:-translate-x-1/2 md:ml-30 bottom-10 md:bottom-15 md:left-1/2 md:px-0">
          <h1 className="mb-2 text-3xl font-bold text-left md:text-5xl md:text-center">
            Featured Properties For Sale
          </h1>
          <p className="text-lg text-left md:text-xl md:text-center">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>

        {/* Bottom Blur */}
        <img
          src={blurImg}
          alt="Overlay Blur"
          className="absolute bottom-0 left-0 z-0 object-cover w-full h-24 md:h-32"
        />
      </section>

      {/* Central White Box */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 w-[95%] md:w-[900px] rounded-3xl h-auto md:h-[75px] bg-white shadow-[0_12px_18px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-4 md:gap-0 items-stretch md:items-center justify-between px-4 md:px-6 py-4 md:py-0">
          
          {/* Dropdown 1 */}
          <div className="relative flex items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-full md:w-auto">
            <FaHome className="absolute text-gray-500 left-4" />
            <select className="w-full py-2 pl-10 pr-4 bg-transparent border-none rounded-full outline-none md:w-auto">
              <option>Rent</option>
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>

          {/* Dropdown 2 */}
          <div className="relative flex items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-full md:w-auto">
            <FaHome className="absolute text-gray-500 left-4" />
            <select className="w-full py-2 pl-10 pr-4 bg-transparent border-none rounded-full outline-none md:w-auto">
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>

          {/* Dropdown 3 */}
          <div className="relative flex items-center w-full px-4 py-2 bg-white border border-gray-300 rounded-full md:w-auto">
            <FaMapMarkerAlt className="absolute text-gray-500 left-4" />
            <select className="w-full py-2 pl-10 pr-4 bg-transparent border-none rounded-full outline-none md:w-auto">
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Thailand</option>
            </select>
          </div>

          {/* Button */}
          <button className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white transition bg-blue-900 rounded-full hover:bg-blue-800 md:w-auto">
            Find Property
          </button>
        </div>
      </div>
    </div>
  );
}
