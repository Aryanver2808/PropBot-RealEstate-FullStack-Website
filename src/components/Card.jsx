import React from 'react'
import { BarChart2, Key, Lock, Search, } from "lucide-react";
const Card = () => {
    const services = [
    {
      icon: <BarChart2 className="w-10 h-10 text-blue-600" />,
      title: "Buy & Sell Properties",
      description: "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: <Key className="w-10 h-10 text-blue-600" />,
      title: "Find Rental Homes",
      description: "Browse through thousands of rental options suited to your needs.",
    },
    {
      icon: <Search className="w-10 h-10 text-blue-600" />,
      title: "Smart AI Property Search",
      description: "Get instant recommendations based on your budget & location.",
    },
    {
      icon: <Lock className="w-10 h-10 text-blue-600" />,
      title: "Safe & Secure Transactions",
      description: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];
  return (
    <section className="bg-white mt-29 ">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-900">
            What We Do?
          </h2>
          <p className="mt-2 text-gray-500 text-xl font-semibold w-[450px] mx-auto">
            Helping you find, buy, and rent the perfect property with ease.
          </p>

          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-[2px_2px_5px_rgba(0,0,0,0.3)] transition  hover:bg-white"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Card