import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Whatsapp from "../utility/Whatsapp";

const Service = () => {
 const services = [
  {
    id: 1,
    title: "Tarot Card Reading",
    description:
      "Gain insights into your past, present, and future through the ancient art of tarot. Discover guidance for life's important decisions and unlock hidden truths.",
    image: "./images/101.jpg",
    icon: "🔮",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: 2,
    title: "Numerology",
    description:
      "Explore the mystical relationship between numbers and your life path. Understand your personality, destiny, and life purpose through numerical analysis.",
    image: "./images/102.jpg",
    icon: "🔢",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Astrology",
    description:
      "Discover how celestial bodies influence your personality and life events. Get personalized horoscopes and cosmic guidance for important life decisions.",
    image: "./images/103.png",
    icon: "⭐",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: 4,
    title: "Vastu",
    description:
      "Harmonize your living and working spaces with ancient Indian architectural principles. Create positive energy flow and enhance prosperity in your environment.",
    image: "./images/104.png",
    icon: "🏠",
    gradient: "from-teal-400 to-blue-500",
  },
  {
    id: 5,
    title: "Graphology Master",
    description:
      " As a certified Graphologist, I decode the intricate patterns of 'brain-writing' to reveal the deep-seated personality traits and behavioral nuances hidden in handwriting",
    image: "./images/104.png",
    icon: "⭐",
    gradient: "from-teal-400 to-red-500",
  }
];

  const [scroll, setScroll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 700);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll(".service-card").forEach((card) => {
      observer.observe(card);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <span className="text-blue-700 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Premium Services
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tikawala prime Clean Solutions aims to offer expert and
            cost-effective cleaning services to its customers. Our deep cleaning
            costs are very reasonable. Take a look at it!
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-500 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-gray-500 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden transform hover:-translate-y-2 ${
                visibleCards.has(`service-${service.id}`)
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Service Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Service Image */}
              <div className="overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Action Button */}
                <Link to="/form">
                  <button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 group-hover:shadow-xl`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-700/50 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us with their
                cleaning needs. Book a consultation today and experience the
                difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/form">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Book Consultation
                  </button>
                </Link>
                <Link
                  to="https://wa.me/9801546490?text=Hello%20I%20want%20to%20connect%20with%20you
        "
                >
                  <button className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <Whatsapp />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Service;
