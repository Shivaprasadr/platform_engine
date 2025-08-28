import React from 'react'
import { FaCloud, FaShieldAlt, FaTachometerAlt, FaArrowRight } from 'react-icons/fa'

interface SolutionData {
  icon: React.ReactNode
  image: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  linkColor: string
}

interface SolutionsGridProps {
  title?: string
  subtitle?: string
  className?: string
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({
  title = "Our Solutions",
  subtitle = "Tailored Technology for Every Business Need",
  className = ""
}) => {
  
  const solutions: SolutionData[] = [
    {
      icon: <FaCloud />,
      image: "/images/cloudmigration.jpg",
      title: "Cloud Migration",
      description: "Seamless transitions with zero downtime.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      linkColor: "text-blue-600"
    },
    {
      icon: <FaShieldAlt />,
      image: "/images/security-and-compliance.jpg", 
      title: "Security & Compliance",
      description: "Stay ahead of regulations and threats.",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      linkColor: "text-green-600"
    },
    {
      icon: <FaTachometerAlt />,
      image: "/images/performance-and-optimization.jpg",
      title: "Performance Optimization", 
      description: "Maximize speed and efficiency across systems.",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      linkColor: "text-purple-600"
    }
  ]
  
  return (
    <section className={`py-16 ${className}`} style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem',
              marginBottom: '3rem'
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {solutions.map((solution, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out',
                  cursor: 'pointer',
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 32px 64px -12px rgba(0, 0, 0, 0.25)'
                  e.currentTarget.style.borderColor = solution.linkColor.replace('text-', '#').replace('-600', '')
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                {/* Enhanced Image/Icon Area with Infographics */}
                <div 
                  style={{
                    height: '250px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className={`bg-gradient-to-br ${solution.gradientFrom} ${solution.gradientTo}`}
                >
                  {/* Main Banner Image Area - Taller and Proportionate */}
                  <div
                    style={{
                      width: '100%',
                      height: '220px', // Increased height for better aspect ratio
                      borderTopLeftRadius: '1.5rem',
                      borderTopRightRadius: '1.5rem',
                      overflow: 'hidden',
                      position: 'relative',
                      marginBottom: '1.5rem',
                      background: '#f3f3f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img 
                      src={solution.image} 
                      alt={solution.title + ' illustration'} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '0',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                      }}
                    />
                  </div>
                  {/* Icon removed as requested */}
                  
                  {/* Enhanced Background Graphics */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10%',
                      right: '10%',
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      opacity: 0.8
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '15%',
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      opacity: 0.6
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '30%',
                      left: '5%',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      opacity: 0.4
                    }}
                  />
                  
                  {/* Solution-specific Graphics */}
                  {index === 0 && ( // Cloud Migration
                    <>
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        width: '30px',
                        height: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '15px',
                        opacity: 0.7
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '25px',
                        left: '35px',
                        width: '25px',
                        height: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        opacity: 0.5
                      }} />
                    </>
                  )}
                  
                  {index === 1 && ( // Security
                    <>
                      <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        right: '30px',
                        width: '50px',
                        height: '50px',
                        border: '3px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        opacity: 0.6
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '40px',
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        opacity: 0.4
                      }} />
                    </>
                  )}
                  
                  {index === 2 && ( // Performance
                    <>
                      <div style={{
                        position: 'absolute',
                        top: '40px',
                        right: '40px',
                        width: '3px',
                        height: '60px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        transform: 'rotate(15deg)',
                        opacity: 0.6
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '50px',
                        right: '50px',
                        width: '3px',
                        height: '40px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        transform: 'rotate(15deg)',
                        opacity: 0.4
                      }} />
                    </>
                  )}
                </div>

                {/* Content Area */}
                <div style={{ padding: '2rem' }}>
                  <h3 
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '1rem'
                    }}
                  >
                    {solution.title}
                  </h3>
                  <p 
                    style={{ 
                      color: '#6b7280',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {solution.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: solution.linkColor.replace('text-', '#'),
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out'
                    }}
                    className={solution.linkColor}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0px)'
                    }}
                  >
                    Learn More
                    <FaArrowRight style={{ fontSize: '0.75rem' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Solutions Button */}
          <div className="text-center">
            <button
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontSize: '1rem',
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
              View All Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsGrid
