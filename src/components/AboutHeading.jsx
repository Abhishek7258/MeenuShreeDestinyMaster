import { useState, useEffect } from "react";
import { Play, Users, Sparkles, Star } from "lucide-react";

// Title Component
function Title({ heading, description }) {
  return (
    <div className="text-center mb-16 relative z-10">
      <div className="inline-block mb-4">
        <div className="flex items-center justify-center space-x-2 text-amber-400 animate-pulse">
          <Star className="w-5 h-5 fill-current" />
          <Sparkles className="w-6 h-6" />
          <Star className="w-5 h-5 fill-current" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
        {heading}
      </h1>
      <p className="text-lg text-amber-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
        {description}
      </p>
    </div>
  );
}

// Read More Button Component
function ReadmoreBtn() {
  return (
    <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105">
      <span className="relative z-10 flex items-center space-x-2">
        <span>Explore Our Services</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </button>
  );
}

// Floating Stars Background
function FloatingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
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
  );
}

export default function AboutHeading() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEwzNSAxNUwzMCAzMEwyNSAxNVoiIGZpbGw9IiNmYmNmOGYiLz48L3N2Zz4=')] animate-slide"></div>
      </div>

      {/* Floating Stars */}
      <FloatingStars />

      {/* Mystical Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <Title
          heading="About Astrologer Meenu Suri"
          description="Renowned Astrologer | Motivational Speaker | Numerologist. With over 8+ years of experience, Meenu Suri has guided thousands of individuals towards clarity, inner peace, success, and spiritual balance through intuitive and compassionate guidance."
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-30 animate-pulse-slow"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/30 group">
                <img
                  src="./Images/own.png"
                  alt="Astrologer Meenu Suri"
                  className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 animate-spin-slow">
                <svg className="w-24 h-24 text-amber-400/40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 animate-spin-slow-reverse">
                <svg className="w-24 h-24 text-purple-400/40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>

            {/* Right side - Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-amber-400/20 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                  <h2 className="text-4xl font-bold text-white">
                    What Do We Do?
                  </h2>
                </div>

                <div className="space-y-4 text-amber-50 text-lg leading-relaxed">
                  <p className="hover:text-white transition-colors duration-300">
                    Led by <strong className="text-amber-300">Astrologer Meenu Suri</strong> — a{" "}
                    <em className="text-amber-200">renowned Astrologer, Motivational Speaker, and Numerologist</em>,{" "}
                    <span className="text-amber-300 font-semibold">
                      our mission is to bring clarity, peace of mind, and a positive
                      direction in life through spiritual wisdom and intuitive
                      guidance.
                    </span>
                  </p>

                  <p className="hover:text-white transition-colors duration-300">
                    With over <strong className="text-amber-300">8+ years of professional experience</strong>,
                    Meenu Suri is blessed with deep spiritual insight and ancestral
                    wisdom. Her intuitive understanding of cosmic energies helps
                    individuals overcome confusion, emotional stress, and life
                    challenges while guiding them toward success, happiness, and
                    harmony.
                  </p>

                  <p className="hover:text-white transition-colors duration-300">
                    Through compassionate listening and powerful astrological
                    interpretations, she has helped thousands achieve{" "}
                    <em className="text-amber-200">personal growth, professional success, emotional stability,
                    and spiritual balance</em>. Her guidance empowers people to make
                    confident decisions, align with positive energies, and walk
                    their true life path with faith and clarity.
                  </p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="flex items-center space-x-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 group">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-5 shadow-lg group-hover:shadow-amber-500/50 transition-shadow duration-300 animate-float">
                  <img src="./Images/about.svg" alt="Experience Icon" className="w-12 h-12" />
                </div>
                <div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent animate-number-glow">08+</span>
                    <span className="text-amber-200 text-xl">years of</span>
                  </div>
                  <p className="text-3xl font-semibold text-white">
                    Experience
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="pt-4">
                <ReadmoreBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
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

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
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

        @keyframes number-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
          50% { text-shadow: 0 0 30px rgba(251, 191, 36, 0.8); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }

        .animate-number-glow {
          animation: number-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}