import React, { useState } from "react";

export default function AstrologyBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    birthtime: "",
    birthplace: "",
    readingType: "",
    message: "",
  });

  // Replace with your WhatsApp number (include country code without + or -)
  const WHATSAPP_NUMBER = " 8437275566"; // e.g., '919876543210' for India

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `
🌟 *New Astrology Reading Booking* 🌟

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}

*Birth Details:*
📅 Date: ${formData.birthdate}
⏰ Time: ${formData.birthtime || "Not provided"}
📍 Place: ${formData.birthplace}

*Reading Type:* ${formData.readingType}

*Message:*
${formData.message || "No additional message"}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      birthdate: "",
      birthtime: "",
      birthplace: "",
      readingType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl">
        {/* Hero Section */}
        <div
          className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/Images/astrobg.png')`,
          }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              ✨ Astrology ✨
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md">
              Unlock the Mysteries of the Stars
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 md:px-8 py-12 md:py-16">
          {/* About Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
              Discover Your Cosmic Path
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Astrology is an ancient practice that studies the movements and
                positions of celestial bodies to understand their influence on
                human affairs and natural phenomena. For thousands of years,
                civilizations have looked to the stars for guidance, wisdom, and
                insight into life's greatest mysteries.
              </p>
              <p>
                Through the careful analysis of your birth chart, planetary
                transits, and cosmic alignments, astrology reveals profound
                insights about your personality, relationships, career path, and
                life purpose. Each planet, sign, and house tells a unique story
                about who you are and the journey you're meant to take.
              </p>
              <p>
                Whether you're seeking clarity during challenging times, looking
                to understand your relationships better, or simply curious about
                what the universe has in store for you, an astrology reading can
                provide the guidance and perspective you need to navigate life
                with confidence and purpose.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: "🌙",
                title: "Birth Chart Analysis",
                desc: "Deep dive into your natal chart and discover your true self",
              },
              {
                icon: "💫",
                title: "Relationship Compatibility",
                desc: "Understand cosmic connections and relationship dynamics",
              },
              {
                icon: "⭐",
                title: "Career Guidance",
                desc: "Find your professional path aligned with celestial wisdom",
              },
              {
                icon: "🔮",
                title: "Future Forecasts",
                desc: "Navigate upcoming transits and cosmic opportunities",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-6 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-purple-100">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 text-center mb-8">
              Book Your Reading
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Time of Birth
                  </label>
                  <input
                    type="time"
                    name="birthtime"
                    value={formData.birthtime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  name="birthplace"
                  value={formData.birthplace}
                  onChange={handleChange}
                  placeholder="City, Country"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Type of Reading *
                </label>
                <select
                  name="readingType"
                  value={formData.readingType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a reading type</option>
                  <option value="Natal Chart Reading">
                    Natal Chart Reading
                  </option>
                  <option value="Relationship Compatibility">
                    Relationship Compatibility
                  </option>
                  <option value="Career Guidance">Career Guidance</option>
                  <option value="Future Forecast">Future Forecast</option>
                  <option value="General Consultation">
                    General Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Questions or Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us what you'd like to explore in your reading..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Send to WhatsApp ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
