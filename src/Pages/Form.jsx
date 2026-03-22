import React, { useState } from "react";
import { Phone, MessageCircle, Star, Moon, Sun } from "lucide-react";

export default function Form() {
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
    const whatsappMessage = `🔮 *New Astrology Reading Request* 🔮

⭐ *Client Details:*
• Name: ${formData.firstName}
• Email: ${formData.email}
• Phone: ${formData.phone || "Not provided"}

🌟 *Message:*
${formData.message || "No additional message"}

━━━━━━━━━━━━━━━━━━━━
✨ *Sent via Cosmic Insights Astrology Contact Form*
📅 ${new Date().toLocaleDateString()}
🌙 ${new Date().toLocaleTimeString()}`;

    // Business WhatsApp number (replace with actual number)
    const businessWhatsApp = "918437275566";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(
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
        "✨ Successfully redirected to WhatsApp! The stars will guide our response within 24 hours."
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <h1 className="text-5xl lg:text-5xl font-black leading-tight text-center my-2.5 text-white">
        Book Your
        <span className="text-yellow-400"> Reading</span>
      </h1>
      
      {/* Floating Stars and Celestial Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-8 h-8 text-yellow-400 opacity-70 animate-pulse">
          <Star className="w-full h-full" fill="currentColor" />
        </div>
        <div className="absolute top-32 right-32 w-12 h-12 text-blue-300 opacity-60 animate-bounce">
          <Moon className="w-full h-full" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 text-orange-400 opacity-50 animate-ping">
          <Sun className="w-full h-full" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-20 w-6 h-6 text-purple-300 opacity-80 animate-pulse">
          <Star className="w-full h-full" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 left-10 w-4 h-4 text-pink-400 opacity-60 animate-bounce">
          <Star className="w-full h-full" fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 text-cyan-300 opacity-40 animate-pulse">
          <Moon className="w-full h-full" fill="currentColor" />
        </div>
      </div>

      {/* Mystical Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="constellation"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1.5" fill="white" opacity="0.8" />
              <circle cx="20" cy="20" r="1" fill="yellow" opacity="0.6" />
              <circle cx="60" cy="20" r="0.8" fill="purple" opacity="0.7" />
              <circle cx="20" cy="60" r="1.2" fill="cyan" opacity="0.5" />
              <circle cx="60" cy="60" r="0.9" fill="pink" opacity="0.6" />
              <line x1="20" y1="20" x2="40" y2="40" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="40" y1="40" x2="60" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto gap-16 items-center w-full">
          {/* Contact Form */}
          <div className="bg-slate-800 bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-purple-400 border-opacity-30 shadow-2xl shadow-purple-900/50">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <div className="relative">
                  <MessageCircle className="w-8 h-8 text-yellow-400" />
                  <Star className="w-4 h-4 text-purple-300 absolute -top-1 -right-1" fill="currentColor" />
                </div>
                Connect with the Cosmos
              </h2>
              <p className="text-purple-200 leading-relaxed">
                Seek guidance from the stars. We'll unveil your cosmic destiny within 24 hours on celestial alignments.
              </p>
            </div>

            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  First Name <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-700 bg-opacity-70 rounded-xl border border-purple-400 border-opacity-30 focus:ring-3 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-white placeholder-gray-300 font-medium backdrop-blur"
                  placeholder="Enter your celestial name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Moon className="w-4 h-4 text-blue-400" fill="currentColor" />
                  Email Address <span className="text-yellow-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-700 bg-opacity-70 rounded-xl border border-purple-400 border-opacity-30 focus:ring-3 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-white placeholder-gray-300 font-medium backdrop-blur"
                  placeholder="Enter your cosmic communication portal"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-orange-400" fill="currentColor" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-700 bg-opacity-70 rounded-xl border border-purple-400 border-opacity-30 focus:ring-3 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-white placeholder-gray-300 font-medium backdrop-blur"
                  placeholder="Enter your earthly contact number"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <Star className="w-3 h-3 text-purple-400" fill="currentColor" />
                    <Star className="w-3 h-3 text-pink-400" fill="currentColor" />
                    <Star className="w-3 h-3 text-cyan-400" fill="currentColor" />
                  </div>
                  Your Cosmic Question
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={180}
                    className="w-full px-4 py-4 bg-slate-700 bg-opacity-70 rounded-xl border border-purple-400 border-opacity-30 focus:ring-3 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-white placeholder-gray-300 font-medium resize-none backdrop-blur"
                    placeholder="Share your birth details, specific questions about love, career, or life path. What guidance do you seek from the universe?"
                  />
                  <div className="absolute bottom-3 right-4 text-xs text-purple-300 bg-slate-800 bg-opacity-70 px-2 py-1 rounded border border-purple-500 border-opacity-30">
                    {formData.message.length} / 180
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={sendToWhatsApp}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform hover:scale-[1.02] active:scale-95 border-2 ${
                  isSubmitting
                    ? "bg-gray-600 border-gray-500 cursor-not-allowed text-gray-300"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-yellow-400 hover:border-yellow-300 hover:shadow-xl hover:shadow-purple-900/50"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Channeling the Universe...
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
                    <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    Send to WhatsApp
                  </>
                )}
              </button>
            </div>

            {/* Mystical Footer */}
            <div className="mt-8 pt-6 border-t border-purple-400 border-opacity-30">
              <p className="text-center text-purple-200 text-sm flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                "The cosmos is within us. We are made of star-stuff."
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}