import budgetIcon from "../assets/budget.png";
import trustedIcon from "../assets/trusted.png";
import locationIcon from "../assets/location.png";
import property1 from "../assets/property1.png";
import property2 from "../assets/property2.png"; 

export default function PropertiesSection() {
  return (
    <section id="PropertiesSection" className="w-full px-8 py-20 mb-10 bg-gray-50">
      <div className="max-w-[1440px] mx-auto grid items-center gap-30 md:grid-cols-2">
        
        {/* Left Column - Overlapping Images */}
        <div className="relative flex items-center justify-center">
          {/* First Image */}
          <img
            src={property1}
            alt="Property Example 1"
            className="object-cover shadow-md rounded-2xl mb-9 w-[450px] h-[533px]"
          />

          {/* Second Image (overlaps bottom-right corner) */}
          <img
            src={property2}
            alt="Property Example 2"
            className="absolute  object-cover shadow-lg rounded-5xl w-[408px] h-[405px] -bottom-12 -right-12"
          />
        </div>

        {/* Right Column - Text + Features */}
        <div className="w-[580px] mb-10">
          <h2 className="text-4xl font-bold text-blue-900">
            We Provide Latest Properties
          </h2>
          <p className="mt-3 ml-12 text-4xl font-bold text-blue-900">
            For Our Valuable Clients
          </p>

          {/* Features */}
          <div className="mt-10 space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-5 px-22">
              <img src={budgetIcon} alt="Budget Friendly" className="w-12 h-12 mt-3" />
              <div>
                <h3 className="mb-2 text-2xl font-bold text-blue-800">Budget Friendly</h3>
                <p className="text-lg font-semibold text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus.
                  Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-5 px-22">
              <img src={trustedIcon} alt="Trusted By Thousand" className="w-12 h-12 mt-3" />
              <div>
                <h3 className="mb-2 text-2xl font-bold text-blue-800">Trusted By Thousand</h3>
                  <p className="text-lg font-semibold text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus.
                  Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-5 px-22">
              <img src={locationIcon} alt="Prime Location" className="w-10 h-10 mt-3" />
              <div>
                <h3 className="mb-2 text-2xl font-bold text-blue-800">Prime Location</h3>
                  <p className="text-lg font-semibold text-black">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus.
                  Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
