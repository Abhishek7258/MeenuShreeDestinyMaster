import { useState, useEffect } from "react";
import { BookOpen, User, Star, DollarSign, Sparkles } from "lucide-react";

export default function Kundli() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Vastu",
      icon: BookOpen,
      color: "from-orange-500 to-amber-500",
      textColor: "text-orange-400",
      hoverText: "text-amber-300",
      descColor: "text-amber-100",
      borderColor: "border-amber-400",
      iconBg: "from-orange-400 to-amber-500",
      shadowColor: "shadow-amber-500/50",
      description: "Harmonize your home and workspace with the ancient science of Vastu Shastra. Our experts help balance energy flow, ensuring prosperity, peace, and positive vibes in your surroundings."
    },
    {
      id: 2,
      title: "Face Reading",
      icon: User,
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
      hoverText: "text-purple-300",
      descColor: "text-purple-100",
      borderColor: "border-purple-400",
      iconBg: "from-purple-400 to-pink-500",
      shadowColor: "shadow-purple-500/50",
      description: "Unlock the secrets hidden in your facial features through the ancient art of face reading. Discover your personality traits, natural talents, life path, and future potential."
    },
    {
      id: 3,
      title: "Astrology",
      icon: Star,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400",
      hoverText: "text-blue-300",
      descColor: "text-blue-100",
      borderColor: "border-blue-400",
      iconBg: "from-blue-400 to-cyan-500",
      shadowColor: "shadow-blue-500/50",
      description: "Comprehensive astrology consultations including Kundali analysis, planetary positions, and personalized predictions for career, relationships, and life events."
    },
    {
      id: 4,
      title: "Numerology",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
      hoverText: "text-emerald-300",
      descColor: "text-emerald-100",
      borderColor: "border-emerald-400",
      iconBg: "from-emerald-400 to-teal-500",
      shadowColor: "shadow-emerald-500/50",
      description: "Decode the power of numbers in your life. Our numerology readings reveal your life path, personality traits, and future potential through your date of birth and name vibrations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEwzNSAxNUwzMCAzMEwyNSAxNVoiIGZpbGw9IiNmYmNmOGYiLz48L3N2Zz4=')] animate-slide"></div>
      </div>

      {/* Floating Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Star className="w-2 h-2 text-amber-300 fill-current opacity-60" />
          </div>
        ))}
      </div>

      {/* Mystical Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-amber-400 animate-pulse">
              <Star className="w-5 h-5 fill-current" />
              <Sparkles className="w-6 h-6" />
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Hero image with mystical frame */}
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
              
              <div className="relative">
                <div className="w-full h-full relative">
                  {/* Rotating outer circle */}
                  <div className="animate-spin-slow">
                    <img src="./Images/gola2.png" alt="Mystical Circle" className="w-full rounded-full shadow-2xl" />
                  </div>
                  
                  {/* Center image with glow effect - Fixed positioning */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 to-purple-500/30 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                      <img
                        src="./Images/women3.png"
                        alt="Astrologer"
                        className="w-62 h-62 lg:w-100 lg:h-100 rounded-full object-cover relative z-10 border-3 border-amber-400/80 shadow-2xl group-hover:border-green-400/80 hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative orbiting elements */}
              <div className="absolute top-1/4 -left-4 animate-float">
                <div className="w-8 h-8 bg-amber-400/30 rounded-full blur-sm"></div>
              </div>
              <div className="absolute bottom-1/4 -right-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-6 bg-purple-400/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Right side - Service cards */}
          <div className={`lg:w-1/2 w-full max-w-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredCard === service.id;
                return (
                  <div
                    key={service.id}
                    className={`group relative bg-gradient-to-br ${service.color}/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-${service.shadowColor} transition-all duration-500 transform hover:-translate-y-3 border ${service.borderColor}/30 hover:${service.borderColor}/60 cursor-pointer overflow-hidden`}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/0 group-hover:${service.color}/20 transition-all duration-500`}></div>
                    
                    <div className="relative text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.iconBg} flex items-center justify-center transition-all duration-500 shadow-lg ${isHovered ? "scale-110 shadow-lg animate-bounce" : ""}`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold text-white mb-3 group-hover:${service.hoverText} transition-colors duration-300`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300 ${service.descColor}`}>
                        {service.description}
                      </p>
                      <button className={`relative ${service.textColor} font-semibold text-sm hover:${service.hoverText} transition-colors duration-200 flex items-center gap-2 mx-auto group-hover:gap-3`}>
                        Book Services
                        <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes slide {
          from { transform: translateY(0); }
          to { transform: translateY(60px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-slide { animation: slide 20s linear infinite; }
        .animate-bounce { animation: bounce 1s infinite; }
      `}</style>
    </div>
  );
}
