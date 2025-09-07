// src/components/FeaturedProperty.jsx
import { useEffect, useState } from "react";
import { MapPin, Bookmark } from "lucide-react";
import villa1 from "../assets/villa1.png";
import villa2 from "../assets/villa2.png";

export default function FeaturedPropertys() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const API_URL =
    "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="px-12 bg-white py-35">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-blue-900">Featured Property</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-5 py-1.5 text-lg font-medium text-indigo-600 transition border-2 border-indigo-800 rounded-full hover:bg-indigo-200 hover:text-black"
        >
          {loading
            ? "Loading..."
            : error
            ? "Error loading projects"
            : showAll
            ? "Hide Projects ↑"
            : `See 288 New Projects →`}
        </button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="overflow-hidden bg-white shadow-md rounded-2xl">
          <img
            src={villa2}
            alt="Green Villa"
            className="object-cover w-full h-110"
          />
          <div className="absolute px-6 py-3 ml-5 -translate-y-1/2 bg-white shadow-md rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                <MapPin className="w-5 h-5 text-blue-600" />
                Green Villa, Uttar Pradesh
              </h3>
              <Bookmark className="w-5 h-5 text-gray-600" />
            </div>
            <p className="mt-2 mb-4 text-gray-700">
              Spacious 3BHK apartment in a prime location with modern amenities.
            </p>
            <hr />
            <div className="flex items-center justify-between mt-3">
              <p className="text-2xl font-bold text-gray-800">$450,000</p>
              <button className="px-4 py-2 text-sm text-white transition bg-blue-900 rounded-full hover:bg-blue-800">
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden bg-white shadow-md rounded-2xl">
          <img
            src={villa1}
            alt="Green Villa"
            className="object-cover w-full h-110"
          />
          <div className="absolute px-6 py-3 ml-5 -translate-y-1/2 bg-white shadow-md rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                <MapPin className="w-5 h-5 text-blue-600" />
                Green Villa, Uttar Pradesh
              </h3>
              <Bookmark className="w-5 h-5 text-gray-600" />
            </div>
            <p className="mt-2 mb-4 text-gray-700">
              Spacious 3BHK apartment in a prime location with modern amenities.
            </p>
            <hr />
            <div className="flex items-center justify-between mt-3">
              <p className="text-2xl font-bold text-gray-800">$450,000</p>
              <button className="px-4 py-2 text-sm text-white transition bg-blue-900 rounded-full hover:bg-blue-800">
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* API cards (only shown when showAll is true) */}
        {showAll &&
          projects.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden bg-white shadow-md mt-25 rounded-2xl"
            >
              <img
                src={p.image || villa1}
                alt={p.name}
                className="object-cover w-full h-110"
              />
              <div className="absolute px-6 py-3 ml-5 -translate-y-1/2 bg-white shadow-md rounded-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {p.name || "Unnamed Project"}
                  </h3>
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </div>
                <p className="mt-2 mb-4 text-gray-700">
                  {p.description || "Spacious 3BHK apartment in a prime location with modern amenities."}
                </p>
                <hr />
                <div className="flex items-center justify-between mt-3">
                  <p className="text-2xl font-bold text-gray-800">
                    {p.price ? `$${p.price}` : "$450,000"}
                  </p>
                  <button className="px-4 py-2 text-sm text-white transition bg-blue-900 rounded-full hover:bg-blue-800">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
