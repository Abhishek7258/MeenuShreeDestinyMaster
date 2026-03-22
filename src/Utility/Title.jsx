import React from 'react'

const Title = ({heading="About Astrology",
  
   description="hello"}) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          {heading}
        </h2>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-8">
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
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
         {description}
        </p>
      </div>
    </div>
  )
}

export default Title