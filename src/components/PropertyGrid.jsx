import img1 from "../assets/sale1.png";
import img2 from "../assets/sale2.png";
import img3 from "../assets/sale3.png";
import img4 from "../assets/sale4.png";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";

export default function PropertyGrid() {
  return (
    <section id="Sell" className="px-10 py-8 bg-white dark:bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 mb-10">
          <div>
            <h2 className="text-4xl font-bold text-blue-900">
              Best Properties Available For Sale
            </h2>
            <p className="max-w-2xl mt-2 text-xl text-gray-600 ">
              Browse our top-rated properties for sale, featuring premium listings
              tailored to your needs. Find your dream home today!
            </p>
          </div>
          <a
            href="#"
            className="py-3 text-lg font-semibold text-white transition bg-blue-900 rounded-full px-7 hover:bg-indigo-800"
          >
            View More Properties
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

                <div className="flex items-center justify-around mt-4">
                  <button className="py-2 -ml-6 text-sm font-medium text-white transition bg-blue-900 rounded-full px-7 hover:bg-indigo-800">
                    Buy Now
                  </button>
                  <p className="text-xl font-semibold text-gray-900">
                    $450,000
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
