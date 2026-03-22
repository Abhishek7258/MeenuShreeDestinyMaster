import React from 'react';

const WhyToChoose = () => {
  const design = [
    {
      image: '/Images/choose.png',
      title: 'Trusted by Million Clients',
    },
    {
      image: '/Images/choose.png',
      title: 'Years of Experience',
    },
    {
      image: '/Images/choose.png',
      title: 'Types of Horoscopes',
    },
    {
      image: '/Images/choose.png',
      title: 'Qualified Astrologers',
    },
    {
      image: '/Images/choose.png',
      title: 'Accurate Predictions',
    },
  ];

  return (
    <div className="bg-[url('/Images/bg5.png')] bg-cover   py-16 px-4 text-white w-full">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-orange-300 flex-1 max-w-16"></div>
          <div className="mx-4">
            <svg className="w-16 h-8 text-orange-400" viewBox="0 0 120 40" fill="currentColor">
              <path d="M10 20 Q30 5 50 20 T90 20 Q100 15 110 20" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="20" cy="20" r="2" />
              <circle cx="60" cy="20" r="2" />
              <circle cx="100" cy="20" r="2" />
            </svg>
          </div>
          <div className="h-px bg-orange-300 flex-1 max-w-16"></div>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          With decades of experience and a deep understanding of celestial science, we provide trustworthy, insightful, and personalized astrology services. Whether you seek clarity in relationships, career, or self-discovery, our guidance is rooted in ancient wisdom and modern interpretation to help you move forward with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {design.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl transition duration-300 hover:scale-105 hover:bg-white/20">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mb-3"
              loading="lazy"
              onError={(e) => (e.target.src = '/Images/fallback.svg')} // optional fallback
            />
            <p className="text-center font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyToChoose;
