import React from 'react'

interface CapabilityCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group w-full h-72">
      {/* Header with Icon */}
      <div className={`h-24 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white" style={{ fontSize: '4rem' }}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: "w-16 h-16 text-white"
            })}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 h-48 flex flex-col">
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-xs leading-relaxed flex-grow line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  )
}

export default CapabilityCard
