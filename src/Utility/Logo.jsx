import { Star } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          
          <Star className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Destiniy Master
        </span>
      </div>
    </div>
  );
};

export default Logo;
