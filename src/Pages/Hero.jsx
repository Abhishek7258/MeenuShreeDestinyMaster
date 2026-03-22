import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AboutHeading from "../components/AboutHeading";
import HeroScope from "../components/HeroScope";
import Kundli from "../components/Kundli";
import WhyToChoose from "../components/WhyToChoose";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";
import Combo from "../components/Combo";
import Testimonials from "../components/Testimonials";

const AstrologyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "What's Your Number?",
      heading: "Personalized readings based on your birth date and name.",
      description:
        "Discover Your Daily NumerologyStart your day with divine number guidance.Unveil what the numbers reveal about your path, energy, and decisions today—crafted with precision by expert numerologists.",
      buttonText: "Book Appointment",
    },
    {
      title: "Discover Your Path",
      heading: "Unveil the Secrets of the Stars",
      description:
        "Unlock the Wisdom of Tarot CardsDelve into the energy of the present moment and explore how tarot can guide your choices, heal your emotions, and reveal your life’s direction.✨ Get intuitive and personalized card readings by experienced tarot readers.",
      buttonText: "Book Appointment",
    },
    {
      title: "Energy Alignment",
      heading: "Let your home guide your destiny.",
      description:
        "Navigate Life with Vastu Shastra Confused about home energy, financial flow, or relationships? Let ancient Vastu wisdom align your space and bring balance, peace, and prosperity into your life",
      buttonText: "Book Appointment",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* part1 */}
      <div className="bg-[url(/Images/bg5.png)] bg-cover bg-center bg-no-repeat">
        <div className="w-full lg:h-screen h-full overflow-hidden">
          {/* Animated starry background */}
         

          {/* Sliding text content */}
          <div className="flex flex-col items-center justify-center h-full px-8 my-9">
            <div className="max-w-4xl w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 text-white text-center"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-light mb-2 opacity-90">
                        {slide.title}
                      </h3>
                      <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        {slide.heading}
                      </h1>
                      <p className="text-lg opacity-80 leading-relaxed mb-8 max-w-2xl mx-auto">
                        {slide.description}
                      </p>
                      <Link to="/form">
                        <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          {slide.buttonText}
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons below content */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-amber-600 bg-opacity-20 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Slide indicators */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white bg-opacity-40 hover:bg-opacity-60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-amber-500 bg-opacity-20 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"></div>
        </div>

        {/* part2 */}
        <div className="bg-[url(/Images/shape.svg)] h-20 w-full rotate-180 bg-cover bg-center bg-no-repeat"></div>
      </div>
      
      {/* part 3 */}
      <div>
        <AboutHeading />
      </div>
      <div>
        <WhyToChoose />
      </div>
      <div>
        <Kundli />
      </div>
      <div>
       
      </div>
      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default AstrologyCarousel;
