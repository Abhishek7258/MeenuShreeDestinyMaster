import React, { useState } from "react";
import {
  Home,
  MessageCircleHeart,
  Phone,
  PhoneCall,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronUp,
  Diamond,
  Heart,
} from "lucide-react";
import Logo from "../Utility/Logo";
import { Link } from "react-router-dom";

// Placeholder background image URL. You should replace this with your own image.
const bgImage = "./images/footer.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreedToTerms) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/destiny._.master",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/destiny._.master",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@destiny._.master",
    label: "YouTube",
  },
  {  icon: MessageCircleHeart,
    href: "https://wa.me/8437275566",
    label: "WhatsApp",
  },
  {
    icon: PhoneCall,
    href: "tel:+918437275566",
    label: "Call",
  },
];

  return (
    <footer
      className="relative text-white py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Floating Stars Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-orange-300/30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 8 + 4}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          {/* Column 1: Logo and Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* Logo with glow effect */}
            <div className="flex items-center space-x-2 group">
              <div className="p-2  rounded-full shadow-lg group-hover:shadow-orange-400/50 transition-all duration-300">
                <Logo />
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-sm leading-relaxed text-gray-300 font-light">
              Discover the mysteries of the cosmos and unlock your destiny with
              our expert astrological guidance and personalized readings.
            </p>

            {/* Contact Details with hover effects */}
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <MapPin className="text-xl mt-1 text-orange-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                   GL-128, 2nd Floor, Sec-118, TDI Mohali (Pb)
                  </p>
                  <p className="text-xs text-gray-400">
                    Visit our mystical sanctuary
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <Phone className="text-xl mt-1 text-orange-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    +91 8437275566
                  </p>
                  <p className="text-xs text-gray-400">
                    24/7 Spiritual Guidance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <Mail className="text-xl mt-1 text-orange-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                   masterdestiny42@gmail.com
                  </p>
                  <p className="text-xs text-gray-400">
                    Get personalized readings
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <Clock className="text-xl mt-1 text-orange-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    Mon - Sun: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-gray-400">Always here for you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/about", text: "About Us" },
                { to: "/services", text: "Services" },
                { to: "/form", text: "Appointment" },
                { to: "/contact", text: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Horoscope Forecasts */}
         

          {/* Column 4: Newsletter */}
         
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-600/30">
          <div className="flex flex-col gap-4 items-center space-x-6 mb-6 md:mb-0">
            <p className="text-gray-300 font-medium">Follow on Social Media :-</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-500 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-orange-400/30"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Enhanced Copyright Section */}
        <div className="text-center pt-8 border-t border-gray-600/30">
          <p className="text-gray-400 text-sm mb-2">
            Copyright © 2025 Destiny Master. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            ✨ Crafted with cosmic energy and stardust ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
