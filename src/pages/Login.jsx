import { Mail, Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import heroBanner from "../assets/authBanner.png";
import logo from "../assets/logo.png";
import { useAuth } from "../Context/AuthContext";  

export default function Login() {
  const navigate=useNavigate();
  const { login, loginWithGoogle, loginWithFacebook } = useAuth(); // ⬅️ added providers
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("✅ Logged in!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }; 

  // ⬅️ Google Login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      alert("✅ Logged in with Google!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // ⬅️ Facebook Login
  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      alert("✅ Logged in with Facebook!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 bg-white shadow-lg">
        {/* Left Button */}
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 ml-4 text-sm font-bold text-gray-500 transition-colors bg-white border-2 border-blue-700 rounded-full hover:border-blue-900 sm:text-base"
        >
          <span className="flex items-center justify-center w-5 h-5 border border-gray-500 rounded-full hover:border-gray-700">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </span>
          Back to HomePage
        </Link>

        {/* Logo */}
        <img src={logo} alt="Logo" className="object-contain h-8 sm:h-10" />

        {/* Right Button */}
        <Link
          to=""
          className="flex items-center gap-2 px-4 py-2 mr-4 text-sm text-white transition-colors bg-blue-900 rounded-full hover:bg-blue-700 sm:text-base"
        >
          About Us
          <span className="flex items-center justify-center w-5 h-5 border border-white rounded-full">
            <ArrowRight className="w-3 h-3 text-white" />
          </span>
        </Link>
      </nav>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Left - Login Form */}
        <div className="flex items-center justify-center w-full px-6 py-8 md:w-2/5">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold text-center">Log In</h1>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="flex justify-center">
                <div className="relative w-[400px]">
                  <label className="block mb-1 text-lg font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 pr-10 border-2 border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <Mail className="absolute w-5 h-5 text-gray-500 right-3 bottom-5" />
                </div>
              </div>

              {/* Password */}
              <div className="flex justify-center">
                <div className="relative w-[400px]">
                  <label className="block mb-1 text-lg font-medium">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    className="w-full px-4 py-4 pr-10 border-2 border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute text-gray-500 right-3 bottom-5"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me + Forgot */}
              <div className="flex items-center justify-between px-1 text-xs md:px-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-gray-400" />
                  Remember Me
                </label>
                <a href="#" className="text-red-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Button */}
              <div className="flex justify-center py-4 ">
                <button
                  type="submit"
                  className="w-[300px] bg-blue-900 text-white p-3 text-xl rounded-full hover:bg-blue-700 transition"
                >
                  Log In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-5 my-1">
              <hr className="flex-1 border-gray-500" />
              <span className="text-xs text-gray-500">OR CONTINUE WITH</span>
              <hr className="flex-1 border-gray-500" />
            </div>

            {/* Socials */}
            <div className="flex justify-center mt-12 text-4xl gap-14">
              <FaApple className="text-black cursor-pointer" />
              <FaFacebook 
                className="text-blue-600 cursor-pointer"
                onClick={handleFacebookLogin} // ⬅️ Facebook Login
              />
              <FaGoogle 
                className="text-red-500 cursor-pointer"
                onClick={handleGoogleLogin} // ⬅️ Google Login
              />
            </div>

            {/* Bottom text */}
            <p className="mt-12 text-sm text-center">
              Doesn’t have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-blue-600 hover:underline"
              >
                Create One
              </Link>
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="hidden w-3/5 md:flex">
          <img
            src={heroBanner}
            alt="Login Banner"
            className="object-cover w-full h-full rounded-s-2xl"
          />
        </div>
      </div>
    </div>
  );
}
