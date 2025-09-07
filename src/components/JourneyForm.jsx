import { useState } from "react";
export default function JourneyForm() {
   const [userType, setUserType] = useState("");
  return (
    <section className="w-full px-16 py-10 mx-auto max-w-7xl">
      {/* Heading (aligned left) */}
      <div className="mb-8 text-left">
        <h2 className="text-4xl font-extrabold text-blue-900 ">
          Start Your Journey Today!
        </h2>
        <p className="mt-2 text-xl text-gray-600 ">
          Create a profile in seconds and find your ideal home.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col items-center w-full gap-4 md:flex-row">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter Your Name"
          className="flex-1 w-[180px] px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-1 focus:ring-blue-200 outline-none"
        />

        {/* User Type Select */}
{/* User Type Select */}
<select
      value={userType}
      onChange={(e) => setUserType(e.target.value)}
      className={`flex-1 min-w-[250px] px-4 py-2 rounded-lg border border-gray-300 bg-white 
                 focus:ring-1 focus:ring-blue-200 outline-none 
                 ${userType === "" ? "text-gray-400" : "text-gray-800"}`}
    >
      {/* Placeholder */}
      <option value="" disabled>
        Select User Type
      </option>

      {/* Real Options */}
      <option value="buyer">Buyer</option>
      <option value="renter">Renter</option>
      <option value="agent">Agent</option>
    </select>


        {/* Location Input */}
        <input
          type="text"
          placeholder="Enter Your Location"
          className="flex-1 w-[180px] py-2  px-4 text-gray-800 bg-white border border-gray-300 rounded-lg outline-none  focus:ring-1 focus:ring-blue-200"
        />

        {/* Continue Button */}
        <button
          type="submit"
          className="py-2 text-lg font-semibold text-white transition bg-blue-900 rounded-full px-18 hover:bg-blue-700"
        >
          Continue
        </button>
      </form>
    </section>
  );
}
