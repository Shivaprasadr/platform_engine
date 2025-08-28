import React from 'react'
import { FaServer, FaChartLine, FaHeartbeat, FaShoppingCart, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa'

interface IndustryData {
  icon: React.ReactNode
  name: string
  description: string
  gradientFrom: string
  gradientTo: string
}

interface StatData {
  value: string
  label: string
  icon: React.ReactNode
  color: string
}

interface IndustryTrustGridProps {
  title?: string
  subtitle?: string
  className?: string
}

const IndustryTrustGrid: React.FC<IndustryTrustGridProps> = ({
  title = "Trusted Worldwide",
    subtitle = "From established enterprises to forward-thinking startups across the spectrum, companies choose Unknown for trusted cloud transformation and platform excellence.",
  className = ""
}) => {
  
  const industries: IndustryData[] = [
    {
      icon: <FaServer />,
      name: "Technology",
      description: "Cloud infrastructure, DevOps, and scalable solutions",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500"
    },
    {
      icon: <FaChartLine />,
      name: "Finance",
      description: "Secure trading platforms and financial analytics",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500"
    },
    {
      icon: <FaHeartbeat />,
      name: "Healthcare",
      description: "HIPAA-compliant systems and telemedicine platforms",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-500"
    },
    {
      icon: <FaShoppingCart />,
      name: "Retail",
      description: "E-commerce platforms and inventory management",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-500"
    }
  ]

  const stats: StatData[] = [
    {
      value: "500+",
      label: "Enterprise Clients",
      icon: <FaUsers />,
      color: "#3b82f6"
    },
    {
      value: "24/7",
      label: "Expert Support",
      icon: <FaClock />,
      color: "#10b981"
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
      icon: <FaCheckCircle />,
      color: "#f59e0b"
    }
  ]
  
  return (
    <section className={`py-16 ${className}`} style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Enhanced Industries Showcase Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem'
            }}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out',
                  cursor: 'pointer',
                  height: '220px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  e.currentTarget.style.borderColor = industry.gradientFrom.replace('from-', '#').replace('-500', '')
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                {/* Enhanced Icon Area with Industry Graphics */}
                <div 
                  style={{
                    height: '140px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className={`bg-gradient-to-br ${industry.gradientFrom} ${industry.gradientTo}`}
                >
                  {/* Main Industry Icon */}
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '1.75rem',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      position: 'relative',
                      zIndex: 3
                    }}
                  >
                    {React.cloneElement(industry.icon as React.ReactElement, { 
                      style: { fontSize: '1.75rem' } 
                    })}
                  </div>
                  
                  {/* Industry-specific Background Graphics */}
                  {index === 0 && ( // Technology
                    <>
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        borderRadius: '2px'
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '25px',
                        left: '15px',
                        width: '20px',
                        height: '2px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        width: '30px',
                        height: '30px',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '4px'
                      }} />
                    </>
                  )}
                  
                  {index === 1 && ( // Finance
                    <>
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        transform: 'rotate(45deg)'
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        width: '15px',
                        height: '15px',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%'
                      }} />
                    </>
                  )}
                  
                  {index === 2 && ( // Healthcare
                    <>
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '2px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                      }} />
                    </>
                  )}
                  
                  {index === 3 && ( // Retail
                    <>
                      <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        width: '25px',
                        height: '15px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px'
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        width: '12px',
                        height: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%'
                      }} />
                    </>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 
                    style={{ 
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {industry.name}
                  </h3>
                  <p 
                    style={{ 
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      lineHeight: '1.5'
                    }}
                  >
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Dashboard */}
        <div 
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: '2rem',
            border: '2px solid #e2e8f0',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            padding: '3rem 2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              borderRadius: '50%'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '150px',
              height: '150px',
              backgroundColor: 'rgba(16, 185, 129, 0.05)',
              borderRadius: '50%'
            }}
          />
          
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2
            }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s ease-in-out',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  e.currentTarget.style.borderColor = stat.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                {/* Card Background Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    height: '4px',
                    backgroundColor: stat.color
                  }}
                />

                {/* Enhanced Icon with Background */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}25)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    border: `3px solid ${stat.color}30`,
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: stat.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    {React.cloneElement(stat.icon as React.ReactElement, { 
                      style: { fontSize: '1.5rem' } 
                    })}
                  </div>
                </div>

                {/* Enhanced Value with Animation */}
                <div 
                  style={{ 
                    fontSize: '3rem',
                    fontWeight: '900',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.value}
                </div>

                {/* Enhanced Label */}
                <div 
                  style={{ 
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#374151',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryTrustGrid
