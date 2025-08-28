import React from 'react'
import { FaLightbulb, FaCogs, FaRocket, FaSync } from 'react-icons/fa'

interface ProcessData {
  step: number
  icon: React.ReactNode
  image: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

interface TechEvolutionGridProps {
  title?: string
  subtitle?: string
  className?: string
}

const TechEvolutionGrid: React.FC<TechEvolutionGridProps> = ({
  title = "Your Technology Evolution Partner",
  subtitle = "Whether you're defining your tech strategy, choosing implementation partners, or embedding organizational change for continuous growth - Unknown has the expertise to unlock the full value of technology transformation.",
  className = ""
}) => {
  
  const processes: ProcessData[] = [
    {
      step: 1,
      icon: <FaLightbulb />,
      image: "/images/strategy-vision.svg",
      title: "Strategy & Vision",
      description: "Define winning digital strategies that align with business objectives and market opportunities.",
      gradientFrom: "from-yellow-400",
      gradientTo: "to-orange-500"
    },
    {
      step: 2,
      icon: <FaCogs />,
      image: "/images/smart-implementation.svg",
      title: "Smart Implementation",
      description: "Execute with precision using proven frameworks and cutting-edge technology solutions.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-600"
    },
    {
      step: 3,
      icon: <FaRocket />,
      image: "/images/scale-growth.svg",
      title: "Scale & Growth",
      description: "Build platforms that grow with your business and adapt to changing market demands.",
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600"
    },
    {
      step: 4,
      icon: <FaSync />,
      image: "/images/continuous-innovation.svg",
      title: "Continuous Innovation",
      description: "Stay ahead with emerging technologies and innovative solutions that create competitive advantage.",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-600"
    }
  ]
  
  return (
    <section className={`py-16 ${className}`} style={{ backgroundColor: '#F3F3F3' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* 2x2 Grid Layout with Timeline */}
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '3rem',
              marginBottom: '3rem',
              position: 'relative'
            }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {/* Central Timeline Connector */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120px',
                height: '120px',
                border: '4px dashed #d1d5db',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f9fafb',
                zIndex: 10,
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#6b7280'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div>🚀</div>
                <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>FLOW</div>
              </div>
            </div>

            {processes.map((process, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out',
                  position: 'relative',
                  height: '350px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 32px 64px -12px rgba(0, 0, 0, 0.25)'
                  e.currentTarget.style.borderColor = process.gradientFrom.replace('from-', '#').replace('-500', '')
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                {/* Step Number Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '40px',
                    height: '40px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    zIndex: 10
                  }}
                  className={`bg-gradient-to-br ${process.gradientFrom} ${process.gradientTo}`}
                >
                  {process.step}
                </div>

                {/* Image/Icon Area */}
                <div 
                  style={{
                    height: '180px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    opacity: 0.9
                  }}
                  className={`bg-gradient-to-br ${process.gradientFrom} ${process.gradientTo}`}
                >
                  {/* Main Icon */}
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '1.75rem',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {React.cloneElement(process.icon as React.ReactElement, { 
                      style: { fontSize: '1.75rem' } 
                    })}
                  </div>
                  
                  {/* Decorative Elements */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%'
                    }}
                  />
                  
                  {/* Process Flow Arrow (for steps 1-3) */}
                  {index < 3 && (
                    <div
                      style={{
                        position: 'absolute',
                        right: '-20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '40px',
                        height: '2px',
                        backgroundColor: '#d1d5db',
                        zIndex: 5
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          right: '-8px',
                          top: '-4px',
                          width: '0',
                          height: '0',
                          borderLeft: '8px solid #d1d5db',
                          borderTop: '5px solid transparent',
                          borderBottom: '5px solid transparent'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div style={{ padding: '2rem' }}>
                  <h3 
                    style={{ 
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '1rem'
                    }}
                  >
                    {process.title}
                  </h3>
                  <p 
                    style={{ 
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      lineHeight: '1.6'
                    }}
                  >
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Start Your Journey Button */}
          <div className="text-center">
            <button
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechEvolutionGrid
