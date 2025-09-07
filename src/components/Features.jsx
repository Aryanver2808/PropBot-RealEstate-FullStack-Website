import { useEffect, useState } from "react";
import mainImg from "../assets/featured1.png"; 
import img2 from "../assets/featured2.png";
import img3 from "../assets/featured3.png";
import img4 from "../assets/featured4.png";

export default function FeaturedProperty() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // ✅ toggle state

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
    <section className="py-16 bg-white dark:bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 px-13">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-blue-900">
            Featured Property
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-1.5 text-lg font-medium text-indigo-600 transition border-2 border-indigo-800 rounded-full hover:bg-indigo-600 hover:text-white"
          >
            {loading
              ? "Loading..."
              : error
              ? "Error loading projects"
              : showAll
              ? "Hide Projects ↑"
              : `See ${projects.length} New Projects →`}
          </button>
        </div>

        {/* Top Featured Section */}
        <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Big left image */}
          <div className="relative md:col-span-2 lg:col-span-2">
            <img
              src={mainImg}
              alt="Featured Property"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute text-white bottom-4 left-4">
              <p className="text-sm">By Finder & Projects</p>
              <h3 className="text-xl font-bold">Kenanga Residence</h3>
            </div>
          </div>

          {/* Right side images */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2 lg:col-span-2 h-96">
            {/* Left big image */}
            <img
              src={img2}
              alt="Property"
              className="object-cover w-full h-full rounded-2xl"
            />

            {/* Right stacked images */}
            <div className="grid grid-rows-2 gap-6">
              <img
                src={img3}
                alt="Property"
                className="object-cover w-full h-full rounded-2xl"
              />
              <img
                src={img4}
                alt="Property"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Expanded Projects Grid */}
        {showAll && (
          <div className="mt-12">
            {loading ? (
              <p className="text-center text-gray-500">Loading projects...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projects.map((project) => (
  <div
    key={project.id}
    className="overflow-hidden transition bg-white shadow-md rounded-xl hover:shadow-lg"
  >
    <img
      src={project.image || "https://via.placeholder.com/400"}
      alt={project.name}
      className="object-cover w-full h-48"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900">
        {project.name}
      </h3>
      <p className="text-gray-600">
        {project.buildingNumber} {project.cardinalDirection}, {project.city}
      </p>
      <p className="text-sm text-gray-500">
        {project.state}, {project.country}
      </p>
      <p className="mt-2 text-sm text-gray-700">
        <span className="font-semibold">Owner:</span> {project.ownerName}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Contact:</span> {project.contactNumber}
      </p>
    </div>
  </div>
))}

              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
