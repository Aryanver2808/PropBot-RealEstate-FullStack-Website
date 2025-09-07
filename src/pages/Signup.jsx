import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import heroBanner from "../assets/authBanner.png"; // replace with your image
import logo from "../assets/logo.png"; // replace with your logo
import { ArrowLeft, ArrowRight, Mail, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../Context/AuthContext"; 
export default function RegisterPage() {

  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await register(formData.email, formData.password);
      alert("✅ Account created!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-6 py-5 shadow-lg">
        {/* Left Button */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold ml-4 bg-white text-gray-500 px-4 py-2 rounded-full border-2 border-blue-700 hover:border-blue-900 transition-colors text-sm sm:text-base"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-500 hover:border-gray-700">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </span>
          Back to HomePage
        </Link>

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 sm:h-10 object-contain" />

        {/* Right Button */}
        <Link
          to="/aboutus"
          className="flex items-center gap-2 mr-4 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          About Us
          <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white">
            <ArrowRight className="w-3 h-3 text-white" />
          </span>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left - Register Form */}
        <div className="flex w-full md:w-2/5 items-center justify-center px-6 py-8">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="text-4xl font-bold mb-6 text-center">
              Create an Account
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-blue-800 px-4 py-3 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border-blue-800 px-4 py-3 pr-10 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full border-blue-800 px-4 py-3 pr-10 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-800"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full border-blue-800 px-4 py-3 pr-10 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-800"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-900 text-white text-lg sm:text-xl py-3 mt-5 rounded-full hover:bg-blue-700 transition-colors"
              >
                Create Account
              </button>

              {/* Already have account */}
              <p className="mt-1 text-gray-600 text-center text-sm sm:text-base">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right - Banner */}
        <div className="hidden md:flex w-3/5">
          <img
            src={heroBanner}
            alt="Register Banner"
            className="w-full h-full object-cover rounded-s-2xl"
          />
        </div>
      </div>
    </div>
  );
}
