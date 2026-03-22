import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  /* ---------------- Responsive items per view ---------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      name: "Rohit Singh",
      initial: "R",
      time: "2 month ago",
      rating: 4,
      text: "Product quality is very good. I really loved the experience.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Harindra Routh",
      initial: "H",
      time: "2 week ago",
      rating: 5,
      text: "Awesome service and fast response. Highly recommended!",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Pulkit Bawa",
      initial: "P",
      time: "10 days ago",
      rating: 5,
      text: "Meenu Suri was extremely helpful throughout the buying process.",
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "Priya Mehta",
      initial: "P",
      time: "1 week ago",
      rating: 5,
      text: "Different approach and very honest advice. Truly impressive!",
      color: "from-fuchsia-500 to-pink-600",
    },
    {
      name: "Aman Verma",
      initial: "A",
      time: "11 days ago",
      rating: 4,
      text: "Nice experience overall. Will definitely try again.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  /* ---------------- Auto slide ---------------- */
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  /* ---------------- Swipe support ---------------- */
  useEffect(() => {
    let startX = 0;

    const touchStart = (e) => (startX = e.touches[0].clientX);
    const touchEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    };

    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("touchstart", touchStart, { passive: true });
    slider.addEventListener("touchend", touchEnd, { passive: true });

    return () => {
      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchend", touchEnd);
    };
  }, [maxIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "fill-amber-400 text-amber-400 animate-pulse"
            : "fill-gray-200 text-gray-200"
        }
      />
    ));

  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 py-20 px-4 overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Mystical glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 rounded-full text-sm font-semibold">
              ✨ TESTIMONIALS ✨
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent mb-4 animate-shimmer">
            What Our Customers Say
          </h2>
          <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
            Real experiences from real people who trust our service
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden rounded-2xl"
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl shadow-2xl p-6 h-full border border-purple-400/20 hover:border-purple-400/50 hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  <Quote className="w-8 h-8 text-purple-300/50 mb-3 animate-float" />
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg animate-bounce-slow`}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-100">{t.name}</h4>
                      <p className="text-xs text-purple-300/70">{t.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">{renderStars(t.rating)}</div>
                  <p className="text-purple-100/90 mt-4">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 w-8 shadow-lg shadow-purple-400/50"
                    : "bg-purple-400/30 w-2 hover:bg-purple-400/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;