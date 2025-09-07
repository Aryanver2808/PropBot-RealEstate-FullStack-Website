import logo from "../assets/logo2.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer id="footer" className="flex justify-center text-white bg-indigo-500">
      <div className="w-full max-w-[1440px] h-[569px] flex flex-col justify-between py-10">
        {/* Top Section */}
        <div className="flex flex-col items-center px-4 space-y-6 text-center">
          <h2 className="text-6xl font-bold">Get in Touch with Us</h2>
          <p className="max-w-lg text-4xl text-gray-200">
            Subscribe now for exclusive property insights and deals!
          </p>

          {/* Email Subscription */}
          <div className="flex w-[620px] ">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-10 py-4 text-2xl font-semibold text-gray-800 bg-blue-100 rounded-full outline-none pr-28"
              />
              <button
                className="absolute px-12 py-3 text-2xl font-medium text-white -translate-y-1/2 bg-blue-900 rounded-full top-1/2 right-2 hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between px-8 mt-12 space-y-4 text-sm text-gray-300 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="PropBot Logo" className="w-auto h-12 " />
          </div>

          {/* Navigation */}
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-white">For Sale</a>
            <a href="#" className="hover:text-white">Rentals</a>
            <a href="#" className="hover:text-white">New Projects</a>
            <a href="#" className="hover:text-white">Property News</a>
          </div>

          {/* Copyright */}
          <p className="text-xl">@2025 Propbot. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
