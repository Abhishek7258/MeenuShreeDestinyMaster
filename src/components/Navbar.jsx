import { useState, useEffect } from 'react';
import { Star, Menu, X, Home, Briefcase, Calendar, User, Mail, ChevronRight, Box, StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Utility/Logo';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { 
      id: '', 
      label: 'Home', 
      icon: Home,
      description: 'Welcome to your celestial journey',
      gradient: 'from-purple-500 to-blue-500'
    },
    { 
      id: 'service', 
      label: 'Services', 
      icon: Briefcase,
      description: 'Astrology readings & consultations',
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      id: 'Astrology', 
      label: 'Astrology', 
      icon: StarIcon,
      description: 'Astrology readings & consultations',
      gradient: 'from-pink-500 to-red-500'
    },

    { 
      id: 'about', 
      label: 'About', 
      icon: User,
      description: 'Discover our story',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: Mail,
      description: 'Connect with us',
      gradient: 'from-pink-500 to-orange-500'
    }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className=" sticky top-0 w-full z-40 bg-black backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu Button & Logo */}
            <div className="flex items-center space-x-4 ">
              <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                aria-label="Toggle sidebar"
              >
                <Menu className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors" />
              </button>
              <Logo/>
            </div>
            
            {/* Desktop Quick Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.slice(0, 5).map((item) => (
                <Link 
                  key={item.id}
                  to={`/${item.id}`}
                  className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Meenu Shree
              </h2>
              <p className="text-gray-400 text-sm">Navigation Menu</p>
            </div>
          </div>
          
          <button 
            onClick={closeSidebar}
            className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              
              <Link
                key={item.id}
                to={`/${item.id}`}
                onClick={closeSidebar}
                className="group relative block p-4 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:scale-102"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isSidebarOpen ? 'slideInLeft 0.3s ease-out forwards' : ''
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} p-2.5 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              Discover your cosmic destiny
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}