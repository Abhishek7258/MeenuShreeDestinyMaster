import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Star,
  Telescope,
  Globe,
} from "lucide-react";
import Header from "../components/Header"; 
import Map from "../Utility/Map";

export default function AstronomyContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendToWhatsApp = () => {
    // Validate required fields
    if (!formData.firstName.trim()) {
      alert("Please enter your first name");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `🌟 *New Astronomy Inquiry* 🌟

👤 *Explorer Details:*
• Name: ${formData.firstName}
• Email: ${formData.email}
• Phone: ${formData.phone || "Not provided"}

💬 *Message:*
${formData.message || "No additional message"}

━━━━━━━━━━━━━━━━━━━━
🔭 *Sent via Cosmic Observatory Contact Form*
📅 ${new Date().toLocaleDateString()}
⏰ ${new Date().toLocaleTimeString()}`;

    // Observatory WhatsApp number
    const observatoryWhatsApp = "918437275566";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${observatoryWhatsApp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setTimeout(() => {
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
      alert(
        "✅ Successfully sent to observatory! We'll respond within 24 hours."
      );
    }, 1000);
  };

  const socialLinks = {
    instagram: "https://www.instagram.com/destiny._.master",
    facebook: "https://www.youtube.com/@destiny._.master",
    youtube: "https://youtube.com/@destiny._.master",
  };

  const openSocialLink = (platform) => {
    window.open(socialLinks[platform], "_blank");
  };

  return (
    <>
    <Header title="Contact Us"/>
    <div className="min-h-screen bg-[url(/Images/bg.png)] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Cosmic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cosmic-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="3" fill="white" opacity="0.4" />
              <circle cx="0" cy="0" r="1.5" fill="cyan" opacity="0.3" />
              <circle cx="80" cy="80" r="1.5" fill="purple" opacity="0.3" />
              <circle cx="20" cy="60" r="1" fill="gold" opacity="0.2" />
              <circle cx="60" cy="20" r="1" fill="silver" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cosmic-grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Section - Observatory Info */}
          <div className="text-white space-y-10">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase">
                  Connect With The Universe
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                Explore The
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Cosmos
                </span>
              </h1>

              <p className="text-xl text-purple-100 leading-relaxed max-w-lg">
                Join fellow stargazers and astronomy enthusiasts at
                <span className="font-semibold text-cyan-300">
                  {" "}
                  Cosmic Observatory & Research Center{" "}
                </span>
                for an unforgettable journey through the stars.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-purple-800 bg-opacity-20 backdrop-blur-md rounded-2xl p-6 border border-cyan-300 border-opacity-30 max-w-md">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-400 p-4 rounded-xl shadow-lg">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-200 mb-1">
                    Observatory Hotline
                  </p>
                  <p className="text-2xl font-bold text-white">
                    +91 8437275566
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-purple-800 bg-opacity-20 backdrop-blur-md rounded-2xl p-6 border border-cyan-300 border-opacity-30 max-w-md">
              <p className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Follow Our Journey
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => openSocialLink("instagram")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  title="See our cosmic photography"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => openSocialLink("facebook")}
                  className="bg-blue-600 p-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  title="Join our astronomy community"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => openSocialLink("youtube")}
                  className="bg-red-600 p-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  title="Watch our space documentaries"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </button>
              </div>
              <p className="text-sm text-purple-200 mt-3">
                Daily space discoveries, astrophotography, and stargazing tips!
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-cyan-400 fill-current" />
                <span className="text-purple-100">
                  Professional telescope sessions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-purple-400 fill-current" />
                <span className="text-purple-100">
                  Guided constellation tours
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-pink-400 fill-current" />
                <span className="text-purple-100">
                  Astrophotography workshops
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-purple-100">
                  Planetary observation events
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-purple-800 bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-cyan-300 border-opacity-30 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <Telescope className="w-8 h-8 text-cyan-400" />
                Send A Message
              </h2>
              <p className="text-purple-100 leading-relaxed">
                Have questions about stargazing, want to book a telescope session, or curious about upcoming celestial events? We're here to help!
              </p>
            </div>

            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  First Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-cyan-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-cyan-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-cyan-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={180}
                    className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-cyan-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium resize-none"
                    placeholder="Tell us about your interest in astronomy, preferred observation times, or any specific celestial..."
                  />
                  <div className="absolute bottom-3 right-4 text-xs text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded">
                    {formData.message.length} / 180
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={sendToWhatsApp}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform hover:scale-[1.02] active:scale-95 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending to Observatory...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119" />
                    </svg>
                    Send to Observatory
                  </>
                )}
              </button>
            </div>

            {/* Fun Astronomy Fact */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-opacity-30 rounded-lg border border-cyan-400 border-opacity-20">
              <p className="text-sm text-cyan-100 text-center">
                🌟 <span className="font-semibold">Did you know?</span> On a clear night, you can see about 2,500 stars with the naked eye, but our galaxy contains over 100 billion stars!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Map/>
    <br />
    </>
  );
}