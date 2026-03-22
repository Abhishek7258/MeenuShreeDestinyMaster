// src/components/Preloader.jsx
import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="loader rounded-full border-8 border-t-8 border-orange-500 h-20 w-20 animate-spin"></div>
    </div>
  );
};

export default Preloader;
