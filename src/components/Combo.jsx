import React, { useState } from "react";
import {
  CheckCircle,
  Star,
  Clock,
  Users,
  Phone,
  Car,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const Combo = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Complete Life Analysis",
      price: 5100,
      duration: "45 min + Reports",
      popular: true,
      description: "Comprehensive tarot and numerology package",
      features: [
        "45-minute Tarot Reading",
        "Complete Numerology Report",
        "Mobile Numerology Analysis",
        "Name Numerology",
        "House Numerology",
        "Car Numerology",
        "Personalized Remedies",
        "Single Person Analysis",
      ],
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Vastu Complete Solution",
      price: 28000,
      duration: "Layout + Session",
      premium: true,
      description: "Complete vastu layout with tarot and numerology",
      features: [
        "Single Floor Vastu Layout",
        "Comprehensive Vastu Remedies",
        "45-minute Tarot Session",
        "Complete Numerology Report",
        "Name Numerology Analysis",
        "Personalized Remedies",
        "Professional Consultation",
      ],
      note: "Materials available on paid basis",
      icon: <Home className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Numerology Specialist",
      price: 5100,
      duration: "Detailed Reports",
      description: "Focused numerology analysis package",
      features: [
        "Mobile Numerology Report",
        "Car Numerology Analysis",
        "House Numerology Report",
        "Malefic & Benefic Numbers",
        "Detailed Remedies",
        "Number Compatibility",
        "Future Guidance",
      ],
      icon: <Phone className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      name: "Tarot & Basic Numerology",
      price: 3200,
      duration: "45 min",
      description: "Essential tarot reading with numerology insights",
      features: [
        "45-minute Tarot Reading",
        "Basic Numerology Analysis",
        "Personalized Remedies",
        "Life Guidance",
        "Spiritual Insights",
        "Future Predictions",
      ],
      icon: <Clock className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const individualServices = [
    {
      name: "Ramal Guidance",
      price: 1400,
      description: "Single question guidance",
      limit: "3-4 questions allowed",
    },
    {
      name: "Tarot Reading - 30 min",
      price: 1500,
      description: "Quick tarot session",
      limit: "5-6 questions allowed",
    },
    {
      name: "Tarot Reading - 45 min",
      price: 1800,
      description: "Standard tarot session",
      limit: "7-8 questions allowed",
    },
    {
      name: "Tarot Reading - 60 min",
      price: 2100,
      description: "Extended tarot session",
      limit: "9-10 questions allowed",
    },
    {
      name: "Car Numerology (Existing)",
      price: 1200,
      description: "Analysis for purchased car",
      limit: "Remedies & suggestions",
    },
    {
      name: "Car Numerology (New Purchase)",
      price: 2100,
      description: "Pre-purchase guidance",
      limit: "Complete analysis & recommendations",
    },
    {
      name: "Mobile Numerology",
      price: 2100,
      description: "Mobile number analysis",
      limit: "For existing or new numbers",
    },
    {
      name: "Vastu Layout Only",
      price: 28000,
      description: "Single floor residence",
      limit: "Without materials",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spiritual Guidance Packages
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive combo packages or individual services
            for personalized spiritual guidance
          </p>
        </div>

        {/* Combo Packages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Combo Packages
            <span className="block text-lg font-normal text-gray-300 mt-2">
              Best value for comprehensive guidance
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedPackage === pkg.id ? "ring-2 ring-white/50" : ""
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {pkg.premium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 bg-gradient-to-r ${pkg.color} rounded-lg flex items-center justify-center text-white mb-4`}
                >
                  {pkg.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>

                <div className="flex items-end mb-6">
                  <span className="text-3xl font-bold text-white">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 ml-2">/{pkg.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <p className="text-xs text-yellow-300 mb-4 italic">
                    * {pkg.note}
                  </p>
                )}
                <Link to="/form">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg hover:shadow-purple-500/25`}
                  >
                    Choose Package
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Services */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Individual Services
            <span className="block text-lg font-normal text-gray-300 mt-2">
              Customize your spiritual journey
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {individualServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-white">
                    ₹{service.price.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-4">{service.limit}</p>
                <Link to="/form">
                  <button className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Connect with our spiritual guidance experts and discover your path
              to enlightenment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="tel:9625900874">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Book Consultation
                </button>
              </Link>
              <Link to="/product">
                <button className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combo;
