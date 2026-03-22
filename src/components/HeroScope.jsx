import React from "react";
import Title from "../Utility/Title";
import { useState, useEffect } from "react";
import {
  Star,
  Moon,
  Sun,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Play,
  Clock,
  Users,
  Award,
} from "lucide-react";

const HeroScope = () => {
  const [selectedZodiac, setSelectedZodiac] = useState("aries");
  const horoscopes = {
    aries:
      "Today brings exciting opportunities for new beginnings. Your natural leadership will shine through in professional matters. Trust your instincts when making important decisions.",
    taurus:
      "Financial stability takes center stage today. Your practical approach to money matters will yield positive results. Take time to appreciate life's simple pleasures.",
    gemini:
      "Communication is key today. Your wit and charm will open doors to new connections. Stay curious and embrace learning opportunities that come your way.",
    cancer:
      "Family and home life require your attention today. Your nurturing nature will be appreciated by loved ones. Trust your emotional intuition in personal matters.",
    leo: "Your creativity and confidence are at their peak today. Take center stage and showcase your talents. Romance may blossom in unexpected ways.",
    virgo:
      "Organization and attention to detail will serve you well today. Focus on health and wellness routines. Your analytical skills will solve complex problems.",
    libra:
      "Balance and harmony are essential today. Your diplomatic skills will resolve conflicts. Beauty and aesthetics may play an important role in your day.",
    scorpio:
      "Deep transformation is occurring in your life. Trust the process and embrace change. Your intuitive powers are heightened today.",
    sagittarius:
      "Adventure and expansion call to you today. Your optimistic outlook inspires others. Consider planning a journey or exploring new philosophies.",
    capricorn:
      "Hard work and determination will pay off today. Your ambitious nature drives you toward success. Focus on long-term goals and career advancement.",
    aquarius:
      "Innovation and humanitarian efforts take precedence today. Your unique perspective offers solutions to group challenges. Embrace your individuality.",
    pisces:
      "Intuition and spirituality guide you today. Your compassionate nature helps others heal. Pay attention to dreams and subtle messages from the universe.",
  };
  const zodiacSigns = [
    {
      name: "Aries",
      dates: "Mar 21 - Apr 19",
      icon: "♈",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Taurus",
      dates: "Apr 20 - May 20",
      icon: "♉",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Gemini",
      dates: "May 21 - Jun 20",
      icon: "♊",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Cancer",
      dates: "Jun 21 - Jul 22",
      icon: "♋",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Leo",
      dates: "Jul 23 - Aug 22",
      icon: "♌",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Virgo",
      dates: "Aug 23 - Sep 22",
      icon: "♍",
      color: "from-green-600 to-teal-500",
    },
    {
      name: "Libra",
      dates: "Sep 23 - Oct 22",
      icon: "♎",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Scorpio",
      dates: "Oct 23 - Nov 21",
      icon: "♏",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Sagittarius",
      dates: "Nov 22 - Dec 21",
      icon: "♐",
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "Capricorn",
      dates: "Dec 22 - Jan 19",
      icon: "♑",
      color: "from-gray-600 to-slate-600",
    },
    {
      name: "Aquarius",
      dates: "Jan 20 - Feb 18",
      icon: "♒",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Pisces",
      dates: "Feb 19 - Mar 20",
      icon: "♓",
      color: "from-indigo-500 to-purple-500",
    },
  ];
  return (
    <div className="bg-[url(/Images/bg3.jpg)] bg-cover bg-center">
      <div className="pt-8">
        <Title
          heading="Horoscope Forecasts"
          description="Get accurate and personalized daily, weekly, and monthly horoscope predictions based on your zodiac sign. Discover what the stars reveal about your love life, career, health, and finances, and make informed decisions with cosmic guidance."
        />
      </div>
      {/* Horoscope Section */}
      <section id="horoscope" className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {zodiacSigns.map((sign, index) => (
              <button
                key={index}
                onClick={() => setSelectedZodiac(sign.name.toLowerCase())}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedZodiac === sign.name.toLowerCase()
                    ? `bg-gradient-to-r ${sign.color} shadow-lg scale-105`
                    : "bg-white shadow-[10px] shadow-amber-300 hover:bg-amber-500"
                }`}
              >
                <div className="text-3xl mb-2">{sign.icon}</div>
                <div className="text-sm font-semibold">{sign.name}</div>
                <div className="text-xs text-black">{sign.dates}</div>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">
                {
                  zodiacSigns.find(
                    (sign) => sign.name.toLowerCase() === selectedZodiac
                  )?.icon
                }
              </div>
              <div>
                <h3 className="text-2xl font-bold capitalize">
                  {selectedZodiac}
                </h3>
                <p className="text-gray-400">Today's Reading</p>
              </div>
            </div>
            <p className="text-lg text-black leading-relaxed">
              {horoscopes[selectedZodiac]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroScope;
