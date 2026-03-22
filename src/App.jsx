import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Hero from "./Pages/Hero";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader"; // ✅ Import Preloader
import Form from "./Pages/Form";

import AstrologyBooking from "./Pages/Astrologer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/form" element={<Form />} />
          <Route path="/astrology" element={<AstrologyBooking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
