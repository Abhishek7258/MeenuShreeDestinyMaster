import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Abhay Singh",
      title: "Life Coach & Wellness Expert",
      text:
        "The birth chart reading was incredibly accurate and insightful. It helped me understand my true purpose and navigate life’s challenges with newfound clarity.",
      rating: 5,
      image: "./Images/t1.png",
      location: "Delhi, India",
      service: "Birth Chart Reading",
    },
    {
      name: "Abhishek Rathore",
      title: "Business Entrepreneur",
      text:
        "Amazing horoscope predictions! The guidance has been spot-on for the past year and helped me take crucial business decisions.",
      rating: 5,
      image: "./Images/t4.png",
      location: "Bihar, India",
      service: "Monthly Horoscope",
    },
    {
      name: "Sneha Gupta",
      title: "Creative Director",
      text:
        "The tarot reading gave me clarity during a confusing phase of life. Everything resonated deeply.",
      rating: 5,
      image: "./Images/t2.png",
      location: "Bangalore, India",
      service: "Tarot Reading",
    },
    {
      name: "Rohan Tiwari",
      title: "Spiritual Seeker",
      text:
        "Palm reading was surprisingly accurate. Every detail matched my life events perfectly.",
      rating: 5,
      image: "./Images/t3.png",
      location: "Mumbai, India",
      service: "Palm Reading",
    },
  ];

  // Auto Play
  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300/20 animate-float"
            size={Math.random() * 18 + 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Cosmic Stories ✨
          </h2>
          <p className="text-white/70 text-lg">
            Real experiences from our happy clients
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                (currentSlide - 1 + testimonials.length) %
                  testimonials.length
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % testimonials.length)
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20"
          >
            <ChevronRight className="text-white" />
          </button>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-xl">
            <Quote className="text-yellow-400/30 w-12 h-12 mb-4" />

            <p className="text-white text-xl italic mb-6">
              "{testimonials[currentSlide].text}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-bold">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-yellow-400 text-sm">
                  {testimonials[currentSlide].title}
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-3 rounded-full transition-all ${
                currentSlide === i
                  ? "w-10 bg-yellow-400"
                  : "w-3 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
