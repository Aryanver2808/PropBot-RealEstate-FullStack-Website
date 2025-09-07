import img1 from "../assets/rental1.png";
import img2 from "../assets/rental2.png";
import img3 from "../assets/rental3.png";
import img4 from "../assets/rental4.png";

import { Star } from "lucide-react";
import { MapPin } from "lucide-react";

export default function RentalHome() {
    const rentalCost =[
        "$1,500/month",
        "$2,599/month",
        "$1,600/month",
        "$4,500/month"
    ]
    
  return (
    <section id="RentalHome" className="px-10 py-8 bg-white dark:bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 mb-10">
          <div>
            <h2 className="text-4xl font-bold text-blue-900">
              Find The Perfect Rental Home
            </h2>
            <p className="max-w-2xl mt-2 text-xl text-gray-600 ">
              Browse our top-rated properties for sale, featuring premium listings 
              tailored to your needs. Find your dream home today!
            </p>
          </div>
          <a
            href="#"
            className="px-12 py-3 text-lg font-semibold text-white transition bg-blue-900 rounded-full hover:bg-indigo-800"
          >
            View All Rentals
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[img1, img2, img3, img4].map((image, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition bg-white shadow rounded-2xl hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Property ${idx + 1}`}
                className="object-cover w-full h-48"
              />

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between text-sm text-gray-700 ">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>4.5/5</span>
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-black">
                  Spacious 3BHK apartment in a prime location with modern amenities.
                </p>

                <div className="flex items-center justify-between mt-4">
                  <button className="py-2 -ml-5 text-sm font-medium text-white transition bg-blue-900 rounded-full px-7 hover:bg-indigo-800">
                    Buy Now
                  </button>
                  <p className="text-lg font-semibold text-gray-900">
                    {rentalCost[idx]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
