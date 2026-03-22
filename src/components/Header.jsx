import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({title="About Us"}) {
  return (
    <header className="relative bg-[url(/Images/bg.png)]   min-h-[200px] overflow-hidden">
      {/* Background tarot cards effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-36 bg-yellow-600 rounded-lg transform rotate-12 shadow-lg"></div>
        <div className="absolute top-20 right-20 w-24 h-36 bg-green-600 rounded-lg transform -rotate-6 shadow-lg"></div>
        <div className="absolute top-32 left-1/4 w-24 h-36 bg-blue-600 rounded-lg transform rotate-45 shadow-lg"></div>
        <div className="absolute top-16 right-1/3 w-24 h-36 bg-purple-600 rounded-lg transform -rotate-12 shadow-lg"></div>
        <div className="absolute top-40 right-10 w-24 h-36 bg-red-600 rounded-lg transform rotate-6 shadow-lg"></div>
        <div className="absolute bottom-20 left-16 w-24 h-36 bg-indigo-600 rounded-lg transform -rotate-45 shadow-lg"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-36 bg-pink-600 rounded-lg transform rotate-30 shadow-lg"></div>
      </div>

      {/* Navigation */}
      

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-6xl md:text-4xl font-bold text-white mb-8 tracking-wider">
          {title}
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-4 text-lg text-gray-300 mb-12">
          <Link to="/">
          <span className="text-yellow-400">🏠</span>
          <span>Home</span>
          </Link>
          <span className="text-yellow-400">✦</span>
          <span className="text-yellow-400">{title}</span>
        </div>

        {/* Decorative stars */}
        <div className="absolute top-20 left-1/4 text-yellow-400 text-2xl animate-pulse">✦</div>
        <div className="absolute top-32 right-1/3 text-yellow-400 text-xl animate-pulse delay-500">✧</div>
        <div className="absolute bottom-40 left-1/3 text-yellow-400 text-3xl animate-pulse delay-1000">★</div>
        <div className="absolute bottom-20 right-1/4 text-yellow-400 text-lg animate-pulse delay-700">✦</div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-gray-100 to-transparent"></div>
      
      {/* Jagged white border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full fill-white"
        >
          <path d="M0,0 L48,20 L96,0 L144,30 L192,10 L240,25 L288,5 L336,20 L384,0 L432,15 L480,0 L528,25 L576,10 L624,20 L672,0 L720,30 L768,5 L816,20 L864,0 L912,25 L960,10 L1008,20 L1056,0 L1104,15 L1152,0 L1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Floating mystical elements */}
      <div className="absolute top-1/4 left-10 text-4xl text-yellow-400 opacity-30 animate-bounce">🔮</div>
      <div className="absolute top-1/3 right-20 text-3xl text-purple-400 opacity-40 animate-pulse">🌙</div>
      <div className="absolute bottom-1/3 left-20 text-2xl text-blue-400 opacity-50 animate-spin">⭐</div>
    </header>
  );
}